<template>
  <div class="app-container">
    <curd-table
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
    </curd-table>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo
  } from './api'
  import tableInfo from './table'
  import validator from '@/components/Sys/RuleConfig/validator'

  export default {
    name: 'reportMonth',
    components: {},
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
      this.query()
    },
    methods: {
      add(info, queryDataInfo) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query(queryDataInfo)
        })
      },
      edit(info, noRefresh, queryDataInfo) {
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
          if (!noRefresh) {
            this.query(queryDataInfo)
          }
        })
      },
      del(info, queryDataInfo) {
        delInfo({ id: info.reportId }).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
        })
      },
      deleteBatch(info, queryDataInfo) {
        const ids = []
        for (let i = 0; i < info.length; i++) {
          ids.push(info[i].reportId)
        }
        deleteBatchInfo(ids).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)

        })
      },
      detail(info) {
        getDetailInfo({ id: info.reportId }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      }
    }
  }
</script>
