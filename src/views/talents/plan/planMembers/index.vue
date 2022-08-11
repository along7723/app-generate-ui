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
      :sub-page-mode="subPageMode"
      :select-mode="selectMode"
      :select-mode-cols="selectModeCols"
      :useCustomAddView="useCustomAddView"
      :isGenerateUpdateFunc=false
      @insert="add"
      @update="edit"
      @del="del"
      @deleteBatch="deleteBatch"
      @detail="detail"
      @query="query"
      @rowAction="rowAction"
      @on-add-click="onAddClick"
    >
      <template>
        <el-button plain @click="dialogFormVisible = true">手动录入</el-button>
      </template>
    </curdTale>

    <data-select title="选择计划内成员" :visible.sync="selectVisible" @ok="handleOk">
      <talents selectMode @row-select-change="rowSelected" :forceQueryOrAddData="{}"></talents>
    </data-select>

    <el-dialog :modal="false" title="成员信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
          <code-select
            :key="form.sex"
            v-model="form.sex"
            dic="Sex2"
            type="radio-button"
          />
        </el-form-item>
        <el-form-item label="证件号码" prop="idno" :label-width="formLabelWidth">
          <el-input v-model="form.idno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="workCompany" :label-width="formLabelWidth">
          <el-input v-model="form.workCompany" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="workJob" :label-width="formLabelWidth">
          <el-input v-model="form.workJob" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工作业绩" prop="workAchievement" :label-width="formLabelWidth">
          <el-input v-model="form.workAchievement" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    getDetailInfo, updateInfo, addInfo, delInfo, queryInfo, deleteBatchInfo, addMembers, addNewPerson
  } from './api'
  import curdTale from '@/components/Sys/CurdTable'
  import tableInfo from './table'
  import talents from '@/views/talents/talentsFormal'
  import validator from '@/components/Sys/RuleConfig/validator'

  export default {
    name: 'PlanMembers',
    components: {
      curdTale, talents
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
      useCustomAddView: { // 自定义添加页面
        type: Boolean,
        default: false
      },
      planId: {
        type: String
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
        formLabelWidth: '120px',
        form: {
          name: undefined,
          sex: '1',
          idno: undefined,
          workCompany: undefined,
          workJob: undefined,
          workAchievement: undefined
        },
        dialogFormVisible: false,
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
        rowActions: [],
        selectVisible: false,
        selectTalIds: [],
        rules: {
          name: [{ required: true, message: '请输入成员姓名', trigger: 'blur' }],
          sex: [{ required: true, message: '请选择成员性别', trigger: 'blur' }],
          idno: [{ required: true, message: '请输入成员证件号码', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      this.query()
    },
    watch: {
      planId(val) {
        console.log('planId', val)
      },

      forceQueryOrAddData(val) {
        this.query()
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.form['planId'] = this.planId)
            addNewPerson(this.form).then(response => {
              if (response.success) {
                this.$message.success(response.message)
                this.dialogFormVisible = false
                this.$refs[formName].resetFields()
                this.query()
              }
            })
          } else {
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
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
        delInfo({ id: info.id }).then(response => {
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
        getDetailInfo({ id: info.id }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        info = info || {}
        Object.assign(info, this.forceQueryOrAddData)
        queryInfo(info).then(response => {
          this.listData = response.data
          this.listLoading = false
        })
      },
      rowAction(action, row) {
        console.log('rowAction action', action, 'row', row)
      },
      onAddClick() {
        console.log('onAddClick')
        this.selectVisible = true
      },
      rowSelected(rows) {
        console.log(rows)
        this.selectTalIds = rows.map(row => row.talId)
        console.log('talIds', this.selectTalIds)
      },
      handleOk() {
        // 发送数据到后台保存
        const info = {}
        info.planId = this.planId
        info.talIds = this.selectTalIds
        console.log('info', info)
        addMembers(info).then(response => {
          this.query()
          this.$message.success('添加成功')
        })
      }
    }
  }
</script>
