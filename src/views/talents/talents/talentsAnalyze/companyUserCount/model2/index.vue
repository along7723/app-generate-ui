<template>
  <div :style="defaultClass">
  </div>

</template>

<script>
  import { quantityChange } from '../api'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
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
      quantityChange().then(response => {
        const data = response.data
        for (let i = data.length - 1; i >= 0; i--) {
          this.name.push(data[i]['name'])
          this.value.push(data[i]['value'])
        }
        this.initChart(this.name, this.value)
      })
    },
    methods: {
      initChart(name, value) {
        this.chart = echarts.init(this.$el, 'line')
        this.chart.setOption({
            color: ['#3398DB'],
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: name,
              axisLabel: {
                interval: (i, v) => true,
                rotate: 20
              }
            },

            tooltip: {
              trigger: 'axis'
            },

            grid: {
              height: this.defaultHeight - 100,
              top: 10,
              left: 70,
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: value,
              type: 'line',
              areaStyle: {}
            }]
          }
        )
      }
    }
  }
</script>
