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
                @click="details(food)"
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
            </ul>
          </li>
        </ul>
      </div>
      <!-- 已选择 -->
      <ShopCart />
    </div>
    <Food :food="food" ref="food" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import BScroll from "better-scroll";
// 计算已选择的商品数量
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

    details(food) {
      console.log(this.food);
      this.food = food;
      console.log(this.$refs.food);
      this.$refs.food.IsShow();
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
