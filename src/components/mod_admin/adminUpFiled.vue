<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item :to="{ path: '/admin' }">管理员中心</el-breadcrumb-item>
		  <el-breadcrumb-item>测试报告</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-form ref="form" :model="reportDesc" label-width="200px" class="creat-form" >
				<el-col :span="8" class="desc-form">   
		            <el-form-item label="项目名称:">  
		            	<span>{{reportDesc.projName}}</span>        
		            </el-form-item>	
		            <el-form-item label="版本:">  
		            	<span>{{reportDesc.vsersion}}</span>         
		            </el-form-item>
		            <el-form-item label="测试文件:"> 
		            	<span>{{reportDesc.name}}</span>          
		            </el-form-item>	
		            <el-form-item label="报告是否通过:">
		              <template>
		                <el-radio-group v-model="form.pass">
		                  <el-radio label="true">通过</el-radio>
		                  <el-radio label="false">不通过</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>	
					<el-upload
						class="upload-demo"
						action=""
						:http-request="uploadSectionFile"
						multiple
						:limit="1"
						action=""
						:file-list="form.fileList">
						<el-button size="small" type="primary">上传测试详细报告</el-button>
					</el-upload>
					<div class="container">
						<el-col :span="24" class="finish-bottom-form">	
							<el-button type="primary" @click="onSubmit" class="push-btn">完 成 测 试</el-button>					
							<el-button type="primary" class="new-btn">
								<a href="#/adminReport" class="amend-next-type">返 回</a>         
							</el-button>										
						</el-col>			
					</div>								            	                                     
      			</el-col> 
			</el-form>
		</div>		
	</div>
</template>

<style scoped>
.creat-form {
	margin-left: 100px;
	margin-top: 50px;
	border: 1px solid #ddd;
	width: 1000px;
	height: 450px;
}
.desc-form {
	margin-left: 250px;
	margin-top: 50px;
	width: 400px;
}
.upload-demo {
	margin-left: 150px;
}
.finish-bottom-form {
	margin-left: 100px;
}
.amend-next-type {
	text-decoration: none;
	color: #fff;
}
.push-btn {
	margin-right: 50px; 
}

</style>

<script>
  export default {
    data() {
      return {
        form: {},   
        fileList:[],
        reportDesc: {}
      };
    },
    mounted() {
    	this.id = window.localStorage.getItem('packid');
    	this.typeId = window.localStorage.getItem('typeId')
    	console.log("this is type",this.typeId)
		this.loadMenu();
    },
    methods: {
      uploadSectionFile (file) {
      	this.form.upfile = file
      	console.log("this is file")
      },
      onSubmit () {
      	var fd = new FormData()
      	const pass = this.form.pass
      	const upfile = this.form.upfile.file
      	fd.append('pass',pass)
      	fd.append('packId',this.id)
      	fd.append('type',this.typeId)
      	fd.append('upfile',upfile)
		axios.post(window.dev.url + '/finishtest', fd)
		.then(function(res){
		  if (res.code == 0 ) { 
		    //self.menuList = res.list 
		    //window.location.hash = '#/adminReport'                            
		  } else {
		    console.log(res.msg)
		  }

		}
		);       	
      },
      async loadMenu () { 
	      var fd = new FormData()  
	      var self = this 
	      fd.append('packId',this.id)  
	      fd.append('typeId',this.typeId)   
	      console.log("this is data",this.id) 
          //axios.post(window.dev.url + '/upreportinfo', fd)
          axios.post(window.dev.url + '/reportpackinfo', fd)
          .then(function(res){
              if (res.code == 0 ) { 
                //self.menuList = res.list  
                self.reportDesc = res.data                              
              } else {
                console.log(res.msg)
              }

          }
          );         
      }
    }
  }
</script>
