<template>
  <div :class="className" :style="{height:height,width:width}">
    <div class="empty">
      <div><i class="fa fa-reddit-alien"></i></div>
      <div>暂无数据</div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  require('echarts/theme/macarons') // echarts theme
  import resize from './mixins/resize'

  const animationDuration = 3000

  export default {
    name: 'RadarChart',
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
        default: '300px'
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
          tooltip: {},
          radar: {
            radius: '66%',
            center: this.hasTitle() ? ['50%', '50%'] : ['50%', '44%'],
            splitNumber: 8,
            splitArea: {
              areaStyle: {
                color: 'rgba(127,95,132,.3)',
                opacity: 1,
                shadowBlur: 45,
                shadowColor: 'rgba(0,0,0,.5)',
                shadowOffsetX: 0,
                shadowOffsetY: 15
              }
            },
            indicator: this.chartOption.indicator
          },
          legend: {
            left: 'center',
            bottom: '5',
            data: null
          },
          series: [{
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1
              }
            },
            data: null,
            animationDuration: animationDuration
          }]
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
        this.option.legend.data = this.chartData.map((item) => {
          return item.name
        })
        this.option.series[0].data = this.chartData
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
    padding-top: 26%;
    line-height: 2;
  }

  .empty i {
    font-size: 20px;
  }
</style>
