<template>
  <div :style="defaultClass">
  </div>

</template>

<script>
  import { countCompanyIndustry } from './api'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/bar')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')

  export default {
    props: {
      defaultHeight: {
        type: Number,
        default: 800,
        required: false
      }
    },
    data() {
      return {
        chart: {},
        defaultClass: {
          width: '100%',
          marginTop: '10px',
          height: (this.defaultHeight) + 'px'
        },
        name: [],
        value: []
      }
    },
    mounted() {
      countCompanyIndustry().then(response => {
        const data = response.data
        for (const item in data) {
          this.name.push(data[item]['name'])
          this.value.push(data[item]['value'])
        }
        this.initChart(this.name, this.value)
      })

    },
    created() {

    },
    methods: {
      initChart(name, value) {

        this.chart = echarts.init(this.$el, 'pie')
        this.chart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          title: {
            text: '行业统计',
            x: 'center'
          },
          xAxis: [
            {
              type: 'category',
              data: name,
              axisTick: {
                alignWithLabel: true
              }, axisLabel: {
                interval: 0,
                rotate: 0
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          grid: {
            height: this.defaultHeight - 100
          },
          series: [
            {
              name: '行业数量',
              type: 'bar',
              data: value
            }
          ]
        })
      }
    }
  }
</script>
