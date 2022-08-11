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
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      :row-actions="rowActions"
      @rowAction="rowAction"
      :editInTable="editInTable"
      empty-text="暂无数据"
      :formCols="formCols"
      :fastQueryTips="fastQueryTips"
    >
      <!--    <template>
            <el-button plain icon="fa fa-arrow-down" type="info" @click="expExcel">导出Excel</el-button>
          </template>-->
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, fetchExportBill
  } from './api'
  import { fetchExportFile } from '@/utils/expfile'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
    name: 'test',
    components: {
      curdTale
    },
    data() {
      return {
        editDetail: {},
        detailData: {},
        listData: {},
        queryInfo: {},
        listLoading: true,
        fields: tableInfo.fields,
        listFields: tableInfo.listFields,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        fastQueryTips: tableInfo.fastQueryTips,
        editInTable: tableInfo.editInTable,
        rowActions: []
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
        delInfo({ 'id': info.id }).then(response => {
          this.$message.success('删除成功')
          this.query()
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
      detail(info) {
        getDetailInfo({ id: info.id }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        this.queryInfo = info
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      }, expExcel() {
        console.log(this.queryInfo)
        if (!this.queryInfo) {
          this.queryInfo = {}
        }
        this.queryInfo['tableId'] = tableInfo.tableId
        fetchExportBill(this.queryInfo).then(res => {
          fetchExportFile(res, 'test.xlsx')
        }).catch(res => {
          console.log(res)
        })
      }
    }
  }
</script>
