<template>
  <div class="app">
    <router-view />
    <FooterGuide v-show="$route.meta.iSshowFooter" />
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import {reqAddres,reqFoodCategorys,reqShops,reqSearchShop,Onecode,reqPwdLogin,reqSendCode,reqSmsLogin,reqUserInfo,reqLogout} from "./Api/main.js"
export default {
  components: {
    FooterGuide, //映射成标签
  },
  data(){
    return{
    }
  },
  created() {
    reqUserInfo(
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
    )
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
