<template>
  <line-chart :chart-title="chartTitle" :chart-data="chartData" :chart-option="chartOption"></line-chart>
</template>

<script>
  import LineChart from '@/components/Sys/Charts/LineChart'

  export default {
    name: 'TestLineChart',
    components: { LineChart },
    data() {
      return {
        chartTitle: '多拆线图标题',
        chartOption: {
          timeField: 'week',
          valueFields: ['expected', 'actual'],
          valueNames: ['期望值', '实际值']
        },
        chartData: [
          {
            week: '星期一',
            expected: 100,
            actual: 120
          },
          {
            week: '星期二',
            expected: 120,
            actual: 82
          },
          {
            week: '星期三',
            expected: 161,
            actual: 91
          },
          {
            week: '星期四',
            expected: 134,
            actual: 154
          },
          {
            week: '星期五',
            expected: 105,
            actual: 162
          },
          {
            week: '星期六',
            expected: 160,
            actual: 140
          },
          {
            week: '星期日',
            expected: 165,
            actual: 120
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
