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

  const animationDuration = 6000

  export default {
    name: 'BarChart',
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
      stackBar: {
        type: Boolean,
        default: false
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
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: this.hasTitle() ? 40 : 10,
            left: '2%',
            right: '2%',
            bottom: '40',
            containLabel: true
          },
          legend: {
            left: 'center',
            bottom: '5',
            data: null
          },
          xAxis: [{
            type: 'category',
            data: null,
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            }
          }],
          series: []
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
        this.option.xAxis[0].data = this.chartData.map((item) => {
          return item[this.chartOption.timeField]
        })
        console.log('this.option.xAxis.data', this.option.xAxis.data)
        const series = []
        for (let i = 0; i < this.chartOption.valueFields.length; i++) {
          const valueField = this.chartOption.valueFields[i]
          const valueName = this.chartOption.valueNames[i]
          const datas = this.chartData.map((item) => {
            return item[valueField]
          })

          let serie = null

          if (this.stackBar) {
            serie = {
              name: valueName,
              type: 'bar',
              stack: 'vistors',
              barWidth: '60%',
              data: datas,
              animationDuration
            }
          } else {
            serie = {
              name: valueName,
              type: 'bar',
              data: datas,
              barCategoryGap: '40%',
              animationDuration
            }
          }
          series.push(serie)
        }
        this.option.series = series

        console.log('this.option', this.option)
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
