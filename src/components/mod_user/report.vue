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
				    label="测试单号"
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
			<span>测试说明：</span>
		</div>
		<div class="container">
			<el-form ref="form" :model="report-form" label-width="100px">
			  <el-table
			    :data="tableStateData"
			    border
			    style="width: 100%"
			    class="tb-blue">
			    <el-table-column
			      prop="name"			      
			      label="测试项"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="state"
			      label="状态"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="downReport"
			      label="报告下载"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="upday"
			      label="上传时间"
			      width="199">
			  	</el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="100">
			      <template slot-scope="scope">
					  <el-button type="primary" @click="dialogFormVisible = true">查看</el-button>					  
			      </template>
			    </el-table-column>			  	
			    </el-table-column>			
			  </el-table>				
			</el-form>
			<div>
				<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
					  <el-form :model="form" :data="tableStateData">	
					  	<img src="repotrtUrl" alt="">			  	
					  </el-form>
					  <div slot="footer" class="dialog-footer">
					    <el-button @click="dialogFormVisible = false">取 消</el-button>
					    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
					  </div>
					</el-dialog>				
			</div>
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
        tableData: [],
        tableStateData: [],
        dialogTableVisible: false,
        dialogFormVisible: false
      }
    },
    mounted() {
        this.id = window.localStorage.getItem('packid');
        console.log("this is id",this.id)
        this.loadMenu();
    },    
    methods: {
    	  handleClick(row) {
    	  	console.log("this is row",row.repotrtUrl)
    	  },
      	  async loadMenu () { 
      	  let fd = new FormData()
      	  var self = this
      	  this.tableData = []
      	  fd.append('packid',this.id);
      	  axios.defaults.crossDomain = true;
          axios.defaults.withCredentials  = true;	         
          axios.post('http://192.168.131.79:9000/packinfo', fd)
          .then(function(res){
              if (res.code == 0 ) { 
                // self.currentProd = self.prodmsd
                self.tableData.push(res.packinfo)
                self.tableStateData = res.testprj
                //window.location.hash = '#/report'
              } else {
                console.log(res.msg)
              }
          });         
      }
    }
  }
</script>