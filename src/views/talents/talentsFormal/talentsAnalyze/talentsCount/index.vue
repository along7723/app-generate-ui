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
              text: '个人用户注册趋势',
              x: 'center'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['发展趋势'],
              orient: 'vertical',  //垂直显示
              y: ' center',
              x: 'right'

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
              data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '发展趋势',
                type: 'line',
                stack: '总量',
                data: [1200, 1320, 1401, 1534, 1690, 1730, 1810, 1900, 2001, 2100, 2300]
              }
            ]
          }
        )
      }
    }
  }
</script>
