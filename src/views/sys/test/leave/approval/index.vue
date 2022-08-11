<template>
  <div class="app-container">
    <el-table
      id="curd-table"
      v-loading="listLoading"
      :data="listData"
      fit
      stripe
      align="center"
    >
      <!--序号列-->
      <el-table-column fixed align="center" label="#" width="60">
        <template slot-scope="scope">
          {{ scope.$index + 1}}
        </template>
      </el-table-column>
      <!--数据列-->

      <el-table-column
        v-for="item in listFields"
        :prop="item.name"
        :show-overflow-tooltip="item.isShowTips"
        :label="item.label"
        align="left">
        <template slot-scope="scope">
          <div v-if="item.isCode">
            <code-select :key="scope.$index+'_'+i" v-model="scope.row[item .name]" :dic="item.codeName"
                         :type="item.dicType" translate-mode/>
          </div>
          <div v-else>
            {{scope.row[item.name]}}
          </div>

        </template>
      </el-table-column>

      <!--操作列-->
      <el-table-column fixed="right" align="center" prop="created_at" label="操作">
        <template slot-scope="scope">
          <el-button plain title="同意" type="primary" class="column-button" icon="el-icon-document"
                     @click="approvalClick(scope.row,true)"/>
          <el-button plain title="不同意" type="primary" class="column-button" icon="el-icon-edit"
                     @click="approvalClick(scope.row,false)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import { approvalLeaveList, approvalLeave } from '../api'
  import tableInfo from './table'
  import codeSelect from '@/components/Sys/CodeSelect'

  export default {
    name: 'approval',
    components: {
      codeSelect
    },
    data() {
      return {
        editDetail: {},
        detailData: {},
        listData: [],
        listLoading: true,
        fields: tableInfo.fields,
        listFields: tableInfo.listFields
      }
    },
    created() {
      this.query()
    },
    methods: {
      query() {
        this.listLoading = true
        approvalLeaveList().then(response => {
          this.listData = response.data
          this.listLoading = false
        })
        this.listLoading = false
      },
      approvalClick(row, isAgree) {
        approvalLeave({ 'id': row.id, 'isAgree': isAgree }).then(response => {
          this.listData = response.data
          this.query()
        })
      }

    }
  }
</script>
