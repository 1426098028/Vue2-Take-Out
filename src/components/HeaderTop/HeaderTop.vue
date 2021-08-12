<template>
      <!--首页头部-->
    <header class="header">
<slot name="Left"></slot>
  <slot name="header"></slot>
      <span class="header_title">
        <span class="header_title_text ellipsis"
          >
          {{tit}}
          </span  >
      </span>
<slot name="Right"></slot>
    </header>
</template>
<script>
export default {
    name:"HeaderTop",
    props:{
      tit:String
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
@import './HeaderTop.styl';

</style>