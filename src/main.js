// 入口文件
import Vue from 'vue';
// 导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
//安装 vue-resource
Vue.use(VueResource)


//按需导入 Mint-UI中的组件
import { Tabbar, TabItem , Header , Swipe, SwipeItem } from "mint-ui";

//导入 MUI 的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//导入App跟组件
import app from './App.vue';

//导入自己的 router.js 路由模块
import router from './router.js'

//注册组件
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载路由对象到 VM 实例上
})