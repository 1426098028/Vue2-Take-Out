<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ShopHeader from "../../components/ShopHeader/ShopHeader.vue";

export default {
  name: "Shop",
  components: {
    ShopHeader,
  },

  methods: {
    ...mapActions(["getShopInfo", "getShopRatings", "getShopGoods"]),
  },
  mounted() {
    //调用获取商家信息请求
    this.getShopInfo();

    //调用获取商家评价数组请求
    // this.getShopRatings();

    //调用获取商品列表请求
    // this.getShopGoods();
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
@import './Shop.styl';
</style>