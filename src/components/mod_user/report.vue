<template>
	<div class="container">
	  	<el-breadcrumb :pan='12' separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
		  <el-breadcrumb-item>测试需求单</el-breadcrumb-item>
		  <el-breadcrumb-item>汇总报告</el-breadcrumb-item>	
		  <el-button size="mini">查看需求单其他选项</el-button>	  
		</el-breadcrumb>		
		<div class="container">
			<el-form ref="form" :model="report-form" label-width="100px">	
			  <el-table
			    :data="tableData"
			    style="width: 100%"
			    class="tb-blue">
			    <el-table-column
				    prop="date"
				    label="测试合并"
				    align="center">
				    <el-table-column
				      prop="pack"
				      label="测试包"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="version"
				      label="版本"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="upTime"
				      label="上传时间"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="endTime"
				      label="预期完结时间"
				      width="299">
				  	</el-table-column>
			  	</el-table-column>
			  </el-table>			
			</el-form>
		</div>
		<div class="container">
			测试说明：
		</div>
		<div class="container">
			<el-form ref="form" :model="report-form" label-width="100px">
			  <el-table
			    :data="tableStateData"
			    border
			    style="width: 100%"
			    class="tb-blue">
			    <el-table-column
			      prop="testLable"			      
			      label="测试项"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="Version"
			      label="状态"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="报告下载"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="上传时间"
			      width="299">
			  	</el-table-column>
			    </el-table-column>
			  </el-table>				
			</el-form>
		</div>			
	</div>
</template>

<style>
.ano-breadcrumb {
	margin-top: 20px;
	font-size: 15px; 
	text-align: center;
},
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
.tb-blue th{
	background-color: rgb(0, 184, 214) !important;
	color: #fff;
}
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          pack: 'ceshi',
          version: '1.2',
          upTime: '2017-02-02',
          endTime: '2017-03-03'
        },
        {
          pack: 'ceshi',
          version: '1.2',
          upTime: '2017-02-02',
          endTime: '2017-03-03'
        },{
          pack: 'ceshi',
          version: '1.2',
          upTime: '2017-02-02',
          endTime: '2017-03-03'
        }],
        tableStateData: [{
        	date: '弱网'	
        }, {
        	date: '协议'
        }, {
        	date: '客户端性能'
        }, {
        	date: '客户端安全'
        }]
      }
    }
  }
</script>