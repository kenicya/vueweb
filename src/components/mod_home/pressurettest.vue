<template>
		<div class="container">
			<el-form ref="form" :model="oldPack" label-width="200px">
				<el-row>
					<el-col :span="12" class="creat-form">             
          </el-col>          
<!--   				<el-col :span="12" class="select-form">             
  				</el-col>	 -->				
				</el-row>			
			</el-form>
<!-- 			<div class="container">
				<el-col :span="24" class="bottom-form">
					<el-button type="primary" @click="onSubmit" class="new-btn">下一步</el-button>
				</el-col>			
			</div> -->
		</div>			
</template>

<style>h

	.creat-block {
		margin-left: 400px;
	}
	.creat-form {
    margin: 15px 0;
    height: 400px;
	padding: 10px;
	padding-right: 100px;
    border: 1px solid #ddd;
	}
  .select-form {
    margin: 15px 0;
    height: 400px;
    padding: 10px;
    border: 1px solid #ddd;
    border-left: none; 
  }
  .add-type {
    text-decoration: none;
    color: #fff;
  }
  .creat-list {
    width: 200px;
  }
  .upload-demo {
    width: 100px;
    margin-left: 20px;
  }
  .history-list {
    width: 150px;

  }
  .next-type {
  	text-decoration: none;
  	color: #fee;
  }
  .bottom-form {
  	margin-left: 560px;
  }
  .select-list {
  	width: 200px;
  }

</style> 