<template>
  <div class="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <FooterGuide v-show="$route.meta.iSshowFooter" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  components: {
    FooterGuide, //映射成标签
  },
  data() {
    return {};
  },
  created() {
    // this.$store.commit("RECEIVE_ADDRESS", { dddd: "1111" });
    // this.$store.dispatch("getFoodCategorys");
    // reqAddres();
    // {
    //   params: {
    //    phone:"15622081255",
    //    code:"317693"
    //     },
    //   body: {
    //    phone:"15622081255",
    //    code:"317693"
    //   },
    // }
    //   reqShops({
    // url: "/position/40.10038,116.36867",
    //   method: "GET",
    //   body: {
    //   //   latitude: 40.10038, // 纬度
    //   // longitude: 116.36867, // 经度
    //   },
    //   params: {
    //   }
    //   })
  },
  methods: {
    //获取定位   获取食品分类数组函数   获取商家数组请求
    ...mapActions([
      "getAddres",
      "getFoodCategorys",
      "getShops",
      "getCaptcha",
      "getUserInfo",
      "getShopInfo",
      "getShopRatings",
      "getShopGoods",
    ]),
  },
  mounted() {
    //调用获取定位
    this.getAddres();
    //调用获取食品分类数组函数
    this.getFoodCategorys();
    //调用获取商家数组请求
    this.getShops();
    //调用根据会话获取用户信息
    this.getUserInfo();
    // this.getShopInfo();
    // this.getShopRatings();
    // this.getShopGoods();
  },
};
</script>
<style>
@import url("../static/css/reset.css");
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
