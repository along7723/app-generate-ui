<template>
  <el-date-picker
    v-model="monthNum"
    @change="setMonthNum"
    size="large"
    type="month"
    :format="dateFormat"
    :picker-options="pickerOptions"
    placeholder="请选择年月">
  </el-date-picker>
</template>

<script>
export default {
  name: 'DateWeek',
  props: {
    value: {
      type: String
    }
  },

  data() {
    return {
      monthNum: '',
      monthVal: '',
      num: 1,
      dateFormat: 'yyyy-MM',
      pickerOptions: {
        shortcuts: [{
          text: '至今',
          onClick(picker) {
            // 220年以后
            picker.$emit('pick', new Date('2999-01-01'))
          }
        }, {
          text: '本月',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '上月',
          onClick(picker) {
            picker.$emit('pick', new Date().setMonth(new Date().getMonth() - 1))
          }
        }]
      }
    }
  }, watch: {
    value(val) {
      this.getDateFromWeek(val)
    }
  },
  created() {
    this.getDateFromWeek(this.value)
  },
  methods: {
    setMonthNum() {
      const moment = require('moment')
      //注意，当返回值是中国标准时间的格式时使用moment.js的时候一定要加上.utcOffset(480)，用来转换时区
      this.monthVal = moment(this.monthNum).utcOffset(480).format('yyyy-MM')
      if (this.monthVal >= '2999-01') {
        this.dateFormat = '[至今]'
      } else {
        this.dateFormat = 'yyyy-MM'
      }
      this.$emit('input', this.monthVal)
    },
    getDateFromWeek(val) {
      if (val) {
        if (val >= '2999-01') {
          this.dateFormat = '[至今]'
        } else {
          this.dateFormat = 'yyyy-MM'
        }

        const monthDate = val.split('-')
        const moment = require('moment')
        const xx = moment().utcOffset(480).year(parseInt(monthDate[0])).month(parseInt(monthDate[1]) - 1).toDate()
        this.monthNum = xx
      }

    }
  }
}
</script>

<style scoped>

</style>
