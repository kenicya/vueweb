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
				    <el-col :span="6" >
					    <el-card class="user-list-card">
					    	<a @click="dialogFormVisible = true" class="add-btn"><i class="el-icon-plus"></i></a>
			    		</el-card>
			    	</el-col>

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
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
			<el-form ref="form" :model="form" label-width="100px">
				<el-row>
					<el-col :span="12" class="creat-form">
						<el-form-item label="测试文件:">
							<el-upload
							  class="upload-demo"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :on-preview="handlePreview"
							  :on-remove="handleRemove"
							  :before-remove="beforeRemove"
							  multiple
							  :limit="3"
							  :on-exceed="handleExceed"
							  :file-list="fileList">
							  <el-button size="small" type="primary">点击上传</el-button>
							</el-upload>
						</el-form-item>					
						<el-form-item label="选择历史包:">
							<el-select v-model="form.status" placeholder="全部">
								<el-option label="已出报告" value="a"></el-option>
								<el-option label="未出报告" value="b"></el-option>				       
							</el-select>					
						</el-form-item>
						<el-form-item label="版本:">
							<el-input v-model="input" placeholder="请输入内容"></el-input>			       
						</el-form-item>
						<el-form-item label="测试说明:">
							<el-input
							  type="textarea"
							  :rows="2"
							  placeholder="请输入内容"
							  v-model="textarea">
							</el-input>
						</el-form-item>
					</el-col>          
					<el-col :span="12" class="select-form">
						<el-form-item label="是否删档测试:">
							<template>
							  <el-radio-group v-model="form.delete">
							    <el-radio :label="1">是</el-radio>
							    <el-radio :label="0">否</el-radio>
							  </el-radio-group>
							</template>
						</el-form-item>
						<el-form-item label="是否收费:">
							<template>
							  <el-radio-group v-model="form.pay">
							    <el-radio :label="1">是</el-radio>
							    <el-radio :label="0">否</el-radio>
							  </el-radio-group>
							</template>
						</el-form-item>
					</el-col>					
				</el-row>			
			</el-form>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
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
        	status: 'shanghai'
        },
        currentDate: '',
        form: {
          status: 'shanghai',
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
           delete: '',
           pay: ''
        },
        dialogFormVisible: false
      };
    }
  }
</script>
