<template>
  <div class="hander">
    <el-row>
    <el-col :span="24" class="header-member"></el-col>
      <div class="container">
        <el-form ref="form" :model="form" label-width="600px">
          <el-form-item label="用户名">
            <el-col :span="8">
              <el-input v-model="form.name"></el-input>
            </el-col">
          </el-form-item>
            <el-form-item label="用户密码">
              <el-col :span="8">
                <el-input v-model="form.passworl"></el-input>
              </el-col>              
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
        </el-form>  
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
    height: 65px;
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