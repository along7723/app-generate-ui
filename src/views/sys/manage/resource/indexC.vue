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
      @insert="add"
      :select-mode-cols="selectModeCols"
      @update="edit"
      :primary-key="primaryKey"
      @del="del"
      :default-selected-keys="checkedValue"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      @row-checked="rowChecked"
      @row-unchecked="rowUnchecked"
    >
      <template/>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatch
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
    name: 'MyResource',
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
      primaryKey: {
        type: String,
        default: 'resourceId',
        required: false
      },
      defaultSelectedKeys: { // //已经选择的id组成的数组
        type: Array,
        default: () => [],
        required: false
      }, parentId: {
        type: String,
        default: '',
        required: true
      }
    }, watch: {
      defaultSelectedKeys(val) {
        this.checkedValue = val
        console.log('checkedValue:', this.checkedValue)
      },
      parentId(val) {
        this.queryParentId = val
        this.query()
      }
    },
    data() {
      return {
        checkedValue: [],
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        fields: tableInfo.fields,
        listFields: tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultOrderBy: tableInfo.defaultSortField ? tableInfo.defaultSortField + ' ' + (tableInfo.defaultSortType || 'ASC') : null,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        editInTable: tableInfo.editInTable,
        rowActions: [],
        queryParentId: ''
      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info, queryData) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query(queryData)
        })
      },
      edit(info, noRefresh, queryData) {
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
          if (!noRefresh) {
            this.query(queryData)
          }
        })
      },
      del(info, queryData) {
        delInfo({ id: info.resourceId }).then(response => {
          this.$message.success('删除成功')
          this.query(queryData)
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
        getDetailInfo({ id: info.resourceId }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        if (!info) {
          info = {}
        }
        if (this.queryParentId != '') {
          info.parentId = this.queryParentId
        }
        console.log(info)
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      },
      rowSelect(rows) {
        if (this.selectMode) {
          this.$emit('row-select', rows)
        }
      },
      rowChecked(role) { // 为前面选中的用户添加该角色
        console.log('rowChecked role', role)
        this.$emit('row-checked', role)
      },
      rowUnchecked(role) { // 为前面选中的用户删除该角色
        console.log('rowUnchecked role', role)
        this.$emit('row-unchecked', role)
      }
    }
  }
</script>
