<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
        class="iconfont icon-remove_circle_outline"
        v-if="food.count"
        @click.stop="UpdateFood(false)"
      ></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{ food.count }}</div>
    <div class="iconfont icon-add_circle" @click.stop="UpdateFood(true)"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartControl",
  props: {
    food: Object,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["UpdateFoodCount"]),
    UpdateFood(IsUpdate) {
      this.UpdateFoodCount({ IsUpdate, food: this.food });
    },
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './CartControl.styl';
</style>
