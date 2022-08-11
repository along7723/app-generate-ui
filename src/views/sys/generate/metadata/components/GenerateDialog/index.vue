<template>
  <el-dialog title="生成代码" :visible.sync="menuVisible" width="40%">
    <el-form ref="detailForm" :model="menuDetail" :rules="rules" label-width="120px" style="width:100%">
      <el-form-item label="菜单管理" prop="menuManage">
        <el-radio-group v-model="menuDetail.menuManage">
          <el-radio label="1" :disabled="menuDisabled && menuDisabledTwo">生成菜单</el-radio>
          <el-radio label="2" :disabled="menuDisabled && menuDisabledTwo">指定菜单</el-radio>
          <el-radio label="3" :disabled="menuDisabled">不生成菜单</el-radio>
        </el-radio-group>
      </el-form-item>
      <template v-if="menuDetail.menuManage==1">
        <el-form-item label="父菜单" prop="parentMenuId">
          <code-select :key="menuDetail.tId" v-model="menuDetail.parentMenuId" placeholder="请选择父菜单" :use-cache="false"
                       dic="SysMenu" type="tree" :disabled="menuDisabled"/>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="菜单名称" prop="menuName">
              <el-input v-model="menuDetail.menuName" :disabled="menuDisabled"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="菜单图标" prop="iconName">
              <el-input v-model="menuDetail.iconName" :disabled="menuDisabled"/>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
      <template v-if="menuDetail.menuManage==2">
        <el-form-item label="请选择菜单" prop="parentMenuId">
          <code-select :key="menuDetail.tId" v-model="menuDetail.parentMenuId" placeholder="请选择父菜单" :use-cache="false"
                       dic="SysMenu" type="tree"/>
        </el-form-item>
      </template>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="表注释" prop="tComment">
            <el-input v-model="menuDetail.tComment"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模块名称" prop="moduleFullName">
            <el-input v-model="menuDetail.moduleFullName"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="包名" prop="packageName">
            <el-input v-model="menuDetail.packageName"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="URL" prop="urlMapping">
            <el-input v-model="menuDetail.urlMapping"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="后端生成路径" prop="codePath">
        <el-input v-model="menuDetail.codePath"/>
      </el-form-item>
      <el-form-item label="前端生成路径" prop="frontPath">
        <el-input v-model="menuDetail.frontPath"/>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button type="primary" @click="submitForm('detailForm')">提交</el-button>
      <el-button @click="resetForm('detailForm')">重置</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import {
    generate,
    getCodeMenu,
    getCodePath
  } from '@/views/sys/generate/metadata/table/api.js'

  export default {
    name: 'GenerateDialog',
    data() {
      return {
        menuDisabled: false, // 当后台返回的是生成新的菜单时
        menuDisabledTwo: false, // 当后台返回的是指定菜单时
        menuVisible: false, // 菜单的弹框状态
        menuDetail: {
          tId: '', // 表ID
          menuManage: '1', // 菜单管理
          parentMenuId: '', // 父级ID
          menuName: '', // 菜单名称
          iconName: '', // 图标名称

          tComment: '', // 表注解
          moduleFullName: '', // 模块名称
          packageName: '', // 包名称
          urlMapping: '', // controller url mapping

          codePath: '', // 后端路径
          frontPath: '' // 前端路径
        }
      }
    },
    computed: {
      rules() {
        return {
          menuManage: [{
            required: true,
            message: '请选择操作菜单类别',
            trigger: 'change'
          }],
          menuName: [{
            required: true,
            message: '请输入菜单名称',
            trigger: 'blur'
          }],

          tComment: [{
            required: true,
            message: '请输入表注释',
            trigger: 'blur'
          }],
          moduleFullName: [{
            required: true,
            message: '请输入模块名称',
            trigger: 'blur'
          }],
          packageName: [{
            required: true,
            message: '请输入包名称',
            trigger: 'blur'
          }],
          urlMapping: [{
            required: true,
            message: '请输入controller url mapping',
            trigger: 'blur'
          }],
          codePath: [{
            required: true,
            message: '请输入后端生成路径',
            trigger: 'blur'
          }],
          frontPath: [{
            required: true,
            message: '请输入前端生成路径',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      init(id) {
        if (!id) {
          return this.$message.error('表ID不能为空')
        } else {
          this.menuDisabled = false
          this.menuDetail.tId = id
          this.$nextTick(() => {
            this.getCodePath()
            this.getCodeMenu(id)
          })
        }
      },
      /**
       * 获取生成的路径信息--来自王淦
       */
      getCodePath() {
        getCodePath().then(response => {
          if (response.code === 200) {
            this.menuDetail.codePath = response.data.backstageAddress // 后端代码路径
            this.menuDetail.frontPath = response.data.frontAddress // 前端代码路径
          }
        })
      },
      /**
       * 获取菜单相关信息--来自黄玉刚
       * @param {String} id
       */
      getCodeMenu(id) {
        const that = this
        getCodeMenu(id).then(response => {
          if (response.code === 200) {
            this.menuVisible = true

            this.menuDetail.menuManage = response.data.menuManage || '3' // 菜单类别
            this.menuDetail.parentMenuId = response.data.parentId // 父级菜单的ID
            this.menuDetail.menuName = response.data.title // 菜单名称
            this.menuDetail.iconName = response.data.icon // 菜单图标
            this.menuDetail.tComment = response.data.tComment // 表注解
            this.menuDetail.moduleFullName = response.data.moduleFullName // 模块名称
            this.menuDetail.packageName = response.data.packageName // 包名称
            this.menuDetail.urlMapping = response.data.urlMapping // controller url mapping

            // // 处理已有数据
            // if (this.menuDetail.menuName) {
            //   this.menuDetail.menuManage = '1'
            // }

            if (this.menuDetail.menuManage == '1') {
              this.menuDisabled = true
              this.menuDisabledTwo = true
            } else if (this.menuDetail.menuManage == '2') {
              this.menuDisabled = true
              this.menuDisabledTwo = false
            } else {
              this.menuDisabled = false
              this.menuDisabledTwo = false
            }
          }
        })
      },
      /**
       * 提交表单
       * @param {String} formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let obj = {}
            if (this.menuDetail.menuManage == 1) {
              obj.parentMenuId = this.menuDetail.parentMenuId
              obj.menuName = this.menuDetail.menuName
              obj.iconName = this.menuDetail.iconName
              obj.codePath = this.menuDetail.codePath
              obj.frontPath = this.menuDetail.frontPath
            } else if (this.menuDetail.menuManage == 2) {
              obj.parentMenuId = this.menuDetail.parentMenuId
              obj.codePath = this.menuDetail.codePath
              obj.frontPath = this.menuDetail.frontPath
            }
            obj.tId = this.menuDetail.tId
            obj.menuManage = this.menuDetail.menuManage
            obj.codePath = this.menuDetail.codePath
            obj.frontPath = this.menuDetail.frontPath
            obj.tComment = this.menuDetail.tComment
            obj.moduleFullName = this.menuDetail.moduleFullName
            obj.packageName = this.menuDetail.packageName
            obj.urlMapping = this.menuDetail.urlMapping

            generate(obj).then(response => {
              this.$message.success('生成代码成功')
              this.menuVisible = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      /**
       * 重置表单
       * @param {String} formName
       */
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style lang="scss">
</style>
