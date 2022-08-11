<template>
  <div class="app-container">
    <curdTale :fields="fields" :listFields="listFields" :list-data="listData" :detail-data="detailData"
              :default-add-data="defaultAddData" :default-query-data="defaultQueryData" :list-loading="listLoading"
              insert-button-name="添加字段" @insert="add" @update="edit" @del="del" @detail="detail" @query="query"
              @rowIndexChange="rowIndexChange"
              :row-actions="rowActions"
              @rowAction="rowAction"
              :editInTable="editInTable" empty-text="暂无数据" :formCols="formCols" :fastQueryFields="fastQueryFields"
              :fastQueryTips="fastQueryTips" :primaryKey="primaryKey">
      <template>
        <el-radio-group v-model="showFieldType" @change="changeData">
          <el-radio-button label="form_index">全部字段</el-radio-button>
          <el-radio-button label="list_index">列表字段</el-radio-button>
        </el-radio-group>

        <el-button plain icon="fa fa-arrow-down" type="info" @click="synFieldToDB">导入字段</el-button>
        <!--<el-button plain icon="fa fa-arrow-up" type="info">反写字段</el-button>-->
        <el-button plain icon="fa fa-coffee" type="primary">生成序号</el-button>
        <el-button plain icon="fa fa-coffee" type="warning" @click="generateCode">生成代码</el-button>
      </template>
    </curdTale>

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
    fieldOrder,
    incrementSynField
  } from './api'
  import { generate } from '@/api/sys/generate/metadata/table'
  import { getTableListType, updateTableListTypeField } from '../table/api'

  import curdTale from '@/components/Sys/CurdTable'
  import { refresh } from '@/utils/comm-utils'
  import {
    Message
  } from 'element-ui'
  import tableInfo from './table'
  import CodeSelect from '@/components/Sys/CodeSelect'
  import validator from '@/components/Sys/RuleConfig/validator'
  import GenerateDialog from '../components/GenerateDialog'

  export default {
    name: 'metaDataField',
    components: {
      CodeSelect,
      curdTale,
      GenerateDialog
    },
    data() {
      return {
        menuVisible: false, // 菜单的弹框状态
        checkValue: [],
        editDetail: {},
        detailData: {},
        listData: {},
        allFieldsData: () => [],
        listFieldsData: () => [],
        listLoading: true,
        fields: validator.transferFieldRules(tableInfo.fields),
        listFields: tableInfo.listFields,
        defaultAddData: tableInfo.defaultAddData,
        defaultQueryData: tableInfo.defaultQueryData,
        formCols: tableInfo.formCols,
        fastQueryFields: tableInfo.fastQueryFields,
        fastQueryTips: tableInfo.fastQueryTips,
        primaryKey: tableInfo.keyField,
        editInTable: true,
        rowActions: [],
        showFieldType: 'form_index',
        fieldId: '',
        tId: null,
        pageSize: null,
        test: 'text',
        tableListType: ''
      }
    },
    created() {

      if (this.$route.query['tId']) {
        this.tId = this.$route.query.tId
        this.pageSize = this.$route.query.pageSize
        if (this.$route.query.showFieldType) {
          this.showFieldType = this.$route.query.showFieldType
        }
        this.getTableListType()
        this.query(this.$route.query)
      } else {
        this.$alert('入口错误，请从【数据表管理】中进入！', '错误提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$store.dispatch('tagsView/delView', this.$route)
            this.$router.go(-1)
          }
        })
      }
    },
    methods: {
      getTableListType() {
        let info = { 'id': this.tId }
        getTableListType(info).then(response => {
          this.tableListType = response.data['listPageStyle']
          switch (this.tableListType) {
            case 'TimeLine':
              this.rowActions = [
                { action: 'dateField', name: '设置为时间轴时间字段', type: 'danger', icon: 'el-icon-picture' },
                { action: 'titleField', name: '设置为时间轴标题字段', type: 'danger', icon: 'el-icon-picture' },
                { action: 'descriptionFiled', name: '设置为时间轴描述字段', type: 'danger', icon: 'el-icon-picture' },
                { action: 'categoryField', name: '设置为时间轴类别', type: 'danger', icon: 'el-icon-picture' },
                { action: 'thumbnailField', name: '设置为时间轴缩略图', type: 'danger', icon: 'el-icon-picture' },
                { action: 'iconField', name: '设置为时间轴图标', type: 'danger', icon: 'el-icon-picture' },
                { action: 'colorField', name: '设置为时间轴字体颜色', type: 'danger', icon: 'el-icon-picture' }]
              break
            case 'treeInTable':
            case 'treeAndTable':
              this.rowActions = [
                { action: 'treeId', name: '树形菜单-id', type: 'danger', icon: 'el-icon-picture' },
                { action: 'treeParentId', name: '树形菜单-父id', type: 'danger', icon: 'el-icon-picture' },
                { action: 'treeLabel', name: '树形菜单-名称', type: 'danger', icon: 'el-icon-picture' }
              ]
              break
            case 'CurdCard':
              this.rowActions = [{
                action: 'cardImage',
                name: '设置为列表图片字段',
                type: 'danger',
                icon: 'el-icon-picture'
              }]
              break
            case 'CurdTable':
              this.rowActions = []
              break
            default :
              break
          }
        })
      },
      add(info) {
        info['tId'] = this.tId
        addInfo(info).then(response => {
          Message.success('添加成功')
          this.query()
        })
      },
      edit(info, noRefresh) {
        updateInfo(info).then(response => {
          Message.success('修改成功')
          if (!noRefresh) {
            this.query()
          }
        })
      },
      del(info, queryDataInfo) {
        delInfo({
          id: info.fId
        }).then(response => {
          Message.success('删除成功')
          this.query(queryDataInfo)
        })
      },
      detail(info) {
        getDetailInfo({
          id: info.fId
        }).then(response => {
          this.detailData = response.data
        })
      },
      query(info) {
        this.listLoading = true
        if (!info) {
          info = {}
          info['tId'] = this.tId
          info['pageSize'] = this.pageSize
        }
        info['order'] = 'form_index asc'
        queryInfo(info).then(response => {
          this.listData = response.data
          this.allFieldsData = response.data.list
          this.listFieldsData = response.data.list.filter(item => {
            return item.isList === '1'
          })
          this.changeData()
          this.listLoading = false
        })
      },
      changeData() {
        if (this.showFieldType === 'list_index') {
          this.listData.list = this.listFieldsData.sort(function(item1, item2) {
            return item1.listIndex - item2.listIndex
          })
        } else {
          this.listData.list = this.allFieldsData
        }
      },
      ruleConfigReturnCheck(val) {
        let info = {}
        info['fId'] = this.fieldId
        info['rules'] = JSON.stringify(val)
        updateInfo(info).then(response => {
          Message.success('修改成功')
          if (!noRefresh) {
            this.query()
          }
        })
      },
      rowAction(action, row) {
        const info = {}
        info['tId'] = this.tId
        if (this.tableListType === 'treeInTable' || this.tableListType === 'treeAndTable') {
          info[action] = row['fName']
          if (action === 'treeParentId') {
            info['treeParentField'] = row['fNameCamel']
          }
        } else {
          info[action] = row['fNameCamel']
        }
        updateTableListTypeField(info).then(response => {
          Message.success('设置成功')
        })
      },
      synFieldToDB() {
        const tId = this.tId
        //console.log(tId)
        incrementSynField({
          'tId': tId
        }).then(response => {
          Message.success('完成！')
          refresh(this.$router, {
            showFieldType: this.showFieldType
          })
        })
      },
      rowIndexChange(oldIndex, newIndex, row) {
        if (oldIndex === newIndex) {
          return
        }
        let field = 'formIndex'
        if (this.showFieldType === 'list_index') {
          field = 'listIndex'
        }
        const oldIndex2 = this.listData.list[oldIndex][field]
        const newIndex2 = this.listData.list[newIndex][field]
        if (!oldIndex2 || !newIndex2) {
          Message.error('排序字段为空，不能进行排序！请先生成序号！')
          refresh(this.$router, {
            showFieldType: this.showFieldType
          })
          return
        }

        const param = {
          fId: row['fId'],
          tId: this.tId,
          oldIndex: oldIndex2,
          newIndex: newIndex2,
          sortField: this.showFieldType
        }
        fieldOrder(param).then(response => {
          Message.success('排序成功！')
          refresh(this.$router, {
            showFieldType: this.showFieldType
          })
        })
      },
      generateCode() {
        this.menuVisible = true
        this.$nextTick(() => {
          this.$refs.generateDialogRef.init(this.tId)
        })
      }
    }
  }
</script>
