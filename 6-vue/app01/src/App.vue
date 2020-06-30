<template>
  <div id="app">
    <Echarts></Echarts>
    <Liner></Liner>
    <div>{{msg}}</div>
    <List title='数据列表'></List>

    <!-- <Article></Article>
    <Category></Category>
    <User></User> -->
    <button @click='currentPage="Article"'>文章管理</button>
    <button @click='currentPage="Category"'>栏目管理</button>
    <button @click='currentPage="User"'>用户管理</button>
    <keep-alive>
      <components :is="currentPage"></components>
    </keep-alive>
  </div>
</template>

<script>
import List from './components/List'
import Article from './pages/Article.vue'
import Category from './pages/Category.vue'
import User from './pages/User.vue'
import Liner from './components/Liner.vue'
import Echarts from './components/Echarts.vue'
export default {
  name: 'App',
  components:{
    List:List,
    Article,
    Category,
    User,
    Liner,
    Echarts
  },
  data(){
    return{
      currentPage:'Article',
      msg:'hello vue-cli'
    }
  }
  
}
</script>

<style>
  #app{
    background-color: antiquewhite;
  }
</style>
