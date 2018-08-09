<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加测试需求</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="creat-block">
			<el-form ref="form" :model="projname" label-width="80px">
				<el-form-item label="项目名称">
          <el-select v-model="projname.id" placeholder="全部" @change="selectPrj">
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
			<el-form ref="form" :model="oldPack" label-width="200px">
				<el-row>
					<el-col :span="12" class="creat-form">        
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
              <el-input v-model="listData.version" placeholder="请输入内容"></el-input>            
            </el-form-item>
            <el-form-item label="测试说明:">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="listData.desc">
              </el-input>
            </el-form-item>           
          	</el-col>          
				<el-col :span="12" class="select-form">
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
	.creat-form {
    margin: 15px 0;
    height: 400px;
	padding: 10px;
	padding-right: 100px;
    border: 1px solid #ddd;
	}
  .select-form {
    margin: 15px 0;
    height: 400px;
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
        desc: '',
        isdelv: '',
        ispay:'',
        plat: '',
        istrue: '',
        isbug: '',
        oldPack:[], 
        packid:''      
      }
    },
    mounted() {
    this.loadMenu();
    },
    methods: {
      async loadMenu () { 
          axios.defaults.crossDomain = true;
          axios.defaults.withCredentials  = true;            
          var self = this
          axios.post(window.dev.url + '/allprod')
          .then(function(res){
              if (res.code == 0 ) {
                //window.location="/home"                
                
                // self.$emit('increment',self.projname)
                self.projname = res.list
                console.log(self.projname)               
              } else {
                console.log(res.msg)
              }
          })
          .catch(function(res){
               console.log(res)
          });         
      },
      selectPge (id) {
        //debugger;
        let fd = new FormData()
        var self = this
        this.packid = id
        fd.append("packid",id)
        // axios.defaults.crossDomain = true;
        // axios.defaults.withCredentials = true;
        axios.post(window.dev.url + '/default', fd)
            .then(function(res) {
                if (res.code == 0) {
                    // self.currentProd = self.prodmsd
                    // self.tableData.push(res.packinfo)
                    // self.tableStateData = res.testprj
                    self.listData = res.result
                    //window.location.hash = '#/report'
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
        // axios.defaults.crossDomain = true;
        // axios.defaults.withCredentials = true;
        axios.post(window.dev.url + '/allpack', fd)
            .then(function(res) {
                if (res.code == 0) {
                    // self.currentProd = self.prodmsd
                    // self.tableData.push(res.packinfo)
                    // self.tableStateData = res.testprj
                    self.oldPack = res.list
                    //window.location.hash = '#/report'
                } else {
                    console.log(res.msg)
                }
            });
        },
      onSubmit() {
        var fd = new FormData()
        const prodid = this.projname.id
        console.log(prodid)
        //const upfile = this.form.upfile.file       
        const version = this.listData.version
        const desc = this.listData.desc
        const isdelv = this.listData.isdelv
        const ispay = this.listData.ispay
        const plat = this.listData.plat
        const istrue = this.listData.istrue
        const isbug = this.listData.isbug  
        const packid = this.packid       
        console.log('submit!');
        window.localStorage.setItem('packid', packid);
        window.localStorage.setItem('prodid', prodid);
        //window.localStorage.setItem('upfile', upfile);
        window.localStorage.setItem('version', version);
        window.localStorage.setItem('desc', desc);
        window.localStorage.setItem('isdelv', isdelv);
        window.localStorage.setItem('ispay', ispay);
        window.localStorage.setItem('plat', plat);
        window.localStorage.setItem('istrue', istrue);
        window.localStorage.setItem('isbug', isbug);        
        this.$router.push({
          path: '/amendprod',
          params:{}
        })
      },           
    }
  }
</script>