<template>
  <!--  <pie-chart :chart-title="chartTitle" :chart-data="chartData"></pie-chart>-->
  <pie-chart :chart-data="chartData"></pie-chart>
</template>

<script>
  import PieChart from '@/components/Sys/Charts/PieChart'

  export default {
    name: 'TestPieChart',
    components: { PieChart },
    data() {
      return {
        chartTitle: '柱状图标题',
        chartData: [
          { value: 320, name: '科学' },
          { value: 240, name: '技术' },
          { value: 149, name: '娱乐' },
          { value: 100, name: '黄金' },
          { value: 59, name: '政治' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
