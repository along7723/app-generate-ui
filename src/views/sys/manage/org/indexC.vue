<template>
  <div class="app-container">
    <curdTale
      :list-loading="listLoading"
      :list-data="listData"
      :detail-data="detailData"

      :fields="fields"
      :listFields="listFields"
      :default-add-data="defaultAddData"
      :default-query-data="defaultQueryData"
      :fastQueryFields="fastQueryFields"
      :fastQueryTips="fastQueryTips"
      :editInTable="editInTable"
      :formCols="formCols"
      :selectModeCols="selectModeCols"
      :permissions="permissions"
      :primaryKey="primaryKey"
      :single-data-mode="singleDataMode"
      :subPageMode="subPageMode"
      :selectMode="selectMode"
      empty-text="暂无数据"
      :row-actions="rowActions"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
    >
      <template>

      </template>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo
  } from './api'
  import tableInfo from './table'
  import validator from '@/components/Sys/RuleConfig/validator'
  import curdTale from '@/components/Sys/CurdTable'

  export default {
    name: 'org',
    components: { curdTale },
    props: {
      singleDataMode: {
        type: Boolean,
        default: false,
        required: false
      },
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
      }, parentId: {
        type: String,
        default: '0',
        required: true
      }
    }, watch: {
      parentId(val) {
        this.queryParentId = val
        this.query()
      }
    },
    data() {
      return {
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
        rowActions: [],
        queryParentId: ''
      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query()
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
      del(info) {
        delInfo({ id: info.id }).then(response => {
          this.$message.success('删除成功')
          this.query()
        })
      },
      deleteBatch(info) {
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
        if (!info) {
          info = {}
        }
        if (this.singleDataMode) {
          info['id'] = this.queryParentId
        } else {
          info['parentId'] = this.queryParentId
        }
        console.log(info)
        console.log(this.queryParentId)
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
