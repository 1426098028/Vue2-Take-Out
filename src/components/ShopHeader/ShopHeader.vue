<template>
  <div>
    <div class="shop-header">
      {{ info.bgImg }}
      <nav class="shop-nav" :style="{ backgroundImage: `url(${info.bgImg})` }">
        <a class="back" @click="$router.back()">
          <i class="iconfont icon-arrow_left"></i>
        </a>
      </nav>
      <div class="shop-content">
        <img
          class="content-image"
          :src="info.avatar"
          @click="shopShow = !shopShow"
        />
        <div class="header-content">
          <h2 class="content-title" @click="shopShow = !shopShow">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <span class="content-name">{{ info.name }}</span>
            <i class="content-icon"></i>
          </h2>
          <div class="shop-message">
            <span class="shop-message-detail">{{ info.score }}</span>
            <span class="shop-message-detail">月售{{ info.sellCount }}单</span>
            <span class="shop-message-detail">
              {{ info.description }}
              <span>约{{ info.deliveryTime }}分钟</span>
            </span>
            <span class="shop-message-detail">距离{{ info.distance }}</span>
          </div>
        </div>
      </div>

      <div
        class="shop-header-discounts"
        v-if="info.supports"
        @click="supportShow = !supportShow"
      >
        <div class="discounts-left">
          <div class="activity">
            <span class="content-tag">
              <span class="mini-tag">{{ info.supports[0].name }}</span>
            </span>
            <span class="activity-content ellipsis">
              {{ info.supports[0].content }}
            </span>
          </div>
        </div>
        <div class="discounts-right">{{ info.supports.length }}个优惠</div>
      </div>

      <transition name="fade">
        <div class="shop-brief-modal" v-show="shopShow">
          <div class="brief-modal-content">
            <h2 class="content-title">
              <span class="content-tag">
                <span class="mini-tag">品牌</span>
              </span>
              <span class="content-name">{{ info.name }}</span>
            </h2>
            <ul class="brief-modal-msg">
              <li>
                <h3>{{ info.score }}</h3>
                <p>评分</p>
              </li>
              <li>
                <h3>{{ info.sellCount }}单</h3>
                <p>月售</p>
              </li>
              <li>
                <h3>{{ info.description }}</h3>
                <p>约{{ info.deliveryTime }}分钟</p>
              </li>
              <li>
                <h3>{{ info.deliveryPrice }}元</h3>
                <p>配送费用</p>
              </li>
              <li>
                <h3>{{ info.distance }}</h3>
                <p>距离</p>
              </li>
            </ul>
            <h3 class="brief-modal-title">
              <span>公告</span>
            </h3>
            <div class="brief-modal-notice">
              {{ info.bulletin }}
            </div>
            <div class="mask-footer" @click="shopShow = !shopShow">
              <span class="iconfont icon-close"></span>
            </div>
          </div>
          <div class="brief-modal-cover" @click="shopShow = !shopShow"></div>
        </div>
      </transition>

      <transition name="fade">
        <div class="activity-sheet" v-show="supportShow">
          <div class="activity-sheet-content">
            <h2 class="activity-sheet-title">优惠活动</h2>
            <ul class="list" v-if="info.supports">
              <li
                class="activity-item"
                :class="SupportsArr[support.type]"
                v-for="(support, index) in info.supports"
                :key="index"
              >
                <span class="content-tag">
                  <span class="mini-tag">{{ support.name }}</span>
                </span>
                <span class="activity-content">{{ support.content }}</span>
              </li>
            </ul>
            <div
              class="activity-sheet-close"
              @click="supportShow = !supportShow"
            >
              <span class="iconfont icon-close"></span>
            </div>
          </div>
          <div
            class="activity-sheet-cover"
            @click="supportShow = !supportShow"
          ></div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "ShopHeader",
  data() {
    return {
      shopShow: false,
      supportShow: false,
      SupportsArr: ["activity-green", "activity-red", "activity-orange"],
    };
  },
  computed: {
    ...mapState(["info"]),
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
@import './ShopHeader.styl';
</style>