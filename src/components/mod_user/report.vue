<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>测试需求单：XXXXX</el-breadcrumb-item>
		  <el-breadcrumb-item>汇总报告</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-form ref="form" :model="report-form" label-width="100px">
				<el-row>
					<el-col :span="12" class="report-form">               
          			</el-col>          
					<el-col :span="12" class="report-select-form">		                            
					</el-col>					
				</el-row>			
			</el-form>
		</div>			
	</div>
</template>

<style>
.report-form {
	margin: 15px 0;
	height: 500px;
	padding: 10px;
	padding-right: 100px;
	border-right: 1px solid #ddd;
},
.report-select-form {
	margin: 15px 0;
	height: 500px;
	padding: 10px;
	padding-right: 100px;
	border: 1px solid #ddd;
}	
</style>