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
      :single-data-mode="true"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
    >
      <!--      <template>
              <el-button plain icon="fa fa-arrow-down" type="info">导出Excel</el-button>
            </template>-->


      <template slot-scope="scope" slot="detail-functions">
        <el-button v-if="checkLevel===2||checkLevel===1" plain type="success" @click="checkUser(scope.data)">审核通过
        </el-button>
        <el-button v-if="checkLevel===2||checkLevel===1" plain type="danger" @click="unCheckUser(scope.data)">审核不通过
        </el-button>
        <el-button v-if="scope.data.status==='1'" plain type="success" @click="toCheckUser(scope.data)">提交审核</el-button>
      </template>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, examine
  } from './api_my'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

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
      },
      checkLevel: {
        type: Number,
        default: 0,
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
      add(info, queryDataInfo) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query(queryDataInfo)
        })
      },
      edit(info, noRefresh, queryDataInfo) {
        info['status'] = '1'
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
        if (this.checkLevel === 1) {
          info['status'] = 2
        } else if (this.checkLevel === 2) {
          info['status'] = 3
        }
        if (!info.order && tableInfo.defaultSortField && tableInfo.defaultSortType) {
          info.order = tableInfo.defaultSortField + ' ' + tableInfo.defaultSortType
        }
        queryInfo(info).then(response => {
          console.log("response",response)
          this.listData = response.data || {}
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      },
      checkUser(v) {
        if (this.checkLevel === 0) {
          return
        } else if (this.checkLevel === 1) {
          this.examine({ 'compId': v.compId, 'status': '3' })
        } else if (this.checkLevel === 2) {
          this.examine({ 'compId': v.compId, 'status': '4' })
        }
      },
      unCheckUser(v) {
        if (this.checkLevel === 0) {
          return
        } else if (this.checkLevel === 1 || this.checkLevel === 2) {
          this.examine({ 'compId': v.compId, 'status': '5' })
        }
      },
      toCheckUser(v) {
        this.examine({ 'compId': v.compId, 'status': '6' })
      },
      examine(info) {
        examine(info).then(response => {

          if (info.status === '6') {
            this.$message.success('提交成功！')
          } else {
            this.$message.success('审核成功！')
          }
          this.query()
        })
      }
    }
  }
</script>
