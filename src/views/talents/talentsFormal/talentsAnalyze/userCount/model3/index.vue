<template>
  <div style="width: 100%;height: 300px;">
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
            series: [
              {
                type: 'pie',
                center: ['50%', '48%'],
                data: [
                  { value: 231, name: '布依族' },
                  { value: 112, name: '土家族' },
                  { value: 132, name: '藏族' },
                  { value: 152, name: '白族' },
                  { value: 182, name: '回族' },
                  { value: 32, name: '维吾尔族' },
                  { value: 162, name: '苗族' },
                  { value: 132, name: '壮族' },
                  { value: 32, name: '朝鲜族' },
                  { value: 12, name: '蒙古族' },
                  { value: 2, name: '满族' },
                  { value: 242, name: '其他' }
                ]

              }
            ]
          }
        )
      }
    }
  }
</script>
