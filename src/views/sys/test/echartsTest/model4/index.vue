<template>
  <div style="width: 300px;height: 290px;z-index: 10;">
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
            legend: {
              bottom: 5,
              left: 'center',
              data: ['国有银行', '国务院直属央企', '国资委管理企业']
            },
            series: [
              {
                type: 'pie',
                radius: '65%',
                center: ['50%', '35%'],
                selectedMode: 'single',
                data: [
                  { value: 2, name: '国有银行' },
                  { value: 2, name: '国务院直属央企' },
                  { value: 1, name: '国资委管理企业' }
                ], labelLine: {
                  show: false
                }, label: {
                  show: false,
                  position: 'center'
                }

              }
            ]
          }
        )
      }
    }
  }
</script>
