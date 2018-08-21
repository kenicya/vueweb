<template>
  <div class="container">
    <el-row>               
      <div class="container">
        <el-col :span="12">
          <img src="/static/img/login.png" alt="">                  
        </el-col> 
        <el-col :span="8" class="reg-form">
          <el-form ref="form" :model="form" label-width="100px" >
            <el-form-item label="邮箱账号">
              <el-input v-model="form.username" placeholder="请输入内容"></el-input>
            </el-form-item>              
            <el-form-item label="输入密码" prop="pass">
              <el-input type="password" v-model="form.pwd" placeholder="请输入内容"></el-input>
            </el-form-item>  
            <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>   
            <el-button type="primary" class="reg-btn">
              <a href="#/register" class="reg-type">注册</a>
            </el-button>                           
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
  .reg-form {
    margin-top: 200px;
    text-align: center;
  }
  .login-btn{
      margin-left: 50px;
      width: 165px;
  }
  .reg-btn {
    width: 165px;
  }
  .reg-type {
    text-decoration: none;
    color: #fff
  }
</style>

<script>
  export default {
    data() {
      return {
        form: {
          mail: '',
          loginpwd: '',
        }
      }
    },
    methods: {
      async onSubmit () {
          var fd = new FormData()
          const username = this.form.username 
          const pwd = this.form.pwd
          //console.log(username)
          fd.append('username',username)
          fd.append('pwd',pwd)
          let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                
              }
          }
          axios.post(window.dev.url + '/login',fd,config)
          .then(function(res){
              if (res.code == 0 ) {
                window.location="./"  
              } else {
                console.log(res.msg)
              }
          })
          .catch(function(res){
               console.log(res)
          });         
      }
    }
  }
</script>