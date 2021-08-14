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
              <input type="tel" maxlength="8" placeholder="验证码" />
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
                <input type="text" maxlength="11" placeholder="验证码" />
                <img
                  class="get_verification"
                  src="../../../static/images/captcha.svg"
                  alt="captcha"
                />
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
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //手机号
      phone: "",
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
    };
  },
  computed: {
    rightPhone: {
      get() {
        return /^1\d{10}$/.test(this.phone);
      },
      set() {},
    },
  },

  created() {},

  methods: {
    // 异步获取短信验证码
    getCode() {
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
      }
    },
    // 异步登陆
    login() {},
  },
};
</script>
<style lang="stylus" ref="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Login.styl';
</style>
