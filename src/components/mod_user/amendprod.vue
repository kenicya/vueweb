<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加测试需求</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-form ref="form" :model="form" label-width="200px">
				<el-row>
					<el-col :span="12" class="amend-creat-form">
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.isweak">弱网测试(测试时间3~6天/人)</el-checkbox>
              </el-form-item>
            </template> 
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.isprotocol">协议测试(测试时间3~5天/人)</el-checkbox>
              </el-form-item>
            </template>  
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                <el-checkbox v-model="form.isperform">客户端性能测试(测试时间2~3天/人)</el-checkbox>
              </el-form-item>
            </template>  
            <template>
              <el-form-item>
                <!-- `checked` 为 true 或 false -->
                        <el-checkbox v-model="form.issafe">客户端安全测试(测试时间1~2天/人)</el-checkbox>
              </el-form-item>
            </template> 
            <el-form-item label="预期完成时间:">
              <el-input v-model="form.time" placeholder="2018-10-12"></el-input>            
            </el-form-item>                                                             
          </el-col>     
				  <el-col :span="12" class="amend-select-form"> 
            <el-form-item label="专门的测试环境:">
              <template>
                <el-radio-group v-model="form.isenv">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </template>
            </el-form-item>
            <el-form-item label="协议自测:">
              <template>
                <el-radio-group v-model="form.isselfpro">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </template>
            </el-form-item> 
            <el-form-item label="游戏安装包上传:">
              <el-upload
                class="upload-demo"
                :http-request="uploadSectionFile"
                multiple
                :limit="1"
                action=""
                :file-list="form.fileList">
                <el-button size="small" type="primary">安装包上传</el-button>
              </el-upload>
            </el-form-item>                        
				  </el-col>					
				</el-row>			
			</el-form>
		<div class="container">
			<el-col :span="24" class="amend-bottom-form">
				<el-button type="primary" class="new-btn">
					<a href="#/creatprod" class="amend-next-type">上一步</a>         
				</el-button>
        <el-button type="primary" @click="onSubmit" class="push-btn">提交测试需求</el-button>
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
          isweak: '',
          isprotocol: '',
          isperform: '',
          issafe: '',
          time: '',
          isenv: '',
          isselfpro: ''
        }
      }
    },
    mounted() {
        this.packid = window.localStorage.getItem('packid')
        this.prodid = window.localStorage.getItem('prodid');
        this.upfile = window.localStorage.getItem('upfile');
        this.version = window.localStorage.getItem('version');
        this.desc = window.localStorage.getItem('desc');
        this.isdelv = window.localStorage.getItem('isdelv');
        this.ispay = window.localStorage.getItem('ispay');
        this.plat = window.localStorage.getItem('plat');
        this.istrue = window.localStorage.getItem('istrue');
        this.isbug = window.localStorage.getItem('isbug');  
    },
    methods: { 
      uploadSectionFile(file){
        this.form.upfile = file
        //debugger;
      },         
      onSubmit() {
          var fd = new FormData()
          const isweak = this.form.isweak 
          const isprotocol = this.form.isprotocol
          const isperform = this.form.isperform 
          const issafe = this.form.issafe 
          const time = this.form.time 
          const isenv = this.form.isenv 
          const isselfpro = this.form.isselfpro 

          fd.append('isweak',isweak)
          fd.append('isprotocol',isprotocol)          
          fd.append('isperform',isperform)
          fd.append('issafe',issafe)
          fd.append('time',time)
          fd.append('isenv',isenv)
          fd.append('isselfpro',isselfpro)
          fd.append('prodid',this.prodid)
          fd.append('packid',this.packid)
          if (this.form.upfile != null) {
            const upfile = this.form.upfile.file
            fd.append('upfile',upfile)  
          }           
          fd.append('version',this.version)
          fd.append('desc',this.desc)
          fd.append('isdelv',this.isdelv)
          fd.append('ispay',this.ispay)
          fd.append('plat',this.plat)
          fd.append('istrue',this.istrue)
          fd.append('isbug',this.isbug)

          let config = {
            headers: {
                'Content-Type': 'multipart/form-data'               
              }
          }
          axios.post(window.dev.url + '/addneed',fd,config)
          .then(function(res){
              if (res.code == 0 ) { 
                window.location.hash = '#/user'
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
