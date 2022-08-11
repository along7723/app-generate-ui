<template>
  <div class="app-container">
    <!--    {{forceQueryOrAddData}}-->
    <!--    <br>-->
    <!--    {{defaultAddData}}-->
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
      :form-cols="formCols"
      :sub-page-mode="subPageMode"
      :select-mode="selectMode"
      :select-mode-cols="selectModeCols"
      form-fill-memo="按时间正序填写教育经历，一般从大学阶段填起，半年以上国内外进修、学术交流情况等可以在备注中注明，包括起止年月、院校专业、学历学位等。"
      :max-add-size="-1"
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
    >
      <template/>
    </curdTale>
  </div>

</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'

  export default {
    name: 'Education',
    components: {
      curdTale
    },
    props: {
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
      },
      forceQueryOrAddData: {
        type: Object,
        default: () => {
        },
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
        rowActions: []
      }
    },
    created() {
      Object.assign(this.defaultAddData, this.forceQueryOrAddData)
      Object.assign(this.defaultQueryData, this.forceQueryOrAddData)
      this.query()
    },
    watch: {},
    methods: {
      add(info) {
        info = info || {}
        console.log('info before:', info)
        Object.assign(info, this.forceQueryOrAddData)
        console.log('info after:', info)

        addInfo(info).then(response => {
          this.$message.success('添加成功')
          this.query()
          this.$refs.curdTable.closeForm()
        })
      },
      edit(info, noRefresh) {
        updateInfo(info).then(response => {
          this.$message.success('修改成功')
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
          this.$refs.curdTable.closeForm()
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
        })
      },
      query(info) {
        this.listLoading = true
        info = info || {}
        console.log('info before:', info)
        // TODO 强制查询条件
        Object.assign(info, this.forceQueryOrAddData)
        console.log('info after:', info)
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
