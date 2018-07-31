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
		              <el-input v-model="form.name" placeholder="不能为空"></el-input>
		            </el-form-item>    
		            <el-form-item label="项目名称">
						<el-upload
						  class="upload-demo"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove"
						  :before-remove="beforeRemove"
              :http-request="uploadSectionFile"
						  multiple
						  :limit="3"
						  :on-exceed="handleExceed"
						  :file-list="fileList">
						  <el-button size="small" type="primary">点击上传</el-button>
						  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
						</el-upload>
            </el-form-item> 		                      
            <el-form-item label="项目说明">
              <el-input v-model="form.desc" placeholder=""></el-input>
            </el-form-item> 
            <el-button type="primary" @click="onSubmit" class="set-btn">保存项目</el-button>                            
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
  .set-btn {
    margin-left: 50px;
    width: 165px;    
  }
</style>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          desc: '',
          fileList: [{name: 'food.jpeg', url: ''}, {name: 'food2.jpeg', url: ''}]
        }
      }
    },
    methods: {
      uploadSectionFile(file){
        this.file = file
        //debugger;
      },
      onSubmit() {
          var fd = new FormData()
          var fileValue = document.querySelector('.upload-demo')
          const name = this.form.name 
          const desc = this.form.desc
          let upfile = this.file.file
          //debugger;
          fd.append('name',name)
          fd.append('desc',desc)
          fd.append('upfile', upfile)
          let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
          }
          axios.defaults.crossDomain = true;
          axios.defaults.withCredentials  = true;
          axios.post('http://192.168.131.79:9000/addprj',fd,config)
          .then(function(res){
              if (res.code == 0 ) {
                window.location.hash="/creatprod"

              } else {
                console.log(res.msg)
              }
          })
          .catch(function(res){
               console.log(res)
          });
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
