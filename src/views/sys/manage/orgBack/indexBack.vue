<template>
  <div class="app-container">
    <el-table
      :data="listData"
      style="width: 100%;margin-bottom: 20px;"
      :row-key="primaryKey"
      border
      default-expand-all
      lazy
      :load="load"
      :tree-props="{hasChildren: 'hasChildren'}">

      <el-table-column
        v-for="(item,i) in listFields"
        :key="'tab_col'+i"
        :prop="item.name"
        :label="item.label"
        align="left"
      />
    </el-table>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, queryInfoTree
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import validator from '@/components/Sys/RuleConfig/validator'

  export default {
    name: 'org',
    components: {
      curdTale
    },

    data() {
      return {
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        fields: validator.transferFieldRules(tableInfo.fields),
        listFields: tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        editInTable: tableInfo.editInTable,
        permissions: tableInfo.permissions,
        primaryKey: tableInfo.keyField,
        parentId: 0,
        rowActions: []
      }
    },
    created() {
      this.query({ 'parentId': this.parentId })
    },
    methods: {
      add(info) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query()
        })
      },
      edit(info, noRefresh) {
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
          if (!noRefresh) {
            this.query()
          }
        })
      },
      del(info) {
        delInfo({ id: info.orgId }).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      deleteBatch(info) {
        const ids = []
        for (let i = 0; i < info.length; i++) {
          ids.push(info[i].orgId)
        }
        deleteBatchInfo(ids).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      detail(info) {
        getDetailInfo({ id: info.orgId }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        queryInfoTree(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      },
      load(tree, treeNode, resolve) {
        console.log('----------')
      }
    }
  }
</script>
