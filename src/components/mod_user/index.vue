<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
		  <el-aside width="220px" class="aside-box">
		  		<div class="aside-header">已有项目</div>
		  		<el-menu>
			        <el-menu-item  @click="selectPro('all')" index="1-1">全部</el-menu-item>
			        <el-menu-item 
			        action=""
			        index="item.id"
			        @click="selectPro(item.id,item.name)"
			        :key="item.id"
			        v-for="(item, index) in menuList">{{item.name}}			        	
			        </el-menu-item>
			      <el-menu-item index="2">
			        <i class="el-icon-circle-plus"></i>
			        <span slot="title"><a href="#/addprod" class="addprod-Btn">新建项目</a></span>
			      </el-menu-item>			        
			    </el-menu>
		  </el-aside>
		  <el-main>
			  <div class="user-block">
				<el-form ref="form" :model="form" label-width="100px">
				  <el-form-item label="状态">
				    <el-select v-model="form.status" placeholder="未出报告"> 
				      <el-option label="已出报告" value="shanghai"></el-option>
				      <el-option label="未出报告" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
			    </el-form>
			    <el-row class="user-list text-center">
			    	<el-col :span="6">
					    <el-card class="user-list-card">
					    	<a href="#/creatprod" class="add-btn"><i class="el-icon-plus"></i></a>
			    		</el-card>
			    	</el-col>
				  <el-col :span="6" v-for="item in prodmsd" >
				    <el-card class="user-list-card" >
				      <img :src='item.iconurl' @click="reqdesc(item.Id)" class="image" width="165px" height="150px">
				      <div class="user-list-dec">
				        <span>{{item.packname}}</span>
				        <div class="bottom clearfix">
				          <time class="time">{{item.crateTime}}</time>
				        <div class="user-list-status">
				        	<span v-if="item.status==1">
				        		测试中...
				        	</span>	
				        	<span v-else>已出报告</span>
				        </div>
				        </div>
				      </div>
				    </el-card>
				  </el-col>			  
				</el-row>

			  </div>
<!-- 		    <el-pagination 
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage3"
		      :page-size="100"
		      layout="prev, pager, next, jumper"
		      background
		      class="text-center"
		      :total="1000">
		    </el-pagination> -->
		  </el-main>
		</el-container>			
	</div>
</template>



<style>
.user-list-dec{
	padding: 10px;
	height: 55px;
}
.user-list-card{
	margin: 10px;
}
.add-btn{
    border: 1px solid #ddd;
    padding: 10px 20px;
    font-size: 105px;
    color: #ddd;
}
.aside-box {
	border: 1px solid #ddd;
	color: #333;
	margin-top: 5px;
	border-radius: 4px;
}	
.aside-box .el-menu{
	border-right: none;
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
	min-height: 600px;
}
.add-type {
	text-decoration: none;
	color: #fff;
}
.history-list {
	margin-left: 150px;
}
.creat-form {
	margin: 15px 0;
	height: 550px;
	padding: 10px;
	padding-right: 100px;
	border: 1px solid #ddd;
}
.select-form {
	margin: 15px 0;
	height: 550px;
	padding: 10px;
	border: 1px solid #ddd;
	border-left: none; 
},
.addprod-Btn {
	text-decoration: none;
	color: #ddd;	
}
</style>

<script>
  export default {
    data() {
      return {
      	currentProd: 'all',
      	page: 0,
        currentDate: '',
        form: {
          status: '',
          fileList: {},
           delete: '',
           pay: ''
        },
        files: {},      
        dialogFormVisible: false,
        menuList: {},
        prodmsd: {}
      };
    },
    mounted() {
		this.loadMenu();
    },
    methods: {
      selectPro (id,name) {
      	window.localStorage.setItem('prodid', id);
      	window.localStorage.setItem('name', name);
      	console.log("this is prodid", id)
      	getProj(id,this)
      },
      reqdesc (id) {     	  
      	  window.localStorage.setItem('packid',id);
	        this.$router.push({
	          path: '/report',
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
          axios.post(window.dev.url + "/api" + '/allprod',fd)
          .then(function(res){
              if (res.code == 0 ) { 
                self.menuList = res.list                             
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
          axios.post(window.dev.url + "/api" + '/proj', fd)
          .then(function(res){
              if (res.code == 0 ) { 
                self.menuList = res.allProj  
                self.prodmsd = res.list 
                // self.currentProd = self.prodmsd
              } else {
                console.log(res.msg)
              }
          });
  }
</script>
