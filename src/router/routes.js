/* 
应用的所有路由配置的数组
*/
// import Home from "../pages/Home";
// import Search from "../pages/Search";
// import Detail from "@/pages/Detail";
const Home = () => import('@/pages/Home')
const Search = () => import('@/pages/Search')
const Detail = () => import('@/pages/Detail')

import Register from "../pages/Register";
// import Login from '../pages/Login'
import Login from "@/pages/Login";

import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupBuy from "@/pages/Center/GroupBuy";

import stote from "@/store";

// import {
//   nextTick
// } from "vue/types/umd";
export default [{
    path: "/",
    component: Home,
  },
  {
    name: "search", // 一旦有params参数, 想用push()的对象语法, 必须有name配置
    path: "/search/:keyword?", // 带:的对应的部分就是params参数
    component: Search,
    // props: (route) => ({ query: route.query.q })
    // 将路由参数映射成props传递给路由组件对象
    props: (route) => ({
      keyword3: route.params.keyword,
      keyword4: route.query.keyword2,
    }),
  },
  {
    path: "/register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
    //只有登录才能看到登录页面
    // beforeEnter: (to, from, next) => {
    //   const token = store.state.user.userInfo.token;
    //   if (token) {
    //     next('/')
    //   } else {
    //     next()
    //   }
    // }
  },

  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    beforeEnter: (to, from, next) => {
      const skuNum = to.query.skuNum;
      const skuInfo = JSON.parse(window.sessionStorage.getItem("SKU_INFO_KEY"));
      if (skuNum && skuInfo instanceof Object) {
        next();
      } else {
        next("/shopcart");
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/trade",
    component: Trade,
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next("/shopcart");
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") {
        next();
      } else {
        next("/trade");
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      if (from.path === "/pay") {
        next();
      } else {
        next("/pay");
      }
    },
  },
  {
    path: "/center",
    component: Center,
    children: [{
        path: "/center/myorder",
        component: MyOrder,
      },
      {
        path: "groupbuy",
        component: GroupBuy,
      },
      //自动跳转路由
      {
        path: "",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: '/communication',
    component: () => import('@/pages/Communication/Communication'),
    children: [{
        path: 'event',
        component: () => import('@/pages/Communication/EventTest/EventTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'model',
        component: () => import('@/pages/Communication/ModelTest/ModelTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'sync',
        component: () => import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          isHideFooter: true
        },
      }
    ],
  },
];