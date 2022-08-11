<template>
<div>
  单点登录中...

  <el-dialog
      title="注册新用户"
      ref="registerBox"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="700px"
      :before-close="handleClose"
    >
      <Register v-if="dialogVisible" :account="account" :phone="phone" @ok="okHandle"></Register>
    </el-dialog>
</div>
</template>

<script>
import {
    login,
    logout,
    getInfo,
    ssologin
} from '@/api/user'
import Register from './register.vue'

export default {
    name: 'SsoLogin',
    components: {Register },
    data() {
        return {
          dialogVisible: false,
          //注册
          account: '', // 账号
          accountType: 'PERPETUAL',
          password: '',
          checkPass: '',
          nickname: '', // 昵称
          sex: '', // 性别
          birthday: '', // 生日
          phone: '', // 电话
          email: '', // 邮箱
          idNumber: ''
        }
    },
    created() {
        if (this.$route.query.token) {
          const ssoToken = this.$route.query.token
          console.log('sso登录', 'ssoToken', ssoToken)
          //这里在vuex里定义了，其实是在vuex中调用了cookie接口，存到了cookie
          // this.$store.dispatch("user/ssologin", ssoToken)
          ssologin({ ssoToken: ssoToken }).then(response => {
            console.log('response',response)
            const { data } = response
            //未注册
            if('NOT_REGISTER' === data.state){
              this.account = data.account
              this.phone = data.phone

              console.log('account',this.account)

              this.dialogVisible = true
              // 弹出注册页面
            }else{
              // this.loading = true
              console.log('开始第三方登录....')

              this.$store.dispatch("user/ssologin", ssoToken).then(() => {
                // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                console.log('第三方登录成功....')
                this.$router.push({
                  path: '/dashboard' || '/',
                  query: this.otherQuery
                })
                // this.loading = false
              })
              .catch(() => {
                // this.loading = false
                console.log('第三方登录失败....')
              })
            }
          }).catch(error => {
            console.log('error',error)
          })
          // 跳转到首页
          // this.$router.push({path:"/"})
        } else {
            //  跳转到登录页
            console.log('not sso登录')
            //  this.$router.push({path:"/"})
        }
    },
    methods: {
      handleClose(done) {
        done()
      },
      okHandle(){
        this.$router.go(0);
      }
    }
}
</script>

<style lang="scss" scoped>
  ::v-deep .el-dialog__body{
    padding:10px 20px;
  }
</style>