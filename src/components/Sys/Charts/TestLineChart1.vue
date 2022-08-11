<template>
  <!--  <line-chart :chart-title="chartTitle" :chart-data="chartData" :chart-option="chartOption"></line-chart>-->
  <line-chart :chart-data="chartData" :chart-option="chartOption"></line-chart>
</template>

<script>
  import LineChart from '@/components/Sys/Charts/LineChart'

  export default {
    name: 'TestLineChart1',
    components: { LineChart },
    data() {
      return {
        chartTitle: '单拆线图标题',
        chartOption: {
          timeField: 'week',
          valueFields: ['expected'],
          valueNames: ['期望值']
        },
        chartData: [
          {
            week: '星期一',
            expected: 100
          },
          {
            week: '星期二',
            expected: 120
          },
          {
            week: '星期三',
            expected: 161
          },
          {
            week: '星期四',
            expected: 134
          },
          {
            week: '星期五',
            expected: 105
          },
          {
            week: '星期六',
            expected: 160
          },
          {
            week: '星期日',
            expected: 165
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
