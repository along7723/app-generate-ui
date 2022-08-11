<template>
  <div class="app-container">


    <curd-table
      ref="curdTable"
      :timeLineField="timeLineField"
      :listLoading="listLoading"
      :listData="listData"
      :detailData="detailData"

      :dataObject="tableInfo"
      :fields="fields"
      :listFields="listFields"
      :defaultAddData="defaultAddData"
      :defaultQueryData="defaultQueryData"
      :fastQueryFields="fastQueryFields"
      :fastQueryTips="fastQueryTips"
      :editInTable="editInTable"
      :formCols="formCols"
      :selectModeCols="selectModeCols"
      :permissions="permissions"
      :primaryKey="primaryKey"
      :cardImage="tableInfo.cardImage"

      :readonlyMode="readonlyMode"
      :subPageMode="subPageMode"
      :selectMode="selectMode"
      emptyText="暂无数据"
      :rowActions="rowActions"
      :isGenerateAddFunc=false
      :isGenerateUpdateFunc=false
      :isGenerateDelFun=false
      :isGenerateDetailFunc=false
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
    addInfo,
    deleteBatchInfo,
    delInfo,
    exportExcelInfo,
    fetchExportBill,
    getDetailInfo,
    queryInfo,
    queryTreeMenu,
    updateInfo
  } from './api'
  import tableInfo from './table'
  import validator from '@/components/Sys/RuleConfig/validator'
  import { fetchExportFile } from '@/utils/expfile'

  export default {
    name: 'messageType',
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
      },
      forceQueryOrAddData: {
        type: Object,
        default: () => {
        },
        required: false
      },
      readonlyMode: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    data() {
      return {
        tableInfo: { ...tableInfo },
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
        timeLineField: tableInfo.timeLineField,
        rowActions: [],
        treeMenu: []
      }
    },
    created() {
      this.query()
    },
    methods: {

      query(info) {
        this.listLoading = true
        // 默认排序
        info = info || {}
        Object.assign(info, this.forceQueryOrAddData)
        if (!info.order && tableInfo.defaultSortField && tableInfo.defaultSortType) {
          info.order = tableInfo.defaultSortField + ' ' + tableInfo.defaultSortType
        }
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
