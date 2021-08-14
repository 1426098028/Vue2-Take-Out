<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :tit="address.name">
      <template v-slot:Left>
        <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>
      <template v-slot:Right>
        <router-link
          class="header_login"
          :to="userInfo.code === 0 ? '/profile' : '/Login'"
        >
          <i class="iconfont icon-person" v-if="userInfo.code === 0"></i>
          <span class="header_login_text" v-else>登录|注册</span>
        </router-link>
      </template>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList :shops="shops"></ShopList>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
export default {
  name: "Msite",
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log("mounted");
      //轮播图
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: true, //可选选项，自动滑动
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
    });
  },
  computed: {
    ...mapState(["address", "categorys", "shops", "userInfo"]),
    categorysArr: {
      get() {
        let Arr = [];
        let minArr = [];
        Object.keys(this.categorys).forEach((item, index) => {
          minArr.push(this.categorys[index]);
          if (minArr.length === 8) {
            Arr.push(minArr);
            minArr = [];
          }
        });
        console.log("Arr", Arr);
        return Arr;
      },
      set() {},
    },
  },
  watch: {
    //监视categorys数据的变化
    categorys(newValue, oldValue) {
      console.log("watch");
      //界面更新完毕立即调用this.$nextTtick(()=>{创建Swiper实例对象})
      this.$nextTick(() => {
        //轮播图
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: true, //可选选项，自动滑动
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Msite.styl';
</style>
