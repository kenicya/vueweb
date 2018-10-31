<template>
    <div class="container">
        <el-breadcrumb :pan='12' separator-class="el-icon-arrow-right" class="ano-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/user' }">用户中心</el-breadcrumb-item>
            <el-breadcrumb-item>汇总报告</el-breadcrumb-item>
            <el-button type="primary" size="mini" @click="showHisDialog1">查看需求单其他选项</el-button> 
<!--             <div>
                <el-dialog title="需求单" :visible.sync="hisDialog">
                    <el-form ref="form" model="hisData" label-width="200px">
                    <el-form-item label="是否付费:">
                      <template>
                            <span v-if="hisData.isPay==true">是</span>
                            <span v-else>否</span>
                      </template>                      
                    </el-form-item>
                    <el-form-item label="是否删档测试:">
                      <template>
                          <span v-if="hisData.isDel==true">是</span>
                          <span v-else>否</span>
                      </template>
                    </el-form-item>
                    <el-form-item label="平台:">
                      <template>
                          <span v-if="hisData.plat==1">安卓</span>
                          <span v-else>苹果</span>
                      </template>
                    </el-form-item> 
                    <el-form-item label="项目资源是否完整:">
                      <template>
                          <span v-if="hisData.isTrue==true">是</span>
                          <span v-else>否</span>
                      </template>
                    </el-form-item>
                    <el-form-item label="功能无遗留性BUG:">
                      <template>
                          <span v-if="hisData.isBug==true">是</span>
                          <span v-else>否</span>
                      </template>
                    </el-form-item>
                    <el-form-item label="专门的测试环境:">
                      <template>
                          <span v-if="hisData.isEnv==true">是</span>
                          <span v-else>否</span>
                      </template>
                    </el-form-item>  
                    <el-form-item label="协议自测:">
                      <template>
                          <span v-if="hisData.isSelf==true">是</span>
                          <span v-else>否</span>
                      </template>
                    </el-form-item>                                                                                                                   
                    </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="hisDialog = fales">返 回</el-button>
                  </div>
                </el-dialog>                 
            </div> -->                      
        </el-breadcrumb>
        <div class="container">
            <el-form ref="form" label-width="100px">
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
            <el-form ref="form" label-width="100px">
                <el-table :data="tableStateData" border style="width: 100%" class="tb-blue">
                    <el-table-column prop="name" label="测试项" width="300">
                    </el-table-column>
                    <el-table-column prop="state" label="状态" width="300">
                        <template slot-scope="scope">
                            <span v-if="state===0">不通过</span>
                            <span v-else-if="state===1">通过</span>
                            <span v-else="state===2">未出报告</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="downReport" label="报告下载" width="300">
                        <template slot-scope="scope">
                            <span v-if="scope.row.downReport==''">报表未生成</span>
                            <span v-else><a :href="scope.row.downReport">下载报表</a></span>                      	
                        </template>
                    </el-table-column>
                    <el-table-column prop="upday" label="上传时间" width="199">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <span v-if="scope.row.downReport==''">暂无</span>
                            <span v-else>
                                <el-button type="primary" @click="showImgDialog(scope.row)">查看</el-button>
                            </span>                           
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
        <!-- 选择对比 -->
        <div class="container">
            <el-row>                
                <el-col :span="12"> 
                    <h4>测试项：
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                    </el-select></h4>               
                </el-col>                
                <el-col :span="12">
                    <h4>历史包对比：
                    <el-select v-model="value1" placeholder="请选择">
                        <el-option
                          v-for="item in options1"
                          :key="item.value1"
                          :label="item.label"
                          :value="item.value1">
                        </el-option>
                    </el-select>                    
                    </h4>                
                </el-col>
            </el-row>            
        </div>
        <!-- 报告主体 -->
        <div class="container">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="结论说明:">
                <el-input 
                    class="inputType"
                    type="textarea"
                    v-model="form.name"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    :disabled="true"></el-input>
                </el-form-item> 
            </el-form>                       
        </div> 
        <div class="container">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="场景说明:">
                <el-input 
                    class="inputType"
                    type="textarea"
                    v-model="form.name"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    :disabled="true"></el-input>
                </el-form-item> 
            </el-form>                       
        </div>         
        <el-form ref="form" :model="form" :rules="formRule">
            <h4>机型数据</h4>
            <div class="el-table el-table--border">
                <table class="el-table__body el-table__header" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <th class="cell">机型</th>
                        <th class="cell">名称</th>
                        <th class="cell">系统</th>
                        <th class="cell">CUP</th>
                        <th class="cell">内核</th>
                        <th class="cell">分辨率</th>
                    </tr>
                    <tr>
                        <td class="cell">高端机型</td>
                        <td class="cell">
                            <el-form-item prop="machHigh.name" class="mb0">
                            <el-input v-model="form.machHigh.name"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machHigh.sys" class="mb0">
                            <el-input v-model="form.machHigh.sys"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machHigh.kernal" class="mb0">
                            <el-input v-model="form.machHigh.kernal"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machHigh.mem" class="mb0">
                            <el-input v-model="form.machHigh.mem"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machHigh.resolution" class="mb0">
                            <el-input v-model="form.machHigh.resolution"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                
                    </tr>
                    <tr>
                        <td class="cell">中端机型</td>
                        <td class="cell">
                            <el-form-item prop="machMidd.name" class="mb0">
                            <el-input v-model="form.machMidd.name"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machMidd.sys" class="mb0">
                            <el-input v-model="form.machMidd.sys"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machMidd.kernal" class="mb0">
                            <el-input v-model="form.machMidd.kernal"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machMidd.mem" class="mb0">
                            <el-input v-model="form.machMidd.mem"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machMidd.resolution" class="mb0">
                            <el-input v-model="form.machMidd.resolution"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                
                    </tr>
                    <tr>
                        <td class="cell">低端机型</td>
                        <td class="cell">
                            <el-form-item prop="machLow.name" class="mb0">
                            <el-input v-model="form.machLow.name"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machLow.sys" class="mb0">
                            <el-input v-model="form.machLow.sys"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machLow.kernal" class="mb0">
                            <el-input v-model="form.machLow.kernal"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machLow.mem" class="mb0">
                            <el-input v-model="form.machLow.mem"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machLow.resolution" class="mb0">
                            <el-input v-model="form.machLow.resolution"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                
                    </tr>                                        
                </table>
            </div> 
        </el-form> 
        <el-form ref="form" :model="form" :rules="testRule">
            <h4>测试数据</h4>
            <div class="el-table el-table--border">
                <table class="el-table__body el-table__header" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <th class="cell">机型</th>
                        <th class="cell">平均FPS</br> ><font color="red">18</font>帧(低端机)</br> ><font color="red">25</font>帧(中端机)</br> ><font color="red">25</font>帧(高端机)</th>
                        <th class="cell1">(FPS><font color="red">18</font>帧(低端机)比率)</br>(FPS><font color="red">25</font>帧(中端机)比率)</br>(FPS><font color="red">25</font>帧(高端机)比率)</br>>90%</th>
                        <th class="cell">PSS峰值(MB)</br><<font color="red">650</font>MB(高端机)</br><<font color="red">550</font>MB(中端机)</br><<font color="red">450</font>MB(低端机)</br></th>
                        <th class="cell">CPU<<font color="red">60</font>%比率</br>CPU<<font color="red">60</font>%比率</br>CPU<<font color="red">60</font>%比率</br>(>90%)</th>
                        <th class="cell">十分钟平均流量</br><<font color="red">3072</font>(KB)</th>
                        <th class="cell">CPU平均温度(℃)</th>
                        <th class="cell">电池平均温度(℃)</th>
                    </tr>
                    <tr>
                        <td class="cell">高端机型</td> 
                        <td class="cell">
                            <el-form-item prop="machHigh.cpu" class="mb0">
                            <el-input v-model="form.machHigh.cpu"  :disabled="true"></el-input></el-form-item>
                        </td>   
                        <td class="cell">
                            <el-form-item prop="machHigh.fps" class="mb0">
                            <el-input v-model="form.machHigh.fps"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machHigh.fpspercent" class="mb0">
                            <el-input v-model="form.machHigh.fpspercent"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machHigh.net" class="mb0">
                            <el-input v-model="form.machHigh.net"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                                                                                            <td class="cell">
                            <el-form-item prop="machHigh.pssmax" class="mb0">
                            <el-input v-model="form.machHigh.pssmax"  :disabled="true"></el-input></el-form-item>
                        </td> 
                        <td class="cell">
                            <el-form-item prop="machHigh.temperature" class="mb0">
                            <el-input v-model="form.machHigh.temperature"  :disabled="true"></el-input></el-form-item>
                        </td>  
                        <td class="cell">
                            <el-form-item prop="machHigh.power" class="mb0">
                            <el-input v-model="form.machHigh.power"  :disabled="true"></el-input></el-form-item>
                        </td>                                                               
                    </tr>
                    <tr>
                        <td class="cell">中端机型</td> 
                        <td class="cell">
                            <el-form-item prop="machMidd.cpu" class="mb0">
                            <el-input v-model="form.machMidd.cpu"  :disabled="true"></el-input></el-form-item>
                        </td>   
                        <td class="cell">
                            <el-form-item prop="machMidd.fps" class="mb0">
                            <el-input v-model="form.machMidd.fps"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machMidd.fpspercent" class="mb0">
                            <el-input v-model="form.machMidd.fpspercent"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machMidd.net" class="mb0">
                            <el-input v-model="form.machMidd.net"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                                                                                            <td class="cell">
                            <el-form-item prop="machMidd.pssmax" class="mb0">
                            <el-input v-model="form.machMidd.pssmax"  :disabled="true"></el-input></el-form-item>
                        </td> 
                        <td class="cell">
                            <el-form-item prop="machMidd.temperature" class="mb0">
                            <el-input v-model="form.machMidd.temperature"  :disabled="true"></el-input></el-form-item>
                        </td>  
                        <td class="cell">
                            <el-form-item prop="machMidd.power" class="mb0">
                            <el-input v-model="form.machMidd.power"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                                     
                    </tr>
                    <tr>
                        <td class="cell">低端机型</td> 
                        <td class="cell">
                            <el-form-item prop="machLow.cpu" class="mb0">
                            <el-input v-model="form.machLow.cpu"  :disabled="true"></el-input></el-form-item>
                        </td>   
                        <td class="cell">
                            <el-form-item prop="machLow.fps" class="mb0">
                            <el-input v-model="form.machLow.fps"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machLow.fpspercent" class="mb0">
                            <el-input v-model="form.machLow.fpspercent"  :disabled="true"></el-input></el-form-item>
                        </td>
                        <td class="cell">
                            <el-form-item prop="machLow.net" class="mb0">
                            <el-input v-model="form.machLow.net"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                                                                                            <td class="cell">
                            <el-form-item prop="machLow.pssmax" class="mb0">
                            <el-input v-model="form.machLow.pssmax"  :disabled="true"></el-input></el-form-item>
                        </td> 
                        <td class="cell">
                            <el-form-item prop="machLow.temperature" class="mb0">
                            <el-input v-model="form.machLow.temperature"  :disabled="true"></el-input></el-form-item>
                        </td>  
                        <td class="cell">
                            <el-form-item prop="machLow.power" class="mb0">
                            <el-input v-model="form.machLow.power"  :disabled="true"></el-input></el-form-item>
                        </td>                                                                                                                       
                    </tr>                                        
                </table>
            </div>            
        </el-form>
            <h4>测试数据表说明：</h4>
            <h5>1、测试结果符合标准值显示绿色，不符合标准值显示红色，温度无标准值显示黑色，显示小数点后2位。</br>2、颜色判断公式(高中低都一样)</br></br>假定 平均FPS的标准值为A，平均FPS>A 显示绿色；平均FPS<=A 显示红色。
            </br>假定 FPS比率标准值为B（平均FPS>平均FPS 的 时间）除 所有时间 >=B 显示绿色、< B 显示红色</br>假定 PSS峰值标准值为C，PSS峰值< C 显示绿色；PSS峰值>=C 显示红色。</br>假定 CPU占用率标准值为D，（CPU占用率>标准值的时间） 除 所有时间 *100 >=90% 显示绿色；< 90% 显示红色。</br>假定 十分钟平均流量标准值为E，十分钟平均流量< E 显示绿色；>=E 显示红色。
            </h5>  
        <div class="container">
            <el-row>                
                <el-col :span="12"> 
                    <h4>测试项：
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                          v-for="item in optionMachType"
                          :key="item.value2"
                          :label="item.label"
                          :value="item.value2">
                        </el-option>
                    </el-select></h4>               
                </el-col>                
                <el-col :span="12">
                    <h4>历史包对比：
                    <el-select v-model="value3" placeholder="请选择">
                        <el-option
                          v-for="item in dataType"
                          :key="item.value3"
                          :label="item.label"
                          :value="item.value3">
                        </el-option>
                    </el-select>                    
                    </h4>                
                </el-col>
            </el-row>
            <div class="container">
                <ui-echart :options="optionsData"
                             :autoDestroy="false"
                             :autoRefresh="true"
                             ref="chart"
                             :defaultHeight="300"
                             id="bar"
                             class="test"></ui-echart>
                <button @click="loadChart">重新加载</button>
                <button @click="reload">请求后台数据重载</button>
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
    .inputType{
        border: 1px solid #212123;        
    }
    .mb0{
        margin-bottom: 0;
    }  
    .number-mb{

    } 
    .cell1{
        width: 170px;        
    } 
