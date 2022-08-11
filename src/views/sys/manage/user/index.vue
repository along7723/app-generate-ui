<template>
  <div class="app-container">
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
    getDetailInfo,
    updateInfo,
    addInfo,
    delInfo,
    queryInfo
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
        default: false,
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
        defaultOrderBy: tableInfo.defaultSortField
          ? tableInfo.defaultSortField +
          ' ' +
          (tableInfo.defaultSortType || 'ASC')
          : null,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        editInTable: tableInfo.editInTable,
        permissions: tableInfo.permissions,
        primaryKey: tableInfo.keyField,
        rowActions: [
          {
            action: 'resetPassword',
            name: '重置密码',
            type: 'danger',
            icon: 'fa fa-reset'
          }
        ]
      }
    },
    created() {
      if (this.examineUserRowActions.length > 0) {
        this.rowActions = this.examineUserRowActions
      }
      if (this.examineDefault != '') {
        this.defaultQueryData['state'] = this.examineDefault
      }
      this.query()
    },
    methods: {
      aloneWindow() {
        const routeData = this.$router.resolve({
          name: 'sys/user'
          // query: params,
          // params:{catId:params.catId}
        })
        window.open(
          'http://datav.jiaminghi.com/demo/construction-data/index.html',
          '_blank'
        ).location
      },
      add(info) {
        addInfo(info).then((response) => {
          this.$message.success('添加成功')
          this.query()
          this.$refs.curdTable.closeForm()
        })
      },
      edit(info, noRefresh, updateFiled) {
        // 行内编辑
        if (updateFiled) {
          const updateToInfo = {}
          updateToInfo['userId'] = info['userId']
          updateToInfo[updateFiled] = info[updateFiled]
          updateInfo(updateToInfo).then((response) => {
            this.$message.success('修改成功')
            if (!noRefresh) {
              this.query()
            }
            this.$refs.curdTable.closeForm()
          })
        } else {
          updateInfo(info).then((response) => {
            this.$message.success('修改成功')
            if (!noRefresh) {
              this.query()
            }
          })
        }
      },
      del(info, queryDataInfo) {
        delInfo({ id: info.userId }).then((response) => {
          this.$message.success('删除成功')
          this.query(queryDataInfo)
          this.$refs.curdTable.closeForm()
        })
      },
      detail(info) {
        getDetailInfo({ id: info.userId }).then((response) => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        info = info || {}
        // 默认排序
        if (!info.order && tableInfo.defaultSortField && tableInfo.defaultSortType) {
          info.order = tableInfo.defaultSortField + ' ' + tableInfo.defaultSortType
        }
        console.log('info.order',info.order)
        Object.assign(info, this.forceQueryOrAddData)
        queryInfo(info).then((response) => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row, queryDataInfo) {
        if ('examineUser' === action) {
          //审核页面传过来 勿删
          this.$confirm('确认通过当前用户的审核？')
            .then((_) => {
              updateInfo({ userId: row.userId, state: 'NORMAL' }).then(
                (response) => {
                  this.$message.success('审核完成')
                  this.query(queryDataInfo)
                }
              )
            })
            .catch((_) => {
            })
        } else if ('noExamineUser' === action) {
          // this.$confirm('确认不通过当前用户的审核？')
          //   .then((_) => {
          //     updateInfo({ userId: row.userId, state: 'NOPASS' }).then(
          //       (response) => {
          //         this.$message.success('审核完成')
          //         this.query(queryDataInfo)
          //       }
          //     )
          //   })
          //   .catch((_) => {
          //   })
          this.$prompt('请输入不通过原因', '确认不通过当前用户的审核？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            updateInfo({ userId: row.userId, state: 'NOPASS',reason: value }).then(
                  (response) => {
                    this.$message.success('审核完成')
                    this.query(queryDataInfo)
                  }
                )
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消输入'
            });
          });
        } else if ('resetPassword' === action) {
          this.$confirm('确认重置该用户的密码？')
            .then((_) => {
              updateInfo({ userId: row.userId, password: '123456' }).then(
                (response) => {
                  this.$message.success('重置完成')
                  this.query(queryDataInfo)
                }
              )
            })
            .catch((_) => {
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
