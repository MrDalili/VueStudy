<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="宁某人的-Vue项目"/>

    <!-- 中间的路由 router-view 区域 -->


    <!-- 底部的 Tabber 区域 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./images/首页.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="message">
        <img slot="icon" src="./images/消息.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="list">
        <img slot="icon" src="./images/通讯录.png">
        通讯录
      </mt-tab-item>
      <mt-tab-item id="setting">
        <img slot="icon" src="./images/设置.png">
        设置
      </mt-tab-item>
    </mt-tabbar>
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
