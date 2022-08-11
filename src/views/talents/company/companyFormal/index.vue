<template>
  <div class="app-container">
    <curdTale
      :fields="fields"
      :list-fields="listFields"
      :list-data="listData"
      :detail-data="detailData"
      :default-add-data="defaultAddData"
      :default-query-data="defaultQueryData"
      :fast-query-fields="fastQueryFields"
      :fast-query-tips="fastQueryTips"
      :list-loading="listLoading"
      :row-actions="rowActions"
      :edit-in-table="editInTable"
      empty-text="暂无数据"
      :form-cols="formCols"
      :select-mode="selectMode"
      :select-mode-cols="selectModeCols"
      :canDelete="false"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      :dataObject="tableInfo"
      @expExcel="expExcel"
    >
      <!--      <template>
              <el-button plain icon="fa fa-arrow-down" type="info">导出Excel</el-button>
            </template>-->
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, fetchExportBill
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import { fetchExportFile } from '@/utils/expfile'

  export default {
    name: 'Company',
    components: {
      curdTale
    },
    props: {
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
        tableInfo: tableInfo,
        fields: tableInfo.fields,
        listFields: tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        editInTable: tableInfo.editInTable,
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
        delInfo({ id: info.compId }).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
        })
      },
      deleteBatch(info, queryDataInfo) {
        const ids = []
        for (let i = 0; i < info.length; i++) {
          ids.push(info[i].compId)
        }
        deleteBatchInfo(ids).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
        })
      },
      detail(info) {
        getDetailInfo({ id: info.compId }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        // 默认排序
        info = info || {}
        if (!info.order && tableInfo.defaultSortField && tableInfo.defaultSortType) {
          info.order = tableInfo.defaultSortField + ' ' + tableInfo.defaultSortType
        }
        queryInfo(info).then(response => {
          console.log('response.data', response.data)

          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      },
      expExcel(queryDataInfo) {
        queryDataInfo = queryDataInfo || {}
        queryDataInfo['tableId'] = tableInfo.tableId
        Object.assign(queryDataInfo, this.forceQueryOrAddData)
        fetchExportBill(queryDataInfo).then(res => {
          fetchExportFile(res, '企业信息.xlsx')
        }).catch(res => {
        })
      }
    }
  }
</script>
