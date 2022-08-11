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
                  { value: 1, name: '10岁以下' },
                  { value: 2, name: '10-20岁' },
                  { value: 32, name: '20-30岁' },
                  { value: 52, name: '30-40岁' },
                  { value: 82, name: '40-50岁' },
                  { value: 112, name: '50-60岁' },
                  { value: 62, name: '60-70岁' },
                  { value: 32, name: '70-80岁' },
                  { value: 12, name: '80岁以上' }
                ]

              }
            ]
          }
        )
      }
    }
  }
</script>
