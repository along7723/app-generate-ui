<template>
  <div class="app-container" style="width: 100%;height: 698px;margin-top: 20px">
  </div>

</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  export default {

    data() {
      return {
        chart: {}
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$el, 'pie')

        this.chart.setOption(
          {
            title: {
              text: '每月参加培训人数趋势图',
              x: 'center'
            },

            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                type: 'line',
                itemStyle: { normal: { label: { show: true } } },
                data: [1200, 1320, 1401, 1534, 1690, 1730, 1710, 1600, 1501, 1400, 1300, 300]
              }
            ]
          }
        )
      }
    }
  }
</script>
