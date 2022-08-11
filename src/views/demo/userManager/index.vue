<template>
  <div class="app-container">
    <curdTale
      :fields="fields"
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
      :form-actions="formActions"
      :row-actions="rowActions"
      @formAction="formAction"
      @rowAction="rowAction"
    />
  </div>

</template>

<script>
  import {
    getDetailInfo,
    updateInfo,
    addInfo,
    delInfo,
    queryInfo
  } from '@/api/userManager'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
    components: {
      curdTale
    },
    data() {
      return {
        detailData: {},
        listData: {},
        listLoading: true,
        fields: tableInfo.fields,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formActions: [{
          action: 'excel-import',
          name: '导入excel',
          type: 'info',
          icon: 'el-icon-plus'
        }, {
          action: 'excel-export',
          name: '导出excel',
          type: 'danger',
          icon: 'el-icon-plus'
        }, {
          action: 'table-field',
          name: '字段信息',
          type: 'success'
        }],
        rowActions: [{
          action: 'excel-import',
          name: '导入excel',
          type: 'info',
          icon: 'el-icon-plus'
        }, {
          action: 'excel-export',
          name: '导出excel',
          type: 'danger',
          icon: 'el-icon-plus'
        }, {
          action: 'table-field',
          name: '字段信息',
          type: 'success',
          icon: 'el-icon-plus'
        }]
      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info) {
        addInfo(info).then(response => {
          this.query()
        })
      },
      edit(info) {
        updateInfo(info).then(response => {
          this.query()
        })
      },
      del(info) {
        delInfo({ id: info.id }).then(response => {
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
      formAction(action) {
        console.log('formAction action', action)
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      }
    }
  }
</script>
