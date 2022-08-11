<template>
  <div class="app-container">
    <CurdTreeTable
      :list-loading="listLoading"
      :list-data="listData"
      :detail-data="detailData"

      :fields="fields"
      :listFields="listFields"
      :default-add-data="defaultAddData"
      :default-query-data="defaultQueryData"
      :fastQueryFields="fastQueryFields"
      :fastQueryTips="fastQueryTips"
      :editInTable="editInTable"
      :formCols="formCols"
      :selectModeCols="selectModeCols"
      :permissions="permissions"
      :primaryKey="primaryKey"
      @loadTree="loadTree"

      :subPageMode="subPageMode"
      :selectMode="selectMode"
      empty-text="暂无数据"
      :row-actions="rowActions"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"

    >
      <template>

      </template>
    </CurdTreeTable>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, queryInfoTree
  } from './api'
  import tableInfo from './table'
  import CurdTreeTable from '@/components/Sys/CurdTreeTable'
  import validator from '@/components/Sys/RuleConfig/validator'

  export default {
    name: 'org',
    components: { CurdTreeTable },
    props: {
      subPageMode: {
        type: Boolean,
        default: false,
        required: false
      },
      selectMode: {
        type: Boolean,
        default: false,
        required: false
      },
      selectModeCols: {
        type: Number,
        default: 3,
        required: false
      }
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
        rowActions: []
      }
    },
    created() {
      this.query({ 'parentId': 0 })
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
        delInfo({ id: info[this.primaryKey] }).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      deleteBatch(info) {
        const ids = []
        for (let i = 0; i < info.length; i++) {
          ids.push(info[i][this.primaryKey])
        }
        deleteBatchInfo(ids).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      detail(info) {
        getDetailInfo({ id: info[this.primaryKey] }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        queryInfoTree(info).then(response => {
          this.listData.list = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      },
      loadTree(tree, treeNode, resolve) {
        queryInfoTree({ 'parentId': tree[this.primaryKey] }).then(response => {
          resolve(response.data)
        })
      }
    }
  }
</script>
