<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsInfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{newsInfo.add_time | dateFormat}}</span>
      <span>点击：{{newsInfo.click}}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsInfo.content"></div>

    <!-- 评论区域 -->
    <comment-box :id ="this.id"/>
  </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'

import Axios from 'axios';
export default {
  data(){
    return {
      id : this.$route.params.id ,
      newsInfo : {},
    }
  },
  methods:{
    getNewsInfo: function(){
      Axios.get('http://www.liulongbin.top:3005/api/getnew/' + this.id).then( response =>{
        this.newsInfo = response.data.message[0];
      }).catch((error)=>{
        console.log(error);
      });
    }
  },
  created(){
    this.getNewsInfo();
  },
  components:{
    //注册子组件
    'comment-box' : comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 14px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>