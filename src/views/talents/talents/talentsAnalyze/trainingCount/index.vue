<template>
  <div class="app-container" style="width: 100%;height: 698px;margin-top: 20px">
  </div>

</template>

<script>
  import { count } from './api'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
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
      initChart(data_time, data_val) {
        this.chart = echarts.init(this.$el, 'pie')

        this.chart.setOption(
          {
            title: {
              text: '每月参加培训人数趋势图',
              x: 'center'
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: data_time
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                type: 'line',
                itemStyle: { normal: { label: { show: true } } },
                data: data_val
              }
            ]
          }
        )
      }, query() {
        count({ 'year': '' }).then(response => {
          let data = response.data
          let data_time = []
          let data_val = []
          for (let item in data) {
            data_time.unshift(data[item]['result_time'])
            data_val.unshift(data[item]['result'])
          }
          this.initChart(data_time, data_val)
        })
      }
    }
  }
</script>
