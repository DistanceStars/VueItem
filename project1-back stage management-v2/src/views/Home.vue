<template>
  <div class="home">
    <el-container>
      <el-header class="top-box">
        <el-row :gutter="24">
    <el-col :span="18"><img src="../assets/logo.png" style="width:50px;"/></el-col>
    <el-col :span="6">
    <div class="info-box"><span>竹官</span>
    <el-button class="out-btn" type="text">退出</el-button>
    </div>
    </el-col>

       </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
          router="true"
        class="el-menu-vertical-demo">
        <el-menu-item :router="i.path" v-for="i in tabList" :key="i.name" :index="i.name" >
       <!--   <i class="el-icon-document"></i> -->
        <template #title>{{i.meta.title}}</template> 
        </el-menu-item>
       </el-menu>

        </el-aside>
        <el-main>
          <div class="content-box">
          <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

/* import { reactive } from 'vue'; */
import router from '../router/index'
export default {
  name:'Home',
  setup(){

    let tabList =router.options.routes[0].children;
    console.log(tabList);
    return{
      tabList
    }
  } 
};
</script>
<style lang="scss" scoped>
.top-box{
  background: skyblue;
  padding: 5px;
   .info-box{
     text-align: right;
   }
   .out-btn{
    margin-left: 10px;
   }
   .content-box{
    padding: 20px;
   }
}

</style>