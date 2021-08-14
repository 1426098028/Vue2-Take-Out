<template>
  <div class="shop_container">
    <ul class="shop_list" v-for="(shop, index) in shops" :key="index">
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" :src="baseImgUrl + shop.image_path" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{ shop.name }}</h4>
              <ul class="shop_detail_ul">
                <li
                  class="supports"
                  v-for="(support, index) in shop.supports"
                  :key="index"
                >
                  {{ support.icon_name }}
                </li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <Star :score="shop.rating" :size="size"></Star>
                <div class="rating_section">{{ shop.rating }}</div>
                <div class="order_section">
                  月售{{ shop.recent_order_num }}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">{{
                  shop.delivery_mode.text
                }}</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{ shop.float_minimum_order_amount }}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{ shop.float_delivery_fee }}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Star from "../Star/Star.vue";
export default {
  name: "ShopList",
  props: {
    shops: {
      typr: Array,
      require: true,
    },
  },
  components: {
    Star,
  },
  data() {
    return {
      baseImgUrl: "http://cangdu.org:8001/img/",
      // 小星星大小
      size: 24,
    };
  },
  mounted() {
    console.log(this.shops);
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './ShopList.styl';
</style>
