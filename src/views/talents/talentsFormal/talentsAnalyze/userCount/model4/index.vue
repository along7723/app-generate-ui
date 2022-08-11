<template>
  <div style="width: 100%;height: 300px;">
  </div>

</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/pie')
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
            tooltip: {
              formatter: '{b} : {c} ({d}%)'
            },
            series: [
              {
                type: 'pie',
                center: ['50%', '48%'],
                data: [
                  { value: 231, name: '其他' },
                  { value: 112, name: '大学本科' },
                  { value: 132, name: '大学专科' },
                  { value: 152, name: '博士研究生' },
                  { value: 182, name: '硕士研究生' }
                ]

              }
            ]
          }
        )
      }
    }
  }
</script>
