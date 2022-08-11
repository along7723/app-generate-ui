<template>
  <div class="app-container">
    <curd-table
      ref="curdTable"
      :fields="fields"
      :list-fields="listFields"
      :list-data="listData"
      :detail-data="detailData"
      :default-add-data="forceQueryOrAddData"
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
      :readonlyMode="readonlyMode"
      :canDelete="false"
      @row-select-change="rowSelected"
      :dataObject="tableInfo"
      @expExcel="expExcel"
      @on-show-add="showAdd"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction">

      <template v-if="useCustomDetailView" slot="custom-detail-page" slot-scope="scope">
        <!-- <div style="margin-top:20px">scope:{{scope}}</div> -->
        <A4Page
          @close="onA4PageClose"
          @showEdit="showEdit"
          :compId="compId"
          :detail-data="detailData"
          :readonlyMode="readonlyMode"
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

      <!--     <template>
      <el-button
          plain
          icon="fa fa-arrow-down"
          type="info">导出Excel</el-button>
    </template>-->

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
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
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
            <span class="title-memo">（您可以在些上传任何有价值证书或证明资料，附件格式为图片与PDF）</span>
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
    fetchExportBill,
    getCountOfIdNo,
    relevanceTalents
  } from './api'
  import CurdTable from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import tableInfoCompany from '../talents/table_company'
  import { fetchExportFile } from '@/utils/expfile'

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
  import A4Page from '../talents/A4Page'
  import attach from './attach'

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
      readonlyMode: {
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
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        tableInfo: tableInfo,
        fields: this.setFieldValidator(this.compId ? tableInfoCompany.fields : tableInfo.fields, 'idno', this.validateIdCard),
        listFields: this.compId ? tableInfoCompany.listFields : tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultAddData: tableInfo.defaultAddData,
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
        formType: 'add',
        formFillMemo: '本人需承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。本人承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。'
      }
    },
    created() {
      // console.log('tableInfo.fields',tableInfo.fields)
      // tableInfo.fields[0].rules.required=true
      // console.log('this.fields',this.fields)
      // this.setFieldValidator('idno',this.validateIdCard)
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
            field.rules.push({
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
          idNo: value
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

        if (this.checkLevel === 1) {
          info['status'] = 6
        } else if (this.checkLevel === 2) {
          info['status'] = 3
        }
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
          this.examine({
            'talId': v.talId,
            'status': '5'
          })
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
      examine(info) {
        examine(info).then(response => {
          if (response.code === 200) {
            if (info.status === '6') {
              this.$message.success('提交成功！')
            } else {
              this.$message.success('审核成功！')
            }
            this.query()
            this.$refs.curdTable.closeForm()
          } else {
            this.$message.error('审核失败：' + response.message)
          }
        })
      },
      rowSelected(rows) {
        // console.log(rows)
        this.$emit('row-select-change', rows)
      },
      expExcel(queryDataInfo) {
        console.log('expExcel')
        queryDataInfo = queryDataInfo || {}
        queryDataInfo['tableId'] = tableInfo.tableId
        Object.assign(queryDataInfo, this.forceQueryOrAddData)
        fetchExportBill(queryDataInfo).then(res => {
          fetchExportFile(res, '人才信息.xlsx')
        }).catch(res => {
        })
      }
    }
  }
</script>
