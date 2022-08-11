<template>
  <div v-loading="loading" class="app-container">
    <el-row :gutter="10">
      <el-col :span="14">
        <div class="el-transfer-panel" style="height:900px;width:100%">
          <div class="el-transfer-panel__header">
            <span>第一步：选择待授权角色</span>
          </div>
          <div class="el-transfer-panel__body">
            <myRole :isRadioModel=true select-mode @row-select="roleSelect"/>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="el-transfer-panel" style="height:900px;width:100%">
          <div class="el-transfer-panel__header">
            <span>第二步：勾选/取消对应的菜单权限</span>
          </div>
          <manageMenu :check-menu="checkMenu" @menuRowChecked="menuRowChecked" @menuRowUnChecked="menuRowUnChecked"/>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="el-transfer-panel" style="height:900px;width:100%">
          <div class="el-transfer-panel__header">
            <span>第三步：勾选/取消对应的资源（按钮）权限</span>
          </div>
          <resource :check-menu="checkResource" @resourceRowChecked="resourceRowChecked"
                    @resourceRowUnchecked="resourceRowUnchecked"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import myRole from '@/views/sys/manage/role'
  import resource from '@/views/sys/manage/resource/empower'
  import manageMenu from '@/views/sys/manage/menu'
  import {
    queryAllPower,
    addRoleResource,
    delRoleResource,
    addRoleMenu,
    delRoleMenu
  } from './api'

  export default {
    name: 'UserPower',
    components: {
      myRole,
      resource,
      manageMenu
    },
    data() {
      const generateData = _ => {
        const data = []
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${i}`,
            disabled: i % 4 === 0
          })
        }
        return data
      }
      return {
        data: generateData(),
        value: [1, 4],
        roleIds: [],
        checkResource: [], // 资源
        checkMenu: [], // 菜单
        loading: false
      }
    },
    methods: {
      roleSelect(role) { // 角色取消
        this.roleIds = role.map(role => role.roleId)
        this.loading = true
        if (this.roleIds.length >= 1) {
          queryAllPower(this.roleIds).then(response => {
            this.checkMenu = response.data.menuList.map(role => role.menuId.toString())
            this.checkResource = response.data.resourceList.map(role => role.resourcesId)
            setTimeout(() => {
              this.loading = false
            }, 0.5 * 1000)
          })
          console.log(this.roleIds)
        } else {
          this.checkResource = []
          this.checkMenu = []
          setTimeout(() => {
            this.loading = false
          }, 0.5 * 1000)
        }
      },
      /**
       * 菜单选中
       * @param {Array} val 选中菜单的id数组
       */
      menuRowChecked(val) {

        if (this.roleIds.length > 0) {

          addRoleMenu({
            'ids': this.roleIds,
            'menuIds': val
          }).then(response => {
            if (response.data.length === 0) {
              return this.$message.success('增加角色菜单成功')
            }
            let resourceIdArr = [] // 菜单选中资源id数组
            response.data.forEach(item => {
              resourceIdArr.push(item.resourceId)
            })
            this.checkResource = this.checkResource.concat(resourceIdArr) // 合并已有资源id和菜单选中返回的资源id，用于前端渲染
            this.resourceRowChecked(resourceIdArr)
          })
        } else {
          this.$message.warning('请选择角色')
        }
      },
      /**
       * 菜单取消
       * @param {Array} 取消选中菜单的id数组
       */
      menuRowUnChecked(val) {
        if (this.roleIds.length > 0) {

          delRoleMenu({
            'ids': this.roleIds,
            'menuIds': val
          }).then(response => {
            if (response.data.length === 0) {
              return this.$message.success('取消角色菜单成功')
            }
            let resourceIdArr = [] // 取消菜单选中资源id数组
            response.data.forEach(item => {
              resourceIdArr.push(item.resourceId)
            })
            //  已有资源id和菜单选中返回的资源id取补集，用于前端渲染
            this.checkResource = this.checkResource.filter(function(val) {
              return resourceIdArr.indexOf(val) === -1
            })
            this.resourceRowUnchecked(resourceIdArr)
          })
        } else {
          this.$message.warning('请选择角色')
        }
      },
      /**
       * 资源选中
       * @param {Array} 选中资源的id数组
       */
      resourceRowChecked(val) {
        if (this.roleIds.length > 0) {
          addRoleResource({
            'ids': this.roleIds,
            'resourceIds': val
          }).then(response => {
            this.$message.success('增加角色资源成功')
          })
        } else {
          this.$message.warning('请选择角色')
        }
      },
      /**
       * 资源取消
       * @param {Array} 取消选中资源的id数组
       */
      resourceRowUnchecked(val) {
        if (this.roleIds.length > 0) {
          delRoleResource({
            'ids': this.roleIds,
            'resourceIds': val
          }).then(response => {
            this.$message.success('取消角色资源成功')
          })
        } else {
          this.$message.warning('请选择角色')
        }
      }
    }
  }
</script>

<style scoped>
  .app-container .el-transfer {
  }

  .app-container >>> .el-transfer-panel {
    width: 250px;
  }

  .app-container >>> .el-transfer-panel__body {

    height: 980px;
  }

  .app-container >>> .el-transfer-panel__list {

    height: 980px;
  }
</style>
