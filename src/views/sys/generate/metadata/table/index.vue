<template>
  <div class="app-container">
    <curdTale :fields="fields" :list-fields="listFields" :list-data="listData" :detail-data="detailData"
              :default-add-data="defaultAddData" :default-query-data="defaultQueryData"
              :fast-query-fields="fastQueryFields"
              :fast-query-tips="fastQueryTips" :list-loading="listLoading" insert-button-name="创建表"
              :row-actions="rowActions"
              @insert="add" @update="edit" @del="del" @detail="detail" @query="query" @rowAction="rowAction">
      <template>
        <el-button plain icon="fa fa-arrow-down" type="info" @click="showSynTableToDB">导入数据表</el-button>
      </template>
    </curdTale>
    <el-dialog
      title="导入数据表"
      :visible.sync="DBLibVisible"
      width="30%"
    >
      <el-select v-model="DBLibQuery" placeholder="请选择库">
        <el-option
          v-for="item in DBLibList"
          :key="item.Database"
          :label="item.Database"
          :value="item.Database"
        />
      </el-select>
      <el-select style="margin-left: 20px" v-model="DBTableQuery" placeholder="请选择表">
        <el-option
          v-for="item in DBTableList"
          :key="item.TABLE_NAME"
          :label="item.TABLE_COMMENT?item.TABLE_COMMENT:item.TABLE_NAME"
          :value="item.TABLE_NAME"
        />
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DBLibVisible = false">取 消</el-button>
        <el-button type="primary" @click="synTableToDB">导入当前库 </el-button>
        <el-button type="primary" @click="synDbOneTable">导入当前表 </el-button>
      </span>
    </el-dialog>
    <!-- 弹框,生成代码 -->
    <generate-dialog v-if="menuVisible" ref="generateDialogRef" @refreshDataList="query"></generate-dialog>
  </div>
</template>

<script>
  import {
    getDetailInfo,
    updateInfo,
    addInfo,
    delInfo,
    queryInfo,
    generate,
    incrementSynTable,
    incrementQueryDB,
    querySynTable,
    incrementSynOneTable
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import GenerateDialog from '../components/GenerateDialog'

  export default {
    name: 'MetaDataTable',
    components: {
      curdTale,
      GenerateDialog
    },
    data() {
      return {
        menuVisible: false, // 菜单的弹框状态
        DBLibVisible: false,
        DBLibList: [],
        DBTableList: [],
        DBLibQuery: '',
        DBTableQuery: '',
        editDetail: {},
        detailData: {},
        listData: {},
        listLoading: true,
        fields: tableInfo.fields,
        listFields: tableInfo.listFields,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        defaultOrderBy: tableInfo.defaultSortField ? tableInfo.defaultSortField + ' ' + (tableInfo.defaultSortType ||
          'ASC') : null,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        rowActions: [{
          action: 'generate',
          name: '生成代码',
          type: 'danger',
          icon: 'fa fa-coffee'
        }, {
          action: 'table-field',
          name: '字段信息',
          type: 'success',
          icon: 'fa fa-table'
        }]
      }
    }, watch: {

      DBLibQuery(newV, oldV) {
        if (newV) {
          this.showSynTableToDbTable(newV)
        } else {
          this.DBTableList = []
        }

      }
    },
    created() {
      this.query()
    },
    methods: {
      add(info, queryDataInfo) {
        addInfo(info, queryDataInfo).then(response => {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.query(queryDataInfo)
        })
      },
      edit(info, queryDataInfo) {
        updateInfo(info, queryDataInfo).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.query(queryDataInfo)
        })
      },
      del(info, queryDataInfo) {
        delInfo({
          id: info.tId
        }).then(response => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.query(queryDataInfo)
        })
      },
      detail(info) {
        getDetailInfo({
          id: info.tId
        }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        // console.log('info', info)
        if (!info) {
          info = {}
        }
        if (!info.order) {
          info.order = this.defaultOrderBy
        }
        // console.log('info.order', info.order)
        // console.log('info', info)
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      synTableToDB() {
        incrementSynTable({
          dbName: this.DBLibQuery
        }).then(response => {
          this.$message.success('完成！')
          this.query()
          this.DBLibVisible = false
        })
      },
      showSynTableToDB() {
        this.DBLibVisible = true
        incrementQueryDB().then(response => {
          this.DBLibList = response.data
        })
      },
      synDbOneTable() {
        incrementSynOneTable({ dbName: this.DBLibQuery, tName: this.DBTableQuery }).then(response => {
          this.$message.success('完成！')
          this.query()
          this.DBLibVisible = false
        })
      },
      showSynTableToDbTable(dbName) {
        querySynTable({ 'dbName': dbName }).then(response => {
          this.DBTableList = response.data
        })
      },
      /**
       * @param {String} action
       * @param {Object} row
       * action === 'table-field'跳转到字段信息
       * action === 'generate' 生成代码
       */
      rowAction(action, row) {
        if (action === 'table-field') {
          this.$router.push({
            name: 'metaDataField',
            query: {
              tId: row.tId,
              pageSize: 200
            }
          }) // 带参跳转
        } else if (action === 'generate') {
          this.menuVisible = true
          this.$nextTick(() => {
            this.$refs.generateDialogRef.init(row.tId)
          })
        }
      }
    }
  }
</script>
