<template>
  <div :style="defaultClass">
  </div>

</template>

<script>
  import { unitType } from '../api'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/pie')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  export default {

    props: {
      defaultHeight: {
        type: Number,
        default: 300,
        required: false
      }
    },
    data() {
      return {
        chart: {},
        defaultClass: {
          width: '100%',
          height: (this.defaultHeight) + 'px'
        },
        name: [],
        value: []
      }
    },
    mounted() {
      unitType().then(response => {
        const data = response.data

        this.initChart(data)
      })
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
                center: ['50%', '50%'],
                data: data

              }
            ]
          }
        )
      }
    }
  }
</script>
