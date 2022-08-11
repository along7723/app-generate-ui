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
      :form-cols="1"
      form-width="1000px"
      :readonly-mode="readonlyMode"
      :select-mode="selectMode"
      :isShowCheckBox="false"
      :select-mode-cols="selectModeCols"
      :useCustomDetailView="useCustomDetailView"
      :single-data-mode="singleDataMode"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
    >

      <template slot="custom-detail-page">
        <notification-page @onClose="onClose" :detail-data="detailData"></notification-page>
        <div style="width: 100%;text-align: center;">
          <el-button plain type="success" v-if="detailData.isSignUp ==='1'" @click="signUp(detailData)">{{singUpText}}
          </el-button>
        </div>
      </template>
      <template slot-scope="scope" slot="detail-functions">
        <el-button type="success" @click="releaseInfo(detailData,2, '发布')" v-if="detailData.status!=='2'">发布通知
        </el-button>
        <el-button type="warning" @click="releaseInfo(detailData,1, '取消发布')" v-if="detailData.status==='2'">取消发布
        </el-button>
      </template>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, signUp, checkSignUp
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import NotificationPage from './NotificationPage'
  import tableInfo from './table'

  export default {
    name: 'Notification',
    components: {
      curdTale, NotificationPage
    },
    props: {
      readonlyMode: {
        type: Boolean,
        default: false,
        required: false
      },
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
      useCustomDetailView: {
        type: Boolean,
        default: false
      },
      forceQueryOrAddData: {
        type: Object,
        default: () => {
        },
        required: false
      },
      id: null
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
        singUpText: '我要报名',
        singUpCheck: true,
        rowActions: [{
          action: 'examine',
          name: '发布通知',
          type: 'danger',
          icon: 'fa fa-link'
        }, {
          action: 'noExamine',
          name: '取消发布',
          type: 'danger',
          icon: 'fa fa-unlink '
        }]
      }
    },
    watch: {
      id(val) {
        console.log('watch id', val)
        this.query({ id: val })
      }
    },
    created() {
      if (this.useCustomDetailView) {
        this.rowActions = []
      }
      if (this.id) {
        this.query({ id: this.id })
      } else {
        this.query()
      }
    },
    methods: {
      releaseInfo(info, status, actionName) {
        const edit = { id: info.id, status }

        if (status == 2) {
          // 发消息提醒给用户
          this.$socket.send(
            {
              msgType: 'notice',
              msgTitle: '通知公告',
              msgContent: '官方发布关于【' + info.title + '】的通知公告',
              pkFieldValue: info.id,
              sendTo: 'all'
            }, 'sendMessage'
          )
        }

        this.edit(edit, false, true, actionName)
      },
      add(info) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query()
          this.$refs.curdTable.closeForm()
        })
      },
      edit(info, noRefresh, isShowDetail, actionName) {
        actionName = actionName || '修改'
        console.log('actionName', actionName)
        updateInfo(info).then(response => {
          this.$message.success(actionName + '成功')
          if (!noRefresh) {
            this.query()
          }
          this.$refs.curdTable.closeForm()
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
          if (this.detailData.isSignUp === '1') {
            this.signUpCheck(info)
          }
        })
      }, signUpCheck(data) {
        checkSignUp({ talTrainingId: data.trainingId }).then(response2 => {
          this.singUpCheck = !response2.data
          if (response2.data) {
            this.singUpText = '已报名'
          } else {
            this.singUpText = '我要报名'
          }
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
        if (action === 'examine') {
          this.releaseInfo(row, 2, '发布')
        } else if (action === 'noExamine') {
          this.releaseInfo(row, 1, '取消发布')
        }
      },
      onClose() {
        this.$refs.curdTable.closeForm()
      },
      signUp(data) {
        if (this.singUpCheck) {
          console.log(data)
          signUp({ 'talTrainingId': data.trainingId + '' }).then(response => {
            if (response.success) {
              this.signUpCheck(data)
              this.$message.success('报名成功!')
            } else {
              this.$message.success('报名失败!')
            }
          })
        }
      }
    }
  }
</script>
