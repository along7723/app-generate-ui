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
                  {
                    value: 535, name: '男',
                    itemStyle: {
                      normal: {
                        color: 'rgb(255,192,0)',
                        shadowColor: 'rgba(0,0,0,0.8)'
                      }
                    }
                  },
                  { value: 510, name: '女' }
                ]

              }
            ]
          }
        )
      }
    }
  }
</script>
