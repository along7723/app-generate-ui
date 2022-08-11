<template>
  <div class="app-container">
    <curd-table
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
      :permissions="permissions"
      :primaryKey="primaryKey"
      :readonlyMode="readonlyMode"
      @insert="add"
      @update="edit"
      @del="del"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      @row-select="rowSelect"
    >
      <template/>
    </curd-table>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo
  } from './api.js'
  import tableInfo from './table'
  import validator from '@/components/Sys/RuleConfig/validator'

  export default {
    name: 'MyUser',
    components: {},
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
      examineUserRowActions: {
        type: Array,
        default: () => [],
        required: false
      },
      examineDefault: {
        type: String,
        default: '',
        required: false
      },
      forceQueryOrAddData: {
        type: Object,
        default: () => {
        },
        required: false
      },
      readonlyMode: {
        type: Boolean,
        default: true,
        required: false
      }
    },
    data() {
      return {
        testRule: [],
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        fields: validator.transferFieldRules(tableInfo.fields),
        listFields: tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultOrderBy: tableInfo.defaultSortField ? tableInfo.defaultSortField + ' ' + (tableInfo.defaultSortType || 'ASC') : null,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        editInTable: tableInfo.editInTable,
        permissions: tableInfo.permissions,
        primaryKey: tableInfo.keyField,
        rowActions: []
      }
    },
    created() {
      if (this.examineUserRowActions != []) {
        this.rowActions = this.examineUserRowActions
      }
      this.query(this.defaultQueryData)
    },
    methods: {
      aloneWindow() {
        const routeData = this.$router.resolve({
          name: 'sys/user'
          // query: params,
          // params:{catId:params.catId}
        })
        window.open('http://datav.jiaminghi.com/demo/construction-data/index.html', '_blank').location
      },
      add(info) {
        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query()
        })
      },
      edit(info, noRefresh, updateFiled) {
        // 行内编辑
        if (updateFiled) {
          const updateToInfo = {}
          updateToInfo['userId'] = info['userId']
          updateToInfo[updateFiled] = info[updateFiled]
          updateInfo(updateToInfo).then(response => {
            this.$message.success('修改成功')
            if (!noRefresh) {
              this.query()
            }
          })
        } else {
          updateInfo(info).then(response => {
            this.$message.success('修改成功')
            if (!noRefresh) {
              this.query()
            }
          })
        }

      },
      del(info, queryDataInfo) {
        delInfo({ id: info.id }).then(response => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
        })
      },
      detail(info) {
        getDetailInfo({ id: info.userId }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        console.log('info', info)
        this.listLoading = true
        info = info || {}
        Object.assign(info, {
          loginStatus: '1'
        })
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        if ('examineUser' === action) {//审核页面传过来 勿删
          this.$confirm('确认通过当前用户的审核？')
            .then(_ => {
              updateInfo({ 'userId': row.userId, 'state': 'NORMAL' }).then(response => {
                this.$message.success('审核完成')
                this.query(this.defaultQueryData)
              })
            })
            .catch(_ => {
            })
        }
      },
      rowSelect(rows) {
        if (this.selectMode) {
          this.$emit('row-select', rows)
        }
      }
    }
  }
</script>
