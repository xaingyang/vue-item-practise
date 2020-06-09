<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if='!$route.meta.isHideFooter' />
    <LoginFooter v-else />
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header";
import Footer from "./components/Footer";
//登录注册的底部
import LoginFooter from './components/LoginFooter'

export default {
  name:'App',
  mounted(){
    this.$store.dispatch('getCategoryList')
    
  
  },

  components: {
    Header,
    Footer,
    LoginFooter
  }
};
</script>

<style lang='less' scoped>
</style>
