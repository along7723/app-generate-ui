<template>
  <div class="app-container">
    <curdTale
      :fields="fields"
      :listFields="listFields"
      :list-data="listData"
      :detail-data="detailData"
      :default-add-data="defaultAddData"
      :default-query-data="defaultQueryData"
      :list-loading="listLoading"
      @insert="add"
      @update="edit"
      @del="del"
      @detail="detail"
      @query="query"
      @deleteBatch="deleteBatch"
      :row-actions="rowActions"
      @rowAction="rowAction"
      :editInTable="editInTable"
      empty-text="暂无数据"
      :formCols="formCols"
      :fastQueryTips="fastQueryTips"
    >
      <template>

      </template>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, applyLeave, deleteBatchInfo
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
    name: 'leave',
    components: {
      curdTale
    },
    data() {
      return {
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        fields: tableInfo.fields,
        listFields: tableInfo.listFields,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        fastQueryTips: tableInfo.fastQueryTips,
        editInTable: tableInfo.editInTable,
        rowActions: [{
          action: 'generate',
          name: '申请请假',
          type: 'danger',
          icon: 'fa fa-coffee'
        }]
      }
    },
    created() {
      this.query()
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
        console.log(info.id)
        delInfo({ id: info.id }).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      detail(info) {
        getDetailInfo({ id: info.id }).then(response => {
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
      deleteBatch(info) {
        const ids = []
        for (let i = 0; i < info.length; i++) {
          ids.push(info[i].id)
        }
        deleteBatchInfo(ids).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      rowAction(action, row) {
        if (action === 'generate') {
          applyLeave({ 'id': row.id }).then(response => {
            this.$message.success('申请成功')
          })
        }
      }
    }
  }
</script>
