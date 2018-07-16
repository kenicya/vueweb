<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>添加/修改需求</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="creat-block">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="项目名称">
					<el-select v-model="form.status" placeholder="全部">
						<el-option label="已出报告" value="a"></el-option>
						<el-option label="未出报告" value="b"></el-option>				       
					</el-select>
				<el-button type="primary" @click="onSubmit" class="new-btn">新建项目</el-button>
				</el-form-item>
			</el-form>
		</div>
			<div class="container">
				<el-row>
					<el-col :span="12" class="creat-form">
					hhhhh
					</el-col>
					<el-col :span="12" class="select-form">
					aaaaa
					</el-col>					
				</el-row>			
			</div>			
	</div>
</template>

<style>
	.ano-breadcrumb {
		margin: 15px 0;
	}
	.creat-block {
		margin-left: 400px;
	}
	.creat-form {
		padding: 10px;
	}
</style> 

<script>
	export default {
		data() {
			return {
				form:{
					status: 'shanghai'
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit')
			}
		}
	}
</script>