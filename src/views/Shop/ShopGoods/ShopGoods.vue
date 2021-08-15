<template>
  <div>
    <!-- 食物列表 -->
    <div class="goods">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <!-- current -->
          <li
            class="menu-item"
            v-for="(good, index) in goods"
            :key="index"
            :class="{ current: index === currentIndex }"
            @click="clickMenuItem(index)"
          >
            <span class="text bottom-border-1px">
              <img v-if="good.icon" :src="good.icon" class="icon" />
              {{ good.name }}
            </span>
          </li>
        </ul>
      </div>

      <!-- 右边 -->
      <div class="foods-wrapper">
        <ul>
          <li
            class="food-list-hook"
            v-for="(good, index) in goods"
            :key="index"
          >
            <h1 class="title">{{ good.name }}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food, index) in good.foods"
                :key="index"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                    <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="good.oldPrice"
                      >￥{{ food.oldPrice }}</span
                    >
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />


                
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
          </li>
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
import BScroll from "better-scroll";

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
  async mounted() {
    await this.getShopGoods();

    await this.$nextTick(() => {
      this.Roll();
      this.Tops();
    });
  },
  computed: {
    ...mapState(["goods"]),
    currentIndex: {
      get() {
        let { scrollY, tops } = this;
        let index = tops.findIndex((CurrentScroll, index) => {
          return scrollY >= CurrentScroll && scrollY < tops[index + 1];
        });
        return index;
      },
      set() {},
    },
  },

  methods: {
    ...mapActions(["getShopGoods"]),
    //生成滚动条  --初始化
    Roll() {
      this.LeftBScroll = new BScroll(".menu-wrapper", {
        click: true,
      });

      this.RightBScroll = new BScroll(".foods-wrapper", {
        click: true,
        probeType: 2,
      });

      // 给右侧列表绑定scroll监听
      this.RightBScroll.on("scroll", (position) => {
        this.scrollY = Math.abs(position.y);
        // console.log(position.x, position.y, this.scrollY);
      });
      // 给右侧列表绑定scroll结束的监听
      this.RightBScroll.on("scrollEnd", (position) => {
        this.scrollY = Math.abs(position.y);
        // console.log(position.x, position.y, this.scrollY);
      });
    },
    //保存右侧滚动条中的li标签对应的滚动值
    Tops() {
      // 1. 初始化tops
      const Arr = [];
      let top = 0;
      Arr.push(top);
      let lis = document.getElementsByClassName("food-list-hook");
      Array.from(lis).forEach((li, index) => {
        top += li.clientHeight;
        Arr.push(top);
      });
      // 3. 更新数据
      this.tops = Arr;
      console.log(this.tops);
    },
    clickMenuItem(index) {
      // console.log(index)
      // 使用右侧列表滑动到对应的位置

      // 得到目标位置的scrollY
      const scrollY = this.tops[index];
      // 立即更新scrollY(让点击的分类项成为当前分类)
      this.scrollY = scrollY;
      // 平滑滑动右侧列表
      this.RightBScroll.scrollTo(0, -scrollY, 300);
    },
  },

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
