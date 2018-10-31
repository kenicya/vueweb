<template>
  <div class="press-block">
		<div class="container">
			<el-form ref="form" :model="form" label-width="200px">
				<el-row>
					<el-col :span="12" class="pressure-creat-form"> 
            <h2>弱网测试</h2>
            <p>XXXXXXXXXXXXXXXXXXXXXXXX<br>
              CCCCCCCCCCCCCCCCCCCCCCCCC<br>
            ppppppppppppppppppppppp</p>  
            <a class="press-btn" href="#/user">我要测试</a>          
          </el-col>    
          <el-col :span="12" class="pressure-creat-form"> 
            <el-carousel trigger="click" height="300px">
              <el-carousel-item v-for="item in 5" :key="item">
                <img :src="`/static/img/${item}.png`">
              </el-carousel-item>
            </el-carousel>      
          </el-col>                 				
				</el-row>			
			</el-form>
		</div>
   </div>			
</template>

<style>
  .press-block {
    margin-bottom: 5px;
    background-color: #3486e8;   
  }
	.pressure-creat-form {
    color: #fff;
    height: 434px;
    padding: 80px 0 80px 60px;
    background-color: #3486e8;
	}
  .pressure-select-form {
/*    margin: 15px 0;
    height: 400px;
    padding: 10px;
    border: 1px solid #ddd;
    border-left: none; */
  }
  .press-btn {
    min-width: 170px;
    padding: 12px 47px;
    font-size: 18px;
    text-align: center;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;    
  }
</style> 

<script>
  export default {
    data() {
      return {
        form: {}     
      }
    },
    methods: {
      onSubmit() {
      },           
    }
  }
</script>