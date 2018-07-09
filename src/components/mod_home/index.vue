<template>
  <div class="block">
    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img :src="`/static/img/${item}.png`">
      </el-carousel-item>
    </el-carousel>
    <div>
      <h1>hhhhhhhh</h1>
      <h2>hhhhhhh</h2>
      <p>hhhhhhhhhhhhhhhhhhhhhh</p>
      <ul>
        <li>列表</li>
        <li>列表</li>
        <li>列表 <a href="">链接</a></li>
      </ul> 
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
     background-color: #4969e1;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #4969e1;
  }
</style>