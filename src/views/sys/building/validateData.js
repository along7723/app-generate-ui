//字符长度
//{min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
//数字范围
// {validator: ((rule, value, callback) => {validatePositiveInteger(rule, value, callback, undefined, undefined)}), trigger: 'blur'}
// {validator: ((rule, value, callback) => {validatePositiveInteger(rule, value, callback, min, max)}), trigger: 'blur'}
/**
 * 英文和数字
 * @param {*} s
 */
export function validateENAndNum(rule, value, callback) {
  let regMobile = /^[a-zA-Z0-9]$/
  if (!value) {
    callback()
  } else if (!regMobile.test(value)) {
    callback(new Error('请输入正确的字符，不得包含特殊符号'))
  } else if (min || max) {
    validateCharacterLength(rule, value, callback)
  } else {
    callback()
  }
}

/**
 * 英文
 * @param {*} s
 */
export function validateEN(rule, value, callback) {
  let regMobile = /^[a-zA-Z]$/
  if (!value) {
    callback()
  } else if (!regMobile.test(value)) {
    callback(new Error('请输入正确的英文'))
  } else if (min || max) {
    validateCharacterLength(rule, value, callback)
  } else {
    callback()
  }
}

/**
 * 中文
 * @param {*} s
 */
export function validateZH(rule, value, callback) {
  let regMobile = /^[\u4e00-\u9fa5]$/
  if (!value) {
    callback()
  } else if (!regMobile.test(value)) {
    callback(new Error('请输入正确的中文'))
  } else if (min || max) {
    validateCharacterLength(rule, value, callback)
  } else {
    callback()
  }
}

/**
 * URL
 * @param {*} s
 */
export function validateUrl(rule, value, callback) {
  let regMobile = /^[a-zA-z]+:\/\/[^\s]*$/
  if (!value) {
    callback()
  } else if (!regMobile.test(value)) {
    callback(new Error('请输入正确的网络地址'))
  } else {
    callback()
  }
}

/**
 * 联系电话
 * @param {*} s
 */
export function validateMobile(rule, value, callback) {
  let regMobile = /^1[0-9]{10}$/
  if (!value) {
    callback()
  } else if (!regMobile.test(value)) {
    callback(new Error('请输入正确的手机号码'))
  } else {
    callback()
  }
}

/**
 * 身份证号码
 * @param {*}
 */
export function validateIDCard(rule, value, callback) {
  if (!value) {
    return callback()
  }
  //let regEmail = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  let regEmail = /^(\d{17})([0-9]|X)$/
  if (!value) {
    callback()
  } else if (!regEmail.test(value)) {
    callback(new Error('请输入正确的身份证号!如果结尾为"X"请用大写'))
  } else {
    callback()
  }
}

/**
 * 字符长度
 * @param {*}
 */
export function validateCharacterLength(rule, value, callback) {
  if (!value) {
    return callback()
  }
  if (min && max) {
    if (value.length >= min && value.length <= max) {
      callback()
    } else {
      callback(new Error('请输入规定长度字符，长度为【' + min + ',' + max + '】'))
    }
  } else if (min) {
    if (value.length >= min) {
      callback()
    } else {
      callback(new Error('请输入规定长度字符，长度大于或等于【' + min + '】'))
    }
  } else if (max) {
    if (value.length <= max) {
      callback()
    } else {
      callback(new Error('请输入规定长度字符，长度小于或等于【' + max + '】'))
    }
  } else {
    callback()
  }
}

export function checkString20(rule, value, callback) {
  if (!value) {
    return callback()
  }
  const min = 1
  const max = 20
  console.log('checkString20-rule', rule)
  console.log('checkString20-value', value)
  if (value.length >= min && value.length <= max) {
    callback()
  } else {
    callback(new Error('请输入规定长度字符，长度为【' + min + ',' + max + '】'))
  }
}

/**
 * 邮箱
 * @param {*}
 */
export function validateEmail(rule, value, callback) {
  if (!value) {
    return callback()
  }
  //let regEmail = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
  let regEmail = /^([a-zA-Z0-9]+[a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
  if (!value) {
    callback()
  } else if (!regEmail.test(value)) {
    callback(new Error('请输入正确的邮箱'))
  } else {
    callback()
  }
}

//邮政编码
export function validatePostalCode(rule, value, callback) {
  if (!value) {
    return callback()
  }
  const re = /^[1-9]\d{5}(?!\d)$/
  const rsCheck = re.test(value)
  if (!rsCheck) {
    callback(new Error('请输入正确的邮政编码'))
  } else {
    callback()
  }
}

//IP
export function validateIP(rule, value, callback) {
  if (!value) {
    return callback()
  }
  const re = /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/
  const rsCheck = re.test(value)
  if (!rsCheck) {
    callback(new Error('请输入正确的IP'))
  } else {
    callback()
  }
}

//负整数
export function validateNegativeNumber(rule, value, callback) {
  if (!value) {
    return callback()
  }
  const re = /^\-\d*$/
  const rsCheck = re.test(value)
  if (!rsCheck) {
    callback(new Error('请输入负整数'))
  }
  validatePositiveInteger(rule, value, callback)
}

//正整数
export function validateNumber(rule, value, callback) {
  if (!value) {
    return callback()
  }
  const re = /^\d*$/
  const rsCheck = re.test(value)
  if (!rsCheck) {
    callback(new Error('请输入正整数'))
  }
  validatePositiveInteger(rule, value, callback)
}

//数字
export function validatePositiveInteger(rule, value, callback, min, max) {
  if (!value) {
    return callback()
  }
  if (!Number(value)) {
    callback(new Error('请输入正确的数字'))
  } else {
    if (min && max) {
      if (value >= min && value <= max) {
        callback()
      } else {
        callback(new Error('请输入正确的数字，值为【' + min + ',' + max + '】'))
      }
    } else if (min) {
      if (value >= min) {
        callback()
      } else {
        callback(new Error('请输入正确的数字，值大于或等于【' + min + '】'))
      }
    } else if (max) {
      if (value <= max) {
        callback()
      } else {
        callback(new Error('请输入正确的数字，值小于或等于【' + max + '】'))
      }
    } else {
      callback()
    }
  }
}
