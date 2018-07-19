<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加项目</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-row>
				<el-col :span="8" offset="6" class="add-form">
		          <el-form ref="form" :model="form" label-width="100px" >
		            <el-form-item label="项目名称">
		              <el-input v-model="form.mail" placeholder="不能为空"></el-input>
		            </el-form-item>    
		            <el-form-item label="项目名称">
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
						  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
						</el-upload>
		            </el-form-item> 		                      
		            <el-form-item label="项目说明">
		              <el-input v-model="form.passworl" placeholder=""></el-input>
		            </el-form-item>                           
		          </el-form>						
				</el-col>
			</el-row>	
		</div>	
	</div>
</template>



<style>
  .add-form {
    margin-top: 200px;
    text-align: center;
  }
  .aside-header {
 	border-bottom: 1px solid #ddd;
 	line-height: 45px;
    text-align: center;
    background-color: #eee;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin-top: 5px;
    margin-left: 5px;
  }
  .user-block {
  	min-height: 500px;
  }
  .ano-breadcrumb{
  	margin: 15px 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        form: {
          mail: '',
          passworl: '',
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
