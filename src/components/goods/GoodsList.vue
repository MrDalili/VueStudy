<template>
  <div class="goods-list">
    <router-link :to="'/home/goodsinfo/'+item.id" v-for="item in goodsList" :key="item.id" class="goods-item">
      <img v-lazy="item.img_url" alt="" tag="div">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.market_price}}</span>
          <span class="old">￥{{item.sell_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>{{item.stock_quantity}}</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data(){
    return{
      goodsList:[],
      pageIndex : 1,
    }
  },
  methods:{
    getGoodList:function(){
      Axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+this.pageIndex)
      .then(response => {
        this.goodsList = this.goodsList.concat(response.data.message); 
      })
      .then(error => {
        console.log(error)
      })
    },
    getMore:function(){
      this.pageIndex++;
      this.getGoodList();
    }
  },
  created(){
    this.getGoodList();
  }
}
</script>

<style lang="scss" >
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img[lazy=loading] {
        margin: auto;
        width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>