<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加项目</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-form ref="form" :model="form" label-width="200px">
				<el-row>
					<el-col :span="12" class="amend-creat-form">
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.nettest">弱网测试(测试时间3~6天/人)</el-checkbox>
              </el-form-item>
            </template> 
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.nettest">协议测试(测试时间3~5天/人)</el-checkbox>
              </el-form-item>
            </template>  
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.clienttest">客户端性能测试(测试时间2~3天/人)</el-checkbox>
              </el-form-item>
            </template>  
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.clientsalf">客户端安全测试(测试时间1~2天/人)</el-checkbox>
              </el-form-item>
            </template>                                                  
          </el-col>     
				  <el-col :span="12" class="amend-select-form"> 
            <el-form-item label="专门的测试环境:">
              <template>
                <el-radio-group v-model="form.result">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </template>
            </el-form-item>
            <el-form-item label="协议自测:">
              <template>
                <el-radio-group v-model="form.test">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </template>
            </el-form-item>            
				  </el-col>					
				</el-row>			
			</el-form>
		<div class="container">
			<el-col :span="24" class="amend-bottom-form">
				<el-button type="primary" class="new-btn">
					<a href="#/creatprod" class="amend-next-type">上一步</a>         
				</el-button>
        <el-button type="primary">
          <a href="#/creatprod" type="primary" @click="onSubmit" class="push-btn">提交测试需求</a>
        </el-button>
				</el-col>			
			</div>
		</div>			
	</div>
</template>

<style>

	.creat-block {
		margin-left: 400px;
	}
	.amend-creat-form {
    margin: 15px 0;
    height: 350px;
	padding: 10px;
	padding-right: 100px;
    border: 1px solid #ddd;
	}
  .amend-select-form {
    margin: 15px 0;
    height: 350px;
    padding: 10px;
    border: 1px solid #ddd;
    border-left: none; 
  }
  .add-type {
    text-decoration: none;
    color: #fff;
  }
  .creat-list {
    width: 200px;
  }
  .upload-demo {
    width: 100px;
    margin-left: 20px;
  }
  .history-list {
    width: 150px;

  }
  .amend-next-type {
  	text-decoration: none;
  	color: #fee;
  }
  .amend-bottom-form {
  	margin-left: 510px;
  }
  .amend-select-list {
  	width: 200px;
  }
  .push-btn {
    text-decoration: none;
    color: #fee;
  }
  .result-select {
    margin: center;
  }
</style> 

<script>
  export default {
    data() {
      return {
        form: {
          nettest: '',
          test: ','
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
