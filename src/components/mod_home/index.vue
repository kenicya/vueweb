<template>
  <div class="block">
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="item in 5" :key="item">
        <img :src="`/static/img/${item}.png`">
      </el-carousel-item>
    </el-carousel>
    <div class="cont_title" >
        <h3>了解我们的热门产品</h3>
    </div>

    <div class="container mod-about">
        <img src="/static/img/6.png" alt="">
        <img src="/static/img/7.png" alt="">
        <img src="/static/img/8.png" alt="">
        <img src="/static/img/9.png" alt="">
    </div> 
    <div class="container">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 10" :key="item">
          <img :src="`/static/img/${item}.png`">
        </el-carousel-item>
      </el-carousel>                        
    </div>
  </div>               
  </div> 
</template>


<style>
  .el-carousel__item {
    text-align: center;
  }
  .el-carousel__item img {
    height: 300px;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #020001;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #020001;
  }
  .mod-about {
    margin-top: 60px;
  }
</style>