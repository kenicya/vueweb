<template>
    <div class="container">
      <el-row>
        <el-col :span="10" class="robot-form">
          <el-form ref="form" :model="form" label-width="100px" >
            <el-form-item label="Process:">
                <el-input v-model="form.process" placeholder="机器人启动的进程"></el-input>
            </el-form-item>                              
            <el-form-item label="Time:">
              <el-input v-model="form.time" placeholder="运行时间，时间到则退出"></el-input>
            </el-form-item> 
            <el-form-item label="Totalnum:">
              <el-input v-model="form.totalnum" placeholder="机器人登录总数量"></el-input>
            </el-form-item> 
            <el-form-item label="Glaptime:">
              <el-input v-model="form.glaptime" placeholder="登录间隔，每批机器人登录的间隔，ms"></el-input>
            </el-form-item>  
            <el-form-item label="Num:">
              <el-input v-model="form.num" placeholder="每批机器人登录的数量"></el-input>
            </el-form-item> 
            <el-form-item label="Account:">
              <el-input v-model="form.account" placeholder="每批机器人登录的数量"></el-input>
            </el-form-item> 
            <el-form-item label="Ip:">
              <el-input v-model="form.ip" placeholder="机器人服务器IP(登录服务器IP)"></el-input>
            </el-form-item> 
            <el-form-item label="Port:">
              <el-input v-model="form.port" placeholder="机器人服务器端口号(登录服务器端口号)"></el-input>
            </el-form-item> 
            <el-form-item label="ServerID:">
              <el-input v-model="form.serverID" placeholder="服务器的ID"></el-input>
            </el-form-item> 
            <el-form-item label="LogPrintCfg:">
              <el-input v-model="form.LogPrintCfg" placeholder="日志控制输出标志：控制台日志 1   Trace 2  Error 4"></el-input>
            </el-form-item> 
            <el-form-item label="LuZhiCasePath:">
              <el-input v-model="form.LuZhiCasePath" placeholder="录制case的相对路径"></el-input>
            </el-form-item> 
            <el-button type="primary" @click="onSubmit" class="set-btn">开始登陆</el-button>                            
          </el-form>            
        </el-col>
      </el-row>  
  </div>
</template>


<style>
.robot-form {
    margin-top: 200px;
    text-align: center;  
}
</style>

<script>
  export default {
    data() {
      return {
        form: {
          process: '',
          time: '',
          totalnum: '',
          glaptime: '',
          num: '',
          account: '',
          ip: '',
          port: '',
          serverID: '',
          LogPrintCfg: '',
          LuZhiCasePath: ''
        }
      }
    },
    methods: {
      uploadSectionFile(file){
        this.file = file
        //debugger;
      },
      onSubmit() {
          var fd = new FormData()
          const name = this.form.name 
          const desc = this.form.desc
          let upfile = this.file.file
          fd.append('name',name)
          fd.append('desc',desc)
          fd.append('upfile', upfile)
          axios.post(window.dev.url + "/api" + '/addprj',fd)
          .then(function(res){
              if (res.code == 0 ) {
                window.location.hash="/user"

              } else {
                console.log(res.msg)
              }
          })
          .catch(function(res){
               console.log(res)
          });
      },   
    }
  }

</script>