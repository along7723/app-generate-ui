<template>
  <div class="app-container">
    <div
      class="error-info"
      v-if="errorInfo">
      <el-alert
        :title="errorInfo"
        :closable="false"
        center
        type="error"></el-alert>
    </div>
    <curd-table
      v-else
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
      :single-data-mode="singleDataMode"
      :table-name="tableName"
      :form-fill-memo="formFillMemo"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction">
      <!--     <template>
      <el-button
          plain
          icon="fa fa-arrow-down"
          type="info">导出Excel</el-button>
    </template>-->

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

      <!-- v-if="scope.data.talId" 必须数据准备好了才加载子页面-->
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
              :forceQueryOrAddData="{talId: scope.data.talId}"/>
          </div>
        </div>

        <div
          class="sub-page"
          v-if="scope.data.isExpert==='0'">
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

        <!-- <div
 class="sub-page"
 v-if="scope.data.isExpert==='1'">
      <div class="sub-page-header">
        <span class="title">培训经历</span>
      </div>
      <div class="sub-page-body">
        <training
            sub-page-mode
            :forceQueryOrAddData="{talId: scope.data.talId}"/>
      </div>
    </div> -->

        <!-- <div
 class="sub-page"
 v-if="scope.data.isExpert==='1'">
      <div class="sub-page-header">
        <span class="title">资格证书</span>
      </div>
      <div class="sub-page-body">
        <certificate
            sub-page-mode
            :forceQueryOrAddData="{talId: scope.data.talId}"/>
      </div>
    </div> -->

        <!-- <div
 class="sub-page"
 v-if="scope.data.isExpert==='1'">
      <div class="sub-page-header">
        <span class="title">信用记录</span>
      </div>
      <div class="sub-page-body">
        <credit
            sub-page-mode
            :forceQueryOrAddData="{talId: scope.data.talId}"/>
      </div>
    </div> -->

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
    examine
  } from './api_company'
  import CurdTable from '@/components/Sys/CurdTable'
  import tableInfo from './table'

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
      training
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
        tableName: tableInfo.tableName,
        rowActions: [],
        errorInfo: null,
        promise: false,
        promiseIsHide: false,
        promiseInfo: {},
        formFillMemo: '本人需承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。本人承诺申报书中所有信息真实可靠，若有失实和造假行为，本人愿承担一切责任。'
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
          this.$refs.curdTable.closeForm()
        })
      },

      edit(info, noRefresh, queryDataInfo) {
        info['status'] = '1'
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
          if (!noRefresh) {
            this.query(queryDataInfo)
          }
          this.$refs.curdTable.closeForm()
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
        getDetailInfo({
          id: info.talId
        }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        info = info || {}

        if (this.checkLevel === 1) {
          info['status'] = 2
        } else if (this.checkLevel === 2) {
          info['status'] = 3
        }
        this.listLoading = true
        if (this.singleDataMode) {
          queryMyInfo(info).then(response => {
            this.listData = response.data
            this.listLoading = false
          })
        } else {
          console.log('not singleDataMode queryInfo')
          queryInfo(info).then(response => {
            this.listData = response.data
            this.listLoading = false
          }).catch((error) => {
            console.log('error: ', error)
            this.errorInfo = error
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
            'status': '3'
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
            'status': '2'
          })
          this.promiseIsHide = false
          this.promiseInfo = {}
        }
      },
      examine(info) {
        examine(info).then(response => {
          if (response.code === 200) {
            if (info.status === '2') {
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
      }
    }
  }
</script>
