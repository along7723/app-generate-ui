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
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo
  } from '@/api/sys/generate/metadata/db'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
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
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formActions: [],
        rowActions: []
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
      del(info, queryDataInfo) {
        delInfo({ id: info.dbId }).then(response => {
          this.query(queryDataInfo)
        })
      },
      detail(info) {
        getDetailInfo({ id: info.dbId }).then(response => {
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
