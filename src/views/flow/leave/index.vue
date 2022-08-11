<template>
  <div class="app-container">
    <div v-if="errorInfo" class="error-info">
      <el-alert :title="errorInfo" :closable="false" center type="error" />
    </div>
    <curd-table
      v-else
      ref="curdTable"
      :time-line-field="timeLineField"
      :list-loading="listLoading"
      :list-data="listData"
      :detail-data="detailData"

      :data-object="tableInfo"
      :fields="fields"
      :list-fields="listFields"
      :default-add-data="defaultAddData"
      :default-query-data="defaultQueryData"
      :fast-query-fields="fastQueryFields"
      :fast-query-tips="fastQueryTips"
      :edit-in-table="editInTable"
      :form-cols="formCols"
      :select-mode-cols="selectModeCols"
      :permissions="permissions"
      :primary-key="primaryKey"
      :card-image="tableInfo.cardImage"

      :readonly-mode="readonlyMode"
      :sub-page-mode="subPageMode"
      :select-mode="selectMode"
      empty-text="暂无数据"
      :row-actions="rowActions"
      :is-generate-add-func="true"
      :is-generate-update-func="true"
      :is-generate-del-fun="true"
      :is-generate-detail-func="true"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      @expExcel="expExcel"
    >

      <template />
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

export default {
  name: 'Leave',
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
    }
  }
}
</script>
