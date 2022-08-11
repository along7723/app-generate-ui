<template>
  <div style="width: 100%;height: 698px;">
  </div>

</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/map')
  import china from 'echarts/map/json/china.json'

  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  require('echarts/lib/component/visualMap')

  import { countSource } from '../api'
  export default {

    data() {
      return {
        chart: {}
      }
    },
    mounted() {
      countSource().then(response => {
          console.log(response)
        this.initChart(response.data)
      })

    },
    methods: {
      initChart(data) {
        this.chart = echarts.init(this.$el, 'map')
        echarts.registerMap('china', china)
        this.chart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c}'
          },

          visualMap: {
            min: 1,
            max: 1000,
            inRange: {
              color: ['lightskyblue', 'yellow', 'orangered']
            },
            show: false
          },
          series: [
            {
              type: 'map',
              mapType: 'china', // 自定义扩展图表类型
              center: ['50%', '48%'],
              label: {
                show: true
              },
              data: data

            }
          ]
        })

      }
    }
  }
</script>
