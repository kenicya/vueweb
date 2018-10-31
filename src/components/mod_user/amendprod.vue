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
              <!-- <el-input v-model="form.time" placeholder="2018-10-12"></el-input>  -->   
              <el-date-picker
                type="date"
                v-model="form.time"
                placeholder="选择一个或多个日期">
              </el-date-picker>                     
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
            <el-form-item label="测试附件上传:">
              <el-upload
                class="upload-demo"
                :on-success="uploadAtsuccess"
                multiple
                :limit="1"
                action="http://192.168.129.32:1000/submit"
                :file-list="form.fileList">
                <el-button size="small" type="primary">附件上传</el-button>
              </el-upload>
            </el-form-item> 
            <el-form-item label="游戏安装包上传:">
              <el-input v-model="form.path" :disabled="isEnable" placeholder="上传至\\192.168.129.100\LTTest"></el-input> 
              <span class="log-text">上传至\\192.168.129.100\LTTest,承梁说复制黏贴吧</span> 
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
  .log-text {
    color: #f30b0b;
  }
	.creat-block {
		margin-left: 400px;
	}
	.amend-creat-form {
    margin: 15px 0;
    height: 350px;
	  padding: 10px;
	  padding-right: 100px;
    border: 1px solid#252323;
	}
  .amend-select-form {
    margin: 15px 0;
    height: 350px;
    padding: 10px;
    border: 1px solid #252323;
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
          isenv: 0,
          isselfpro: 0
        },
        isEnable: false,
        fileUrl: ''
      }
    },
    mounted() {
        this.packid = window.localStorage.getItem('packid')
        this.prodid = window.localStorage.getItem('prodid');
        console.log("this is prodid", this.prodid)
        this.upfile = window.localStorage.getItem('upfile');
        this.version = window.localStorage.getItem('version');
        this.desc = window.localStorage.getItem('desc');
        this.isdelv = window.localStorage.getItem('isdelv');
        this.ispay = window.localStorage.getItem('ispay');
        this.plat = window.localStorage.getItem('plat');
        this.istrue = window.localStorage.getItem('istrue');
        this.isbug = window.localStorage.getItem('isbug');
        this.name = window.localStorage.getItem('name') 
        this.isEnable = Boolean(window.localStorage.getItem('isEnable')) 
        this.path = window.localStorage.getItem('path')
    },
    methods: {       
      onSubmit() {
        debugger;
          var fd = new FormData()
          const isweak = this.form.isweak 
          const isprotocol = this.form.isprotocol
          const isperform = this.form.isperform 
          const issafe = this.form.issafe 
          if((this.form.isweak == "") && (this.form.isprotocol == "") && (this.form.isperform == "") && (this.form.issafe == "")) {
            this.$message.error('至少选择一种测试需求');
          }else{
            const time = this.form.time 
            let stime = this.GMTToStr(time)
            const isenv = this.form.isenv 
            const isselfpro = this.form.isselfpro 
            const path = this.form.path == null ? this.path : this.form.path
            fd.append('fileurl',this.fileUrl)
            fd.append('isweak',isweak)
            fd.append('isprotocol',isprotocol)          
            fd.append('isperform',isperform)
            fd.append('issafe',issafe)
            fd.append('time',stime)
            fd.append('isenv',isenv)
            fd.append('isselfpro',isselfpro)
            fd.append('prodid',this.prodid)
            debugger
            fd.append('packid',this.packid)
            fd.append('path',path)
            fd.append('version',this.version)
            fd.append('desc',this.desc)
            fd.append('isdelv',this.isdelv)
            fd.append('ispay',this.ispay)
            fd.append('plat',this.plat)
            fd.append('istrue',this.istrue)
            fd.append('isbug',this.isbug)
            fd.append('name',this.name)
            let config = {
              headers: {
                  'Content-Type': 'multipart/form-data'               
                }
            }
            axios.post(window.dev.url + "/api" + '/addneed',fd,config)
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
      },
      uploadAtsuccess(response, file, fileList) {
        var fileUrl = response.fileUrl  
        this.fileUrl = fileUrl
        console.log("this is url", this.fileUrl)
      },
      GMTToStr(time){
          let date = new Date(time)
          let Str=date.getFullYear() + '-' +
          (date.getMonth() + 1) + '-' + 
          date.getDate()
          return Str
      }         
    }
  }
</script>
