<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加项目</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="creat-block">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="项目名称">
					<el-select v-model="form.status" placeholder="全部">
						<el-option label="已出报告" value="a"></el-option>
						<el-option label="未出报告" value="b"></el-option>				       
					</el-select>
					<el-button type="primary" class="new-btn">
						<a href="#/addprod" class="add-type">新建项目 </a>
					</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="container">
			<el-form ref="form" :model="form" label-width="200px">
				<el-row>
					<el-col :span="12" class="creat-form">
            <el-form-item label="测试文件:">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>         
            <el-form-item label="选择历史包:">
              <el-select v-model="form.history" placeholder="全部">
                <el-option label="已出报告" value="a"></el-option>
                <el-option label="未出报告" value="b"></el-option>               
              </el-select>          
            </el-form-item>
            <el-form-item label="版本:">
              <el-input v-model="input" placeholder="请输入内容"></el-input>            
            </el-form-item>
            <el-form-item label="测试说明:">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
            </el-form-item>           
          	</el-col>          
				<el-col :span="12" class="select-form">
		            <el-form-item label="是否收费:">
		              <template>
		                <el-radio-group v-model="form.pay">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>           
		            <el-form-item label="是否删档测试:">
		              <template>
		                <el-radio-group v-model="form.delete">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>
		            <el-form-item label="项目资源是否完整:">
		              <template>
		                <el-radio-group v-model="form.result">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item> 
		            <el-form-item label="功能无遗留性BUG:">
		              <template>
		                <el-radio-group v-model="form.bug">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item> 
				</el-col>					
				</el-row>			
			</el-form>
			<div class="container">
				<el-col :span="24" class="bottom-form">
					<el-button type="primary" class="new-btn">
						<a href="#/addprod" class="next-type">下一步</a>
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
	.creat-form {
    margin: 15px 0;
    height: 500px;
	padding: 10px;
	padding-right: 100px;
    border: 1px solid #ddd;
	}
  .select-form {
    margin: 15px 0;
    height: 500px;
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
  .next-type {
  	text-decoration: none;
  	color: #fee;
  }
  .bottom-form {
  	margin-left: 560px;
  }
  .select-list {
  	width: 200px;
  }
</style> 


<script>
  export default {
    data() {
      return {
        form: {
          status: 'shanghai',
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
           delete: '',
           pay: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }      
    }
  }
</script>