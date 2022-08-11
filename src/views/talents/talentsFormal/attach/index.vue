<template>
  <div class="app-container">
    <div class="error-info" v-if="errorInfo">
      <el-alert :title="errorInfo" :closable="false" center type="error"></el-alert>
    </div>
    <curd-table
      ref="curdTable"
      v-else
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
      :isGenerateAddFunc=true
      @insert="add"
      :isGenerateUpdateFunc=true
      @update="edit"
      :isGenerateDelFun=true
      @del="del"
      @deleteBatch="deleteBatch"
      :isGenerateDetailFunc=true
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      @expExcel="expExcel"
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
    name: 'attach',
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
        treeMenu: [],
        errorInfo: null
      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info, queryDataInfo) {
        info = info || {}
        Object.assign(info, this.forceQueryOrAddData)
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query(queryDataInfo)
          if (this.$refs.curdTable) {
            this.$refs.curdTable.closeForm()
          }
        })
      },
      edit(info, noRefresh, queryDataInfo) {
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
          if (!noRefresh) {
            this.query(queryDataInfo)
          }
          if (this.$refs.curdTable) {
            this.$refs.curdTable.closeForm()
          }
        })
      },
      del(info, queryDataInfo) {
        delInfo({ id: info.id }).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
        })
      },
      deleteBatch(info, queryDataInfo) {
        const ids = []
        for (let i = 0; i < info.length; i++) {
          ids.push(info[i].id)
        }
        deleteBatchInfo(ids).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
        })
      },

      detail(info) {
        getDetailInfo({ id: info.id }).then(response => {
          this.detailData = response.data
        })
      },

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
        }).catch((error) => {
          this.errorInfo = error
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
          fetchExportFile(res, '人才附件.xlsx')
        }).catch(res => {
          console.log(res)
        })
      }
    }
  }
</script>
