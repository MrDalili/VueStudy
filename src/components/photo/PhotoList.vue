<template>
  <div>
    <van-tabs v-model="active"  sticky animated swipeable >
      <van-tab v-for="item in imageCategory" :key="item.id" :title="item.title" >
        <photoes-info :title = "item.title" :id = "item.id"></photoes-info>
      </van-tab>
    </van-tabs>
  </div>
</template> 

<script>
import Axios from "axios"
import PhotoInfo from './PhotoInfo.vue'
export default {
    data() {
    return {
      active: 5,
      imageCategory : [],

    };
  },
  components:{
    'photoes-info' : PhotoInfo
  },
  methods:{
    getImageCategory:function(){
      Axios.get('http://www.liulongbin.top:3005/api/getimgcategory')
        .then(response => {
          // console.log("----------")
          // console.log(response)
          this.imageCategory = response.data.message;
        })
        .then(error => {
          console.log(error);
        })        
    }
  },
  created(){
    this.getImageCategory();
  }

}

</script> 

<style lang="scss" scoped>
  
</style>