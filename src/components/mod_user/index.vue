<template>
	<div class="container">
		<el-container>
		  <el-aside width="160px">
		  	<div class="aside-form"> 

		  	</div>
		  </el-aside>
		  <el-main>
			  <div class="user-block">
			    <el-pagination 
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="100"
			      layout="prev, pager, next, jumper"
			      :total="1000">
			    </el-pagination>
			  </div>
		  </el-main>
		</el-container>			
	</div>
</template>


<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 560px;
    margin-top: 5px;
  }	
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 100px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .aside-form {
 	margin-top: 50px;
 	text-align: center;
  }
  .user-block {
  	text-align: center;	
  	height: 50px;
  	margin-top: 460px;
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
        currentPage4: 4
      };
    }
  }
</script>
