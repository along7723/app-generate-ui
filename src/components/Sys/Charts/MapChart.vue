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
    name: 'PieChart',
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
        default: '600px'
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
        option:
          {
            title: {
              text: '香港18区人口密度 （2011）',
              subtext: '人口密度数据来自Wikipedia',
              sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} (p / km2)'
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
              }
            },
            visualMap: {
              min: 800,
              max: 50000,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
              }
            },
            series: [
              {
                type: 'map',
                mapType: 'myMap', // 自定义扩展图表类型
                label: {
                  show: true
                },
                data: this.chartData,
                // 自定义名称映射
                nameMap: this.chartOption.nameMap
              }
            ]
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
        // const myMap = require('@/assets/map/geojson/HK.json')
        const myMap = require('@/assets/map/geojson/' + this.chartOption.mapFile)
        echarts.registerMap('myMap', myMap)

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
