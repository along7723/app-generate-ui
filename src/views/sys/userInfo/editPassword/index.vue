<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>修改密码</span>
    </div>

    <div class="text item" style="min-width: 730px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item required label="旧密码" prop="oldPassword">
          <el-input type="password" v-model="ruleForm.oldPassword"></el-input>
        </el-form-item>
        <el-form-item required label="新密码" prop="newPassword">
          <el-input type="password" v-model="ruleForm.newPassword"></el-input>
        </el-form-item>
        <el-form-item required label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>


  </el-card>

</template>
<script>
  import { editPassword } from './api'
  import CodeSelect from '@/components/Sys/CodeSelect'

  export default {
    components: {
      CodeSelect
    },
    data() {
      return {
        ruleForm: {
          oldPassword: '',
          newPassword: '',
          rePassword: ''
        },

        rules: {
          oldPassword: [
            { required: true, message: '请输入旧密码', trigger: 'blur' }
          ],
          newPassword: [
            { validator: this.validatePass, trigger: 'blur' }
          ], rePassword: [
            { validator: this.validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      validatePass(rule, value, callback) {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (value.length < 6 || value.length > 18) {
            callback(new Error('密码长度在6到18字符'))
          } else if (this.ruleForm.rePassword !== '') {
            this.$refs.ruleForm.validateField('rePassword')
          }
          callback()
        }
      },
      validatePass2(rule, value, callback) {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            editPassword(this.ruleForm).then(response => {
              if (response.success) {
                this.$message.success('修改成功')
              }
            })
          }
        })
      }
    }
  }


</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 70%;
    min-width: 900px;
    margin-left: 15%;
    margin-top: 30px;
  }
</style>
