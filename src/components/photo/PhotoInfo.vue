<template>
  <div>
    <h3>{{this.title}}</h3>
    <ul>
      <li v-for="item in list" :key='item.id'>
        <img v-lazy="item.img_url">
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'  
export default {
  props : ["title","id"],
  data(){
    return{
      cates:[],
      list:[]
    }
  },    
  methods: {
    getCateList : function(){
      Axios.get('http://www.liulongbin.top:3005/api/getimages/17/')
      .then(response => {

        this.list = response.data.message;
      })
      .then(err =>{
        console.log(err);
      })
    }
  },
  created(){
    this.getCateList();
  }

}
</script>

<style lang="scss" scoped>
  img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>