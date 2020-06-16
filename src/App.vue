<template>
  <div>
    <Header/>
    
    <router-view/>

    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer'
// import {reqCategoryList, reqFloors} from './api'

export default {
  name: 'App',

  async mounted () {

    this.getCategoryList()
  },

  methods: {
    ...mapActions(['getCategoryList'])

    // { getCategoryList () {this.$store.dispatch('getCategoryList')} }
  },

  components: {
    Header,
    Footer
  }

}
</script>

<style lang="less" scoped>

</style>
