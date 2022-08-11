<template>
  <div class="app-container" style="width: 100%;height: 698px;margin-top: 20px">
  </div>

</template>

<script>
  import { countUserTrend } from './api'

  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/legend')
  export default {
    data() {
      return {
        chart: {},
        chart_time: [],
        chart_personal: [],
        chart_company: []
      }
    },
    created() {
      this.query()
    },
    methods: {
      initChart(chart_time, chart_personal, chart_company) {
        this.chart = echarts.init(this.$el, 'pie')
        this.chart.setOption(
          {
            title: {
              text: '用户注册趋势',
              x: 'center'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['企业用户', '个人用户'],
              orient: 'vertical',  //垂直显示
              y: ' center',
              x: 'right'
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
              data: chart_time
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: '个人用户',
                type: 'line',
                stack: '总量',
                data: chart_personal
              },
              {
                name: '企业用户',
                type: 'line',
                stack: '总量',
                data: chart_company
              }
            ]
          }
        )
      },
      query() {
        const info = {}
        info['order'] = 'count_time desc'
        countUserTrend(info).then(response => {

          const data = response.data
          const ec_data = {}//保存时间对应的结果
          let show_date = []//保存时间顺序
          //拆分数据
          for (let i = 0; i < data.length; i++) {
            const time = data[i]['result_time']
            const user_type = data[i]['user_type']
            if (show_date.indexOf(time) === -1) {
              show_date.unshift(time)
            }
            let ec_time = ec_data[time]
            if (!ec_time) {
              ec_time = ec_time ? ec_time : {}
            }
            ec_time[user_type] = data[i]['value']
            ec_data[time] = ec_time
          }
          let personal = []
          let company = []
          for (let item in show_date) {
            personal.push(ec_data[show_date[item]]['personal'])
            company.push(ec_data[show_date[item]]['company'])
          }
          this.initChart(show_date, personal, company)
        })
      }
    }
  }
</script>
