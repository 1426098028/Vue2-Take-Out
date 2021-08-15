
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="iconfont icon-remove_circle_outline"
        v-if="food.count"
        @click.stop="updateFoodCount(false)"
      ></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{ food.count }}</div>
    <div
      class="iconfont icon-add_circle"
      @click.stop="updateFoodCount(true)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CartControl",
  props: {
    food: Object,
  },
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch("updateFoodCount", { isAdd, food: this.food });
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './CartControl.styl';
</style>