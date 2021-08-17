<template>
  <section class="search">
    <HeaderTop :tit="tit"></HeaderTop>
    <form class="search_form" @submit.prevent="search">
      <input
        type="search"
        placeholder="请输入商家名称"
        class="search_input"
        v-model="keyword"
      />
      <input type="submit" class="search_submit" />
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <router-link
          :to="{ path: 'shop', query: { id: item.id } }"
          v-for="item in searchShops"
          :key="item.id"
          class="list_li"
        >
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img" />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{ item.name }}</span>
              </p>
              <p>月售 {{ item.month_sales || item.recent_order_num }} 单</p>
              <p>
                {{ item.delivery_fee || item.float_minimum_order_amount }}
                元起送 / 距离{{ item.distance }}
              </p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
export default {
  data() {
    return {
      tit: "搜索",
      keyword: "",
      imgBaseUrl: "http://cangdu.org:8001/img/",
      noSearchShops: false,
    };
  },

  computed: {
    ...mapState(["searchShops"]),
  },

  methods: {
    search() {
      // 得到搜索关键字
      const keyword = this.keyword.trim();
      // 进行搜索
      if (keyword) {
        this.$store.dispatch("getSearchShop", keyword);
      }
    },
  },

  watch: {
    searchShops(value) {
      if (!value.length) {
        // 没有数据
        this.noSearchShops = true;
      } else {
        // 有数据
        this.noSearchShops = false;
      }
    },
  },

  components: {
    HeaderTop,
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl';
@import './Search.styl';
</style>
