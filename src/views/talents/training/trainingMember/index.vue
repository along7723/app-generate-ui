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
      :useCustomAddView="useCustomAddView"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      :dataObject="tableInfo"
      @expExcel="expExcel"
      @on-add-click="onAddClick"
    >
      <template slot-scope="scope" slot="detail-functions">
        <el-button plain @click="examineInfo(scope.data,'4')" type="success">通过审核</el-button>
        <el-button plain @click="examineInfo(scope.data,'5')" type="success">不通过审核</el-button>
      </template>
    </curdTale>

    <data-select title="新增培训学员" :visible.sync="selectVisible" @ok="handleOk">
      <talents selectMode @row-select-change="rowSelected" :forceQueryOrAddData="{}"></talents>
    </data-select>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, examine, fetchExportBill, addMembers
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import { fetchExportFile } from '@/utils/expfile'
  // import talents from '@/views/talents/talentsFormal/smartSearch'
  import talents from '@/views/talents/talentsFormal'

  export default {
    name: 'TrainingMember',
    components: {
      curdTale, talents
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
      useCustomAddView: { // 自定义添加页面
        type: Boolean,
        default: false
      },
      trainingId: {
        type: String
      },
      forceQueryOrAddData: {
        type: Object,
        default: () => {
        }
      }
    }, watch: {
      forceQueryOrAddData() {
        this.query()
      }
    },
    data() {
      return {
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        fields: tableInfo.fields,
        tableInfo: tableInfo,
        listFields: tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        editInTable: tableInfo.editInTable,
        rowActions: [{
          action: 'singUp',
          name: '通过审核',
          type: 'danger',
          icon: 'fa fa-coffee'
        }, {
          action: 'unSingUp',
          name: '不通过审核',
          type: 'danger',
          icon: 'fa fa-coffee'
        }],
        selectVisible: false,
        selectTalIds: []
      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info) {
        info = info || {}
        Object.assign(info, this.forceQueryOrAddData)
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query()
          this.$refs.curdTable.closeForm()
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
        info = info || {}
        Object.assign(info, this.forceQueryOrAddData)
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      examineInfo(info, state) {
        examine({ id: info.id, 'flowState': state }).then(response => {
          this.$message.success('提交审核成功')
          this.detail(info)
        })
      },
      expExcel(queryDataInfo) {
        queryDataInfo = queryDataInfo || {}
        queryDataInfo['tableId'] = tableInfo.tableId
        Object.assign(queryDataInfo, this.forceQueryOrAddData)
        fetchExportBill(queryDataInfo).then(res => {
          fetchExportFile(res, '报名信息.xlsx')
        }).catch(res => {
        })
      },
      rowAction(action, row) {
        if (action === 'singUp') {
          this.examineInfo(row, 4)
        } else if (action === 'unSingUp') {
          this.examineInfo(row, 5)
        }
      },
      onAddClick() {
        console.log('onAddClick')
        this.selectVisible = true
      },
      rowSelected(rows) {
        console.log(rows)
        this.selectTalIds = rows.map(row => row.talId)
        console.log('talIds', this.selectTalIds)
      },
      handleOk() {
        // 发送数据到后台保存
        const info = {}
        info.trainingId = this.trainingId
        info.talIds = this.selectTalIds
        console.log('info', info)
        if (info.talIds.length <= 0) {
          this.$message.warning('请选择要添加的学员')
          return
        }
        addMembers(info).then(response => {
          this.query()
          this.$message.success('添加成功')
        })
      }
    }
  }
</script>
