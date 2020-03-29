<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要bb的内容" maxlength="120"/>

    <mt-button type="primary" size = "large">发表评论</mt-button>
    
    <div class="ccmt-list">
      <div class="ccmt-item">
        <div class="ccmt-title">
          第一楼&nbsp;&nbsp;用户:匿名用户 &nbsp;&nbsp; 发表时间：2012-12-12 12:12:12
        </div>
        <div class="ccmt-body">
          锄禾日当午，汗滴禾下涂
        </div>
      </div>
      <div class="ccmt-item">
        <div class="ccmt-title">
          第一楼&nbsp;&nbsp;用户:匿名用户 &nbsp;&nbsp; 发表时间：2012-12-12 12:12:12
        </div>
        <div class="ccmt-body">
          锄禾日当午，汗滴禾下涂
        </div>
      </div>
      <div class="ccmt-item">
        <div class="ccmt-title">
          第一楼&nbsp;&nbsp;用户:匿名用户 &nbsp;&nbsp; 发表时间：2012-12-12 12:12:12
        </div>
        <div class="ccmt-body">
          锄禾日当午，汗滴禾下涂
        </div>
      </div>
    </div>
    <mt-button type="danger" size = "large" plain>发表评论</mt-button>
    
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  props : ["id"],
  data(){
    return{
      pageIndex : 1 //默认展示第一页数据
    }
  },
  methods:{
    getComment : function(){
      Axios.get('http://www.liulongbin.top:3005/api/getcomments/' + this.id + "?pageIndex=" + this.pageIndex ).then(response =>{
        console.log(response.data.message);
      }).catch(error =>{
        console.log(err);
      })
    }
  },
  created(){
    this.getComment();
  }

}
</script>

<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 19px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .ccmt-list{
    margin: 5px 0;
    .ccmt-item{
      font-size: 13px;
      .ccmt-title{
        line-height: 30px;
        background-color: #ccc;
      }
      .ccmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>