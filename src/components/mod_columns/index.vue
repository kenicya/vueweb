<template>
    <div class="container">
        <ui-echart :options="options"
                     :autoDestroy="false"
                     :autoRefresh="true"
                     ref="chart"
                     :defaultHeight="400"
                     id="bar"
                     class="test"></ui-echart>
        <button @click="loadChart">重新加载</button>
        <button @click="reload">请求后台数据重载</button>
    </div>
</template>

<script>

import uiEchart from '../ui/echart/register';

export default {

        methods: {
            loadChart () {
                this.options.title.text = 'Charts 入门示例' + String(+new Date());
            },
            async reload () {
                let rs = await axios.post('/user/userinfo', {
                        option: 'test'
                    });
                if (rs.success) {
                    console.log(rs);
                }
            }
        },

        data () {
            return {
                options: {
                    title: {
                        text: 'ECharts 入门示例',
                        textStyle: {
                            align: 'center'
                        }
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            };
        }
    };
</script>

