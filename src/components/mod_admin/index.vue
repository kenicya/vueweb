<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/adminReport' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item><a href="#/adminReport">管理员中心</a></el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
		  <el-aside width="220px" class="admin-aside-box">
		  		<div class="admin-aside-header">已有项目</div>
		  		<el-menu>
			        <el-menu-item  @click="selectPro('all')" index="1-1">全部</el-menu-item>
			        <el-menu-item 
			        :index="item.id"
			        @click="selectPro(item.id)"
			        :key="item.id"
			        v-for="(item, index) in menuList">{{item.name}}			        	
			        </el-menu-item>			        
			    </el-menu>
		  </el-aside>
		  <el-main width="980px" class="admin-main-box">
			  <div class="admin-block">
				<el-form ref="form" :model="form" label-width="100px">
				  <el-form-item label="状态">
				    <el-select v-model="form" placeholder="全部"> 
				      <el-option label="已出报告" value="shanghai"></el-option>
				      <el-option label="未出报告" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
			    </el-form>
			    <el-row class="user-list text-center">
				  <el-col :span="6" v-for="item in prodmsd" >
				    <el-card class="user-list-card" >
				      <img :src='item.iconurl' @click="reqdesc(item.Id)" class="image" width="100%">
				      <div class="user-list-dec">
				        <span>{{item.packname}}</span>
				        <div class="bottom clearfix">
				          <time class="time">{{item.crateTime}}</time>
				        <div class="user-list-status">
				        	<span v-if="item.status==1">
				        		未出报告
				        	</span>	
				        	<span v-else>已出报告</span>
				        </div>
				        </div>
				      </div>
				    </el-card>
				  </el-col>			  
				</el-row>

			  </div>		  	
		  </el-main>
		</el-container>			
	</div>
</template>

<style>
	.admin-aside-box {
		border: 1px solid #ddd;
		color: #333;
		margin-top: 5px;
		border-radius: 4px;		
	}
	.admin-aside-header {
		border-bottom: 1px solid #ddd;
		line-height: 45px;
		text-align: center;
		background-color: #eee;		
	}
	.admin-main-box {
		border: 1px solid #ddd;
		color: #333;
		margin-top: 5px;
		border-radius: 4px;
	}
	.admin-block {
		min-height: 600px;
	}
</style>

<script>
  export default {
    data() {
      return {
      	currentProd: 'all',
      	page: 0,
        currentDate: '',
        form: {},
        files: [],      
        dialogFormVisible: false,
        menuList: [],
        prodmsd: []
      };
    },
    mounted() {
		this.loadMenu();
    },
    methods: {
      selectPro (id) {
      	getProj(id,this)
      },
      reqdesc (id) {    
      	console.log("this is id",id)
      	window.localStorage.setItem('packid',id)   
        this.$router.push({
          path: '/adminReport',
          params:{}
        })		
      },
      async loadMenu () { 
      	 getProj('all',this)
	      //this.menuList =  ['选项一','2',3,4,5];
	      var fd = new FormData()  
	      this.menuList =  [];
	      this.prodmsd = [];
	      var self = this
	      fd.append('page',page)       
          axios.post(window.dev.url + '/allprod')
          .then(function(res){
              if (res.code == 0 ) { 
                self.menuList = res.allProj 
                console.log("this is list") 
                //self.prodmsd = res.list                              
              } else {
                console.log(res.msg)
              }

          }
          );         
      }
    }
  }
  
  function getProj(id,obj) {
      	  let fd = new FormData(),
		  self = obj;
      	  fd.append('page', obj.page);
      	  var pid = id == 'all' ? 0 : id
      	  fd.append('pid',pid);         
          axios.post(window.dev.url + '/proj', fd)
          .then(function(res){
              if (res.code == 0 ) { 
                self.menuList = res.allProj  
                self.prodmsd = res.list 
              } else {
                console.log(res.msg)
              }
          });
  }
</script>
