<template>
  <div>
    <Header/>
    
    <!-- 一级路由组件显示区域 -->
    <router-view/>

    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import {reqCategoryList, reqFloors} from './api'

export default {
  name: 'App',

  async mounted () {
    this.$store.dispatch('getCategoryList')

  },

  components: {
    Header,
    Footer
  }

}
</script>

<style lang="less" scoped>

</style>
