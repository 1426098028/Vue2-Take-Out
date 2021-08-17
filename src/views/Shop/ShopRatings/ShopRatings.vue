<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ info.score }}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" />
            <span class="score">{{ info.serviceScore }}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36" />
            <span class="score">{{ info.foodScore }}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{ info.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span
            class="block positive"
            :class="{ active: selectType === 2 }"
            @click="setSelectType(2)"
          >
            全部
            <span class="count">{{ ratings.length }}</span>
          </span>
          <span
            class="block positive"
            :class="{ active: selectType === 0 }"
            @click="setSelectType(0)"
          >
            满意
            <span class="count">{{ positiveSize }}</span>
          </span>
          <span
            class="block negative"
            :class="{ active: selectType === 1 }"
            @click="setSelectType(1)"
          >
            不满意
            <span class="count">{{ ratings.length - positiveSize }}</span>
          </span>
        </div>
        <div
          class="switch"
          :class="{ on: onlyShowText }"
          @click="toggleOnlyShowText"
        >
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li
            class="rating-item"
            v-for="(rating, index) in filterRatings"
            :key="index"
          >
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar" />
            </div>
            <div class="content">
              <h1 class="name">{{ rating.username }}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" />
                <span class="delivery">{{ rating.deliveryTime }}</span>
              </div>
              <p class="text">
                {{ rating.text }}
              </p>
              <div class="recommend">
                <span
                  class="iconfont icon-thumb_up"
                  :class="
                    rating.rateType === 0 ? 'icon-thumb_up' : 'icon-thumb_down'
                  "
                ></span>
                <span
                  class="item"
                  v-for="(recomme, index) in rating.recommend"
                  :key="index"
                >
                  {{ recomme }}
                </span>
              </div>
              <!-- <div class="time">2016-07-23 21:52:44</div> -->
              <div class="time">{{ rating.rateTime }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapGetters, mapActions } from "vuex";
import Star from "../../../components/Star/Star.vue";
export default {
  name: "ShopRatings",
  data() {
    return {
      onlyShowText: true, // 是否只显示有文本的
      selectType: 2, // 选择的评价类型: 0满意, 1不满意, 2全部
    };
  },
  async mounted() {
    await this.getShopRatings();
    await this.$nextTick(() => {
      BScroll(".ratings", {
        click: true,
      });
    });
  },
  methods: {
    ...mapActions(["getShopRatings"]),

    setSelectType(selectType) {
      this.selectType = selectType;
    },
    toggleOnlyShowText() {
      this.onlyShowText = !this.onlyShowText;
    },
  },
  computed: {
    ...mapState(["info", "ratings"]),
    ...mapGetters(["positiveSize"]),
    // 产生一个过滤新数组
    filterRatings: {
      get() {
        return this.ratings.filter((rating) => {
          // 条件1:
          //     this.selectType: 0/1/2
          //     rating.rateType: 0/1
          //     this.selectType===2 || this.selectType===rating.rateType
          // 条件2
          //     this.onlyShowText: true/false
          //     text: 有值/没值
          //     !this.onlyShowText || rating.text.length>0

          return (
            (this.selectType === 2 || this.selectType === rating.rateType) &&
            (!this.onlyShowText || rating.text.length > 0)
          );
        });
      },
      set() {},
    },
  },

  components: {
    Star,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl';
@import './ShopRatings.styl';
</style>