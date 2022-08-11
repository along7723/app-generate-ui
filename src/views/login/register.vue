<template>
  <div>
    <el-alert
      v-if="this.account===''"
      :closable="false"
      title="在本系统注册的用户将同步到统一门户平台，统一门平台中可以使用手机号码登录，密码将统一设置为统一门户平台默认密码。本系统的密码是独立的，可以单独登录本系统。也可以在统一门户平台进行单点登录。"
      type="info"
      effect="dark">
    </el-alert>
    <el-alert
      v-else
      :closable="false"
      title="您是来自统一门户平台的账号，请完善本系统的注册资料后再使用，本系统的密码是独立的，可以单独登录本系统。也可以在统一门户平台进行单点登录。"
      type="info"
      effect="dark">
    </el-alert>
    <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-registerForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input
            v-model="registerForm.account"
            autoComplete="off"
            :disabled="this.account!==''"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            auto-complete="new-password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="registerForm.checkPass"
            auto-complete="new-password"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input
            v-model="registerForm.phone"
            :disabled="this.phone!==''"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="registerForm.email"
            autoComplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号类型" prop="roleName">
          <code-select
            v-model="registerForm['roleName']"
            dic="registerRoleName"
            type="radio-button"
          />
        </el-form-item>
        <!--企业信息-->
        <el-form-item
          v-if="registerForm.roleName === 'company'"
          label="信用代码"
          prop="idNumber"
          :rules="[
            { required: true, message: '请输入18位的信用代码', trigger: 'blur',max:18,min:18 }
          ]"
        >
          <el-input
            v-model="registerForm.idNumber"
            placeholder="统一社会信用代码/纳税人识别号"
          ></el-input>
        </el-form-item>
        <el-form-item
          v-if="registerForm.roleName === 'company'"
          label="企业名称"
          prop="nickname"
          :rules="[
            { required: true, message: '请输入企业名称', trigger: 'blur' }
          ]"
        >
          <el-input
            v-model="registerForm.nickname"
            placeholder="企业名称"
          ></el-input>
        </el-form-item>
        <!--个人信息-->
        <el-form-item
          v-if="registerForm.roleName === 'personal' || registerForm.roleName === 'expert'"
          label="证件号码"
          prop="idNumber"
        >
          <el-input v-model="registerForm.idNumber" placeholder="身份证号/或其它证件号"></el-input>
        </el-form-item>
        <el-form-item
          v-if="registerForm.roleName === 'personal' || registerForm.roleName === 'expert'"
          label="姓名"
          prop="nickname"
          :rules="[
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]"
        >
          <el-input v-model="registerForm.nickname" placeholder="姓名"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        <el-button @click="gotoLogin">已有账号去登录</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
  </div>
</template>

<script>
  // import { validUsername } from '@/utils/validate'
  import SocialSign from './components/SocialSignin'
  import defaultSettings from '@/settings'
  import codeSelect from '@/components/Sys/CodeSelect'
  import { registerUser, checkUserAccount ,checkUserPhone,checkUserEmail} from './api'

  export default {
    name: 'Register',
    components: { SocialSign, codeSelect },
    props: {
      account: {
        type: String,
        default: '',
        required: false
      },
      phone: {
        type: String,
        default: '',
        required: false
      }
    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('用户名不能少于3个字符'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能少于6个字符'))
        } else {
          callback()
        }
      }
      return {
        dialogVisible: false,
        title: defaultSettings.title,
        passwordType: 'password',
        capsTooltip: false,
        loading: false,
        showDialog: false,
        redirect: undefined,
        otherQuery: {},

        //注册
        registerForm: {
          account: this.account, // 账号
          accountType: 'PERPETUAL',
          password: '',
          checkPass: '',
          nickname: '', // 昵称
          sex: '', // 性别
          birthday: '', // 生日
          phone: this.phone, // 电话
          email: '', // 邮箱
          idNumber: ''
        },
        //注册验证
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { validator: this.checkUserAccountString, trigger: 'blur' }
          ],
          roleName: [
            { required: true, type: 'string', message: '请选择账号类型', trigger: 'blur', 'label': '必填' }
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
             { validator: this.checkUserPhoneString, trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入电子邮箱', trigger: 'blur' },
            { validator: this.checkUserEmailString, trigger: 'blur' }
          ],
          idNumber: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: this.validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请再次确认密码', trigger: 'blur' },
            { validator: this.validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          const query = route.query
          if (query) {
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
          }
        },
        immediate: true
      },
      'registerForm.roleName'(val, olde) {
        if ((val == 'personal' && olde == 'expert') || (val == 'expert' && olde == 'personal')) {
          return
        }
        this.registerForm.sex = ''
        this.registerForm.birthday = ''
        this.registerForm.idNumber = ''
        this.registerForm.nickname = ''
      }
    },
    created() {
    },
    mounted() {
      console.log('页面高度：' + document.documentElement.clientHeigh)
    },
    methods: {
      handleClose(done) {
        done()
      },
      toRegister() {
        this.dialogVisible = true
      },
      gotoLogin(){
        this.$router.push('/login')
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            registerUser(this.registerForm).then(response => {
              if (response.code === 200) {
                this.$confirm('注册成功！', '注册成功', {
                  type: 'success', callback: action => {
                    this.dialogVisible = false
                    this.$refs[formName].resetFields()

                    this.$emit('ok')
                  }
                })
              } else {
                this.$confirm('注册失败！失败原因：' + response.message)
                return
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },

      checkCapslock(e) {
        const { key } = e
        this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z'
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      checkUserAccountString(rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入登录账号'))
        } else {
          checkUserAccount({ account: value }).then((response) => {
            if (response.data === '1') {
              callback(new Error('该账户已经存在！'))
            } else {
              callback()
            }
          })
          // callback();
        }
      },
      checkUserPhoneString(rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入电话号码'))
        } else {
          checkUserPhone({ phone: value }).then((response) => {
            if (response.data === '1') {
              callback(new Error('该电话号码已经存在！'))
            } else {
              callback()
            }
          })
          // callback();
        }
      },
      checkUserEmailString(rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入电子邮箱'))
        } else {
          checkUserEmail({ email: value }).then((response) => {
            if (response.data === '1') {
              callback(new Error('该电子邮箱已经存在！'))
            } else {
              callback()
            }
          })
          // callback();
        }
      },
      validatePass(rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (value.length < 6) {
          callback(new Error('密码长度不能小于6个字符'))
        } else {
          if (this.registerForm.checkPass !== '') {
            this.$refs.registerForm.validateField('checkPass')
          }
          callback()
        }
      },
      validatePass2(rule, value, callback) {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      },
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      }
    }
  }
</script>


<style lang="scss" scoped>
  .dialog-footer{
    text-align:center;
    margin-top:40px;
  }
  ::v-deep .el-alert{
    margin-bottom:15px;
  }
</style>
