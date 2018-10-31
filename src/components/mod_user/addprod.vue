<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }" @click="onSubmit">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加项目</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-row>
				<el-col :span="8" class="add-form">
		      <el-form ref="form" :model="form" label-width="100px" >
		            <el-form-item label="项目名称:">
		              <el-input v-model="form.name" placeholder="不能为空"></el-input>
		            </el-form-item>    
		            <el-form-item label="项目图标:">
						<el-upload
						  class="upload-demo"
              :on-success="uploadsuccess"
						  multiple
              with-credentials
						  :limit="1"
              action="http://192.168.129.32:1000/submit"
						  :file-list="fileList">
						  <el-button size="small" type="primary">点击上传</el-button>
						  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
						</el-upload>
            </el-form-item> 		                      
            <el-form-item label="项目说明:">
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
    margin-left: 300px;
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
          desc: ''         
        },
        fileList: [],
        fileUrl: ""
      }
    },
    methods: {
      // uploadSectionFile(file){
      //   this.file = file
      //   //debugger;
      // },
      onSubmit() {
          var fd = new FormData()
          var fileValue = document.querySelector('.upload-demo')
          const name = this.form.name 
          const desc = this.form.desc
          //let upfile = this.file.file
          fd.append('fileurl',this.fileUrl)
          fd.append('name',name)
          fd.append('desc',desc)
          // fd.append('upfile', upfile)
          let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
          }
          axios.post(window.dev.url + "/api" + '/addprj',fd,config)
          .then(function(res){
              if (res.code == 0 ) {
                window.location.hash="/user"

              } else {
                console.log(res.msg)
              }
          })
          .catch(function(res){
               console.log(res)
          });
      },
      uploadsuccess(response, file, fileList) {
        var fileUrl = response.fileUrl  
        this.fileUrl = fileUrl
        //console.log("this is url", this.fileUrl)
      }    
    }
  }

</script>
