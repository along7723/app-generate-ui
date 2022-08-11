<template>
  <div class="login-container">
    <div class="content-bg"></div>
    <div class="login_left_bg"></div>

    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">{{ title }}</h3>
      </div>

      <div class="content-container" style="padding: 30px 30px">
        <div>
          <el-form-item prop="username">
            <el-input
              prefix-icon="fa fa-user"
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
            />
          </el-form-item>

          <el-tooltip
            v-model="capsTooltip"
            content="Caps lock is On"
            placement="right"
            manual
          >
            <el-form-item prop="password">
              <el-input
                prefix-icon="fa fa-lock"
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
            </el-form-item>
          </el-tooltip>

          <el-row :gutter="10">
            <el-col :span="12">
              <el-button
                :loading="loading"
                type="primary"
                style="width: 100%; height: 40px"
                @click.native.prevent="handleLogin"
              >登录
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                type="warning"
                style="width: 100%; height: 40px"
                @click="toRegister"
              >注册
              </el-button>

            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="24">
               <el-link type="warning" @click="gotoPortal" style="margin-top:10px">使用统一门户平台账号登录</el-link>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-form>

    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business
      simulation! ! !
      <br/>
      <br/>
      <br/>
      <social-sign/>
    </el-dialog>

    <el-dialog
      title="注册新用户"
      ref="registerBox"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="700px"
      :before-close="handleClose"
    >
      <Register @ok="okHandle"></Register>
    </el-dialog>
  </div>
</template>

<script>
  // import { validUsername } from '@/utils/validate'
  import SocialSign from './components/SocialSignin'
  import defaultSettings from '@/settings'
  import codeSelect from '@/components/Sys/CodeSelect'
  import { registerUser, checkUserAccount } from './api'
  import Register from './register.vue'
  import { getSsoLoginUrl } from './api'

  export default {
    name: 'Login',
    components: { SocialSign, codeSelect,Register },
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
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, trigger: 'blur', validator: validateUsername }
          ],
          password: [
            { required: true, trigger: 'blur', validator: validatePassword }
          ]
        },
        passwordType: 'password',
        capsTooltip: false,
        loading: false,
        showDialog: false,
        redirect: undefined,
        otherQuery: {},

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
      }
    },
    created() {
    },
    mounted() {
      if (this.loginForm.username === '') {
        this.$refs.username.focus()
      } else if (this.loginForm.password === '') {
        this.$refs.password.focus()
      }
      console.log('页面高度：' + document.documentElement.clientHeigh)
    },
    destroyed() {
      // window.removeEventListener('storage', this.afterQRScan)
    },
    methods: {
      handleClose(done) {
        done()
      },
      okHandle(){
        this.dialogVisible = false
      },
      toRegister() {
        this.dialogVisible = true
      },
      gotoPortal(){

        getSsoLoginUrl().then((response) => {
            console.log('response',response)
            window.location.href=response.data
        })

        // let url = 'http://221.178.107.52:8085/#/checkLogin?appId=1407617569702227968&redirectUri='
        // url += encodeURIComponent('http://localhost:9600/#/sso-login')
        // url +='&ts='
        // const ts = new Date().getTime()
        // url += ts
        // url += '&sign=123'
        // console.log('url',url)
        // window.location.href=url
        //创建form表单
            // var parames = new Array();
            // parames.push({ name: "appId", value: "1407617569702227968"});
            // parames.push({ name: "redirectUri", value: "http://localhost:9600/#/sso-login"});
            // parames.push({ name: "ts", value: new Date().getTime()});
            // parames.push({ name: "sign", value: "123"});

            // var temp_form = document.createElement("form");
            // temp_form.action = 'http://221.178.107.52:8085/#/checkLogin';
            // //如需打开新窗口，form的target属性要设置为'_blank'
            // temp_form.target = "_self";
            // temp_form.method = "post";
            // temp_form.style.display = "none";
            // //添加参数
            // for (var item in parames) {
            //     var opt = document.createElement("textarea");
            //     opt.name = parames[item].name;
            //     opt.value = parames[item].value;
            //     temp_form.appendChild(opt);
            // }
            // document.body.appendChild(temp_form);
            // //提交数据
            // temp_form.submit();
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
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

      handleLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store
              .dispatch('user/login', this.loginForm)
              .then(() => {
                // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                this.$router.push({
                  path: '/dashboard' || '/',
                  query: this.otherQuery
                })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
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
  ::v-deep .el-dialog__body{
    padding:10px 20px;
  }
</style>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  

  .login-container {
    width: 100%;
    height: 100%;
    background-color: $bg;
    overflow: hidden;
    background-image: url("../../assets/images/login/login_bg3.png");
    background-size: cover;
    background-position: center;
    position: relative;

    .content-bg {
      background-image: url("../../assets/images/login/login_box_bg.png");
      opacity: 0.5; //透明度设置
      position: absolute;
      z-index: 1;
      width: 65%;
      height: 234px;
      bottom: 18%;
      right: 0;
    }

    .login_left_bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url("../../assets/images/login/login_left_bg.png");
      // background-image: url("../../assets/images/bg.jpg");
      background-size: cover;
      background-position: center;
      z-index: 2;
    }

    .login-form {
      position: absolute;
      z-index: 3;
      width: 65%;
      height: 234px;
      bottom: 18%;
      right: 0;

      .title-container {
        width: 100%;
        height: 60px;
        position: absolute;
        top: -60px;

        .title {
          width: 360px;
          margin: auto;
          margin-right: 20%;
        }
      }

      .content-container {
        opacity: 1; //透明度设置
        width: 360px;
        margin: auto;
        margin-right: 20%;

        ::v-deep .el-input {
          width: 100%;
          height: 40px;
        }

        ::v-deep .el-input__inner {
          -webkit-appearance: none;
          background-color: #ffffff;
          background-image: none;
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #606266;
          display: inline-block;
          font-size: inherit;
          height: 40px;
          line-height: 40px;
          outline: none;
          padding: 0 28px;
          -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          width: 100%;
        }
      }
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 32px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
        font-family: 幼圆;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }

    .thirdparty-button {
      position: absolute;
      right: 0;
      bottom: 6px;
    }

    @media only screen and (max-width: 470px) {
      .thirdparty-button {
        display: none;
      }
    }
  }
</style>
