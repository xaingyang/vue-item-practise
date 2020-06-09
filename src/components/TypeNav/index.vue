<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="showFirstCategorys" @mouseleave="hideSubCategorys">
        <h2 class="all">全部商品分类</h2>
        <transition name="move">
          <div v-if="isShowList" class="sort">
            <div @mouseleave="isShow=-2" @mouseenter="isShow=-1">
              <div class="all-sort-list2" @click="toSearch2">
                <div
                  class="item"
                  :class="{item_on : index == isShow}"
                  v-for="(c1,index) in categoryList"
                  :key="c1.categoryId"
                  @mouseenter="showSubScategorys(index)"
                >
                  <h3>
                    <!-- <router-link :to="`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
                    <!-- <a href="javascript:;" @click="toSearch({categoryName:c1.categoryName,category1Id:c1.categoryId})">{{c1.categoryName}}</a> -->
                    <a
                      href="javascript:;"
                      :data-categoryName="c1.categoryName"
                      :data-category1Id="c1.categoryId"
                    >{{c1.categoryName}}</a>
                  </h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                        <dt>
                          <!-- <a href="javascript:;" @click="toSearch({categoryName:c2.categoryName,category2Id:c2.categoryId})">{{c2.categoryName}}</a> -->
                          <a
                            href="javascript:;"
                            :data-categoryName="c2.categoryName"
                            :data-category2Id="c2.categoryId"
                          >{{c2.categoryName}}</a>
                        </dt>
                        <dd>
                          <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                            <!-- <a href="javascript:;" @click="toSearch({categoryName:c3.categoryName,category3Id:c3.categoryId})">{{c3.categoryName}}</a> -->
                            <a
                              href="javascript:;"
                              :data-categoryName="c3.categoryName"
                              :data-category3Id="c3.categoryId"
                            >{{c3.categoryName}}</a>
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapActions } from "vuex";
// import _ from "lodash";
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      isShow: -1,
      isShowList: this.$route.path == "/"
    };
  },
  computed: {
    // categoryList1(){
    //     return this.$store.state.home.categoryList
    // },
    //这样是直接去state总状态找，是undefined，这是多模块的问题
    // ...mapState(['categoryList']),
    //使用对象和函数方式 来解决多模块问题
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  },
  mounted() {
    // this.$store.dispatch('getCategoryList')
    //使用映射设置
    //设置在app发异步，避免每次搜索都会请求数据
    // this.getCategoryList();
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    showSubScategorys: throttle(function(index) {
      if (this.isShow != -2) {
        this.isShow = index;
      }
    }, 1000),
    //显示一级列表
    showFirstCategorys() {
      this.isShowList = true;
      this.isShow = -1;
    },
    hideSubCategorys() {
      if (this.$route.path !== "/") {
        this.isShowList = false;
      }
      this.isShow = -2;
    },
    //一个一个绑定点击事件
    toSearch({ categoryName, category1Id, category2Id, category3Id }) {
      let query = {
        categoryName
      };
      if (category1Id) {
        query.category1Id = category1Id;
      } else if (category2Id) {
        query.category2Id = category2Id;
      } else if (category3Id) {
        query.category3Id = category3Id;
      }
      this.$router.push({ name: "search", query });
    },
    //事件委托
    toSearch2(event) {
      // const tagName=event.target.tagName
      const {
        categoryname,
        category1id,
        category2id,
        category3id
      } = event.target.dataset;
      //判断点击的是不是分类项
      if (!categoryname) return;
      const query = {
        categoryName: categoryname
      };
      //event.target.dataset 接受的值不区分大小写，全部是小写
      if (category1id) {
        query.category1Id = category1id;
      } else if (category2id) {
        query.category2Id = category2id;
      } else if (category3id) {
        query.category3Id = category3id;
      }
      
      const location = {
        name: "search",
        query
      };
      //搜索数据
      let searchPost={
        ...query,

      }
      //取出params的keyword值
      const keyword = this.$route.params.keyword
      //有的话就就设置上
        if (keyword) {
          location.params = {keyword}
          searchPost.keyword={keyword}
        }
      this.$router.push(location);
      this.$store.dispatch("getProductList", searchPost);
      //自动隐藏，直接调用hideSubCategorys
      this.hideSubCategorys();
    }
  }
};
</script>

<style lang='less' scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      //显示的动画
      &.move-enter-active {
        transition: all 0.8s;
      }
      // 隐藏的动画
      &.move-enter,
      &.move-leave-to {
        opacity: 0;
        height: 0;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          //显示列表
          &.item_on {
            background: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
