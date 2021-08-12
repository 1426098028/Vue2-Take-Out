<template>
  <div>
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
<style lang="stylus" ref="stylesheet/stylus"></style>
