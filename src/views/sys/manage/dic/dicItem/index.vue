<template>
  <div class="app-container">
    <curdTale
      :fields="fields"
      :list-fields="listFields"
      :list-data="listData"
      :detail-data="detailData"
      :default-add-data="defaultAddData"
      :default-query-data="defaultQueryData"
      :list-loading="listLoading"
      :row-actions="rowActions"
      :edit-in-table="true"
      empty-text="暂无数据"
      :form-cols="formCols"
      :fast-query-tips="fastQueryTips"
      :hidden-senior-query="true"
      @insert="add"
      @update="edit"
      @del="del"
      @detail="detail"
      @query="query"
      @deleteBatch="deleteBatch"
      @rowAction="rowAction"
    >
      <template/>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo
  } from '@/api/sys/manage/dic/dicItem'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import { Message } from 'element-ui'

  export default {
    name: 'DicItem',
    components: {
      curdTale
    },
    props: {
      dicCode: {
        type: String,
        default: 'null',
        required: false
      }, dicType: {
        type: String,
        default: 'MAPPING',
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
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        fastQueryTips: tableInfo.fastQueryTips,
        editInTable: false,
        rowActions: []
      }
    },
    watch: {
      dicCode(val) {
        this.query()
      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info) {
        info.dicCode = this.dicCode
        addInfo(info).then(response => {
          Message.success('添加成功')
          this.query()
        })
      },
      edit(info, noRefresh) {
        if (this.dicType === 'INNER') {
          info.dicCode = this.dicCode
          updateInfo(info).then(response => {
            Message.success('修改成功')
            if (!noRefresh) {
              this.query()
            }
          })
        } else {
          Message.warning('非内部字段类型，不允许任何操作！')
        }
      },
      del(info, queryDataInfo) {
        if (this.dicType === 'INNER') {
          delInfo({ id: info.id }).then(response => {
            Message.success('删除成功')
            this.query(queryDataInfo)
          })
        } else {
          Message.warning('非内部字段类型，不允许任何操作！')
        }
      },
      detail(info) {
        if (this.dicType === 'INNER') {
          getDetailInfo({ id: info.id }).then(response => {
            this.detailData = response.data
          })
        } else {
          Message.warning('非内部字段类型，不允许任何操作！')
        }
      },
      query(info) {
        this.listLoading = true
        if (!info) {
          info = {}
        }
        if (this.dicCode != 'null') {
          info.dicCode = this.dicCode
          queryInfo(info).then(response => {
            this.listData = response.data
            this.listLoading = false
          })
        } else {
          this.listLoading = false
        }
      },
      deleteBatch(info) {
        if (this.dicType === 'INNER') {
          const ids = []
          for (let i = 0; i < info.length; i++) {
            ids.push(info[i].id)
          }
          deleteBatchInfo(ids).then(response => {
            this.$message.success('删除成功')
            this.query()
          })
        } else {
          Message.warning('非内部字段类型，不允许任何操作！')
        }
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      }
    }
  }
</script>
