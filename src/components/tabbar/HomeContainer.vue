<template>
  <div>
    <!-- 轮播图区域 -->
    <swipper :lunbotuList='lunbotuList'></swipper>

     <!-- 6个小图标 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to=/home/newslist>
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">
            新闻资讯
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">
            图片分享
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
      ><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios';
import { Toast } from 'mint-ui';
import swipper from '../subcomponents/Swipper.vue'
export default {
  data(){
    return{
      lunbotuList: [], //保存轮播图的数据

    }
  },
  created(){
    this.getLunbotu();
  },
  methods:{
    getLunbotu(){//获取轮播图的方法
    //  Axios.get('http://www.liulongbin.top:3005/api/getlunbo').then( response =>{
    //               this.lunbotuList=response.data.results;
    //             }).catch((error)=>{
    //                 console.log(error);
    //             });
    fetch('http://www.liulongbin.top:3005/api/getlunbo').then( response =>{
      return response.json();
    }).then(myjson => {
      // Toast("加载ok");
      this.lunbotuList = myjson.message;
    }).catch(error => {
      console.log(error);
      Toast("获取失败");
    })
    }
  },
    components:{
      swipper,

    }
}
</script>

<style lang="scss" scoped>


.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;
  }
}
</style>