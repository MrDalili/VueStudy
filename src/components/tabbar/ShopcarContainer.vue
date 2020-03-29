<template>
   <div class="shopcar-container">
    
    <div class="goods-list">

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="( item , i )  in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
             <mt-switch 
              v-model="swith" @change="change"></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#" @click.prevent="remove(item.id , i)">删除 </a>
              </p>
            </div>

					</div>
				</div>
			</div>

    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">1</span> 件， 总价 <span class="red">￥12</span></p>
            </div>
             <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>


      <p>{{ $store.getters.getGoodsSelected }}</p>

  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
import Axios from 'axios'
export default {
  data(){
    return{
      swith:false,
      goodsList:[],
    }
  },created() {
    this.getGoodsList();
  },
  methods:{
    change:function(){
      
    },
    getGoodsList:function(){
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      })
      if(idArr.length == 0){
        return;
      }
       Axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/' + idArr.join(" , "))
      .then(response => {
        console.log("111111")
        console.log(response);
        this.goodsList = response.data.message;
      })
      .then(err =>{
        console.log(err);
      })
    },
    remove(id , index){
      this.goodsList.splice(index , 1);
      this.$store.store.commit('MUTATIONS', payload)
    }
  },
   components: {
    numbox
  }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>