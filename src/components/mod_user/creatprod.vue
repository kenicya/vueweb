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
				<el-button type="primary" class="new-btn">
          <a href="#/addprod" class="add-type">新建项目 </a>
        </el-button>
				</el-form-item>
			</el-form>
		</div>
			<div class="container">
				<el-row>
					<el-col :span="12" class="creat-form">
            <el-form ref="creat-form" :model="form" label-width="80px">
            <el-form-item label="测试文件:"></el-form-item>           
            </el-form>
					</el-col>          
					<el-col :span="12" class="select-form">
  					<div>
             bbbbbbb 
            </div>
					</el-col>					
				</el-row>			
			</div>			
	</div>
</template>

<style>
	.ano-breadcrumb {`
		margin: 15px 0;
	}
	.creat-block {
		margin-left: 400px;
	}
	.creat-form {
    margin: 15px 0;
    background: #feee;
    height: 300px;
		padding: 10px;
	}
  .select-form {
    margin: 15px 0;
    background: #fefe;
    height: 300px;
    padding: 10px;   
  }
  .add-type {
    text-decoration: none;
    color: #fff;
  }
  .creat-list {
    width: 100px;
  }
  .upload-demo {
    width: 100px;
    margin-left: 20px;
  }
  .history-list {
    width: 150px;

  }
</style> 


<script>
  export default {
    data() {
      return {
        form: {
          status: 'shanghai',
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
      }
    },
    methods: {
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
    }
  }
</script>