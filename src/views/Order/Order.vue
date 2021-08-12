<template>
  <section class="order">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text">订单列表</span>
      </a>
    </header>
    <section class="order_no_login">
      <img src="./images/order/person.png" />
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </section>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {};
  },
};
</script>
<style lang="stylus" ref="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './Order.styl';
</style>
