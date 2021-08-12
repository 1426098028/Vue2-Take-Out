<template>
  <div class="app">
    <router-view />
    <FooterGuide v-show="$route.meta.iSshowFooter" />
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  components: {
    FooterGuide, //映射成标签
  },
  data(){
    return{

    }
  },
  created() {
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
