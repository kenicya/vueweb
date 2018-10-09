<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/admin' }">管理员中心</el-breadcrumb-item>
		  <el-breadcrumb-item>查看测试需求</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="container">
			<el-form ref="form" :model="tableData" label-width="200px">
				<el-row>
					<el-col :span="12" class="creat-form">   
			            <el-form-item label="项目名称:">  
			            	<span>{{tableData.Name}}</span>        
			            </el-form-item>	
			            <el-form-item label="测试文件:"> 
							  <el-input v-model="tableData.DownUrl"></el-input>	                     
			            </el-form-item>
			            <el-form-item label="测试附件:"> 
							  <el-button size="small" type="primary"><a :href="tableData.DownExtUrl">下载测试附件</a></el-button>			            		                     
			            </el-form-item>			            
			            <el-form-item label="版本:">  
			            	<span>{{tableData.Version}}</span>         
			            </el-form-item>
			            <el-form-item label="测试说明:"> 
			            	<span>{{tableData.Desc}}</span>          
			            </el-form-item>	
			            <el-form-item label="上传时间:"> 
			            	<span>{{tableData.CreatedAt}}</span>          
			            </el-form-item>	
			            <el-form-item label="预期完成时间:">   
			            	<span>{{tableData.FinishTime}}</span>         
			            </el-form-item>	
		                <el-table :data="testType" border style="width: 100%" class="tb-blud">
		                    <el-table-column prop="name" label="测试项" width="200">
		                    </el-table-column>
		                    <el-table-column prop="state" label="状态" width="100">
		                    	<template slot-scope="scope">
		                    		<span v-if="state==1">上传</span>
		                    		<span v-else>未上传</span>
		                    	</template>
		                    </el-table-column>
		                    <el-table-column fixed="right" label="操作" width="110">
		                        <template slot-scope="scope">
		                            <el-button type="primary" @click="selectReport(scope.row)">测试报告</el-button>
		                        </template>
		                    </el-table-column>
		                </el-table>                          
          			</el-col>  
          			<el-col :span="12" class="need-form">   
			            <el-form-item label="是否删档测试:">  
			            	<span v-if="tableData.IsDelData==true">是</span>   
			            	<span v-else>否</span>     
			            </el-form-item>	
			            <el-form-item label="是否收费:">  
			            	<span v-if="tableData.IsPay==true">是</span>   
			            	<span v-else>否</span>        
			            </el-form-item>
			            <el-form-item label="平台:"> 
			            	<span v-if="tableData.Platform==0">苹果</span>   
			            	<span v-else>安卓</span>         
			            </el-form-item>	
			            <el-form-item label="项目资源是否正式资源:"> 
			            	<span v-if="tableData.IsFromal==true">是</span>   
			            	<span v-else>否</span>          
			            </el-form-item>	
			            <el-form-item label="功能无遗留阻滞BUG:">  
			            	<span v-if="tableData.IsBug==true">是</span>   
			            	<span v-else>否</span>        
			            </el-form-item>	    
			            <el-form-item label="专门的测试环境:">  
			            	<span v-if="tableData.IsPerformance==true">是</span>   
			            	<span v-else>否</span>         
			            </el-form-item>	
			            <el-form-item label="协议自测:">  
			            	<span v-if="tableData.IsSelf==true">是</span>   
			            	<span v-else>否</span>          
			            </el-form-item>				            			                  			                          
          			</el-col>        					
				</el-row>			
			</el-form>
<!-- 			<div class="container">
				<el-col :span="24" class="bottom-form">
					<el-button type="primary" @click="onSubmit" class="new-btn">下一步</el-button>
				</el-col>			
			</div>	 -->			
		</div>
	</div>
</template>

<style scoped>
.creat-form {
	color: #252323;
    margin: 15px 0;
    height: 780px;
	padding: 10px;
	padding-right: 100px;
    border: 1px solid #ddd;	
}
.need-form {
	color: #252323;
    margin: 15px 0;
    height: 780px;
	padding: 10px;
	padding-right: 100px;
    border: 1px solid #ddd;		
}
.ano-breadcrumb {
	color: #ddd;
}
.tb-blud th {
    background-color: rgb(0, 184, 214) !important;
    color: #fff;	
}
</style>

<script>
  export default {
    data() {
      return {
        form: '',
        tableData: {} ,
        testType: [], 
        state: '',
        reportId: ''     
    }
    },
    mounted() {
        this.id = window.localStorage.getItem('packid');
        this.loadMenu();    	
    },
    methods: { 
    	selectReport(row) {
    		//this.reportId = row.typeId
    		this.reportId = 3
    		window.localStorage.setItem('typeId',this.reportId) 
    		window.localStorage.setItem('packid',this.id)
    		//0 协议 1 弱网 2 安全 3 性能  
    		if(this.reportId == 0) {
    			this.$router.push({
    			path: '/home',
    			params:{}
    		})
    		}		  		
    		else if(this.reportId == 1) {
    			console.log("this is 1");
    		}
    		else if(this.reportId == 2) {
    			console.log("this is 2");
    		}
    		else if(this.reportId == 3) {
    		 	console.log("this is 3")
    			this.$router.push({
    			path: '/clientReport',
    			params:{}
    		})	
    		}
    	},
	    async loadMenu() {
	        let fd = new FormData()
	        var self = this           
	        fd.append('packid', this.id);
	        axios.post(window.dev.url + '/allinfo', fd)
	            .then(function(res) {
	                if (res.code == 0) {
	                    self.tableData = res.list
	                    self.testType = res.type
	                } else {
	                    console.log(res.msg)
	                }
	            });
	    }            
    },   
    onSubmit() {

    }
  }
</script>