<template>
  <div class="app-content">
    <div v-if="!this.singleDataMode" class="app-table" @click="RowIndex=-1">
      <el-collapse-transition v-if="isNeedSeniorQuery">
        <el-card v-show="isShowSeniorQuery" class="box-card" style="margin:-20px -20px 20px -20px;">
          <el-form ref="seniorQueryForm" class="senior-query-form" :model="seniorQueryFormData" @submit.native.prevent>
            <el-row :gutter="10">
              <el-col v-for="(item) in queryFields" :span="6">
                <!--查询-->
                <el-form-item
                  :label="item.label"
                  label-position="left"
                  :prop="item.name"
                >
                  <template v-if="item.type==='time'">

                    <template v-if="item.timeFormat==='yyyy-MM-dd'">
                      <el-date-picker
                        v-model="seniorQueryFormData[item.name+'_Trange']"
                        type="daterange"
                        align="right"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        value-format="yyyy-MM-dd"
                        :default-time="['00:00:00','23:59:59']"
                      />
                    </template>
                    <template v-else>
                      <el-date-picker
                        v-model="seniorQueryFormData[item.name+'_Trange']"
                        type="datetimerange"
                        align="right"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        :default-time="['00:00:00','23:59:59']"
                      />
                    </template>
                  </template>
                  <template v-else-if="item.isCode">
                    <codeSelect
                      :key="seniorQueryFormData[item.name]"
                      v-model="seniorQueryFormData[item.name]"
                      :placeholder="item.label"
                      :dic="item.codeName"
                    />
                  </template>
                  <template v-else>
                    <template v-if="item.isScope">
                      <el-input v-model="seniorQueryFormData[item.name]" :placeholder="item.label"/>
                    </template>
                    <template v-else>
                      <el-input
                        v-model="seniorQueryFormData[item.name+'~start']"
                        :placeholder="item.label"
                        style="width: 45%"
                      />
                      <i style="display: inline-block;width:20px;text-align: center">~</i>
                      <el-input
                        v-model="seniorQueryFormData[item.name+'~end']"
                        :placeholder="item.label"
                        style="width: 45%;"
                      />
                    </template>
                  </template>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item style="text-align: center">
                  <el-button type="primary" icon="el-icon-search" native-type="submit" @click="seniorFormSubmit">查询
                  </el-button>
                  <el-button plain type="info" icon="el-icon-refresh-left" @click="resetSeniorQureyForm">重置</el-button>
                  <el-button plain type="info" icon="fa fa-angle-double-up" @click="hideSeniorQuery">快速查询</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-collapse-transition>

      <div class="table-top">
        <div class="table-top-left" v-if="!selectMode" :span="isNeedSlotBtn?16:12">
          <el-button-group v-if="isNeedRefreshBtn" style="margin-right:10px">
            <el-button
              icon="el-icon-back"
              type="primary"
              title="后退"
              style="width: 40px;padding:10px"
              @click="$router.back()"
            />
            <el-button
              plain
              icon="el-icon-refresh"
              type="primary"
              title="刷新"
              style="width: 40px;padding:10px"
              @click="refreshRouter"
            />
          </el-button-group>
          <el-button v-if="isNeedAddBtn" v-permission="permissions?permissions.add:null" plain icon="el-icon-plus"
                     type="success" @click="showAddInfo">
            {{ insertButtonName }}
          </el-button>
          <el-button
            v-if="isNeedDelBtn"
            v-permission="permissions?permissions.del:null"
            plain
            icon="el-icon-delete"
            type="danger"
            style="padding:10px"
            @click="deleteBatch"
          >批量删除
          </el-button>
          <slot v-if="isNeedSlotBtn">
            <!--表单插槽-->
          </slot>
          <span style="display: inline-block;width: 1px;"/>
        </div>
        <div
          class="table-top-right"
          v-if="isNeedFastQuery"
          :span="selectMode?24:isNeedSlotBtn?8:12"
          style="text-align: right;margin-bottom: 15px;"
        >
          <el-form @submit.native.prevent>
            <span v-show="!isShowSeniorQuery">
              <el-input
                v-model="keywords"
                style="width: 260px;"
                type="input"
                :placeholder="fastQueryFields?fastQueryTips:'请输入关键词'"
              />
              <el-button
                type="primary"
                style="margin-left: 10px;"
                icon="el-icon-search"
                native-type="submit"
                @click="fastQuery"
              >
                查询
              </el-button>
              <el-button
                v-if="isNeedSeniorQuery"
                v-show="!hiddenSeniorQuery"
                type="info"
                plain
                icon="fa fa-angle-double-down"
                @click="showSeniorQuery"
              >高级查询
              </el-button>
            </span>
            <span v-if="isNeedSeniorQuery" v-show="isShowSeniorQuery">
              <el-button plain type="info" icon="fa fa-angle-double-up" @click="hideSeniorQuery">快速查询</el-button>
            </span>
            <el-button
              v-if="isNeedChangeFieldsBtn"
              plain
              icon="fa fa-th"
              type="warning"
              title="列表字段"
              style="width: 40px;padding:10px;margin-left:10px"
              @click="tableHeaderDialogVisible = true"
            />
          </el-form>
        </div>
      </div>

      <div class="table-container" @click.stop="1===1">
        <el-table
          :row-key="primaryKey"
          v-loading="listLoading"
          :data="listData.list"
          element-loading-text="Loading"
          fit
          stripe
          align="center"
          @sort-change="orderByTable"
          @selection-change="selectionChange"
          @select="onTableSelect"
          lazy
          :load="load"
          :tree-props="{children: 'children', hasChildren: 'isHasChildren'}">
          >

          <!--序号列-->
          <el-table-column fixed align="left" width="40">

          </el-table-column>
          <!--拖拽排序-->
          <el-table-column align="left" width="40" v-if="_events.rowIndexChange">
            <template slot="header">
              <i class="el-icon-rank" title="排序"/>
            </template>
            <template>
              <i class="row-drag el-icon-rank"/>
            </template>
          </el-table-column>

          <!--数据列-->
          <el-table-column
            v-for="(item,i) in listFields"
            v-if="!selectMode || (selectMode && i<selectModeCols) "
            :key="'tab_col'+i"
            :sortable="item.isSort || false"
            :prop="item.fieldProp"
            :fixed="item.isFixed || false"
            align="left"
            :show-overflow-tooltip="item.isShowTips"
            :min-width="item.listColWidth || 120"
          >
            <!--表头-->
            <template slot="header">
              <el-tooltip
                v-if="item.labelShort"
                class="item"
                effect="dark"
                :content="item.label || item.name"
                placement="top"
              >
                <div class="table-header table-header-tips">{{ item.labelShort || item.label || item.name }}</div>
              </el-tooltip>
              <template v-else>
                <div class="table-header">{{ item.label || item.name }}</div>
              </template>
            </template>

            <template slot-scope="scope">
              <!--代码字段-->
              <div v-if="item.isCode">
                <template v-if="editInTable && scope.row.RowIndex === RowIndex">
                  <code-select
                    :key="scope.$index+'_'+i"
                    v-model="scope.row[item .name]"
                    :dic="item.codeName"
                    :type="item.dicType || 'select'"
                    @change="handleRowEdit(scope.$index, scope.row,item.name)"
                  />
                </template>
                <template v-else>
                  <code-select
                    :key="scope.$index+'_t_'+i"
                    v-model="scope.row[item .name]"
                    :dic="item.codeName"
                    translate-mode
                  />
                </template>
              </div>
              <!--时间字段-->
              <div v-else-if="item.type === 'time'">
                <template v-if="item.timeFormat === 'yyyy-MM-dd'">
                  {{ scope.row[item .name] | formatDate }}
                </template>
                <template v-else>
                  {{ scope.row[item .name] }}
                </template>
              </div>
              <!--规则字段-->
              <div v-else-if="item.type === 'rule'">
                <template v-if="editInTable && scope.row.RowIndex === RowIndex">
                  <rule-config
                    :key="scope.$index+'_t_'+i"
                    v-model="scope.row[item .name]"
                    @change="handleRowEdit(scope.$index, scope.row,item.name)"
                  />
                </template>
                <template v-else>
                  <rule-config
                    :key="scope.$index+'_t_'+i"
                    v-model="scope.row[item .name]"
                    readonly
                  />
                </template>
              </div>
              <!--其他字段-->
              <div v-else>
                <el-input
                  v-if="editInTable && scope.row.RowIndex === RowIndex"
                  v-model="scope.row[item.name]"
                  @change="handleRowEdit(scope.$index, scope.row,item.name)"
                />
                <span v-else>
                  {{ scope.row[item .name] }}
                </span>
              </div>
            </template>

          </el-table-column>

          <!--操作列-->
          <el-table-column
            fixed="right"
            align="center"
            prop="created_at"
            :width="selectMode?60:(rowActions && rowActions.length>0)?176:135"
            label="操作"
          >
            <div slot-scope="scope" @click.stop>

              <el-button
                v-permission="permissions?permissions.detail:null"
                plain
                title="详情"
                type="primary"
                class="column-button"
                icon="el-icon-document"
                @click.stop="showDetail(scope.row)"
              />
              <el-button
                v-permission="permissions?permissions.edit:null"
                v-if="isNeedEditBtn"
                plain
                title="修改"
                type="primary"
                class="column-button"
                icon="el-icon-edit"
                @click.stop="showEditInfo(scope.row)"
              />

              <el-popconfirm
                v-if="isNeedDelBtn"
                v-permission="permissions?permissions.del:null"
                confirm-button-text="确定"
                cancel-button-text="取消"
                icon="el-icon-info"
                icon-color="red"
                title="确定删除这条数据吗？"
                @onConfirm="deleteInfo(scope.row)"
              >
                <el-button slot="reference" plain type="danger" title="删除" class="column-button" icon="el-icon-delete"/>
              </el-popconfirm>

              <el-dropdown v-if="!selectMode && rowActions && rowActions.length>0" @command="doRowAction">
                <el-button plain title="更多操作" type="primary" class="column-button" icon="el-icon-arrow-down"/>
                <el-dropdown-menu slot="dropdown">
                  <template v-for="action in rowActions">
                    <el-dropdown-item
                      :command="beforeHandleCommand(scope.$index, scope.row,action.action)"
                      :icon="action.icon"
                    >{{ action.name }}
                    </el-dropdown-item>
                  </template>
                </el-dropdown-menu>
              </el-dropdown>

            </div>
          </el-table-column>
        </el-table>
      </div>

      <!--dialog-->
      <el-dialog
        title="列表字段选择"
        :visible.sync="tableHeaderDialogVisible"
        width="80%"
        top="30vh"
        class="tableHeaderDialog"
        :before-close="handleDialogClose"
      >
        <el-checkbox label="序号" disabled checked/>
        <el-checkbox v-for="field in fields" :key="field.name" :label="field.name" :checked="field.isList">{{
          field.label }}
        </el-checkbox>
        <el-checkbox label="操作" disabled checked/>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="tableHeaderDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <!--form-->
    <template>
      <!--单条数据模式-->
      <template v-if="singleDataMode">
        <div class="app-form-inline">
          <curdForm
            :form-fields="formFields"
            :detail-data="formDetailData || {}"
            :form-type="formType"
            :form-name="tableName"
            :form-cols="3"
            @formSubmit="formSubmit"
            @onClose="closeDialog"
          >
            <slot name="detail-functions" :data="formDetailData || {}"></slot>
          </curdForm>
          <slot name="subPages" :data="formDetailData || {}"/>
        </div>
      </template>
      <!--列表模式的详情-->
      <template v-else>
        <el-drawer
          class="app-form"
          :append-to-body="true"
          :visible.sync="formVisible"
          :direction="formDirection"
          :size="formWidth || formSize"
          :show-close="false"
          :with-header="false"
        >
          <!--默认详情表单-->
          <curdForm
            v-if="!(formType==='detail' && useCustomDetailView)"
            :form-fields="formFields"
            :detail-data="formDetailData || {}"
            :form-type="formType"
            :form-name="tableName"
            :form-cols="formCols"
            :isIndrawer="true"
            :readonly-mode="readonlyMode"
            @formSubmit="formSubmit"
            @onClose="closeDialog"
          >
            <slot name="detail-functions" :data="formDetailData || {}"></slot>
          </curdForm>
          <!--自定义详情页-->
          <slot v-if="formType==='detail' && useCustomDetailView" name="custom-detail-page">
          </slot>
          <!--子表页面-->
          <slot name="subPages" :data="formDetailData || {}"/>
        </el-drawer>
      </template>
    </template>
  </div>

