<template>
  <div class="app">
    <router-view />
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  components: {
    FooterGuide, //映射成标签
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
