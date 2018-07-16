<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
		  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
		  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
		  <el-aside width="220px" class="aside-box">
		  		<div class="aside-header">已有项目</div>
		  		<el-menu>
			        <el-menu-item index="1-1">全部</el-menu-item>
			        <el-menu-item index="1-2">选项2</el-menu-item>
			    </el-menu>
		  </el-aside>
		  <el-main>
			  <div class="user-block">
				<el-form ref="form" :model="form" label-width="80px">
				  <el-form-item label="状态">
				    <el-select v-model="form.status" placeholder="全部">
				      <el-option label="已出报告" value="shanghai"></el-option>
				      <el-option label="未出报告" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
			    </el-form>
			    <div class="">
			    </div>
			    <el-row class="user-list text-center">
			    	<el-col :span="6">
					    <el-card class="user-list-card">
					    	<a href="#/creatprod" class="add-btn"><i class="el-icon-plus"></i></a>
			    		</el-card>
			    	</el-col>
				  <el-col :span="6" v-for="(o, index) in 8" :key="o">
				    <el-card class="user-list-card">
				      <img src="static/img/test.png" class="image" width="100%">
				      <div class="user-list-dec">
				        <span>好吃的汉堡</span>
				        <div class="bottom clearfix">
				          <time class="time">{{ currentDate }}</time>
				        </div>
				      </div>
				    </el-card>
				  </el-col>
				</el-row>

			  </div>
		    <el-pagination 
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage3"
		      :page-size="100"
		      layout="prev, pager, next, jumper"
		      background
		      class="text-center"
		      :total="1000">
		    </el-pagination>
		  </el-main>
		</el-container>			
	</div>
</template>



<style>
.user-list-dec{
	padding: 10px;
}
.user-list-card{
	margin: 10px;
}
.add-btn{
    border: 1px solid #ddd;
    padding: 10px 20px;
    font-size: 40px;
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
  	min-height: 500px;
  }
  .ano-breadcrumb{
  	margin: 15px 0;
  }
</style>

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        form: {
        	status: 'shanghai'
        },
        currentDate: ''
      };
    }
  }
</script>
