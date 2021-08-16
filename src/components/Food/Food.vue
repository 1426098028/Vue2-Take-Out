<template>
  <div class="food" v-if="isShow">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image" />
        <p class="foodpanel-desc"></p>
        <div class="back" @click="IsShow">
          <i class="iconfont icon-arrow_left"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{ food.name }}</h1>
        <div class="detail">
          <span class="sell-count">月售{{ food.sellCount }}份</span>
          <span class="rating">好评率{{ food.rating }}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{ food.price }}</span>
          <span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <CartControl :food="food" />
        </div>
      </div>
    </div>
    <div class="food-cover" @click="IsShow"></div>
  </div>
</template>


<script>
import CartControl from "../CartControl/CartControl.vue";
export default {
  name: "Food",
  props: {
    food: Object,
  },
  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    IsShow() {
      this.isShow = !this.isShow;
    },
  },
  components: {
    CartControl,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Food.styl';
</style>