<template>
  <div class="app-container">
    <curdTale
      ref="curdTable"
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
      :sub-page-mode="subPageMode"
      :select-mode="selectMode"
      :select-mode-cols="selectModeCols"
      :single-data-mode="singleDataMode"
      :maxAddSize="maxAddSize"
      form-fill-memo="按照时间顺序列举担任金融机构任职情况和金融产品及服务负责人任职情况，入选“两代表一委员”情况可在备注中注明。"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      :canModifyThisRow="canModifyThisRow"
    >
      <template/>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
    name: 'Work',
    components: {
      curdTale
    },
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
      compId: {
        type: String,
        default: null,
        required: false
      },
      singleDataMode: {
        type: Boolean,
        default: false,
        required: false
      },
      maxAddSize: {
        type: Number,
        default: -1,
        required: false
      }
    },
    data() {
      return {
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
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
      canModifyThisRow(row) {
        // console.log("canModifyThisRow",row);
        if (this.compId) {//当前用户是公司
          if (row.compId) {
            return true
          } else {
            return false
          }
        } else {//当前用户是个人
          if (row.compId) {
            return false
          } else {
            return true
          }
        }
      },
      add(info, queryDataInfo) {
        Object.assign(info, this.forceQueryOrAddData)
        console.log(info)
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query(queryDataInfo)
          this.$refs.curdTable.closeForm()
        })
      },
      edit(info, noRefresh, queryDataInfo) {
        Object.assign(info, this.forceQueryOrAddData)
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
          if (!noRefresh) {
            this.query(queryDataInfo)
          }
          this.$refs.curdTable.closeForm()
        })
      },
      del(info, queryDataInfo) {
        delInfo({ id: info.id }).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
          this.$refs.curdTable.closeForm()
        })
      },
      deleteBatch(info, queryDataInfo) {
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
        info = info || {}
        Object.assign(info, this.forceQueryOrAddData)
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
