<template>
  <el-date-picker
    v-model="dateVal"
    @change="setMonthNum"
    size="large"
    type="date"
    :format="dateFormat"
    value-format="yyyy-MM-dd"
    :picker-options="pickerOptions"
    placeholder="请选择日期">
  </el-date-picker>
</template>

<script>
export default {
  name: 'DateDate',
  props: {
    value: {
      type: String
    }
  },

  data() {
    return {
      dateVal: this.value,
      dateFormat: 'yyyy-MM-dd',
      pickerOptions: {
        shortcuts: [{
          text: '至今',
          onClick(picker) {
            // 220年以后
            picker.$emit('pick', new Date('2999-01-01'))
          }
        }, {
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
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
      console.log(this.dateVal >= '2999-01-01')
      if (this.dateVal >= '2999-01-01') {
        this.dateFormat = '[至今]'
      } else {
        this.dateFormat = 'yyyy年MM月dd日'
      }
      this.$emit('input', this.dateVal)
    },
    getDateFromWeek(val) {
      if (val) {
        if (val >= '2999-01') {
          this.dateFormat = '[至今]'
        } else {
          this.dateFormat = 'yyyy年MM月dd日'
        }
        this.dateVal = val
      }
    }
  }
}
</script>

<style scoped>

</style>
