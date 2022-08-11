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
      :isRadioModel="isRadioModel"
      @del="del"
      :default-selected-keys="checkRole"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      @row-checked="rowChecked"
      @row-unchecked="rowUnchecked"
      @row-select="rowSelect"
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
    name: 'MyRole',
    components: {
      curdTale
    },
    props: {
      selectMode: {
        type: Boolean,
        default: false,
        required: false
      },
      isRadioModel: {
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
        default: 'roleId',
        required: false
      },
      defaultSelectedKeys: { // //已经选择的id组成的数组
        type: Array,
        default: () => [],
        required: false
      }
    }, watch: {
      defaultSelectedKeys(val) {
        this.checkRole = val
      }
    },
    data() {
      return {
        checkRole: [],
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
        rowActions: []
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
      del(info, queryDataInfo) {
        delInfo({ id: info.roleId }).then(response => {
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
        getDetailInfo({ id: info.roleId }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
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