</style>

<script>
export default {
    data() {
        return {
            form:{
                machHigh: { //高端机型
                    type: 0
                },
                machMidd: { //中端机型
                    type: 1
                },
                machLow: { //低端机型
                    type: 2
                }                
            },
            formRule: {
                machHigh: {
                    name: '',
                    sys: '',
                    kernal: '',
                    mem: '',
                    resolution: ''
                },
                machMidd: {
                    name: '',
                    sys: '',
                    kernal: '',
                    mem: '',
                    resolution: ''                    
                },
                machLow: {
                    name: '',
                    sys: '',
                    kernal: '',
                    mem: '',
                    resolution: ''                    
                }    
            },
            testRule: {
                machHigh: {
                    cpu: '',
                    fps: '',
                    fpspercent: '',
                    net: '',
                    pssmax: ''
                },
                machMidd: {
                    cpu: '',
                    fps: '',
                    fpspercent: '',
                    net: '',
                    pssmax: ''                    
                },
                machLow: {
                    cpu: '',
                    fps: '',
                    fpspercent: '',
                    net: '',
                    pssmax: ''                    
                }                  
            },
            tableData: [],
            tableStateData: [],
            hisDialog: false,
            imgDialog: false,
            repotrtUrl: '',           
            report:'',
            hisData: {},
            state: '',
            options: [{
                value: '0',
                label: '弱网报告'
            }, {
                value: '1',
                label: '协议报告'
            }, {
                value: '2',
                label: '安全报告'
            }, {
                value: '3',
                label: '性能报告'
            }],
            value: '',
            options1: [{
                value1: '0',
                label: '弱网报告'
            }, {
                value1: '1',
                label: '协议报告'
            }, {
                value1: '2',
                label: '安全报告'
            }, {
                value1: '3',
                label: '性能报告'
            }],
            value1: '',
            optionMachType: [{
                value2: '0',
                label: '高端机型'
            }, {
                value2: '1',
                label: '中端机型'
            }, {
                value2: '2',
                label: '低端机型'
            }],
            value2: '',
            dataType: [{
                value3: '0',
                label: 'FPS'
            }, {
                value3: '1',
                label: 'CPU趋势'
            }, {
                value3: '2',
                label: '网络流量'
            }, {
                value3: '3',
                label: 'PSS峰值'
            }],
            optionsData: {
                title: {
                    text: '',
                    textStyle: {
                        align: 'center'
                    }
                },
                tooltip: {},
                color:['red', 'green','yellow','blueviolet'],
                xAxis: {
                    data: ['1', '2', '3', '4', '5', '6']
                },
                yAxis: {},
                series: [{
                    name: '包',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                },{
                    name: '标准线',
                    type: 'line',
                    data: [25, 25, 25, 25, 25, 25]
                },]                
            },
            value3: '',
            desc: ''           
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
            this.hisDialog = true
            fd.append('packid', this.id);
            axios.post(window.dev.url + "/api" + '/testinfo', fd)
                .then(function(res) {
                    if (res.code == 0) {
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
            axios.post(window.dev.url + "/api" + '/packinfo', fd)
                .then(function(res) {
                    if (res.code == 0) {
                        self.tableData.push(res.packinfo)
                        self.tableStateData = res.testprj
                    } else {
                        console.log(res.msg)
                    }
                });
        },
        loadChart () {
            this.optionsData.title.text = 'Charts 入门示例' + String(+new Date());
        },
        async reload () {
            let rs = await axios.post('/user/userinfo', {
                    option: 'test'
                });
            if (rs.success) {
                console.log(rs);
            }
        },        
    }
}

</script>
