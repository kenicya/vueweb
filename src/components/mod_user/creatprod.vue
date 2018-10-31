<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加测试需求</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="creat-block">
			<el-form ref="form" label-width="80px">
				<el-form-item label="项目名称">
          <el-select v-model="pName" placeholder="请选择项目" @change="selectPrj">
            <el-option
              v-for="item in projname"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
					<el-button type="primary" class="addprod-btn">
						<a href="#/addprod" class="add-type">新建项目 </a>
					</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="container">
			<el-form ref="form" label-width="200px">
				<el-row>
					<el-col :span="12" class="u-creat-form">        
            <el-form-item label="选择历史安装包:">
              <el-select v-model="oldPack.id" placeholder="全部" @change="selectPge">
                <el-option
                  v-for="item in oldPack"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>            
              </el-select>          
            </el-form-item>
            <el-form-item label="版本:">
              <el-input v-model="listData.version" placeholder="输入版本号"></el-input>            
            </el-form-item>
            <el-form-item label="测试安装包名称:">
              <el-input v-model="listData.name" :disabled="isEnable" placeholder="输入包名，建议中文，方便测试人员查找"></el-input>            
            </el-form-item>            
            <el-form-item label="测试说明:">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="该版本需要的测试点，例如：装备强化"
                v-model="listData.desc">
              </el-input>
            </el-form-item>           
        </el-col>          
				<el-col :span="12" class="u-select-form">
		            <el-form-item label="是否收费:">
		              <template>
		                <el-radio-group v-model="listData.ispay">
		                  <el-radio :label="true">是</el-radio>
		                  <el-radio :label="false">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>           
		            <el-form-item label="是否删档测试:">
		              <template>
		                <el-radio-group v-model="listData.isdelv">
		                  <el-radio :label="true">是</el-radio>
		                  <el-radio :label="false">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>                
		            <el-form-item label="项目资源是否完整:">
		              <template>
		                <el-radio-group v-model="listData.istrue">
		                  <el-radio :label="true">是</el-radio>
		                  <el-radio :label="false">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item> 
		            <el-form-item label="功能无遗留性BUG:">
		              <template>
		                <el-radio-group v-model="listData.isbug">
		                  <el-radio :label="true">是</el-radio>
		                  <el-radio :label="false">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item> 
                <el-form-item label="平台:">
                  <template>
                    <el-radio-group v-model="listData.plat">
                      <el-radio :label="1">安卓</el-radio>
                      <el-radio :label="0">苹果</el-radio>
                    </el-radio-group>
                  </template>
                </el-form-item>                 
				</el-col>					
				</el-row>			
			</el-form>
			<div class="container">
				<el-col :span="24" class="bottom-form">
					<el-button type="primary" @click="onSubmit" class="new-btn">下一步</el-button>
				</el-col>			
			</div>
		</div>			
	</div>
</template>

<style>
	.creat-block {
		margin-left: 400px;
	}
	.u-creat-form {
    margin: 15px 0;
    height: 350px;
	  padding: 10px;
	  padding-right: 100px;
    border: 1px solid #252323;
	}
  .u-select-form {
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
  },
  .addprod-btn {

  }

</style> 


<script>
  export default {
    data() {
      return {
        form:'',
        listData: [],
        projname: [],
        upfile: [],
        prodid: '',
        version: '',
        name: '',
        desc: '',
        isdelv: '',
        ispay:'',
        plat: '',
        istrue: '',
        isbug: '',
        oldPack:[], 
        packid:'',
        isEnable: false,
        pName: ''
      }
    },
    mounted() {
      this.pName = window.localStorage.getItem('name')
      this.pid = window.localStorage.getItem('prodid')
      console.log("this is pid", this.pid) 
      this.loadMenu();
      this.selectPrj(this.pid);
    },
    methods: {
      async loadMenu () {            
          var self = this          
          axios.post(window.dev.url + "/api" + '/allprod')
          .then(function(res){
              if (res.code == 0 ) {
                self.projname = res.list          
              } else {
                console.log(res.msg)
              }
          })
          .catch(function(res){
               console.log(res)
          });         
      },
      selectPge (id) {
        let fd = new FormData()
        var self = this
        this.packid = id
        fd.append("packid",id)
        axios.post(window.dev.url + "/api" + '/default', fd)
            .then(function(res) {
                if (res.code == 0) {
                    self.isEnable = true
                    self.listData = res.result
                    console.log(res)
                } else {
                    console.log(res.msg)
                }
            });
      },
      selectPrj (id) {
        let fd = new FormData()
        var self = this
        this.oldPack = []
        fd.append('pid', id);
        axios.post(window.dev.url + "/api" + '/allpack', fd)
            .then(function(res) {
                if (res.code == 0) {
                    self.oldPack = res.list
                } else {
                    console.log(res.msg)
                }
            });
        },
      onSubmit() {
        var fd = new FormData()
        const prodid = this.pid
        console.log("this is prodid",prodid)    
        const version = this.listData.version
        const pName = this.listData.name
        const desc = this.listData.desc
        const isdelv = this.listData.isdelv
        const ispay = this.listData.ispay
        const plat = this.listData.plat
        const istrue = this.listData.istrue
        const isbug = this.listData.isbug  
        const packid = this.packid       
        window.localStorage.setItem('packid', packid);
        // window.localStorage.setItem('prodid', prodid);
        window.localStorage.setItem('name', pName);
        window.localStorage.setItem('version', version);
        window.localStorage.setItem('desc', desc);
        window.localStorage.setItem('isdelv', isdelv);
        window.localStorage.setItem('ispay', ispay);
        window.localStorage.setItem('plat', plat);
        window.localStorage.setItem('istrue', istrue);
        window.localStorage.setItem('isbug', isbug);  
        if (this.isEnable) {
            window.localStorage.setItem('isEnable', 1); 
        }else{
            window.localStorage.setItem('isEnable', "");
        }
        window.localStorage.setItem('path', this.listData.path)   
        this.$router.push({
          path: '/amendprod',
          params:{}
        })
      },           
    }
  }
</script>