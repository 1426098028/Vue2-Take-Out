<template>
  <div class="star" :class="'star-' + size">
    <span
      class="star-item on"
      v-for="(Star, index) in Stars"
      :key="index"
      :class="Star"
    ></span>
    <!-- <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span> -->
  </div>
</template>
<script>
export default {
  name: "Star",
  props: {
    score: Number,
    size: Number,
  },
  computed: {
    Stars: {
      get() {
        // 对评分进行取整;
        let scoreWhole = Math.floor(this.score);
        let Arr = [];
        // 向Arr数组添加n个"on"
        for (let index = 0; index < scoreWhole; index++) {
          //   console.log(index);
          Arr.push("on");
        }
        // 向Arr数组添加0/1个"half"
        if (this.score - scoreWhole >= 0.5) {
          Arr.push("half");
        }
        // 向Arr数组添加n个"off"
        if (Arr.length < 5) {
          Arr.push("off");
        }
        return Arr;
      },
      set() {},
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Star.styl';
</style>