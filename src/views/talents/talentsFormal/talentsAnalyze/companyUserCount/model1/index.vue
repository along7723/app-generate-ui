<template>
  <div style="width: 100%;height: 300px;">
  </div>

</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/bar')
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

        this.chart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['阿里巴巴', '百度', '腾讯', '网易', '华为', '小米', '魅族'],
              axisTick: {
                alignWithLabel: true
              }, axisLabel: {
                interval: 0,
                rotate: 0
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          grid: {
            height: 240,
            top: 10
          },
          series: [
            {
              name: '在职人数',
              type: 'bar',
              data: [1000, 800, 780, 684, 600, 587, 570]
            }
          ]
        })
      }
    }
  }
</script>
