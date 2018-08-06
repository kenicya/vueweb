<template>
    <div class="container">
        <el-breadcrumb :pan='12' separator-class="el-icon-arrow-right" class="ano-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item>测试需求单</el-breadcrumb-item>
            <el-breadcrumb-item>汇总报告</el-breadcrumb-item>
            <el-button type="primary" size="mini" @click="showHisDialog1">查看需求单其他选项</el-button> 
            <div>
                <el-dialog title="需求单" :visible.sync="hisDialog">
                    <el-form ref="form" :model="hisData" label-width="200px">
                    <el-form-item label="是否付费:">
                      <template>
                        <el-radio-group v-model="hisData.isPay">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                      </template>                      
                    </el-form-item>
                    <el-form-item label="是否删档测试:">
                      <template>
                        <el-radio-group v-model="hisData.isDel">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                      </template>
                    </el-form-item>
                    <el-form-item label="平台:">
                      <template>
                        <el-radio-group v-model="hisData.plat">
                          <el-radio :label="1">安卓</el-radio>
                          <el-radio :label="0">苹果</el-radio>
                        </el-radio-group>
                      </template>
                    </el-form-item> 
                    <el-form-item label="项目资源是否完整:">
                      <template>
                        <el-radio-group v-model="hisData.isTrue">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                      </template>
                    </el-form-item>
                    <el-form-item label="功能无遗留性BUG:">
                      <template>
                        <el-radio-group v-model="hisData.isBug">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                      </template>
                    </el-form-item>
                    <el-form-item label="专门的测试环境:">
                      <template>
                        <el-radio-group v-model="hisData.isEnv">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                      </template>
                    </el-form-item>  
                    <el-form-item label="协议自测:">
                      <template>
                        <el-radio-group v-model="hisData.isSelf">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                      </template>
                    </el-form-item>                                                                                                                   
                    </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="hisDialog = fales">取 消</el-button>
                  </div>
                </el-dialog>                 
            </div>                      
        </el-breadcrumb>
        <div class="container">
            <el-form ref="form" :model="report-form" label-width="100px">
                <el-table :data="tableData" style="width: 100%" class="tb-blue">
                    <el-table-column prop="date" label="测试单号" align="center">
                        <el-table-column prop="pack" label="测试包" width="300">
                        </el-table-column>
                        <el-table-column prop="version" label="版本" width="300">
                        </el-table-column>
                        <el-table-column prop="upTime" label="上传时间" width="300">
                        </el-table-column>
                        <el-table-column prop="endTime" label="预期完结时间" width="299">
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
                <el-table :data="tableStateData" border style="width: 100%" class="tb-blue">
                    <el-table-column prop="name" label="测试项" width="300">
                    </el-table-column>
                    <el-table-column prop="state" label="状态" width="300">
                    </el-table-column>
                    <el-table-column prop="downReport" label="报告下载" width="300">
                        <template slot-scope="scope">
                        	<a :href="scope.row.downReport">下载报表</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="upday" label="上传时间" width="199">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button type="primary" @click="showImgDialog(scope.row)">查看</el-button>
                        </template>
                    </el-table-column>
                    </el-table-column>
                </el-table>
            </el-form>
            <div>
                <el-dialog title="报表预览" :visible.sync="imgDialog">
                	<div class="text-center img-dialog"><img :src="repotrtUrl"></div>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="imgDialog = false">确 定</el-button>
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
	}

	.report-form {
	    margin: 15px 0;
	    height: 500px;
	    padding: 10px;
	    padding-right: 100px;
	    border-right: 1px solid #ddd;
	}

	.report-select-form {
	    margin: 15px 0;
	    height: 500px;
	    padding: 10px;
	    padding-right: 100px;
	    border: 1px solid #ddd;
	}

	.tb-blue th {
	    background-color: rgb(0, 184, 214) !important;
	    color: #fff;
	}

	.img-dialog img{
		max-width: 100%;
	}

</style>
<script>
export default {
    data() {
        return {
            form:{},
            tableData: [],
            tableStateData: [],
            hisDialog: false,
            imgDialog: false,
            repotrtUrl: '',           
            report:'',
            hisData: {}
        }
    },    
    mounted() {
        this.id = window.localStorage.getItem('packid');
        this.loadMenu();
    },   
    methods: {        
        showImgDialog(row) {
        	this.repotrtUrl = row.repotrtUrl;
        	this.imgDialog = true;
        },
        showHisDialog1 () {
            let fd = new FormData()
            var self = this
            this.tableData = []
            this.hisDialog = true
            fd.append('packid', this.id);
            axios.defaults.crossDomain = true;
            axios.defaults.withCredentials = true;
            axios.post(window.dev.url + '/testinfo', fd)
                .then(function(res) {
                    if (res.code == 0) {
                        // self.currentProd = self.prodmsd
                        // self.tableData.push(res.packinfo)
                        self.hisData = res.testinfo
                    } else {
                        console.log(res.msg)
                    }
                });
        },
        async loadMenu() {
            let fd = new FormData()
            var self = this           
            //this.tableData = []
            fd.append('packid', this.id);
            axios.defaults.crossDomain = true;
            axios.defaults.withCredentials = true;
            axios.post(window.dev.url + '/packinfo', fd)
                .then(function(res) {
                    if (res.code == 0) {
                        // self.currentProd = self.prodmsd
                        self.tableData.push(res.packinfo)
                        self.tableStateData = res.testprj
                    } else {
                        console.log(res.msg)
                    }
                });
        }
    }
}

</script>
