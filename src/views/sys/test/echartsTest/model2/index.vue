<template>
  <div style="width: 100%;height: 300px;">
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
        this.chart = echarts.init(this.$el, 'line')

        this.chart.setOption({
            color: ['#3398DB'],
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisLabel: {
                interval: 0,
                rotate: 0
              }
            },
            tooltip: {
              trigger: 'axis'
            },

            grid: {
              height: 240,
              top: 10
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
              type: 'line',
              areaStyle: {}
            }]
          }
        )
      }
    }
  }
</script>
