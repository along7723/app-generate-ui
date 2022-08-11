<template>
  <div class="app-container">

    <el-dialog
      title="提示"
      :visible.sync="showExamineBatch"
      width="30%">
      <span>请对选中的公司进行操作！</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="showExamineBatch = false">取 消</el-button>
    <el-popconfirm
      style="margin: 0px 10px"
      confirm-button-text="确定"
      cancel-button-text="取消"
      @onConfirm="examineBatch(4)"
      title="确定选中公司通过审核？"
    >
      <el-button type="primary" slot="reference">通过审核</el-button>
    </el-popconfirm>

            <el-popconfirm
              confirm-button-text="确定"
              cancel-button-text="取消"
              @onConfirm="examineBatch(5)"
              title="确定选中公司不通过审核？"
            >
      <el-button type="danger" slot="reference">不通过审核</el-button>
    </el-popconfirm>

  </span>
    </el-dialog>

    <curd-table
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
      :select-mode="selectMode"
      :select-mode-cols="selectModeCols"
      :canDelete="false"

      @row-select-change="selectBatch"
      @row-select="selectBatch"

      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
    >
      <template>
        <el-button
          v-if="checkLevel===1"
          @click="showExamineBatchFunction"
          plain
          type="primary">批量审核
        </el-button>
      </template>
      <template>
        <el-button plain icon="fa fa-arrow-down" type="info" @click="uploadMode">下载模板</el-button>
        <form style="display:inline;" class="form-horizontal upload-block" id="upload">

          <el-upload
            style="display:inline;margin-left: 10px"
            :action="uploadAction"
            :data="uploadData"
            :headers="headers"
            accept=".xls,.xlsx,.XLS,XLSX"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :disabled="uploadLoading"
          >
            <el-button :disabled="uploadLoading" type="primary">导入Excel</el-button>
          </el-upload>
        </form>

      </template>
      <template slot-scope="scope" slot="detail-functions">
        <el-button v-if="checkLevel===2||checkLevel===1" plain type="success" @click="checkUser(scope.data)">审核通过
        </el-button>
        <el-button v-if="checkLevel===2||checkLevel===1" plain type="danger" @click="unCheckUser(scope.data)">审核不通过
        </el-button>
        <el-button v-if="scope.data.status==='1'" plain type="success" @click="toCheckUser(scope.data)">提交审核</el-button>
      </template>
    </curd-table>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, examine, fetchExportMode
  } from './api'
  import CurdTable from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import {fetchExportFile} from '@/utils/expfile'
  import {getToken} from '@/utils/auth'

  export default {
    name: 'Company',
    components: {
      CurdTable
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
        uploadLoading: false,
        showExamineBatch: false,
        headers: {'token': getToken()},
        uploadData: {'tableId': tableInfo.tableId},
        uploadAction: process.env.VUE_APP_BASE_API + 'talents/company/importData',
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
        rowActions: [],
        batchInfo: [],
        batchQuery: {},
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
        delInfo({id: info.compId}).then(response => {
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
        getDetailInfo({id: info.compId}).then(response => {
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
          this.listData = response.data
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
          this.examine({'compId': v.compId, 'status': '4'})
        } else if (this.checkLevel === 2) {
          this.examine({'compId': v.compId, 'status': '4'})
        }
      },
      unCheckUser(v) {
        if (this.checkLevel === 0) {
          return
        } else if (this.checkLevel === 1 || this.checkLevel === 2) {
          this.examine({'compId': v.compId, 'status': '5'})
        }
      },
      toCheckUser(v) {
        this.examine({'compId': v.compId, 'status': '6'})
      },
      examine(info,isNotQuery) {
        examine(info).then(response => {
          if (response.code === 200) {
            console.log('response: ', response)
            if (info.status === '6') {
              this.$message.success('提交成功！')
            } else {
              this.$message.success('审核成功！')
            }
            if (!isNotQuery) {
              this.query(this.batchQuery)
            }
            this.$refs.curdTable.closeForm()
          } else {
            this.$message.error('审核失败：' + response.message)
          }
        })
      },
      uploadMode() {
        const queryDataInfo = {}
        queryDataInfo['tableId'] = tableInfo.tableId
        fetchExportMode(queryDataInfo).then(response => {
          fetchExportFile(response, '企业模板.xlsx')
        })
      },
      beforeUpload(file) {
        this.uploadLoading = true
        this.uploadData['t'] = new Date()
      },
      //文件上传事件
      uploadSuccess(res) {
        console.log(res)
        if (res.success) {
          this.uploadLoading = false

          let msg = '<div style="line-height:1.5;">Excel导入成功！<p>成功【' + res.data.okNum + '】条，</p><p style="color:red">失败【' + res.data.noNum + '】条</p>'
          if (res.data.noNum > 0) {
            msg += '<p style="color:red">失败原因：企业信息已存在，</p><p style="color:red">失败的企业纳税识别号为：' + res.data.noIds + '</p></div>'
          } else {
            msg += '</div>'
          }
          this.$message({  //弹窗
            message: msg,
            type: 'success',
            center: true,
            showClose: true,
            dangerouslyUseHTMLString: true,
            duration: 0
          })

          this.query()
        } else {
          this.$message({  //弹窗
            type: 'error',
            message: 'Excel导入失败！' + res.message,
            center: true,
            duration: 1000
          })
        }

      },
      uploadError(res) {
        this.uploadLoading = false
        console.log(res)
        this.$message({  //弹窗
          type: 'error',
          message: 'Excel导入失败！',
          center: true,
          duration: 1000
        })
      },
      selectBatch(info, rows, query) {
        this.batchInfo = info;
        this.batchQuery = query;
      },
      examineBatch(val) {
        const info = this.batchInfo;
        console.log(info)
        console.log(val)
        for (let i = 0; i < info.length; i++) {
          this.examine({
            'compId': info[i].compId,
            'status': val
          }, true)
        }
        this.query(this.batchQuery)
        this.showExamineBatch = false
      },
      showExamineBatchFunction() {
        if (this.batchInfo.length > 0) {
          this.showExamineBatch = true
        } else {
          this.$message.error('请选择公司')
        }
      },

    },






  }
</script>
<style scoped>

</style>
