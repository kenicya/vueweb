<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加项目</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="creat-block">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="项目名称">
<!-- 					<el-select v-model="form.modulprod" placeholder="全部">
						<el-option v-for="(item,index) in projname" :key="item.name" :label="item.name" v-bind:value="item">{{item.name}}</el-option>			       
					</el-select> -->
          <el-select v-model="projname.id" placeholder="全部">
            <el-option
              v-for="item in projname"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
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
            <el-form-item label="选择历史包:">
              <el-select v-model="form.history" placeholder="全部">
                <el-option label="已出报告" value="a"></el-option>
                <el-option label="未出报告" value="b"></el-option>               
              </el-select>          
            </el-form-item>
            <el-form-item label="版本:">
              <el-input v-model="form.version" placeholder="请输入内容"></el-input>            
            </el-form-item>
            <el-form-item label="测试说明:">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="form.desc">
              </el-input>
            </el-form-item>           
          	</el-col>          
				<el-col :span="12" class="select-form">
		            <el-form-item label="是否收费:">
		              <template>
		                <el-radio-group v-model="form.ispay">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>           
		            <el-form-item label="是否删档测试:">
		              <template>
		                <el-radio-group v-model="form.isdelv">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item>                
		            <el-form-item label="项目资源是否完整:">
		              <template>
		                <el-radio-group v-model="form.istrue">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item> 
		            <el-form-item label="功能无遗留性BUG:">
		              <template>
		                <el-radio-group v-model="form.isbug">
		                  <el-radio :label="1">是</el-radio>
		                  <el-radio :label="0">否</el-radio>
		                </el-radio-group>
		              </template>
		            </el-form-item> 
                <el-form-item label="平台:">
                  <template>
                    <el-radio-group v-model="form.plat">
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
  }

</style> 


<script>
  export default {
    data() {
      return {
        form: {
        },
        projname: [],
        upfile: [],
        prodid: '',
        version: '',
        desc: '',
        isdelv: '',
        ispay:'',
        plat: '',
        istrue: '',
        isbug: ''       
      }
    },
    methods: {           
    },
    mounted() {
    this.loadMenu();
    },
    methods: {
      async loadMenu () { 
          axios.defaults.crossDomain = true;
          axios.defaults.withCredentials  = true;            
          var self = this
          axios.post('http://192.168.131.79:9000/allprod')
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

      onSubmit() {
        var fd = new FormData()
        const prodid = this.projname.id
        console.log(prodid)
        //const upfile = this.form.upfile.file       
        const version = this.form.version
        const desc = this.form.desc
        const isdelv = this.form.isdelv
        const ispay = this.form.ispay
        const plat = this.form.plat
        const istrue = this.form.istrue
        const isbug = this.form.isbug         
        console.log('submit!');
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