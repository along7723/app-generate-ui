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
              data: [
                { name: '新疆', value: 13 },
                { name: '四川', value: 1000 },
                { name: '西藏', value: 43 },
                { name: '青海', value: 425 },
                { name: '甘肃', value: 346 },
                { name: '宁夏', value: 580 },
                { name: '内蒙古', value: 89 },
                { name: '黑龙江', value: 32 },
                { name: '吉林', value: 33 },
                { name: '辽宁', value: 345 },
                { name: '山西', value: 123 },
                { name: '陕西', value: 331 },
                { name: '重庆', value: 22 },
                { name: '贵州', value: 678 },
                { name: '云南', value: 366 },
                { name: '广西', value: 123 },
                { name: '广东', value: 345 },
                { name: '福建', value: 126 },
                { name: '台湾', value: 123 },
                { name: '湖南', value: 457 },
                { name: '江西', value: 129 },
                { name: '浙江', value: 673 },
                { name: '上海', value: 456 },
                { name: '江苏', value: 350 },
                { name: '安徽', value: 179 },
                { name: '湖北', value: 357 },
                { name: '河南', value: 258 },
                { name: '河北', value: 853 },
                { name: '北京', value: 12 },
                { name: '天津', value: 234 },
                { name: '山东', value: 34 },
                { name: '海南', value: 806 }
              ]

            }
          ]
        })

      }
    }
  }
</script>
