<template>
  <div>
    <ul class="mui-table-view">
				<li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
              <p class="mui-ellipsis">
                <span>发表时间:{{item.add_time | dateFormat}}</span>
                <span>点击：{{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data(){
    return{
      newsList:[]
    }
  },
  methods:{
    getNewsList(){
      //获取新闻接口
      Axios.get('http://www.liulongbin.top:3005/api/getnewslist').then( response =>{
        this.newsList = response.data.message;
      }).catch((error)=>{
        console.log(error);
      });

    }
  },
  mounted(){
    this.getNewsList();
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #2226af;
      display: flex;
      justify-content: space-between;
    }

  }


}
</style>