<template>
  <div class="app-container">
    <el-dialog
      title="提示"
      :visible.sync="showExamineBatch"
      width="30%">
      <span>请对选中人员进行操作！</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="showExamineBatch = false">取 消</el-button>
    <el-popconfirm
      style="margin: 0px 10px"
      confirm-button-text="确定"
      cancel-button-text="取消"
      @onConfirm="examineBatch(4)"
      title="确定选中人员通过审核？"
    >
      <el-button type="primary" slot="reference">通过审核</el-button>
    </el-popconfirm>

    <el-popconfirm
      confirm-button-text="确定"
      cancel-button-text="取消"
      @onConfirm="examineBatch(5)"
      title="确定选中人员不通过审核？"
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
      :default-query-data="forceQueryOrAddData"
      :fast-query-fields="fastQueryFields"
      :fast-query-tips="fastQueryTips"
      :list-loading="listLoading"
      :row-actions="rowActions"
      :edit-in-table="editInTable"
      empty-text="暂无数据"
      :form-cols="formCols"
      :select-mode="selectMode"
      :select-mode-cols="selectModeCols"
      :single-data-mode="singleDataMode"
      :table-name="tableName"
      :form-fill-memo="formFillMemo"
      :useCustomDetailView="useCustomDetailView"
      :canDelete="false"

      @row-select-change="batch"
      @row-select="batch"

      @on-show-add="showAdd"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction">
      <template>
        <el-button
          v-if="checkLevel===1"
          @click="showExamineBatchFunction"
          plain
          type="primary">批量审核
        </el-button>
      </template>
      <template>
        <el-button
          v-if="compId!=null"
          @click="showExamineBatchSubmitFunction"
          plain
          type="primary">批量提交
        </el-button>
      </template>
      <template v-if="useCustomDetailView" slot="custom-detail-page" slot-scope="scope">
        <!-- <div style="margin-top:20px">scope:{{scope}}</div> -->
        <A4Page
          @close="onA4PageClose"
          @showEdit="showEdit"
          :compId="compId"
          :detail-data="detailData"
          :formType="scope.data.formType"
          :isInDrawer="scope.data.isInDrawer">
          <template slot-scope="scope" slot="detail-functions">
            <el-button
              v-if="checkLevel===1"
              plain
              type="success"
              @click="checkUser(scope.data)">审核通过
            </el-button>
            <el-button
              v-if="checkLevel===1"
              plain
              type="danger"
              @click="unCheckUser(scope.data)">审核不通过
            </el-button>

            <el-button
              v-if="scope.data.status==='1'"
              plain
              type="success"
              @click="showPromise(scope.data)">提交审核
            </el-button>
          </template>
        </A4Page>
      </template>

      <template v-if="compId">
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

      <template v-if="!useCustomDetailView" slot-scope="scope" slot="detail-functions">
        <el-button
          v-if="checkLevel===1"
          plain
          type="success"
          @click="checkUser(scope.data)">审核通过
        </el-button>
        <el-button
          v-if="checkLevel===1"
          plain
          type="danger"
          @click="unCheckUser(scope.data)">审核不通过
        </el-button>
        <el-button
          v-if="checkLevel===2"
          plain
          type="success"
          @click="checkUser(scope.data)">审核通过
        </el-button>
        <el-button
          v-if="checkLevel===2"
          plain
          type="danger"
          @click="unCheckUser(scope.data)">审核不通过
        </el-button>
        <el-button
          v-if="scope.data.status==='1'"
          plain
          type="success"
          @click="showPromise(scope.data)">提交审核
        </el-button>
      </template>

      <div
        slot="subPages"
        slot-scope="scope"
        v-if="scope.data.talId">

        <div class="sub-page">
          <div class="sub-page-header">
            <span class="title">教育经历</span>
          </div>
          <div class="sub-page-body">
            <education
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div class="sub-page">
          <div class="sub-page-header">
            <span class="title">工作经历</span>
          </div>
          <div class="sub-page-body">
            <work
              sub-page-mode
              :compId="compId"
              :forceQueryOrAddData="{talId: scope.data.talId,compId:compId}"/>
          </div>
        </div>

        <div
          class="sub-page"
          v-if="!scope.data.isExpert || scope.data.isExpert==='0'">
          <div class="sub-page-header">
            <span class="title">主要成绩及业绩贡献</span>
          </div>
          <div class="sub-page-body">
            <performance
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <!--人才称号-->
        <div
          class="sub-page"
          v-if="scope.data.isExpert==='1'">
          <div class="sub-page-header">
            <span class="title">人才称号</span>
            <span class="title-memo">（获省部级及以上奖励或入选高层次人才计划情况）</span>
          </div>
          <div class="sub-page-body">
            <myTitle
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <!--资格证书-->
        <div
          class="sub-page"
          v-if="scope.data.isExpert==='1'">
          <div class="sub-page-header">
            <span class="title">资格证书</span>
            <span class="title-memo">（专业认证证书或职称证书获取情况（5项以内））</span>
          </div>
          <div class="sub-page-body">
            <tech-title
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div
          class="sub-page"
          v-if="scope.data.isExpert==='1'">
          <div class="sub-page-header">
            <span class="title">科研学术情况</span>
            <span class="title-memo">（主持或作为主要人员承担研究项目/课题情况）</span>
          </div>
          <div class="sub-page-body">
            <science
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div
          class="sub-page"
          v-if="scope.data.isExpert==='1'">
          <div class="sub-page-header">
            <span class="title">发表论文情况</span>
            <span class="title-memo">发表论文（出版论著）情况（10项以内）</span>
          </div>
          <div class="sub-page-body">
            <paper
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div
          class="sub-page"
          v-if="scope.data.isExpert==='1'">
          <div class="sub-page-header">
            <span class="title">专利情况</span>
            <span class="title-memo">（按重要性填写主要专利，总共不超过10项）</span>
          </div>
          <div class="sub-page-body">
            <patent
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div
          class="sub-page"
          v-if="scope.data.isExpert==='1'">
          <div class="sub-page-header">
            <span class="title">其他情况</span>
            <span class="title-memo">（包括在国际国内学术组织兼职、在国际国内学术会议做重要报告等情况）</span>
          </div>
          <div class="sub-page-body">
            <otherinfo
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div
          class="sub-page">
          <div class="sub-page-header">
            <span class="title">附件信息</span>
            <span class="title-memo">（您可以在些上传任何有价值证书或证明资料，附件格式为jpg,jpeg,png,pdf）</span>
          </div>
          <div class="sub-page-body">
            <attach
              sub-page-mode
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>
      </div>
    </curd-table>

    <el-dialog
      title="个人承诺"
      :visible.sync="promiseIsHide"
      width="30%">
        <span>
            <el-checkbox v-model="promise">本人承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。</el-checkbox>
        </span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="promiseIsHide = false">取 消</el-button>
            <el-button
              type="primary"
              @click="toCheckUser"
              :disabled="!promise">确 定</el-button>
        </span>
    </el-dialog>

    <el-dialog
      title="人才关联"
      :visible.sync="relevanceVisible"
      width="30%">
      <span>该人才信息已经存在，是否关联到您的企业？</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="relevanceVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="relevanceTalents">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getDetailInfo,
  updateInfo,
  addInfo,
  delInfo,
  queryInfo,
  queryMyInfo,
  deleteBatchInfo,
  examine,
  getCountOfIdNo,
  relevanceTalents,
  fetchExportMode
} from './api'
import CurdTable from '@/components/Sys/CurdTable'
import tableInfo from './table'
import tableInfoCompany from './table_company'

