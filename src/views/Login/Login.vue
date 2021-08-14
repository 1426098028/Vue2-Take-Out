<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{ on: LoginSwitch }"
            @click="LoginSwitch = true"
          >
            短信登录
          </a>
          <a
            href="javascript:;"
            :class="{ on: !LoginSwitch }"
            @click="LoginSwitch = false"
          >
            密码登录
          </a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{ on: LoginSwitch }">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                class="get_verification"
                :class="{ right_phone: rightPhone }"
                :disabled="!rightPhone"
                @click.prevent="getCode"
              >
                {{ Time > 0 ? `已发送(${Time}s)` : "获取验证码" }}
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: !LoginSwitch }">
            <section>
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                  v-model="name"
                />
              </section>
              <section class="login_verification">
                <input
                  type="text"
                  maxlength="8"
                  placeholder="密码"
                  v-if="showPwd"
                  v-model="pwd"
                />
                <input
                  type="password"
                  maxlength="8"
                  placeholder="密码"
                  v-else
                  v-model="pwd"
                />
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div class="switch_circle" :class="{ right: showPwd }"></div>
                  <span class="switch_text">{{ showPwd ? "abc" : "" }}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                  v-model="captcha"
                />
                <!-- <img
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click="getCaptcha"
                  ref="captcha"
                /> -->
                <div
                  @click="updateCode"
                  class="get_verification"
                  v-html="graphicalCode"
                ></div>
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip" />
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AlertTip from "../../components/AlertTip/AlertTip.vue";
export default {
  name: "Login",
  components: { AlertTip },
  data() {
    return {
      //手机号
      phone: "",
      // 短信验证码
      code: "",
      // true代表短信登陆, false代表密码
      LoginSwitch: false,
      //计算已发送多少秒
      Time: 0,
      // 是否显示密码
      showPwd: false,
      // 用户名
      name: "",
      // 密码
      pwd: "",
      // 图形验证码
      captcha: "",
      // 提示文本
      alertText: "",
      // 是否显示警告框
      alertShow: false,
    };
  },
  computed: {
    ...mapState(["graphicalCode", "userInfo"]),
    rightPhone: {
      get() {
        return /^1\d{10}$/.test(this.phone);
      },
      set() {},
    },
  },

  created() {},
  mounted() {
    //调用获取图形验证码请求
    // this.$store.dispatch("getCaptcha");
    this.getCaptcha();
  },
  methods: {
    ...mapActions(["getCaptcha", "getSendCode", "getPwdLogin", "getSmsLogin"]),
    // 更新图形验证码
    updateCode() {
      this.getCaptcha();
    },
    // 异步获取短信验证码
    async getCode() {
      if (this.Time === 0) {
        this.Time = 30;
        this.TimeId = setInterval(() => {
          this.Time--;
          // 停止计时
          if (this.Time <= 0) {
            clearInterval(this.TimeId);
          }
        }, 1000);
        // 发送ajax请求(向指定手机号发送验证码短信)
        console.log(typeof this.phone);
        await this.getSendCode({
          params: {
            phone: this.phone,
          },
          body: {
            phone: this.phone,
          },
        });
      }
    },
    // 异步登陆
    async login() {
      // 前台表单验证
      if (this.LoginSwitch) {
        // 短信登陆
        console.log("短信登陆");
        if (!this.rightPhone) {
          // 手机号不正确
          this.showAlert("手机号不正确");
          return false;
        }
        if (!/^\d{6}$/.test(this.code)) {
          // 验证必须是6位数字
          this.showAlert("验证必须是6位数字");
          return false;
        }
        // 发送ajax请求短信登陆
        await this.getSmsLogin({
          params: {
            phone: this.phone,
            code: this.code,
          },
          body: {
            phone: this.phone,
            code: this.code,
          },
        });
        await this.loginInformation();
        return false;
      }
      if (!this.LoginSwitch) {
        // 密码登陆
        console.log("密码登录");
        if (!this.name) {
          this.showAlert("用户名不正确");
          return false;
        }
        if (!this.pwd) {
          this.showAlert("密码不正确");
          return false;
        }
        if (!this.captcha) {
          this.showAlert("验证码不正确");
          return false;
        }
        // 发送ajax请求账号密码登陆
        await this.getPwdLogin({
          params: {
            name: this.name,
            pwd: this.pwd,
            captcha: this.captcha,
          },
          body: {
            name: this.name,
            pwd: this.pwd,
            captcha: this.captcha,
          },
        });
        await this.loginInformation();
        await this.updateCode();
        return false;
      }
    },

    //提示登录信息
    loginInformation() {
      if (this.userInfo.code != 0) {
        this.showAlert(this.userInfo.msg);
        return false;
      }
      // this.showAlert("登录成功");
      this.$router.replace("/profile");
    },
    //重置短信倒计时
    clearTime() {
      if (this.Time !== 0) {
        this.Time = 0;
        clearInterval(this.TimeId);
        this.TimeId = undefined;
      }
    },
    //显示表单信息错误提示
    showAlert(Text) {
      // 提示文本
      this.alertText = Text;
      // 显示警告框
      this.alertShow = true;
    },
    //关闭表单信息错误提示
    closeTip() {
      // 提示文本
      this.alertText = "";
      // 关闭显示警告框
      this.alertShow = false;
    },
  },
};
</script>
<style lang="stylus" ref="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Login.styl';
</style>
