<template>
	<div class="container">
	  	<el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
		  <el-breadcrumb-item :to="{ path: '/adminReport' }">首页</el-breadcrumb-item>
		  <el-breadcrumb-item><a href="#/clientReport">前端性能测试</a></el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
		</el-container>				
	    <div class="container">
	        <el-form ref="form" :model="pckinfo" label-width="100px">
	            <el-table :data="pckinfo" style="width: 100%" class="ar-tb-blue">
	                <el-table-column prop="date" label="测试单号" align="center">
	                    <el-table-column prop="prjname" label="项目名称" width="300">
	                    </el-table-column>
	                    <el-table-column prop="version" label="版本" width="300">
	                    </el-table-column>
	                    <el-table-column prop="uploadtime" label="上传时间" width="300">
	                    </el-table-column>
	                    <el-table-column prop="fintime" label="预期完结时间" width="299">
	                    </el-table-column>
	                </el-table-column>
	            </el-table>
	        </el-form>
	    <div>
	    	<el-form-item label="报告是否通过:">
              <template>
                <el-radio-group v-model="form.isenv">
                  <el-radio :label="1">通过</el-radio>
                  <el-radio :label="0">不通过</el-radio>
                </el-radio-group>
              </template>
            </el-form-item>
	    </div>
		<div class="el-table el-table--border">	
			<el-form ref="form" :model="form" label-width="100px">
		        <table class="el-table__body el-table__header" width="100%" cellspacing="0" cellpadding="0" border="0" >
		            <tr>
		                <th>机型</th>
		                <th>名称</th>
		                <th>系统</th>
		                <th>CUP</th>
		                <th>内核</th>
		                <th>分辨率</th>
		            </tr>
		            <tr>
		                <td>高端机型</td>
		                <td><el-input v-model="hName" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="hSys" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="hKernal" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="hMem" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="hResolution" placeholder="请输入名称"></el-input></td>
		            </tr>
		            <tr>
		                <td>中端机型</td>
		                <td><el-input v-model="mName" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="mSys" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="mKernal" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="mMem" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="mResolution" placeholder="请输入名称"></el-input></td>
		            </tr>
		            <tr>
		                <td>低端机型</td>
		                <td><el-input v-model="lName" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="lSys" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="lKernal" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="lMem" placeholder="请输入名称"></el-input></td>
		                <td><el-input v-model="lResolution" placeholder="请输入名称"></el-input></td>
		            </tr>	            	            
		        </table>
	    	</el-form>
	    </div>
		<div class="el-table el-table--border">
	        <table class="" width="100%" cellspacing="0" cellpadding="5px" border="0" >
	            <tr>
	                <th>机型</th>
	                <th>CPU最高温度(°C)</th>
	                <th>电池最高温度(°C)</th>
	            </tr>
	            <tr>
	                <td>高端机型</td>
	                <td><el-input v-model="name" placeholder="请输入名称"></el-input></td>
	                <td><el-input v-model="system" placeholder="请输入名称"></el-input></td>
	            </tr>
	            <tr>
	                <td>中端机型</td>
	                <td><el-input v-model="name" placeholder="请输入名称"></el-input></td>
	                <td><el-input v-model="system" placeholder="请输入名称"></el-input></td>
	            </tr>
	            <tr>
	                <td>低端机型</td>
	                <td><el-input v-model="name" placeholder="请输入名称"></el-input></td>
	                <td><el-input v-model="system" placeholder="请输入名称"></el-input></td>
	            </tr>	            	            
	        </table></div>	 
		<div class="el-table el-table--border">
	        <table class="" width="100%" cellspacing="0" cellpadding="0" border="0" >
	            <tr>
	                <th>机型</th>
	                <th>文件上传</th>
	            </tr>
	            <tr>
	                <td>高端机型</td>
	                <td><el-input v-model="name" placeholder="请输入名称"></el-input></td>
	            </tr>
	            <tr>
	                <td>中端机型</td>
	                <td><el-input v-model="name" placeholder="请输入名称"></el-input></td>
	            </tr>
	            <tr>
	                <td>低端机型</td>
	                <td><el-input v-model="name" placeholder="请输入名称"></el-input></td>
	            </tr>	            	            
	        </table></div>	               
	    </div>   	
	    <div class="container">
				<el-col :span="24" class="bottom-form">
					<el-button type="primary" @click="onSubmit" class="new-btn">下一步</el-button>
				</el-col>			
		</div>
    </div>	   	
</template>

<style>
	.ar-tb-blue th {
	    background-color: rgb(0, 184, 214) !important;
	    color: #fff;
	    text-align: center;
	}
	.el-table__header {
		text-align: center;
	}
</style>

<script>
  export default {
    data() {
      return {
      	pckinfo: {},
      	tableData: '',
      	pckinfo: [],
      	form: {}
      }
    },
    mounted() {
    	this.id = window.localStorage.getItem('packid');
		this.loadMenu();
    },
    methods: {
      async loadMenu () { 

	      var fd = new FormData()  
	      var self = this
	      fd.append('packid',this.id)       
          axios.post(window.dev.url + '/reportpackinfo',fd)
          .then(function(res){
              if (res.code == 0 ) { 
                //self.pckinfo = res.info 
                self.pckinfo.push(res.info)
                //console.log("this is list",info) 
                //self.prodmsd = res.list                              
              } else {
                console.log(res.msg)
              }

          }
          );         
      },
      onSubmit() {
        var fd = new FormData()

        // const type = this.type     
        // const name = this.name
        // const sys = this.sys
        // const kernal = this.kernal
        // const mem = this.mem
        // const resolution = this.resolution
        // const cputemper = this.cputemper
        // const powertemper = this.powertemper
        // const reportpath = this.reportpath  
        // const conclusion = this.conclusion   
        // const detailReport = this.detailReport
        // const desc = this.desc 
        // 高端机型数据
        const hName = this.hName
        const hSys = this.hSys
        const hKernal = this.hKernal
        const hMem = this.hMem
        const hResolution = this.hResolution
        var hParam = new Map()
        hParam.set('type',0)
        hParam.set('name',hName)
        hParam.set('sys',hSys)
        hParam.set('kernal',hKernal)
        hParam.set('mem',hMem)
        //中端机型数据
        const mName = this.mName
        const mSys = this.mSys
        const mKernal = this.mKernal
        const mMem = this.mMem
        const mResolution = this.mResolution
        var mParam = new Map()
        mParam.set('type',1)
        mParam.set('name',mName)
        mParam.set('sys',mSys)
        mParam.set('kernal',mKernal)
        mParam.set('mem',mMem)        
        //低端机型数据
        const lName = this.lName
        const lSys = this.lSys
        const lKernal = this.lKernal
        const lMem = this.lMem
        const lResolution = this.lResolution
        var lParam = new Map()
        lParam.set('type',2)
        lParam.set('name',lName)
        lParam.set('sys',lSys)
        lParam.set('kernal',lKernal)
        lParam.set('mem',lMem)

        hParam.set('resolution',hResolution)
        var array = new Array(hParam)
        var mData = JSON.stringify( array )
        fd.append('content',mData) 
      }     
	 // handleCurrentChange(row, event, column) {
	 //        //console.log(row, event, column, event.currentTarget)
	 //    },
	 //    handleEdit(index, row) {
	 //       // console.log(index, row);
	 //    },
    }
  }
</script>