</template>

<style lang="scss">
  /*去除Drawer 标题自带蓝色框*/
  :focus {
    outline: 0;
  }

  .table-container {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding: 12px 0px 0px 0px;
  }

  .app-form-inline {
    margin-top: -20px;
  }

  .row-drag {
    cursor: move;
  }

  .table-top {
    display: flex;
    flex-direction: row;
  }

  .table-top-left {
    flex: 1;
    flex-wrap: nowrap;
  }

  .table-top-right {
    width: 540px;
  }
</style>
<script>

  import Sortable from 'sortablejs'
  import { refresh } from '@/utils/comm-utils'

  export default {
    name: 'CurdTable',
    props: {
      listData: {
        type: Object,
        default: () => {
          [{ ShowEdit: false }]
        },
        required: true
      },
      fields: {
        type: Array,
        default: () => [],
        required: true
      },
      listFields: {
        type: Array,
        default: () => [],
        required: true
      },
      detailData: {
        type: Object,
        default: null,
        required: true
      },
      // 默认添加字段值
      defaultAddData: {
        type: Object,
        default: () => {
        },
        required: false
      },
      // 默认查询字段值
      defaultQueryData: {
        type: Object,
        default: () => {
        },
        required: false
      },
      listLoading: {
        type: Boolean,
        default: false,
        required: false
      },
      formCols: {
        type: Number,
        default: 2,
        required: false
      },
      formWidth: {
        type: String,
        default: null,
        required: false
      },
      formActions: {
        type: Array,
        default: () => {
        },
        required: false
      },
      rowActions: {
        type: Array,
        default: () => {
        },
        required: false
      },
      editInTable: {
        type: Boolean,
        default: false,
        required: false
      },
      insertButtonName: {
        type: String,
        default: '新增',
        required: false
      },
      hiddenSeniorQuery: {
        type: Boolean,
        default: false,
        required: false
      },
      fastQueryFields: {
        type: String,
        default: null,
        required: false
      },
      fastQueryTips: {
        type: String,
        default: null,
        required: false
      },
      defaultOrderBy: {
        type: String,
        default: null,
        required: false
      },
      singleDataMode: {
        type: Boolean,
        default: false,
        required: false
      },
      subPageMode: {
        type: Boolean,
        default: false,
        required: false
      },
      readonlyMode: {
        type: Boolean,
        default: false,
        required: false
      }, selectMode: {
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
        default: 'id',
        required: false
      },
      defaultSelectedKeys: { // //已经选择的id组成的数组
        type: Array,
        default: () => [],
        required: false
      },
      tableName: { // //已经选择的id组成的数组
        type: String,
        default: '',
        required: false
      },
      permissions: { // //已经选择的id组成的数组
        type: Object,
        default: () => {
        },
        required: false
      },
      useCustomDetailView: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        formType: 'add',
        formName: '新增' + this.tableName,
        isShowSeniorQuery: false, // 显示高级查询
        lastIsFastQuery: false, // 最后一次查询true 为普通，false为高级
        formVisible: false,
        keywords: '',
        order: this.defaultOrderBy ? this.defaultOrderBy : '', // 排序字段
        // 查询和高级查询
        formFields: [],
        updateFields: [],
        addFields: [],
        detailFields: [],
        queryFields: [],
        queryFrom: {},
        formDetailData: this.detailData,
        formSize: (this.formCols * 600) + 'px',
        currentRow: null,
        radioValue: '',
        formDirection: 'rtl',
        RowIndex: -1,
        seniorQueryFormData: this.defaultQueryData,
        tableHeaderFields: this.listFields,
        tableHeaderDialogVisible: false,
        selectedRows: [], // 被选中的行，
        isNeedRefreshBtn: !this.subPageMode && !this.selectMode && true,
        isNeedAddBtn: !this.readonlyMode && !this.selectMode && true,
        isNeedEditBtn: !this.readonlyMode && !this.selectMode && true,
        isNeedDelBtn: !this.readonlyMode && !this.selectMode && true,
        isNeedDetailBtn: !this.readonlyMode && !this.selectMode && true,
        isNeedSlotBtn: !this.readonlyMode && !this.selectMode && true,
        isNeedChangeFieldsBtn: !this.readonlyMode && !this.subPageMode && !this.selectMode && true,
        isNeedFastQuery: true,
        isNeedSeniorQuery: !this.subPageMode && !this.selectMode && true
      }
    },
    computed: {
      hasData: function() {
        let dataSize = 0
        if (this.listData.list) {
          dataSize = this.listData.list.length || this.listData.total
        } else {
          dataSize = this.listData.total
        }
        return dataSize > 0
      }
    },
    watch: {
      listData(val) {
        // console.log('watch listData')
        // console.log('watch --listData:', val)

        // console.log('singleDataMode', this.singleDataMode)

        if (this.singleDataMode) {
          this.formVisible = true
          if (this.total > 0) {
            this.showDetail(this.listData.list[0])
          } else {
            this.showAddInfo()
          }
        } else {
          this.formVisible = false

          // 添加当前要编辑的行号
          if (this.listData.list) {
            let i = 0
            this.listData.list.forEach(element => {
              element['RowIndex'] = i++
            })
          }
        }
      },
      detailData(val) {
        // console.log('formType', this.formType, 'detailData', this.detailData)
        this.formDetailData = val
      },
      defaultSelectedKeys(val) {
        // console.log('val ', val)
        // console.log('val ', val.length)
        // 默认选中
        this.$nextTick(() => {
          this.listData.list.forEach(element => {
            this.$refs.multipleTable.toggleRowSelection(element, false)
          })
        })
        if (val.length > 0) {
          // 默认选中
          this.$nextTick(() => {
            this.listData.list.forEach(element => {
              if (val.indexOf(element[this.primaryKey]) >= 0) {
                this.$refs.multipleTable.toggleRowSelection(element, true)
              }
            })
          })
        }
      }
    },
    created() {
      /* this.fetchData();*/
      for (const index in this.fields) {
        const item = this.fields[index]
        if (item.isAdd) {
          this.addFields.push(item)
        }
        if (item.isQuery) {
          this.queryFields.push(item)
        }
        if (item.isUpdate) {
          this.updateFields.push(item)
        }
        if (item.isDetail) {
          this.detailFields.push(item)
        }
      }
    },
    mounted() {
      if (!this.singleDataMode) {
        // 行拖拽
        if (this._events.rowIndexChange) {
          // let el = $('#curd-table tbody')[0]
          const el = document.querySelector('#curd-table tbody')
          const _this = this
          Sortable.create(el, {
            draggable: '.el-table__row',
            handle: '.row-drag',
            chosenClass: 'sortable-chosen', // Class name for the chosen item
            dragoverBubble: true,
            onEnd: function(/** Event*/ evt) {
              // // console.log('evt.oldIndex', evt.oldIndex, 'evt.newIndex', evt.newIndex, 'row', _this.listData.list[evt.oldIndex])
              _this.$emit('rowIndexChange', evt.oldIndex, evt.newIndex, _this.listData.list[evt.oldIndex])
            }
          })
        }

        // 列拖拽
        const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
        this.sortable = Sortable.create(wrapperTr, {
          animation: 180,
          delay: 0,
          onEnd: evt => {
            const oldItem = this.listFields[evt.oldIndex - 2] // -1是因为有序号列，-2是因为有复选框
            this.listFields.splice(evt.oldIndex - 2, 1)
            this.listFields.splice(evt.newIndex - 2, 0, oldItem)
          }
        })
      }
    },
    methods: {
      // 排序函数
      comprisonFunction(propertyName) {
        return function(object1, object2) {
          var value1 = object1[propertyName]
          var value2 = object2[propertyName]
          if (value1 < value2) {
            return -1
          } else if (value1 > value2) {
            return 1
          } else {
            return 0
          }
        }
      },
      resetSeniorQureyForm() {
        this.$refs.seniorQueryForm.resetFields()
      },
      refreshRouter() {
        refresh(this.$router)
      },
      closeDialog() {
        this.formVisible = false
      },
      // 显示信息添加界面
      showAddInfo() {
        this.formVisible = true
        this.formType = 'add'
        this.formName = '新增' + this.tableName
        this.formFields = this.addFields
        // 添加字段默认值
        this.formDetailData = this.defaultAddData
      },
      // 获取修改内容
      showEditInfo(row) {
        this.formVisible = true
        this.formType = 'edit'
        this.formName = '修改' + this.tableName
        this.formFields = this.detailFields
        // this.formDetailData will update in watch
        this.$emit('detail', row)
      },
      showSeniorQuery() {
        this.isShowSeniorQuery = true
      },
      hideSeniorQuery() {
        this.isShowSeniorQuery = false
      },
      showDetail(row) {
        this.formVisible = true
        this.formType = 'detail'
        // this.formName = this.tableName + '详情'
        this.formFields = this.detailFields
        // this.formDetailData will update in watch
        this.$emit('detail', row)
      },

      submitAddInfo(data) {
        this.$emit('insert', data)
      },
      submitUpdateInfo(data) {
        // console.log('CurdTable submitUpdateInfo', data)
        this.$emit('update', data)
      },
      // 高级查询方法
      seniorQuery(isNewQuery) {
        this.queryFrom = this.seniorQueryFormData
        // console.log('seniorQuery----isNewQuery:', isNewQuery)
        this.lastIsFastQuery = false
        for (const key in this.queryFrom) {
          if (this.queryFrom[key] === null || this.queryFrom[key] === '') {
            this.queryFrom[key] = undefined
          }
        }
        const query = this.queryFrom
        query['order'] = this.order
        // console.log('seniorQuery----order:', this.order)
        this.$emit('query', query)
      },
      // 普通查询方法
      fastQuery(isNewQuery) {
        // console.log('fastQuery----isNewQuery:', isNewQuery)
        this.lastIsFastQuery = true
        const query = {}
        query['keywords'] = this.keywords
        query['order'] = this.order
        query['_fastQueryFields'] = this.fastQueryFields
        // console.log('fastQuery----:', this.query)

        this.$emit('query', query)
      },
      // 重置查询信息
      clearQueryInfo() {
        this.queryFrom = {}
      },
      // 删除内容
      deleteInfo(row) {
        this.$emit('del', row)
      },
      deleteBatch() {
        if (this.selectedRows.length <= 0) {
          this.$message.warning('请选择要删除的行')
          return
        }

        this.$confirm('确认要删除这【' + this.selectedRows.length + '】条数据吗？')
          .then(_ => {
            // 调用删除数据的方法
            this.$emit('deleteBatch', this.selectedRows)
          })
          .catch(_ => {
          })
      },
      orderByTable({ column, prop, order }) {
        if (order) {
          this.order = prop + ' ' + (order === 'ascending' ? 'ASC' : 'DESC')
        } else {
          this.order = ''
        }
        this.queryData(true)
      },
      // 分页相关
      handleSizeChange() {
        // 页面显示数量修改
        this.queryData(false)
      }, handleCurrentChange() {
        // 页码修改
        this.queryData(false)
      },
      queryData(isNewQuery) { // 判断是调用普通查询还是高级查询
        if (this.lastIsFastQuery === true) {
          this.fastQuery(isNewQuery)// 普通查询
        } else {
          this.seniorQuery(isNewQuery)// 高级查询
        }
      },
      fetchData() {
        this.queryData(false)
        this.formVisible = false
      },
      doRowAction(command) {
        this.$emit('rowAction', command.command, command.row)
      },
      beforeHandleCommand(index, row, command) {
        return {
          'index': index,
          'row': row,
          'command': command
        }
      },

      // 行内编辑
      handleRowEdit(index, row, updateFiled) {

        const updateToInfo = {}
        updateToInfo[this.primaryKey] = row[this.primaryKey]
        updateToInfo[updateFiled] = row[updateFiled]

        this.$emit('update', updateToInfo, true)
      },
      formSubmit(formData, formType) {
        formType = formType || this.formType
        // console.log('CurdTable formSubmit', formData, 'formType', formType)
        if (formType === 'add') {
          // console.log('CurdTable formSubmit add')
          this.submitAddInfo(formData)
        } else if (formType === 'edit') {
          // console.log('CurdTable formSubmit edit')
          this.submitUpdateInfo(formData)
        } else if (formType === 'query') {
          // console.log('CurdTable formSubmit query')
        } else {
          console.log('CurdTable formSubmit 传入类型错误！')
        }
      },
      seniorFormSubmit() {
        this.queryFrom = this.seniorQueryFormData
        // console.log(this.queryFrom)s
        for (const item in this.seniorQueryFormData) {
          const array = item.split('~')
          if (array.length === 2) {
            const column = array[0]
            // console.log(!Array.isArray(this.queryFrom[column]))
            if (!this.queryFrom[column] && !Array.isArray(this.queryFrom[column])) {
              this.queryFrom[column] = ['', '']
            }
            if (array[1] === 'start') {
              // console.log('start', '执行了', formData[item])
              this.queryFrom[column][0] = this.formData[item]
            } else if (array[1] === 'end') {
              this.queryFrom[column][1] = this.formData[item]
            }
          }
        }
        // console.log(this.queryFrom)
        this.seniorQuery(true)
      },
      selectionChange(selection) {
        /** 所有选中的行**/
        // console.log('selectionChange')
        this.selectedRows = selection
        if (this.selectMode) { // 选择模式
          this.$emit('row-select', this.selectedRows)
        }
      },
      onTableSelect(rows, row) {
        /** 手动点击复选框 判断当前表格勾选的是选中的还是取消选中的 **/
        // console.log('onTableSelect')
        if (this.selectMode) { // 选择模式
          const selected = rows.length && rows.indexOf(row) !== -1
          // console.log(selected) // true就是选中，0或者false是取消选中
          if (selected) {
            this.$emit('row-checked', row)
          } else {
            this.$emit('row-unchecked', row)
          }
        }
      },
      handleDialogClose() {

      },

      load(tree, treeNode, resolve) {
        this.$emit('loadTree', tree, treeNode, resolve)
      }
    }

  }
</script>