import certificate from './certificate'
import credit from './credit'
import education from './education'
import myTitle from './myTitle'
import science from './science'
import techTitle from './techTitle'
import training from './talTraining'
import work from './work'
import performance from './performance'
import paper from './paper'
import patent from './patent'
import otherinfo from './otherinfo'
import Credit from './credit/index'
import A4Page from './A4Page'
import attach from './attach'
import { fetchExportFile } from '@/utils/expfile'
import { getToken } from '@/utils/auth'

export default {
  name: 'Talents',
  components: {
    Credit,
    CurdTable,
    education,
    work,
    paper,
    patent,
    otherinfo,
    performance,
    myTitle,
    certificate,
    credit,
    science,
    techTitle,
    training,
    A4Page,
    attach
  },
  props: {
    singleDataMode: {
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
    checkLevel: {
      type: Number,
      default: 0,
      required: false
    },
    readonlyMode: {
      type: Boolean,
      default: false,
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
    }
  },
  data() {
    return {
      uploadLoading: false,
      showExamineBatch: false,
      headers: { 'token': getToken() },
      uploadData: { 'tableId': tableInfo.tableId, compId: this.compId },
      uploadAction: process.env.VUE_APP_BASE_API + 'talents/talents/importData',
      editDetail: {},
      detailData: {},
      listData: {},
      listLoading: true,
      fields: this.setFieldValidator(this.compId ? tableInfoCompany.fields : tableInfo.fields, 'idno', this.validateIdCard),
      listFields: this.compId ? tableInfoCompany.listFields : tableInfo.listFields,
      fastQueryFields: tableInfo.fastQueryFields,
      fastQueryTips: tableInfo.fastQueryTips,
      defaultAddData: Object.assign(this.compId ? tableInfoCompany.defaultAddData : tableInfo.defaultAddData, this.forceQueryOrAddData),
      // defaultAddData: tableInfo.defaultAddData,
      defaultQueryData: tableInfo.defaultQueryData,
      formCols: tableInfo.formCols,
      editInTable: tableInfo.editInTable,
      tableName: tableInfo.tableName,
      rowActions: [],
      promise: false,
      promiseIsHide: false,
      promiseInfo: {},
      relevanceVisible: false,
      relevanceIdNo: null,
      useCustomDetailView: true,
      batchInfo: [],
      batchQuery: {},
      formType: 'add',
      formFillMemo: '本人需承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。本人承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。'
    }
  },
  created() {
    // console.log('tableInfo.fields',tableInfo.fields)
    // tableInfo.fields[0].rules.required=true
    // console.log('this.fields',this.fields)
    // this.setFieldValidator('idno',this.validateIdCard)
    console.log('forceQueryOrAddData', this.forceQueryOrAddData)
    this.query()
  },
  methods: {
    onA4PageClose() {
      this.query()
      this.$refs.curdTable.closeForm()
    },
    // 给字段设置校验规则
    setFieldValidator(fields, fieldName, valitator) {
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        if (field.name === fieldName) {
          field.rules.push(0, {
            'validator': valitator,
            'label': '证件号码',
            'type': 'string',
            'trigger': 'blur'
          })
          break
        }
      }
      return fields
    },
    // 证件号码唯一校验
    validateIdCard(rule, value, callback) {
      if (!value) {
        return callback(new Error('证件号码不能为空'))
      }

      const that = this
      getCountOfIdNo({
        idNo: value,
        time: new Date()
      }).then(response => {
        this.relevanceIdNo = value
        if (response.data >= 1) {
          callback(new Error('证件号码已经存在'))
          console.log('that.formType', that.formType)
          console.log('that.compId', that.compId)
          if (that.compId) { //如果是企业在操作添加人才
            that.relevanceVisible = true
          }
        } else {
          callback()
        }
      })
    },
    relevanceTalents() {
      console.log('idno', this.relevanceIdNo)
      relevanceTalents({
        idNo: this.relevanceIdNo,
        compId: this.compId
      }).then(response => {
        this.$message.success('关联成功')
        this.query()
        this.$refs.curdTable.closeForm()
        this.relevanceVisible = false
      })
    },
    add(info, queryDataInfo) {
      if (this.forceQueryOrAddData) {
        Object.assign(info, this.forceQueryOrAddData)
      }
      addInfo(info).then(response => {
        this.$message.success('添加成功')
        this.query(queryDataInfo)
        this.$refs.curdTable.closeForm()
      })
    },
    showAdd() {
      this.useCustomDetailView = false
      this.formType = 'add'
    },
    showEdit(row) {
      this.useCustomDetailView = false
      this.formType = 'edit'
      this.$refs.curdTable.showEditInfo(row)
    },
    edit(info, noRefresh, queryDataInfo) {
      info['status'] = '1'
      updateInfo(info).then(response => {
        this.$message.success('修改成功')
        if (!noRefresh) {
          this.query(queryDataInfo)
        }
        this.$refs.curdTable.closeForm()

        this.useCustomDetailView = true
      })
    },
    del(info, queryDataInfo) {
      delInfo({
        id: info.talId
      }).then(response => {
        this.$message.success('删除成功')
        this.query(queryDataInfo)
        this.$refs.curdTable.closeForm()
      })
    },
    deleteBatch(info, queryDataInfo) {
      const ids = []
      for (let i = 0; i < info.length; i++) {
        ids.push(info[i].talId)
      }
      deleteBatchInfo(ids).then(response => {
        this.$message.success('删除成功')
        this.query(queryDataInfo)
      })
    },
    detail(info) {
      this.useCustomDetailView = true
      getDetailInfo({
        id: info.talId
      }).then(response => {
        this.detailData = response.data
      })
    },
    query(info) {
      info = info || {}
      // 默认排序
      if (!info.order && tableInfo.defaultSortField && tableInfo.defaultSortType) {
        info.order = tableInfo.defaultSortField + ' ' + tableInfo.defaultSortType
      }
      this.batchQuery = info
      /*        if (this.checkLevel === 1) {
                info['status'] = 6
              } else if (this.checkLevel === 2) {
                info['status'] = 3
              }*/
      this.listLoading = true
      if (this.singleDataMode) {
        queryMyInfo(info).then(response => {
          this.listData = response.data || {
            pageIndex: 1
          }
          this.listLoading = false
        })
      } else {
        console.log('not singleDataMode queryInfo')
        if (this.forceQueryOrAddData) {
          Object.assign(info, this.forceQueryOrAddData)
        }
        queryInfo(info).then(response => {
          this.listData = response.data || {
            pageIndex: 1
          }
          this.listLoading = false
        })
      }
    },
    rowAction(action, row) {
      console.log('rowAction action', action, 'row', row)
    },
    checkUser(v) {
      if (this.checkLevel === 0) {
        return
      } else if (this.checkLevel === 1) {
        this.examine({
          'talId': v.talId,
          // 'status': '3'
          'status': '4'
        })
      } else if (this.checkLevel === 2) {
        this.examine({
          'talId': v.talId,
          'status': '4'
        })
      }
    },
    unCheckUser(v) {
      if (this.checkLevel === 0) {
        return
      } else if (this.checkLevel === 1 || this.checkLevel === 2) {

        this.$prompt('请输入不通过原因', '确认不通过当前审核吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.examine({
            'talId': v.talId,
            'status': '5',
            'reason': value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      }
    },
    showPromise(v) {
      this.promise = false
      this.promiseIsHide = true
      this.promiseInfo = v
    },
    toCheckUser() {
      if (this.promise) {
        this.examine({
          'talId': this.promiseInfo.talId,
          'status': '6'
        })
        this.promiseIsHide = false
        this.promiseInfo = {}
      }
    },
    examine(info, isNotQuery, name) {
      examine(info).then(response => {
        if (response.code === 200) {
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
        fetchExportFile(response, '人才信息模板.xlsx')
      })
    },
    beforeUpload(file) {
      this.uploadLoading = true
      this.uploadData['t'] = new Date()
    },
    //文件上传事件
    uploadSuccess(res) {
      console.log(res)
      this.uploadLoading = false
      if (res.success) {
        this.uploadLoading = false
        let msg = '<div style="line-height:1.5;">Excel导入成功！<p>成功【' + res.data.okNum + '】条，</p><p style="color:red">失败【' + res.data.noNum + '】条</p>'
        if (res.data.noNum > 0) {
          msg += '<p style="color:red">失败原因：人才信息已存在，并已关联其他企业，</p><p style="color:red">失败的证件号码为：' + res.data.noIds + '</p></div>'
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
    batch(info, rows, query) {
      this.batchInfo = info
      this.batchQuery = query
    },
    examineBatch(val) {
      const info = this.batchInfo
      for (let i = 0; i < info.length; i++) {
        console.log(info[i].name)
        this.examine({
          'talId': info[i].talId,
          'status': val,
          'name': info[i].name
        }, true)
      }
      this.query(this.batchQuery)
      this.showExamineBatch = false
    },
    showExamineBatchFunction() {
      if (this.batchInfo.length > 0) {
        this.showExamineBatch = true
      } else {
        this.$message.error('请选择人员')
      }
    },
    showExamineBatchSubmitFunction() {
      if (this.batchInfo.length > 0) {
        this.examineBatch('6')
      } else {
        this.$message.error('请选择人员')
      }
    }
  }
}
</script>
