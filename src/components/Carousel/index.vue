<template>
  <!-- <div class="swiper-container" id="swiper"> -->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
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

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',

  props: {
    carouselList: Array, 
    autoplay: Boolean
  },

  watch: {
    carouselList: {
      handler (value) {
        if (this.carouselList.length===0) return

        console.log('carouselList---', value)
        this.$nextTick(() => {
          this.initSwiper()
        })
      },
      // immediate: true, 
    }
  },

  mounted () {
    console.log('++++', this.carouselList.length)
    
    if (this.carouselList.length>0) { 
      this.initSwiper()
    }
  },

  methods: {
    
    initSwiper () {
      console.log('创建swiper对象')
      new Swiper(this.$refs.swiper, {
        // direction: 'horizontal', 

        loop: true, 

        autoplay: this.autoplay, 

        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
