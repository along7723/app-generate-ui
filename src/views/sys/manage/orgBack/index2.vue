<template>
  <div>
    <el-table
      :data="listData"
      style="width: 100%"
      :row-key="tableInfo.keyField"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'isHasChildren'}">
      <el-table-column
        v-for="(item,i) in tableInfo.listFields"
        :key="'tab_col'+i"
        :prop="item.name"
        :label="item.label"
        align="left"
      />

    </el-table>

  </div>


</template>
<script>
  import tableJs from './table'
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, queryInfoTree
  } from './api'

  export default {
    data() {
      return {
        tableInfo: tableJs,
        listData: [],
        parentId: 0,
        singleDataMode: true
      }
    }, created() {
      this.query({ 'parentId': this.parentId })
    },
    methods: {
      query(info) {
        this.listLoading = true
        queryInfoTree(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      load(tree, treeNode, resolve) {
        queryInfoTree({ 'parentId': tree.id }).then(response => {
          console.log(response.data)
          resolve(response.data)
        })
      }
    }
  }
</script>
