<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>个人信息</span>
    </div>
    <el-row type="flex">
      <el-col style="max-width:120px;">
        <div class="text item" style="text-align: center;">
          <img src="./head.png" v-if="ruleForm.avatar===''" style="width: 100px;height: 100px;">
          <img :src="ruleForm.avatar" v-if="ruleForm.avatar!=''" style="width: 100px;height: 100px;">
          <div style="margin-top: 10px;">
            <el-upload
              style="display: inline"
              :show-file-list="false"
              :on-success="onSuccess"
              :on-error="onError"
              :before-upload="beforeUpload"
              action="http://127.0.0.1:8000/sys/manage/imageUtil/upload">
              <el-button size="mini" type="success">{{btnText}}</el-button>
            </el-upload>
          </div>
        </div>

      </el-col>

      <el-col>

        <div class="text item" style="border-left: 1px gray solid;min-width: 730px;">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="ruleForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <code-select :key="ruleForm.sex" v-model="ruleForm.sex" placeholder="请选择性别" dic="Sex"/>
            </el-form-item>
            <el-form-item label="生日" prop="birthday">
              <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" format="yyyy-MM-dd"
                              v-model="ruleForm.birthday"/>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

  </el-card>

</template>
<script>
  import { getMyInfo, editMyInfo, editMyHeadImg } from './api'
  import CodeSelect from '@/components/Sys/CodeSelect'

  export default {
    components: {
      CodeSelect
    },
    data() {
      return {
        ruleForm: {
          userId: '',
          nickname: '',
          sex: '',
          birthday: '',
          phone: '',
          email: '',
          avatar: ''
        }, btnText: '修改头像',
        rules: {
          nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在11字符' }
          ], email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址' }
          ], birthday: [
            { required: true, message: '请选择出生日期', trigger: 'blur' }
          ], sex: [
            { required: true, message: '请选择性别', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            editMyInfo(this.ruleForm).then(response => {
              if (response.success) {
                this.$message.success('修改成功')
              }
            })
          }
        })
      }, onSuccess(response, file, fileList) {
        this.btnText = '修改头像'
        this.ruleForm.avatar = URL.createObjectURL(file.raw)
        if (response.success) {
          console.log('userId', this.ruleForm.userId)
          this.ruleForm.avatar = response.data.imageId
          editMyHeadImg(this.ruleForm).then(response2 => {
            this.ruleForm.avatar = 'http://127.0.0.1:8000/sys/manage/imageUtil/showImg?id=' + response.data.imageId
            if (response2.success) {
              this.$message.success('修改头像成功')
            }
          })
        }
      },
      onError(err, file, fileList) {
        this.btnText = '数据导入'
      },
      beforeUpload(file) {
        const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
        const isLt5M = file.size / 1024 / 1024 < 5

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        if (isJPG && isLt5M) {
          this.btnText = '正在导入'
        }
        return isJPG && isLt5M
      },
      getInfo() {
        getMyInfo().then(response => {
          const userInfo = response.data
          this.ruleForm.nickname = userInfo.nickname
          this.ruleForm.userId = userInfo.userId
          this.ruleForm.sex = userInfo.sex
          this.ruleForm.phone = userInfo.phone
          this.ruleForm.email = userInfo.email
          this.ruleForm.avatar = 'http://127.0.0.1:8000/sys/manage/imageUtil/showImg?id=' + userInfo.avatar
          this.ruleForm.birthday = userInfo.birthday
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
