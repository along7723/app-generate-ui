<template>
  <div style="width: 100%;height: 300px;">
  </div>

</template>

<script>
  import { countCulture } from '../api'

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
    created() {
      this.query()
    },
    methods: {
      initChart(data) {
        this.chart = echarts.init(this.$el, 'pie')

        this.chart.setOption({
            tooltip: {
              formatter: '{b} : {c} ({d}%)'
            },
            series: [
              {
                type: 'pie',
                center: ['50%', '48%'],
                data: data
              }
            ]
          }
        )
      }, query() {
        countCulture().then(response => {
          let data = response.data
          this.initChart(data)
        })
      }
    }
  }
</script>
