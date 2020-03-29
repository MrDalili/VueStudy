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

//导入格式化时间的过滤器
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat' , function(dateStr , pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern);
})


//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    //通过this.$store.state.
    //相当于data,用来存储数据
    car:[],
  },
  mutations:{
    //相当于methods
    addToCar:function(state , goodsinfo){
      var flag = false;
      state.car.some(item=>{
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }

    },
    updateToCar:function(state , goodsinfo){
      var flag = false;
      state.car.some(item=>{
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          flag = true;
          return;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }

    },
    removeGoods:function(state,id){
      state.car.some((item , i) => {
        if (item == id) {
          state.car.splice(i,1);
          return true;
        }
      });

    }
  },
  getters:{
    //获取购物车数据
    getGoodsNum: function (state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      });

      return c;
    },
    getGoodsCount(state){
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count;
      })
      return o;
    }
  }
})


// //按需导入 Mint-UI中的组件
 import { Tabbar, TabItem , Header , Swipe, SwipeItem , Button , Navbar , Lazyload} from "mint-ui";
// //懒加载组件
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//导入 MUI 的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// //按需导入vant的包
import { Tab, Tabs , Card } from 'vant';
import 'vant/lib/index.css';
Vue.use(Card);
Vue.use(Tab);
Vue.use(Tabs);




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
Vue.component(Button.name, Button);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router ,// 1.4 挂载路由对象到 VM 实例上
  store // 挂载一下
})