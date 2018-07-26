<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加测试需求</el-breadcrumb-item>
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
				<el-form ref="form" :model="form" label-width="100px">
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
				        <span>不好吃的汉堡</span>
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
	min-height: 600px;
}
.select-form {
	margin: 10px 0;
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
	height: 350px;
	padding: 10px;
	padding-right: 100px;
	border: 1px solid #ddd;
}
.select-form {
	margin: 15px 0;
	height: 350px;
	padding: 10px;
	border: 1px solid #ddd;
	border-left: none; 
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
      },
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }      
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        form: {
        	status: '已出报告'
        },
        currentDate: '',
        form: {
          status: '',
          fileList: [{name: 'food.jpeg', url: 'http://192.168.131.79:9000/upload'}, {name: 'food2.jpeg', url: 'http://192.168.131.79:9000/upload'}],
           delete: '',
           pay: ''
        },
        files: [],
        uploadAction:'http://192.168.131.79:9000/upload',       
        dialogFormVisible: false
      };
    }
  }
</script>
