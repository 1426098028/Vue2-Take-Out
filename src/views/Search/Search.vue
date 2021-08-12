<template>
  <section class="search">
<HeaderTop :tit="tit"></HeaderTop>
    
    <form class="search_form" action="#">
      <input
        type="search"
        name="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
      />
      <input type="submit" name="submit" class="search_submit" />
    </form>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Search",
  components:{
    HeaderTop
  },
  data() {
    return {
      tit:"搜索"
    };
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
@import './Search.styl';
</style>
