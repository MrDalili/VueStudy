<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="宁某人的-Vue项目">
			<span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
		</mt-header>

    <!-- 中间的路由 router-view 区域 -->
		<transition>
			<router-view/>
		</transition>


    <!-- 底部的 Tabber 区域 -->
    <nav class="mui-bar mui-bar-tab " >
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart" >
          <span class="mui-badge" id="badge">{{ $store.getters.getGoodsNum }}</span>
        </span>
				<span class="mui-tab-label" >购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <div id='app'>

    </div>
  </div>
</template>

<script>
export default {
	 data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
	watch: {
		$route: {
    handler: function(val, oldVal){
			console.log(val)
      if (val.path === "/home") {
				console.log("到啦")
        this.flag = false;
      } else {
				console.log("没到home")
        this.flag = true;
      }
    },
    deep: true
  }
	},
}
</script>


<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}



//或者使用全局样式样式去掉
* { touch-action: pan-y; } 
</style>
