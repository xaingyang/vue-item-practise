<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item) in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: {
    carouselList: Array,
    isAuto:Boolean
  },
  watch: {
    carouselList: {
      handler: function(val, oldVal) {
        this.$nextTick(this.initSwiper);
        // console.log(val);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {},
  methods: {
    initSwiper() {
    //   console.log("111");
      new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项
        autoplay: this.isAuto,
        // autoplay: {
        //   delay: 1000
        // },

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
</style>
