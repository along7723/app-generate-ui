<template>
  <div>
    <el-popover
      v-if="!readonly"
      class="rule-config"
      width="400"
      trigger="click">
      <el-form class="rules">
        <div style="margin-bottom: 10px">
          <el-checkbox @change="changeHandler" v-model="requiredRule.required" label="是否必填"/>
          <el-radio-group @change="changeHandler" class="field-type" v-model="requiredRule.type">
            <el-radio label="string" style="width: 80px">字符/日期</el-radio>
            <el-radio label="number">数值</el-radio>
            <el-radio label="array">数组</el-radio>
          </el-radio-group>
        </div>
        <div>
          <el-checkbox @change="changeHandler" v-model="customRule.required" label="格式校验"/>
          <span style="color: #999;margin-left: 6px;font-size: 12px">（代码控件、时间控件输入的值无需校验）</span>
        </div>

        <template v-if="customRule.required">
          <el-divider content-position="left">通用校验</el-divider>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkNameZH">中文名</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkNameEN">英文名</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkIDCard">身份证号</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkMobile">手机号码</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkPhone">手机固话</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkPostalCode">邮政编码</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkAddress">地址</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkEmail">邮箱</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkUrl">URL地址</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkIP">IP地址</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkPort">IP端口</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkNumber0">含零正整数</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkNumber1">非零正整数</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkString20">20字符</el-radio>
          <el-radio @change="changeHandler" v-model="ruleName" label="checkString50">50字符</el-radio>

          <el-divider content-position="left">自定义校验</el-divider>

          <div class="custom-rule">
            <el-radio @change="changeHandler" v-model="ruleName" label="checkStringZH">中文</el-radio>
            <span>长度：</span>
            <el-input-number @change="changeHandler" v-model="checkRules.checkStringZH.min" size="mini" :min="1"
                             :max="4000" controls-position="right"
                             class="number"></el-input-number>
            ~
            <el-input-number @change="changeHandler" v-model="checkRules.checkStringZH.max" size="mini" :min="1"
                             :max="4000" controls-position="right"
                             class="number"></el-input-number>
          </div>
          <div class="custom-rule">
            <el-radio @change="changeHandler" v-model="ruleName" label="checkStringEN">英文</el-radio>
            <span>长度：</span>
            <el-input-number @change="changeHandler" v-model="checkRules.checkStringEN.min" size="mini" :min="1"
                             :max="4000" controls-position="right"
                             class="number"></el-input-number>
            ~
            <el-input-number @change="changeHandler" v-model="checkRules.checkStringEN.max" size="mini" :min="1"
                             :max="4000" controls-position="right"
                             class="number"></el-input-number>
          </div>
          <div class="custom-rule">
            <el-radio @change="changeHandler" v-model="ruleName" label="checkString">字符</el-radio>
            <span>长度：</span>
            <el-input-number @change="changeHandler" v-model="checkRules.checkString.min" size="mini" :min="1"
                             :max="4000"
                             controls-position="right"
                             class="number"></el-input-number>
            ~
            <el-input-number @change="changeHandler" v-model="checkRules.checkString.max" size="mini" :min="1"
                             :max="4000"
                             controls-position="right"
                             class="number"></el-input-number>
          </div>
          <div class="custom-rule">
            <el-radio @change="changeHandler" v-model="ruleName" label="checkNumber">整数</el-radio>
            <span>范围：</span>
            <el-input-number @change="changeHandler" v-model="checkRules.checkNumber.min" size="mini"
                             controls-position="right" class="number"></el-input-number>
            ~
            <el-input-number @change="changeHandler" v-model="checkRules.checkNumber.max" size="mini"
                             controls-position="right" class="number"></el-input-number>
          </div>
          <div class="custom-rule">
            <el-radio @change="changeHandler" v-model="ruleName" label="checkDecimal">小数</el-radio>
            <span>范围：</span>
            <el-input-number @change="changeHandler" v-model="checkRules.checkDecimal.min"
                             :precision="checkRules.checkDecimal.precision" size="mini" controls-position="right"
                             class="number"></el-input-number>
            ~
            <el-input-number @change="changeHandler" v-model="checkRules.checkDecimal.max"
                             :precision="checkRules.checkDecimal.precision" size="mini" controls-position="right"
                             class="number"></el-input-number>
            <br/>
            <span style="margin-left: 90px">精度：</span>
            <el-input-number @change="changeHandler" v-model="checkRules.checkDecimal.precision" size="mini" :min="0"
                             :max="10" controls-position="right"
                             class="number"></el-input-number>
            <span style="color: #999;margin-left: 6px;font-size: 12px">（小数位）</span>
          </div>
        </template>
      </el-form>
      <div class="selected" slot="reference">
        <el-tag class="required" size="mini">{{requiredRule.required?requiredRule.label:'非'+requiredRule.label}}
        </el-tag>
        <el-tag class="custom" size="mini" v-show="customRule.required && ruleName">
          {{customRule.required?customRule.label:'非'+customRule.label}}
        </el-tag>
      </div>
    </el-popover>
    <div v-if="readonly" class="selected">
      <el-tag class="required" :type="requiredRule.required?'':'info'" size="mini">
        {{requiredRule.required?requiredRule.label:'非'+requiredRule.label}}
      </el-tag>
      <el-tag class="custom" size="mini" v-show="customRule.required && ruleName">
        {{customRule.required?customRule.label:'非'+customRule.label}}
      </el-tag>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RuleConfig',
    props: {
      value: null,
      readonly: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    watch: {
      value(val) {
        this.rules = val
      }
    },
    created() {
      if (typeof this.value === 'string') {
        this.resultType = 'string'
        let inputValue = this.value
        if (inputValue === '') {
          inputValue = '[]'
        }
        this.rules = JSON.parse(inputValue)
      } else {
        this.resultType = 'json'
        this.rules = this.value
      }
      for (const v in this.rules) {
        const inputRule = this.rules[v]
        if (!inputRule.validator) {
          // console.log('必填')
          this.requiredRule.required = inputRule.required
          // console.log(this.requiredRule.required)
        } else {
          // console.log('校验规则')
          this.ruleName = inputRule.validator
          const rule = this.checkRules[inputRule.validator]
          this.customRule.required = true

          if (inputRule.min) {
            rule.min = inputRule.min
          }
          if (inputRule.max) {
            rule.max = inputRule.max
          }
          if (inputRule.precision) {
            rule.precision = inputRule.precision
          }

          this.changeHandler()
        }
      }
    },
    data() {
      return {
        ruleName: null,
        rules: [],
        requiredRule: { required: false, type: 'string', label: '必填', message: '字段值不能为空', trigger: 'blur' },
        customRule: { required: false, label: '校验规则' },
        resultType: 'json',
        checkRules: {
          checkNameEN: {
            validator: 'checkNameEN',
            label: '英文姓名',
            type: 'string',
            trigger: 'blur'
          }, checkNameZH: {
            validator: 'checkNameZH',
            label: '中文姓名',
            type: 'string',
            trigger: 'blur'
          }, checkIDCard: {
            validator: 'checkIDCard',
            label: '身份证号码',
            type: 'string',
            trigger: 'blur'
          }, checkMobile: {
            validator: 'checkMobile',
            label: '手机号码',
            type: 'string',
            trigger: 'blur'
          }, checkPhone: {
            validator: 'checkPhone',
            label: '手机号码',
            type: 'string',
            trigger: 'blur'
          }, checkPostalCode: {
            validator: 'checkPostalCode',
            label: '邮政编码',
            type: 'string',
            trigger: 'blur'
          }, checkAddress: {
            validator: 'checkAddress',
            label: '地址',
            type: 'string',
            trigger: 'blur'
          }, checkUrl: {
            validator: 'checkUrl',
            label: 'URL地址',
            type: 'string',
            trigger: 'blur'
          }, checkEmail: {
            validator: 'checkEmail',
            label: '邮箱',
            type: 'string',
            trigger: 'blur'
          }, checkIP: {
            validator: 'checkIP',
            label: 'IP地址',
            type: 'string',
            trigger: 'blur'
          }, checkPort: {
            validator: 'checkPort',
            label: 'IP端口',
            type: 'string',
            trigger: 'blur'
          }, checkNumber0: {
            validator: 'checkNumber0',
            label: '含零正整数',
            type: 'number',
            trigger: 'blur'
          }, checkNumber1: {
            validator: 'checkNumber1',
            label: '非零正整数',
            type: 'number',
            trigger: 'blur'
          }, checkString20: {
            validator: 'checkString20',
            label: '20字符',
            type: 'string',
            trigger: 'blur'
          }, checkString50: {
            validator: 'checkString50',
            label: '50字符',
            type: 'string',
            trigger: 'blur'
          }, checkString: {
            validator: 'checkString',
            label: '字符',
            type: 'string',
            trigger: 'blur',
            min: 1,
            max: 100
          }, checkStringZH: {
            validator: 'checkStringZH',
            label: '中文',
            type: 'string',
            trigger: 'blur',
            min: 1,
            max: 100
          }, checkStringEN: {
            validator: 'checkStringEN',
            label: '字符',
            type: 'string',
            trigger: 'blur',
            min: 1,
            max: 100
          }, checkNumber: {
            validator: 'checkNumber',
            label: '整数',
            type: 'number',
            trigger: 'blur',
            min: 1,
            max: 100
          }, checkDecimal: {
            validator: 'checkDecimal',
            label: '小数',
            type: 'number',
            trigger: 'blur',
            min: 1.00,
            max: 2.00,
            precision: 2
          }
        }
      }
    },
    methods: {
      changeHandler() {
        this.rules = []

        // 必填
        if (this.requiredRule.required) {
          if (this.customRule.required && this.ruleName) {
            const rule = this.checkRules[this.ruleName]
            if (rule.type) {
              this.requiredRule.type = rule.type
            }
          }
          this.rules.push(this.requiredRule)
        } else {
          this.rules.push({ required: false })
        }

        // 自定义验证规则
        if (this.customRule.required && this.ruleName) {
          const rule = this.checkRules[this.ruleName]
          this.customRule.label = rule.label
          this.rules.push(rule)
        } else {
          this.ruleName = null
        }

        if (this.resultType === 'json') {
          this.$emit('input', this.rules)
          this.$emit('change', this.rules)
        } else {
          const jsonStr = JSON.stringify(this.rules)
          // console.log('jsonStr', jsonStr)
          this.$emit('input', jsonStr)
          this.$emit('change', jsonStr)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .rule-config .selected {
    width: 200px;
    height: 36px;
    line-height: 32px;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    padding: 0px 6px;
  }

  .rule-config .selected .el-tag {
    margin-right: 4px;
    background-color: white;
  }

  .selected .el-tag {
    margin-right: 2px;
  }

  .custom-rule {
    margin-bottom: 5px;
  }

  ::v-deep .el-divider__text {
    padding: 0px;
    font-weight: bold;
    color: #ccc;
  }

  ::v-deep .el-form-item__content {
    margin-bottom: 0px !important;
  }

  ::v-deep .field-type {
    margin-left: 20px;
  }

  ::v-deep .field-type .el-radio {
    width: 32px;
    line-height: 2;
  }

  ::v-deep .el-radio {
    width: 90px;
    line-height: 2;
  }

  ::v-deep .el-input-number.is-controls-right .el-input__inner {
    padding-left: 5px;
    padding-right: 30px;
  }

  ::v-deep .custom-rule .el-radio {
    width: 60px;
  }

  ::v-deep .el-radio:hover {
    color: #1890ff;
  }

  ::v-deep .number {
    width: 100px;
  }
</style>
