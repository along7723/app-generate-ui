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
    getDetailInfo,
    queryInfo,
    updateInfo
  } from './api'
  import tableInfo from './table'
  import validator from '@/components/Sys/RuleConfig/validator'
  import { fetchExportFile } from '@/utils/expfile'

  export default {
    name: 'talentPolicy',
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
        rowActions: [{
          action: 'release',
          name: '发布政策',
          type: 'danger',
          icon: 'fa fa-link'
        }, {
          action: 'noRelease',
          name: '取消政策',
          type: 'danger',
          icon: 'fa fa-unlink '
        }],
        treeMenu: []
      }
    },
    created() {
      this.query()
      if (this.readonlyMode) {
        this.rowActions = []
      }
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
        })
      },
      rowAction(action, row) {
        if (action === 'release') {
          this.releaseInfo(row, 2, '发布')
        } else if (action === 'noRelease') {
          this.releaseInfo(row, 1, '取消')
        }
      },
      releaseInfo(info, status, actionName) {
        const edit = { id: info.id, status }
        this.edit(edit, false, this.queryInfoFrom, actionName)
      },
      expExcel(queryDataInfo) {
        queryDataInfo = queryDataInfo || {}
        queryDataInfo['tableId'] = tableInfo.tableId
        Object.assign(queryDataInfo, this.forceQueryOrAddData)
        fetchExportBill(queryDataInfo).then(res => {
          fetchExportFile(res, '人才政策信息.xlsx')
        }).catch(res => {
          console.log(res)
        })
      }
    }
  }
</script>
