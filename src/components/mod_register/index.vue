<template>
  <div class="container">
    <el-row>               
      <div class="container">
        <el-col :span="12">
          <img src="/static/img/register.png" alt="">                  
        </el-col> 
        <el-col :span="8" class="reg-form">
          <el-form ref="form" :model="form" label-width="100px" >
            <el-form-item label="邮箱账号">
              <el-input v-model="form.username" placeholder="请输入内容"></el-input>
            </el-form-item>              
            <el-form-item label="输入密码">
              <el-input type="password" v-model="form.pwd" placeholder="请输入内容"></el-input>
            </el-form-item>  
<!--             <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="form.checkPass" auto-complete="off" placeholder="请输入内容"></el-input>
            </el-form-item>   -->
            <el-button type="primary" @click="onSubmit" class="reg-btn">注册</el-button>                              
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
  .reg-btn{
      width: 165px;
  }
</style>

<script>
  export default {
    data() {
      // var validatePass = (rule,value,callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.form.checkPass !== '') {
      //       this.$refs.form.validateField('checkPass')
      //     }
      //     callback();
      //   }
      // };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.form.pwd) {
      //     callback(new Error('两次输入密码不一致！'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        form: {
          username: '',
          pwd: ''
          //checkPass: ''
        }
        // rules: {
        //   pass: [
        //     { validator: validatePass, trigger: 'blur' }
        //   ],
        //   checkPass: [
        //     { validator: validatePass2, trigger: 'blur'}
        //   ]
        // }
      }
    },
    methods: {        
      async onSubmit () {
        //console.log('submit!')
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
          axios.post(window.dev.url + "/api" + '/register',fd,config)
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