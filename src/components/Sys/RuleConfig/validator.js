const validator = {
  // 转换validator为对应函数
  transferFieldRules: (fields) => {
    // console.log('=======transferFieldRules========')
    for (const j in fields) {
      const field = fields[j]
      // console.log('===============field.label.', field.label, field.rules)
      if (field.rules) {
        for (const i in field.rules) {
          const rule = field.rules[i]
          if (rule && rule.validator) {
            if (typeof rule.validator === 'string') {
              rule.validator = validator[rule.validator]
            }
          }
        }
      }
    }
    return fields
  },
  checkIDCard: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    let code = value
    // 身份证号合法性验证
    // 支持15位和18位身份证号
    // 支持地址编码、出生日期、校验位验证
    var city = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江 ',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北 ',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏 ',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外 '
    }
    let row = true
    let msg = '验证成功'
    if (code.length !== 15 && code.length !== 18) {
      row = false
      msg = '身份证号长度只能为15或18位，实际长度' + code.length
    } else if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
      row = false
      msg = '身份证号格式错误'
    } else if (!city[code.substr(0, 2)]) {
      row = false
      msg = '身份证号地址编码错误'
    } else {
      // 18位身份证需要验证最后一位校验位
      // if (code.length === 18) {
      //   code = code.split('')
      //   // ∑(ai×Wi)(mod 11)
      //   // 加权因子
      //   var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      //   // 校验位
      //   var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
      //   var sum = 0
      //   var ai = 0
      //   var wi = 0
      //   for (var i = 0; i < 17; i++) {
      //     ai = code[i]
      //     wi = factor[i]
      //     sum += ai * wi
      //   }
      //   if (parity[sum % 11] !== code[17].toUpperCase()) {
      //     row = false
      //     msg = '身份证号校验位错误'
      //   }
      // }
    }

    if (!row) {
      callback(new Error(msg))
    } else {
      callback()
    }
  },
  checkMobile: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^1[3456789]\d{9}$/
    if (!regExp.test(value)) {
      callback(new Error('请输入正确的手机号码'))
    } else {
      callback()
    }
  },
  checkPhone: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp1 = /^1[3456789]\d{9}$/

    console.log('regExp1', regExp1, 'value', value)

    const regExp2 = /^(0[0-9]{2,3}\-)([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
    if (!regExp1.test(value) && !regExp2.test(value)) {
      callback(new Error('请输入正确的手机号码或固定电话'))
    } else {
      callback()
    }
  },
  checkPostalCode: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^[1-9][0-9]{5}$/
    if (!regExp.test(value)) {
      callback(new Error('请输入6位邮政编码'))
    } else {
      callback()
    }
  },
  checkAddress: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const min = 6
    const max = 100
    if (value.length > max || value.length < min) {
      callback(new Error('地址长度应在[' + min + ',' + max + ']之间，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkEmail: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    if (!regExp.test(value)) {
      callback(new Error('请输入正确的邮箱地址'))
    } else {
      callback()
    }
  },
  checkUrl: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
    if (!regExp.test(value)) {
      callback(new Error('请输入正确的URL地址'))
    } else {
      callback()
    }
  },
  checkIP: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    if (!regExp.test(value)) {
      callback(new Error('请输入正确的IP地址'))
    } else {
      callback()
    }
  },
  checkPort: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/
    if (!regExp.test(value)) {
      callback(new Error('请输入正确的IP端口'))
    } else {
      callback()
    }
  },
  checkString20: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const max = 20
    if (value.length > max) {
      callback(new Error('字符长度不能大于20，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkString50: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const max = 50
    if (value.length > max) {
      callback(new Error('字符长度不能大于50，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkString: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    if (value.length > rule.max || value.length < rule.min) {
      callback(new Error('字符长度应在[' + rule.min + ',' + rule.max + ']之间，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkStringEN: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^[a-zA-Z]$/
    if (!regExp.test(value)) {
      callback(new Error('只能输入英文字符，且不能有空格'))
    } else if (value.length > rule.max || value.length < rule.min) {
      callback(new Error('字符长度应在[' + rule.min + ',' + rule.max + ']之间，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkStringZH: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    // const regExp = /^[\u4e00-\u9fa5]$/
    const regExp = /^[\u0391-\uFFE5]+$/
    if (!regExp.test(value)) {
      callback(new Error('只能输入中文字符，且不能有空格'))
    } else if (value.length > rule.max || value.length < rule.min) {
      callback(new Error('字符长度应在[' + rule.min + ',' + rule.max + ']之间，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkNameZH: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    // const regExp = /^[\u4e00-\u9fa5]$/
    const regExp = /^(?:[\u4e00-\u9fa5]+)(?:●[\u4e00-\u9fa5]+)*$/
    const min = 2
    const max = 50
    if (!regExp.test(value)) {
      callback(new Error('中文名，只能输入汉字与“●”'))
    } else if (value.length > max || value.length < min) {
      callback(new Error('中文名长度应在[' + min + ',' + max + ']之间，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkNameEN: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    // const regExp = /^[\u4e00-\u9fa5]$/
    const regExp = /^[a-zA-Z0-9]+\s?[\.·\-()a-zA-Z]*[a-zA-Z]+$/
    const min = 1
    const max = 200
    if (!regExp.test(value)) {
      callback(new Error('英文名只能包含字母、数字、字符间支持一个空格、“.”、“●”、“-”'))
    } else if (value.length > max || value.length < min) {
      callback(new Error('英文名长度应在[' + min + ',' + max + ']之间，实际长度' + value.length))
    } else {
      callback()
    }
  },
  checkNumber1: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /(^[1-9]\d*$)/
    if (!regExp.test(value)) {
      callback(new Error('只能输入大于0的正整数'))
    } else {
      callback()
    }
  },
  checkNumber0: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^([0]|[1-9][0-9]*)$/
    if (!regExp.test(value)) {
      callback(new Error('只能输入正整数（含0）'))
    } else {
      callback()
    }
  },
  checkNumber: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    const regExp = /^-?\\d+$/
    if (!regExp.test(value)) {
      callback(new Error('只能输入整数值'))
    } else if (value > rule.max || value < rule.min) {
      callback(new Error('数值只能在[' + rule.min + ',' + rule.max + ']之间'))
    } else {
      callback()
    }
  },
  checkDecimal: (rule, value, callback) => {
    if (!value) {
      return callback()
    }
    // TODO 精度未实现
    const regExp = /^[-\+]?\d+(\.\d+)?$/
    if (!regExp.test(value)) {
      callback(new Error('只能输入浮点型数值'))
    } else if (value > rule.max || value < rule.min) {
      callback(new Error('数值只能在[' + rule.min + ',' + rule.max + ']之间'))
    } else {
      callback()
    }
  }
}
export default validator
