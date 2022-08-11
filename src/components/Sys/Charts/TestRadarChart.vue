<template>
  <!--  <radar-chart :chart-title="chartTitle" :chart-option="chartOption" :chart-data="chartData"></radar-chart>-->
  <radar-chart :chart-option="chartOption" :chart-data="chartData"></radar-chart>
</template>

<script>
  import RadarChart from '@/components/Sys/Charts/RadarChart'

  export default {
    name: 'TestRadarChart',
    components: { RadarChart },
    data() {
      return {
        chartTitle: '雷达图标题',
        chartOption: {
          indicator: [
            { name: '销售能力', max: 10000 },
            { name: '管理能力', max: 20000 },
            { name: '技术能力', max: 20000 },
            { name: '服务能力', max: 20000 },
            { name: '开发能力', max: 20000 },
            { name: '市场能力', max: 20000 }
          ]
        },
        chartData: [
          {
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: '张三'
          },
          {
            value: [4000, 9000, 15000, 15000, 13000, 11000],
            name: '李四'
          },
          {
            value: [5500, 11000, 12000, 15000, 12000, 12000],
            name: '王五'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
