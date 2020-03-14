// 入口文件
import Vue from 'vue';

//按需导入 Mint-UI中的组件
import { Tabbar, TabItem , Header } from "mint-ui";

//导入App跟组件
import app from './App.vue';


//注册组件
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


var vm = new Vue({
  el: "#app",
  render: c => c(app)
})