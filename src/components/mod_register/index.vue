<template>
  <div class="container">
    <el-row>               
      <div class="container">
        <el-col :span="12">
          <img src="/static/img/register1.png" alt="">                  
        </el-col> 
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="70px">
            <el-form-item label="用户名">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-form>          
        </el-col>
      </div>
    </el-row>
  </div>
</template>
<style>
  .el-carousel__item {
    text-align: center;
  }
  .el-carousel__item img {
    height: 300px;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #4969e1;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #4969e1;
  }

  .header-member {
    height: 60px;
  }
</style>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          passworl: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>