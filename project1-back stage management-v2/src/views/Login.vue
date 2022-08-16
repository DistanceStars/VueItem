<template>
  <div class="login">
    <h2>后台管理系统</h2>
    <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="loginData"
    style="max-width: 460px"
  >
    <el-form-item label="账号:">
      <el-input v-model="loginData.name" placeholder="请输入账号"/>
    </el-form-item>
    <el-form-item label="密码:">
      <el-input v-model="loginData.password" placeholder="请输入密码" show-password />
    </el-form-item>
    <el-form-item>
    <el-button @click="subFun" class="login-button" type="primary" >登录</el-button>
    </el-form-item>
  </el-form>

  </div>
</template>

<script>
import {reactive} from 'vue'
import { ElMessage } from 'element-plus'
import {login} from '../http/api.js'
import router from '../router/index.js'
export default{
  name:'Login',
  setup(){
    let loginData=reactive({
      name:'',
      passwoed:'',
    })
    
    let subFun=()=>{
      // 先判断账号
      if(!loginData.name || !loginData.password ){
        ElMessage.error('账号或密码为空！')
        return
      }
      // 执行登录操作
      login(loginData).then(res=>{
        console.log(res);
        router.push('/home')
      })
    }
    return{
      loginData,
      subFun
    }

  }

}
</script>

<style>

.login{
  width: 360px;
  margin: 140px auto;
  border: solid #efefef;
  border-radius: 10px;
  padding-right:40px;
}
h2{
  text-align: center;
}
.login-button{
  width: 100%;
}



</style>
