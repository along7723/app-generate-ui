<template>
  <div :class="className" :style="{height:height,width:width}">
    <div class="empty">
      <div><i class="fa fa-reddit-alien"></i></div>
      <div>暂无数据</div>
    </div>
  </div>
</template>

<script>
  import resize from './mixins/resize'
  import echarts from 'echarts'

  require('echarts/theme/macarons') // echarts theme

  export default {
    name: 'LineChart',
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
      autoResize: {
        type: Boolean,
        default: true
      },
      chartTitle: {
        type: String,
        default: null
      },
      chartOption: {
        type: Object,
        default: () => {
        }
      },
      chartData: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        chart: null,
        option: {
          title: {
            show: this.hasTitle(), // 是否显示title
            text: this.chartTitle,
            left: 'center',
            textStyle: {
              color: 'gray',
              fontSize: 16,
              fontWeight: 400
            }
          },
          xAxis: {
            data: null,
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          grid: {
            top: this.hasTitle() ? 40 : 10,
            left: 10,
            right: 20,
            bottom: 44,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          legend: {
            left: 'center',
            bottom: '5',
            data: null
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          series: null
        },
        colors: ['#FF005A', '#3888fa'],
        areaColors: [null, '#f3f8ff']
      }
    },
    watch: {
      chartData: {
        deep: true,
        handler(val) {
          this.setOptions(val)
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        if (this.isEmpty()) {
          console.log('空数据')
          return
        }
        this.chart = echarts.init(this.$el, 'macarons')
        this.option.legend.data = this.chartOption.valueNames
        this.option.xAxis.data = this.chartData.map((item) => {
          return item[this.chartOption.timeField]
        })
        const series = []
        for (let i = 0; i < this.chartOption.valueFields.length; i++) {
          const valueField = this.chartOption.valueFields[i]
          const valueName = this.chartOption.valueNames[i]
          const datas = this.chartData.map((item) => {
            return item[valueField]
          })
          const serie = {
            name: valueName,
            smooth: true,
            type: 'line',
            areaStyle: {},
            data: datas,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
          series.push(serie)
        }
        this.option.series = series
        this.chart.setOption(this.option)
      },
      isEmpty() {
        if (this.chartData instanceof Array) {
          return this.chartData.length === 0
        } else {
          console.error('数据格式错误，请输入数组！')
        }
        return true
      },
      hasTitle() {
        if (this.chartTitle && this.chartTitle !== '') {
          return true
        }
        return false
      }
    }
  }
</script>
<style scoped>
  .empty {
    text-align: center;
    vertical-align: middle;
    color: #999;
    padding-top: 10%;
    line-height: 2;
  }

  .empty i {
    font-size: 20px;
  }
</style>
