<template>
  <section class="order">
<HeaderTop :tit="tit"></HeaderTop>
    <section class="order_no_login">
      <img src="./images/order/person.png" />
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </section>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
export default {
  name: "Order",
  components:{
    HeaderTop
  },
  data() {
    return {
      tit:"订单列表"
    };
  },
};
</script>
<style lang="stylus" ref="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Order.styl';
</style>
