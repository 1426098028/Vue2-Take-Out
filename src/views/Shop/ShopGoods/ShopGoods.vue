<template>
  <div>
    <!-- 食物列表 -->
    <div class="goods">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <li class="menu-item current">
            <span class="text bottom-border-1px">
              <img
                src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png"
                class="icon"
              />
              优惠
            </span>
          </li>

          <li class="menu-item">
            <span class="text bottom-border-1px">
              <img
                src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png"
                class="icon"
              />
              折扣
            </span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="foods-wrapper">
        <ul>
          <h1 class="title">优惠</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114"
                />
              </div>
              <div class="content">
                <h2 class="name">红豆薏米美肤粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售86份</span> <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥12</span>
                  <!---->
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div class="iconfont icon-remove_circle_outline"></div>
                    <div class="cart-count">1</div>
                    <div class="iconfont icon-add_circle"></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"
                />
              </div>
              <div class="content">
                <h2 class="name">南瓜粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售91份</span> <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥9</span>
                  <!---->
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <!---->
                    <!---->
                    <div class="iconfont icon-add_circle"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </ul>
        <ul>
          <h1 class="title">优惠</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114"
                />
              </div>
              <div class="content">
                <h2 class="name">红豆薏米美肤粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售86份</span> <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥12</span>
                  <!---->
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <div class="iconfont icon-remove_circle_outline"></div>
                    <div class="cart-count">1</div>
                    <div class="iconfont icon-add_circle"></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"
                />
              </div>
              <div class="content">
                <h2 class="name">南瓜粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售91份</span> <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥9</span>
                  <!---->
                </div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <!---->
                    <!---->
                    <div class="iconfont icon-add_circle"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </div>

    <!-- 已选择 -->

    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo highlight">
              <i class="iconfont icon-shopping_cart highlight"></i>
            </div>
            <div class="num">1</div>
          </div>
          <div class="price highlight">￥12</div>
          <div class="desc">另需配送费￥4元</div>
        </div>
        <div class="content-right">
          <div class="pay not-enough">还差￥8元起送</div>
        </div>
      </div>
      <!-- 显示以添加列表 -->
      <div class="shopcart-list" style="display: none">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li class="food">
              <span class="name">红豆薏米美肤粥</span>
              <div class="price">
                <span>￥12</span>
              </div>
              <div class="cartcontrol-wrapper">
                <div class="cartcontrol">
                  <div class="iconfont icon-remove_circle_outline"></div>
                  <div class="cart-count">1</div>
                  <div class="iconfont icon-add_circle"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="list-mask" style="display: none"></div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
import CartControl from "../../../components/CartControl/CartControl.vue";
import Food from "../../../components/Food/Food.vue";
import ShopCart from "../../../components/ShopCart/ShopCart.vue";
export default {
  data() {
    return {
      scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
      tops: [], // 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
      food: {}, // 需要显示的food
    };
  },
  mounted() {},
  computed: {},

  methods: {},

  components: {
    CartControl,
    Food,
    ShopCart,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl';
@import './ShopGoods.styl';
</style>
