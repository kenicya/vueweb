
<template>
    <div :id="uuid"
         class="ui-echarts"
         :style="{ width:width + 'px', height: height + 'px' }"
         v-show="!isHidden"
         :disabled="disabled" ></div>
</template>

<script>
    /**
     * echart的组建
     * 封装了echart的options，只要options有变化都会重新绘图
     */

    import ECharts from 'echarts';
    import logger from '../../../util/logger';
    import { on as bindEvent, off as unbindEvent } from 'wind-dom';

    // enumerated ECharts events for now
    const ACTION_EVENTS = [
        'legendselectchanged',
        'legendselected',
        'legendunselected',
        'datazoom',
        'datarangeselected',
        'timelinechanged',
        'timelineplaychanged',
        'restore',
        'dataviewchanged',
        'magictypechanged',
        'pieselectchanged',
        'pieselected',
        'pieunselected',
        'mapselectchanged',
        'mapselected',
        'mapunselected'
    ];
    const MOUSE_EVENTS = [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'mousedown',
        'mouseup',
        'globalout'
    ];

    if (!ECharts) {
        logger.warn('[ECharts] not found');
    }

    export default {
        props: {
            id: String,
            defaultDisabled: Boolean,
            defaultWidth: [Number, String],
            defaultHeight: Number,

            // 是否显示
            hidden: { type: Boolean, 'default': false },

            // 图表配置项
            options: { type: Object },

            // options变化时自动重新更新echarts
            autoRefresh: { type: Boolean, 'default': true },

            // refresh时自动先destroy上次的图
            autoDestroy: { type: Boolean, 'defalut': false },

            // 主题
            theme: {},

            // 调用 EChart.init 传的 opt
            initOptions: {},

            // 图表联动
            group: {}
        },

        data: function () {
            return {
                uuid: this.id,
                width: this.defaultWidth,
                height: this.defaultHeight,
                disabled: this.defaultDisabled,
                isHidden: this.hidden
            };
        },

        methods: {

            // provide a explicit merge option method
            mergeOptions (options) {
                this.chart.setOption(options);
            },

            // just delegates ECharts methods to Vue component
            resize () {
                this.chart.resize();
            },
            dispatchAction (payload) {
                this.chart.dispatchAction(payload);
            },
            showLoading () {
                this.chart.showLoading();
            },
            hideLoading () {
                this.chart.hideLoading();
            },
            getDataURL () {
                return this.chart.getDataURL();
            },
            clear: function () {
                this.chart.clear();
            },
            destroy () {
                this.chart.dispose();
                this.chart = null;
            },

            _bindChartEvent () {
                let me = this;
                let chart = this.chart;

                // expose ECharts events as custom events
                ACTION_EVENTS.forEach(function (event) {
                    chart.on(event, function (params) {
                        me.$emit(event, params);
                    });
                });

                // mouse events of ECharts should be renamed to prevent
                // name collision with DOM events
                MOUSE_EVENTS.forEach(function (event) {
                    chart.on(event, function (params) {
                        me.$emit('chart' + event, params);
                    });
                });

                this._unbindChartEvent();
                bindEvent(window, 'resize', me._onWinResize);
            },

            _onWinResize () {
                if (!this._isMounted) {
                    return;
                }
                let elSize = this.$el.getBoundingClientRect();
                this.lastWidth = this.lastWidth || 0;
                this.lastHeight = this.lastHeight || 0;
                if (elSize.width !== this.lastWidth || elSize.height !== this.lastHeight) {
                    this.resize();
                }
                this.lastWidth = elSize.width;
                this.lastHeight = elSize.height;
            },

            _unbindChartEvent () {
                unbindEvent(window, 'resize', this._onWinResize);
            },

            refresh (options, merge, lazyUpdate) {
                if (this.autoDestroy && this.chart) {
                    this.destroy();
                    this._unbindChartEvent();
                }
                this._createECharts();
                this.chart.setOption(options || this.options, merge, lazyUpdate);
            },

            _createECharts () {
                if (!ECharts || this.chart) {
                    return;
                }
                let chart = ECharts.init(this.$el, this.theme, this.initOptions);
                this.chart = chart;

                // use assign statements to tigger "options" and "group" setters
                chart.group = this.group;
                this._bindChartEvent();
            }
        },

        mounted () {
            let me = this;
            this.refresh();

            if (this.autoRefresh) {
                this.$watch('options', function (options) {
                    me.refresh(options);
                }, {
                    deep: true
                });
                this.$watch('group', function (group) {
                    me.chart.group = group;
                });
            }
        },

        destroyed () {
            this.destroy();
            this._unbindChartEvent();
        },


        // 静态接口
        connect: function (group) {
            if (typeof group !== 'string') {
                group = group.map(function (chart) {
                    return chart.chart;
                });
            }
            ECharts.connect(group);
        },

        disConnect: function (group) {
            ECharts.disConnect(group);
        },

        registerMap: function (name, geoData, area) {
            ECharts.registerMap(name, geoData, area);
        },

        registerTheme: function (name, theme) {
            ECharts.registerTheme(name, theme);
        }
    };
</script>
