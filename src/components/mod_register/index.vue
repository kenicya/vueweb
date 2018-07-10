<template>
  <div class="hander">
    <el-col :span="24" class="header-member">
    </el-col>     
      <div class="block">
        <el-form ref="form" :model="form" label-width="600px">
          <el-form-item label="用户名">
            <el-col :span="6">
              <el-input v-model="form.name"></el-input>
            </el-col">
          </el-form-item>
            <el-form-item label="密码">
              <el-col :span="6">
                <el-input v-model="form.passworl"></el-input>
              </el-col>
              </el-select>
            </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </el-form>  
      </div>
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