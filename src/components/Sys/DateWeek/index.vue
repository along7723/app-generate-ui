<template>
  <div style="position: relative" class="date-week">
    <div style="height: 0">
      <el-date-picker
        style="height: 36px"
        ref="weekPicker"
        v-model="weekNum"
        @change="setWeekNum"
        :picker-options="{'firstDayOfWeek': 1}"
        size="large"
        :type="type"
        :format="format"
        placeholder="请选择周">
      </el-date-picker>
    </div>
    <input v-if="type!=='week'" class="showLabel" readonly @click="showLabelClick" placeholder="起始周 - 结束周"
           v-model="showValue"/>
    <i v-if="type!=='week'" @click="deleteValue"
       class="el-input__icon el-range__close-icon el-icon-circle-close date-week-close"></i>
  </div>
</template>

<script>
  export default {
    name: 'DateWeek',
    props: {
      value: {
        type: String
      },
      type: {
        type: String,
        default: 'week'
      }
    },
    data() {
      return {
        weekNum: '',
        weekVal: '',
        num: 1,
        format: 'yyyy第WW周',
        showValue: ''
      }
    }, watch: {
      value(val) {
        if (val) {
          this.getDateFromWeek(val)
        } else {
          this.deleteValue()
        }

      }
    },
    created() {
      this.getDateFromWeek(this.value)
    },
    methods: {
      setWeekNum() {
        const moment = require('moment')

        if (this.type === 'week') {
          // 注意，当返回值是中国标准时间的格式时使用moment.js的时候一定要加上.utcOffset(480)，用来转换时区
          this.weekVal = moment(this.weekNum).utcOffset(480).format('yyyy第WW周')
          this.$emit('input', this.weekVal)
        } else { // weekrange
          const monthVal1 = moment(this.weekNum[0]).utcOffset(480).format('yyyy第WW周')
          const monthVal2 = moment(this.weekNum[1]).utcOffset(480).format('yyyy第WW周')
          console.log('monthVal1', monthVal1)
          console.log('monthVal2', monthVal2)
          this.$emit('input', monthVal1 + '~' + monthVal2)
        }
      },
      getDateFromWeek(val) {
        if (val) {
          const moment = require('moment')
          if (this.type === 'week') {
            const weekDate = val.replace('周', '').split('第')
            const xx = moment().day('Monday').utcOffset(480).year(parseInt(weekDate[0])).week(parseInt(weekDate[1]) + 1).toDate()
            this.weekNum = xx
          } else {
            console.log(val)
            this.showValue = val
            const monthDates = val.split('~')

            const monthDate1 = monthDates[0].replace('周', '').split('第')
            console.log(monthDate1)
            const xx1 = moment().utcOffset(480).year(parseInt(monthDate1[0])).week(parseInt(monthDate1[1]) + 1).toDate()

            const monthDate2 = monthDates[1].replace('周', '').split('第')
            console.log(monthDate2)
            const xx2 = moment().utcOffset(480).year(parseInt(monthDate2[0])).week(parseInt(monthDate2[1]) + 1).toDate()

            // this.weekNum = [xx1, xx2]
            this.weekNum = [xx1, xx2]
          }
        } else {
          this.weekNum = null
          // this.$emit('input', '')
        }

      },
      showLabelClick() {
        this.$refs.weekPicker.focus()
      },
      deleteValue() {
        this.weekNum = null
        this.showValue = null
        this.$emit('input', '')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .showLabel {
    position: absolute;
    height: 32px;
    width: calc(100% - 132px);
    /*margin-left: 128px;*/
    margin-left: 28px;
    margin-top: 2px;
    background-color: white;
    padding-left: 2px;
    border: none;
  }

  .date-week-close {
    display: none;
    position: absolute;
    right: 2px;
    top: 4px;
    background-color: white !important;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
  }

  .date-week:hover .date-week-close {
    display: inline-block;
  }
</style>
