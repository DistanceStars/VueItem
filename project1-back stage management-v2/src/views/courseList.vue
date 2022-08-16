<template>
  <div class="select-box">
    <div>
        <span>id:</span>
         <el-select
      v-model="option.id"
      placeholder="请选择id">
         <el-option
        v-for="item in [1,2,3,4,5,6,7]"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
    </div>
    <div>
        <span>标题:</span>
          <el-input v-model="option.title" placeholder="请输入标题" />
    </div>
    <el-button @click="getTableList" type="primary">查询</el-button>
  </div>
  
   <el-table border :data="data.table[option.page]" style="width: 100%">
    <el-table-column prop="title" label="标题"  />
    <el-table-column prop="body" label="内容"  />
    <el-table-column prop="id" label="id" />
  </el-table>
  <el-pagination
      @current-change="handleCurrentChange"
      :current-change="option.page"
      layout="total, prev, pager, next, jumper"
      :total="data.total"
    />
</template>

<script>
import { reactive } from 'vue'
import {getCourseList} from '../http/api'

export default{
    name:'CourseList',
    setup(){
        let data = reactive({
            table:[],
            psages:0,
            total:0
        })

        let option=reactive({
            id:'',
            title:'',
            page:0
        })
        let getCourseListFun=async(obj)=>{
            let arr= await getCourseList(obj),newArr=[];
                data.total=arr.length

               for(let index=0;index<arr.length;index++){
                newArr.push(arr.splice(index,10));
                index+=10;
               }
            data.table=newArr;
        } 
        getCourseListFun()
    
        let handleCurrentChange=(index)=>{
            option.page=index; //当前第几条
            // getCourseListFun({page:data.page})
        }

        let getTableList=()=>{
            console.log(option);//伪传

        }

        return {
            data,
            handleCurrentChange,
            getTableList,
            option
        }

    }
}
</script>
<style lang="scss" scoped>
.select-box{
   display: flex;
   align-items: center;
   width: 100%;
   margin-bottom: 10px;
     >div {
    margin-right: 10px;
     width: 30%;
     display: flex;
     align-items: center;
     span{
        width: 50px;
     }
    }

}





</style>