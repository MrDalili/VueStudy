<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="宁某人的-Vue项目"/>

    <!-- 中间的路由 router-view 区域 -->

		<router-view/>

    <!-- 底部的 Tabber 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shop">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    <h1>123</h1>
    <div id='app'>

    </div>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
}
</style>
