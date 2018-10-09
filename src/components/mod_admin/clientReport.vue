<template>
<div class="container">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ano-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/adminReport' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="#/clientReport">前端性能测试</a></el-breadcrumb-item>
    </el-breadcrumb>
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
    <el-form ref="form" :model="form" :rules="formRule">
        <h4><span class="text-danger">*</span>报告是否通过</h4>
        <el-form-item>
            <el-radio-group v-model="form.ispass">
                <el-radio :label="1">通过</el-radio>
                <el-radio :label="0">不通过</el-radio>
            </el-radio-group>
        </el-form-item>
        <h4><span class="text-danger">*</span>机型数据</h4>
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
                        <el-input v-model="form.machHigh.name" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machHigh.sys" class="mb0">
                        <el-input v-model="form.machHigh.sys" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machHigh.kernal" class="mb0">
                        <el-input v-model="form.machHigh.kernal" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machHigh.mem" class="mb0">
                        <el-input v-model="form.machHigh.mem" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machHigh.resolution" class="mb0">
                        <el-input v-model="form.machHigh.resolution" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                </tr>
                <tr>
                    <td class="cell">中端机型</td>
                    <td class="cell">
                    	<el-form-item prop="machMidd.name" class="mb0">
                        <el-input v-model="form.machMidd.name" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machMidd.sys" class="mb0">
                        <el-input v-model="form.machMidd.sys" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machMidd.kernal" class="mb0">
                        <el-input v-model="form.machMidd.kernal" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machMidd.mem" class="mb0">
                        <el-input v-model="form.machMidd.mem" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                    <td class="cell">
                    	<el-form-item prop="machMidd.resolution" class="mb0">
                        <el-input v-model="form.machMidd.resolution" placeholder="请输入名称"></el-input></el-form-item>
                    </td>
                </tr>
                <tr>
                    <td class="cell">低端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machLow.name" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machLow.sys" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machLow.kernal" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machLow.mem" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machLow.resolution" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
            </table>
        </div>
        <h4><span class="text-danger">*</span>测试数据</h4>
        <div class="el-table el-table--border">
            <table class="" width="100%" cellspacing="0" cellpadding="5px" border="0">
                <tr>
                    <th class="cell">机型</th>
                    <th class="cell">CPU最高温度(°C)</th>
                    <th class="cell">电池最高温度(°C)</th>
                </tr>
                <tr>
                    <td class="cell">高端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machHigh.cputemper" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machHigh.powertemper" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="cell">中端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machMidd.cputemper" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machMidd.powertemper" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="cell">低端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machLow.cputemper" placeholder="请输入名称"></el-input>
                    </td>
                    <td class="cell">
                        <el-input v-model="form.machLow.powertemper" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
            </table>
        </div>
        <h4><span class="text-danger">*</span>表文件</h4>
        <div class="el-table el-table--border">
            <table class="" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                    <th class="cell">机型</th>
                    <th class="cell">文件上传</th>
                </tr>
                <tr>
                    <td class="cell">高端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machHigh.reportpath" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="cell">中端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machMidd.reportpath" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="cell">低端机型</td>
                    <td class="cell">
                        <el-input v-model="form.machLow.reportpath" placeholder="请输入名称"></el-input>
                    </td>
                </tr>
            </table>
        </div>
    </el-form>
    <p class="text-center">
        <el-button type="primary" @click="checkFrom" class="new-btn">下一步</el-button>
    </p>
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
.mb0{
	margin-bottom: 0;
}
</style>
<style scoped>
.cell{
	overflow: visible;
}	
</style>
<script>
export default {
    data() {
        return {
            pckinfo: [],
            form: {
                packid: '', //包ID
                ispass: 0, //报告是否通过
                machHigh: { //高端机型
                    type: 0
                },
                machMidd: { //中端机型
                    type: 1
                },
                machLow: { //低端机型
                    type: 2
                },
                desc: '', //场景说明
                conclusion: '', //测试结论
                path: ''   //上传路径 
            },
            formRule: {
            	machHigh:{
            		name: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					sys: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					kernal: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					mem: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					resolution: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					]
            	},
            	machMidd: {
					name: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					sys: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					kernal: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					mem: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					],
					resolution: [
			            { required: true, message: '该项不能为空', trigger: 'blur' }
					]
            	}
            }
        }
    },
    mounted() {
        this.id = window.localStorage.getItem('packid');
        this.loadMenu();
    },
    methods: {
		async loadMenu() {
			let self = this;
			axios.post(window.dev.url + '/reportpackinfo', {
					packid: this.form.packid
				})
				.then(function(res) {
					if (res.code == 0) {
						//self.pckinfo = res.info 
						self.pckinfo.push(res.info)
						//console.log("this is list",info) 
						//self.prodmsd = res.list                              
					} else {
						console.log(res.msg)
					}

				});
		},
        checkFrom() {
        	let self = this;
        	this.$refs.form.validate((valid) => {
				if (valid) {
					self.onSubmit();
				} else {
					return false;
				}
			});
        },
        onSubmit() {
            let fd = {
            	packid: this.form.packid,
                ispass: this.form.ispass,
                content: [],
                desc: this.form.desc,
                conclusion: this.form.conclusion,
                path: this.form.path
            };
            fd.content.push(this.form.machHigh, this.form.machMidd, this.form.machLow);
            axios.post(window.dev.url + '/perform', fd)
				.then(function(res) {
					if (res.code == 0) {
							                           
					} 
				});
        }
    }
}

</script>
