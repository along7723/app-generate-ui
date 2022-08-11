<template>
  <div :style="defaultClass">
  </div>

</template>

<script>
  import { onTheJob } from '../api'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/bar')
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
      onTheJob().then(response => {
        console.log('onTheJob', response)
        const data = response.data
        for (let i = data.length - 1; i >= 0; i--) {
          this.name.push(data[i]['name'])
          this.value.push(data[i]['value'])
        }
        /*        for (const item in data) {

                }*/
        this.initChart(this.name, this.value)
      })

    },
    created() {

    },
    methods: {
      initChart(name, value) {
        console.log(this.defaultHeight)

        this.chart = echarts.init(this.$el, 'pie')
        this.chart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          yAxis: [
            {
              type: 'category',
              data: name,
              show: false,
              axisTick: {
                alignWithLabel: true
              }, axisLabel: {
                interval: (i, v) => true,
                rotate: 40
              }
            }
          ],
          xAxis: [
            {
              type: 'value'
            }
          ],
          grid: {
            height: this.defaultHeight - 100,
            top: 10
          },
          series: [
            {
              name: '在职人数',
              type: 'bar',
              data: value,
              label: {
                show: true,
                position: 'insideLeft',
                formatter: '{b}',
                textBorderWidth: 0,
                color:'#000'
              }
            }
          ]
        })
      }
    }
  }
</script>
