<template>
  <div class="app-container">
    <!--    <el-row>-->
    <!--      <div style="margin-bottom: 10px">-->
    <!--        <el-alert-->
    <!--          myTitle="如何给用户授权？"-->
    <!--          type="info"-->
    <!--          description=‘1、选择要授权的用户，2、在“角色列表”中的选择要授予的角色，3、点击“授予角色”’>-->
    <!--        </el-alert>-->
    <!--      </div>-->
    <!--      <div style="margin-bottom: 10px">-->
    <!--        <el-alert-->
    <!--          style="margin-bottom: 20px"-->
    <!--          myTitle="如何撤销用户的权限？"-->
    <!--          type="info"-->
    <!--          description=‘1、选择要授权的用户，2、在“已授予角色”中选择要撤销的角色，3、点击“撤销角色”’>-->
    <!--        </el-alert>-->
    <!--      </div>-->
    <!--    </el-row>-->
    <el-row>
      <el-col :span="12" style="padding-right: 30px">
        <div class="el-transfer-panel" style="height:762px;width:100%">
          <div class="el-transfer-panel__header">
            <span>第一步：选择待授权用户</span>
          </div>
          <div class="el-transfer-panel__body">
            <myUser select-mode @row-select="userSelect"/>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="el-transfer-panel" style="height:762px;width:100%">
          <div class="el-transfer-panel__header">
            <span>第二步：勾选/取消对应的角色</span>
          </div>
          <div class="el-transfer-panel__body">
            <myRole
              select-mode
              :default-selected-keys="checkRole"
              @row-checked="rowChecked"
              @row-unchecked="rowUnchecked"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import myUser from '@/views/sys/manage/user'
  import myRole from '@/views/sys/manage/role'
  import { getUserRole, addUserRole, delUserRole } from './api'

  export default {
    name: 'UserRole',
    components: {
      myUser, myRole
    },
    data() {
      return {
        userIds: [],
        checkRole: []
      }
    },
    methods: {

      userSelect(users) { // 根据选中的用户查询共同的角色
        this.userIds = users.map(user => user.userId)
        if (this.userIds.length >= 1) {
          getUserRole(this.userIds).then(response => {
            this.checkRole = response.data.map(role => role.roleId.toString())
          })
        } else {
          this.checkRole = []
        }
      },
      rowChecked(role) { // 为前面选中的用户添加该角色
        addUserRole({ 'ids': this.userIds, 'role': role.roleId }).then(response => {
          this.$message.success('增加成功')
        })
      },
      rowUnchecked(role) { // 为前面选中的用户删除该角色
        delUserRole({ 'ids': this.userIds, 'role': role.roleId }).then(response => {
          this.$message.success('删除成功')
        })
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

    height: 720px;
  }

  .app-container >>> .el-transfer-panel__list {

    height: 720px;
  }
</style>
