# 这是一个NB的项目

## 牛不牛比，用心去感受，每一行代码中的诗情


### hey，man

## 用传统方式把修改过后的代码上传到码云
1. git add .
2. git commit -m "提示信息"
3. git push

## 制作首页App组件
1. 完成 Header区域，使用的是Mint-UI的Header
2. 制作底部的 Tabbar 区域，使用的是 Mint-UI的Tabbar
   + 制作购物车小图标的时候，操作会相对多一些：
     + 先把扩展图标的 css 样式，拷贝到 项目中
     + 拷贝 扩展字体库 tff 文件，到项目中
     + 为 购物车 小图标，添加 如下样式 
3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link


## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 fetch获取数据
3. 获取到的数据，要保存到data上
4. 使用 v-for 循环渲染 每个项目