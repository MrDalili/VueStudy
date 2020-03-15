import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则
    { path : '/' , redirect : '/home' },
    { path : '/home' , component: HomeContainer},
    { path : '/member' , component: MemberContainer},
    { path : '/shop' , component: ShopcarContainer},
    { path : '/search' , component: SearchContainer},
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮类，默认的类叫做 link-active
  
})

// 把路由对象暴露出去
export default router