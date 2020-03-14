<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    
    </mt-swipe>
  </div>
</template>

<script>
import Axios from 'axios';
import { Toast } from 'mint-ui';
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
      console.log(myjson.message);
      // Toast("加载ok");
      this.lunbotuList = myjson.message;
      console.log(this.lunbotuList)
    }).catch(error => {
      console.log(error);
      Toast("获取失败");
    })
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1){
      background-color: red;
    }
    &:nth-child(2){
      background-color: blue;
    }
    &:nth-child(3){
      background-color: cyan;
    }

    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>