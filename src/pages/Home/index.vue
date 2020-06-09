<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!-- 今日推荐 -->
    <TodayRecommend/>
    <!-- 商品排行 -->
    <Rank/>
    <!-- 猜你喜欢 -->
    <Like/>
    <!-- 俩楼层 -->
    <Floor v-for="(floor) in floors" :key="floor.id" :floor='floor' />
    <!-- 商标 -->
    <Brand/>
  </div>
</template>

<script type="text/ecmascript-6">
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

import {mapState} from 'vuex'
export default {
  name:'Home',
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  },
  mounted () {
    this.$store.dispatch('getBanner')
    // 分发给异步action请求获取楼层列表数据
    this.$store.dispatch('getFloors')
  },
};
</script>

<style lang='less' scoped>
</style>
