<template>
  <section class="search">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">搜索</span>
      </a>
    </header>
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
export default {
  name: "Search",
  data() {
    return {};
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
@import './Search.styl';
</style>
