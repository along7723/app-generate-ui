<template>
  <div
    v-if="dataNotExist"
    style="color: red; text-align: center; padding: 100px">
    数据不可用或已经被删除！
  </div>
  <div
    v-else
    class="app-content">
    <div
      v-if="!this.singleDataMode"
      class="app-table"
      @click="RowIndex = -1">
      <!--高级查询区域-->
      <el-collapse-transition v-if="isNeedSeniorQuery">
        <el-card
          v-show="isShowSeniorQuery"
          class="box-card"
          style="margin: -20px -20px 20px -20px; border-radius: 0">
          <el-form
            ref="seniorQueryForm"
            class="senior-query-form"
            :model="seniorQueryFormData"
            @submit.native.prevent>
            <el-row :gutter="10">
              <el-col
                v-for="item in queryFields"
                :key="item.name"
                :span="item.type === 'time' ? 6 : 6">
                <!--查询-->
                <el-form-item
                  :label="item.label"
                  label-position="left"
                  :prop="item.name">
                  <template v-if="item.type === 'time'">
                    <template v-if="item.isScope">
                      <template v-if="item.timeFormat === 'yyyy-MM-dd'">
                        <el-date-picker
                          v-model="seniorQueryFormData[item.name + '_Trange']"
                          type="daterange"
                          align="right"
                          start-placeholder="开始时间"
                          end-placeholder="结束时间"
                          value-format="yyyy-MM-dd"
                          :default-time="['00:00:00', '23:59:59']"/>
                      </template>
                      <template v-else-if="item.timeFormat === 'yyyy'">
                        <el-date-picker
                          v-model="seniorQueryFormData[item.name + '_Srange']"
                          type="yearrange"
                          value-format="yyyy"/>
                      </template>
                      <template v-else-if="item.timeFormat === 'yyyy-MM'">
                        <date-month
                          v-model="seniorQueryFormData[item.name + '_Srange']"
                          type="monthrange"></date-month>
                      </template>
                      <template v-else-if="item.timeFormat === 'yyyy第WW周'">
                        <date-week
                          v-model="seniorQueryFormData[item.name + '_Srange']"
                          type="daterange"></date-week>
                      </template>
                      <template v-else>
                        <el-date-picker
                          v-model="seniorQueryFormData[item.name + '_Trange']"
                          type="datetimerange"
                          align="right"
                          start-placeholder="开始时间"
                          end-placeholder="结束时间"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          :default-time="['00:00:00', '23:59:59']"/>
                      </template>
                    </template>
                    <trmplate v-else>
                      <template v-if="item.timeFormat === 'yyyy'">
                        <el-date-picker
                          v-model="seniorQueryFormData[item.name]"
                          type="year"
                          value-format="yyyy"/>
                      </template>
                      <template v-else-if="item.timeFormat === 'yyyy-MM'">
                        <date-month
                          v-model="seniorQueryFormData[item.name]"
                          type="month"></date-month>
                      </template>
                      <template v-else-if="item.timeFormat === 'yyyy第WW周'">
                        <date-week
                          v-model="seniorQueryFormData[item.name]"
                          type="week"></date-week>
                      </template>
                      <template v-else>
                        <el-date-picker
                          v-model="seniorQueryFormData[item.name]"
                          type="datetime"
                          value-format="yyyy-MM-dd HH:mm:ss"/>
                      </template>
                    </trmplate>
                  </template>
                  <template v-else-if="item.type === 'code'">
                    <codeSelect
                      :key="seniorQueryFormData[item.name]"
                      v-model="seniorQueryFormData[item.name]"
                      :placeholder="item.label"
                      :dic="item.codeName"/>
                  </template>
                  <template v-else>
                    <template v-if="item.isScope">
                      <el-input
                        v-model="seniorQueryFormData[item.name]"
                        :placeholder="item.label"/>
                    </template>
                    <template v-else>
                      <el-input
                        v-model="seniorQueryFormData[item.name + '~start']"
                        :placeholder="item.label"
                        style="width: 45%"/>
                      <i
                        style="
                          display: inline-block;
                          width: 20px;
                          text-align: center;
                        ">~</i>
                      <el-input
                        v-model="seniorQueryFormData[item.name + '~end']"
                        :placeholder="item.label"
                        style="width: 45%"/>
                    </template>
                  </template>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item style="text-align: center">
                  <el-button
                    type="primary"
                    icon="fa fa-search"
                    native-type="submit"
                    @click="preSeniorQuery">查询
                  </el-button>
                  <el-button
                    plain
                    type="info"
                    icon="el-icon-refresh-left"
                    @click="resetSeniorQureyForm">重置
                  </el-button>
                  <el-button
                    plain
                    type="info"
                    icon="fa fa-angle-double-up"
                    @click="hideSeniorQuery">快速查询
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-collapse-transition>

      <!--顶部按钮区域、快速查询区域-->
      <div class="table-top">
        <!--按钮区域-->
        <div
          class="table-top-left"
          v-if="!selectMode"
          :span="isNeedSlotBtn ? 16 : 12">
          <el-button-group
            v-if="isNeedRefreshBtn"
            style="margin-right: 10px">
            <el-button
              icon="el-icon-back"
              type="primary"
              title="后退"
              style="width: 40px; padding: 10px"
              @click="$router.back()"/>
            <el-button
              plain
              icon="el-icon-refresh"
              type="primary"
              title="刷新"
              style="width: 40px; padding: 10px"
              @click="refreshRouter"/>
          </el-button-group>
          <el-button
            v-if="isNeedAddBtn && canAddMore"
            v-permission="permissions ? permissions.add : null"
            plain
            icon="el-icon-plus"
            type="success"
            @click="showAddInfo">
            {{ insertButtonName }}
          </el-button>
          <el-button
            v-if="isNeedDelBtn"
            v-permission="permissions ? permissions.del : null"
            plain
            icon="el-icon-delete"
            type="danger"
            style="padding: 10px"
            @click="deleteBatch">批量删除
          </el-button>
          <el-button
            v-if="dataObject && dataObject.isExpExcel"
            plain
            icon="fa fa-arrow-down"
            type="primary"
            style="padding: 10px"
            @click="expExcel">导出excel
          </el-button>

          <slot v-if="isNeedSlotBtn">
            <!--表单插槽-->
          </slot>
          <span style="display: inline-block; width: 1px"/>
        </div>
        <!--查询区域-->
        <div
          class="table-top-right"
          v-if="isNeedFastQuery"
          :span="selectMode ? 24 : isNeedSlotBtn ? 8 : 12"
          :style="{
            textAlign: 'right',
            marginBottom: '15px',
            width: selectMode ? '100%' : 'auto',
          }">
          <el-form @submit.native.prevent>
                    <span v-show="!isShowSeniorQuery">
                        <el-input
                          v-model="keywords"
                          style="width: 260px"
                          type="input"
                          :placeholder="fastQueryFields ? fastQueryTips : '请输入关键字'"/>
                        <el-button
                          type="primary"
                          style="margin-left: 10px"
                          icon="el-icon-search"
                          native-type="submit"
                          @click="fastQuery">
                            查询
                        </el-button>
                        <el-button
                          v-if="isNeedSeniorQuery"
                          v-show="!hiddenSeniorQuery"
                          type="info"
                          plain
                          icon="fa fa-angle-double-down"
                          @click="showSeniorQuery">高级查询
                        </el-button>
                    </span>
            <span v-if="isNeedSeniorQuery" v-show="isShowSeniorQuery">
                        <el-button
                          plain
                          type="info"
                          icon="fa fa-angle-double-up"
                          @click="hideSeniorQuery">快速查询</el-button>
                    </span>
            <!--           <el-button
      v-if="isNeedChangeFieldsBtn"
      plain
      icon="fa fa-th"
      type="warning"
      title="列表字段"
      style="width: 40px;padding:10px;margin-left:10px"
      @click="tableHeaderDialogVisible = true"
    />-->
          </el-form>
        </div>
      </div>

      <!--列表区域-->
      <div
        class="table-container"
        @click.stop="1 === 1">
        <el-table
          id="curd-table"
          ref="multipleTable"
          :row-key="getRowKey"
          v-loading="listLoading"
          :data="listData.list"
          element-loading-text="Loading"
          fit
          stripe
          :height="tableHeight"
          @current-change="radioRowCheck"
          highlight-current-row
          align="center"
          @row-click="rowClickHandler"
          @sort-change="orderByTable"
          @selection-change="selectionChange"
          @select="onTableSelect"
          @select-all="onTableSelectAll">
          <!--选择列-->
          <el-table-column
            fixed
            v-if="!isRadioModel"
            align="center"
            type="selection"
            width="40"/>

          <!--序号列-->
          <el-table-column
            fixed
            align="left"
            label="#"
            width="40">
            <template slot-scope="scope">
              {{ scope.$index + 1 + (pageIndex - 1) * pageSize }}
            </template>
          </el-table-column>

          <!--拖拽排序-->
          <el-table-column
            align="left"
            width="40"
            v-if="_events.rowIndexChange">
            <template slot="header">
              <i class="el-icon-rank" title="排序"/>
            </template>
            <template>
              <i class="row-drag el-icon-rank"/>
            </template>
          </el-table-column>

          <!--数据列-->
          <template v-for="(item, i) in listFields">
            <el-table-column
              v-if="!selectMode || (selectMode && i < selectModeCols)"
              :key="'tab_col' + i"
              :sortable="item.isSort || false"
              :prop="item.fieldProp"
              :fixed="item.isFixed || false"
              align="left"
              :show-overflow-tooltip="true"
              :min-width="item.listColWidth || 120">
              <!--表头-->
              <template slot="header">
                <el-tooltip
                  v-if="item.labelShort"
                  class="item"
                  effect="dark"
                  :content="item.label || item.name"
                  placement="top">
                  <div class="table-header table-header-tips">
                    {{ item.labelShort || item.label || item.name }}
                  </div>
                </el-tooltip>
                <template v-else>
                  <div class="table-header">{{ item.label || item.name }}</div>
                </template>
              </template>

              <!--表内容-->
              <template slot-scope="scope">
                <!--时间字段-->
                <div v-if="item.type === 'time'">
                  <template v-if="item.timeFormat === 'yyyy-MM-dd'">
                    {{ scope.row[item.name] | formatDate }}
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy-MM'">
                    {{ scope.row[item.name] | formatMonth }}
                  </template>
                  <template v-else>
                    {{ scope.row[item.name] }}
                  </template>
                </div>
                <!--代码字段-->
                <div v-else-if="item.type === 'code'">
                  <template v-if="editInTable && scope.row.RowIndex === RowIndex">
                    <code-select
                      :key="scope.$index + '_' + i + scope.row[item.name]"
                      v-model="scope.row[item.name]"
                      :dic="item.codeName"
                      :type="item.dicType || 'select'"
                      @change="handleRowEdit(scope.$index, scope.row, item.name)"
                    />
                  </template>
                  <template v-else>
                    <code-select
                      :key="scope.$index + '_t_' + i + scope.row[item.name]"
                      v-model="scope.row[item.name]"
                      :dic="item.codeName"
                      translate-mode
                      :type="item.dicType"/>
                  </template>
                </div>

                <div v-else-if="item.type === 'file'">
                  <single-file
                    v-model="scope.row[item.name]"
                    readonly></single-file>
                </div>
                <div v-else-if="item.type === 'image'">
                  <single-image
                    v-model="scope.row[item.name]"
                    readonly></single-image>
                </div>
                <!--规则字段-->
                <div v-else-if="item.type === 'rule'">
                  <template v-if="editInTable && scope.row.RowIndex === RowIndex">
                    <rule-config
                      :key="scope.$index + '_t_' + i"
                      v-model="scope.row[item.name]"
                      @change="handleRowEdit(scope.$index, scope.row, item.name)"/>
                  </template>
                  <template v-else>
                    <rule-config
                      :key="scope.$index + '_t_' + i"
                      v-model="scope.row[item.name]"
                      readonly/>
                  </template>
                </div>
                <!--其他字段-->
                <div v-else>
                  <el-input
                    v-if="editInTable && scope.row.RowIndex === RowIndex"
                    v-model="scope.row[item.name]"
                    @change="handleRowEdit(scope.$index, scope.row, item.name)"/>
                  <span v-else>
                                {{ scope.row[item.name] }}
                            </span>
                </div>
              </template>
            </el-table-column>
          </template>

          <!--操作列-->
          <el-table-column
            fixed="right"
            align="center"
            prop="created_at"
            :width="
              selectMode ? 60 : rowActions && rowActions.length > 0 ? 176 : 135
            "
            label="操作">
            <div
              slot-scope="scope"
              @click.stop>
              <el-button
                v-if="isNeedDetailBtn"
                v-permission="permissions ? permissions.detail : null"
                plain
                title="详情"
                type="primary"
                class="column-button"
                icon="el-icon-document"
                @click.stop="showDetail(scope.row)"/>
              <el-button
                v-permission="permissions ? permissions.edit : null"
                v-if="isNeedEditBtn && canModifyThisRow && canModifyThisRow(scope.row)"
                plain
                title="修改"
                type="primary"
                class="column-button"
                icon="el-icon-edit"
                @click.stop="showEditInfo(scope.row)"/>

              <el-popconfirm
                v-if="isNeedDelBtn && canModifyThisRow && canModifyThisRow(scope.row)"
                v-permission="permissions ? permissions.del : null"
                confirm-button-text="确定"
                cancel-button-text="取消"
                icon="el-icon-info"
                icon-color="red"
                title="确定删除这条数据吗？"
                @onConfirm="deleteInfo(scope.row)">
                <el-button
                  slot="reference"
                  plain
                  type="danger"
                  title="删除"
                  class="column-button"
                  icon="el-icon-delete"/>
              </el-popconfirm>

              <!--自定义按钮-->
              <el-dropdown
                v-if="!selectMode && rowActions && rowActions.length > 0"
                @command="doRowAction">
                <el-button
                  plain
                  title="更多操作"
                  type="primary"
                  class="column-button"
                  icon="el-icon-arrow-down"/>
                <el-dropdown-menu slot="dropdown">
                  <template v-for="(action,index) in rowActions">
                    <el-dropdown-item
                      :key="action.name+index"
                      :command="
                        beforeHandleCommand(
                          scope.$index,
                          scope.row,
                          action.action
                        )
                      "
                      :icon="action.icon">{{ action.name }}
                    </el-dropdown-item>
                  </template>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-table-column>
        </el-table>

        <!--分页控件-->
        <div
          v-show="hasData"
          class="block"
          align="center"
          style="margin-top: 20px; margin-bottom: 20px; position: relative">
          <!--已选择行数-->
          <div
            v-show="selectedRows.length != 0"
            class="selection-tips">
            已选择:&nbsp;<b>{{ selectedRows.length }}</b>&nbsp;行
          </div>
          <!--分页控件-->
          <template v-if="listData.total > pageSize">
            <el-pagination
              :current-page.sync="pageIndex"
              :page-sizes="[10, 20, 50, 100, 200]"
              :page-size.sync="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total.sync="listData.total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"/>
          </template>
          <template v-else-if="listData.list">
            <div class="simple-pager">
              共{{ listData.list.length || listData.total }}条
            </div>
          </template>
          <template v-else>
            <div class="simple-pager">共{{ listData.total }}条</div>
          </template>
        </div>
      </div>

      <!--列表字段选择dialog-->
      <el-dialog
        title="列表字段选择"
        :visible.sync="tableHeaderDialogVisible"
        width="80%"
        top="30vh"
        class="tableHeaderDialog"
        :before-close="handleDialogClose">
        <el-checkbox
          label="序号"
          disabled
          checked/>
        <el-checkbox
          v-for="field in fields"
          :key="field.name"
          :label="field.name"
          :checked="field.isList">{{ field.label }}
        </el-checkbox>
        <el-checkbox
          label="操作"
          disabled
          checked/>
        <span slot="footer" class="dialog-footer">
                <el-button
                  type="primary"
                  @click="tableHeaderDialogVisible = false">确 定</el-button>
            </span>
      </el-dialog>
    </div>

    <!--form表单区域-->
    <template>
      <!--单条数据模式-->
      <template v-if="singleDataMode">
        <div
          class="app-form-inline"
          style="padding-bottom: 30px">
          <curdForm
            ref="curdForm"
            v-if="!(formType === 'detail' && useCustomDetailView)"
            :form-fields="formFields"
            :detail-data="formDetailData || {}"
            :form-type="formType"
            :form-name="tableName"
            :form-cols="3"
            :isInDrawer="false"
            :canModifyThisRow="canModifyThisRow"
            @formSubmit="formSubmit"
            @onClose="closeForm">
            <slot
              name="detail-functions"
              :data="formDetailData || {}"></slot>
            <template slot="form-fill-memo">
              <el-alert
                title="填写说明"
                :description="formFillMemo"
                type="info"></el-alert>
            </template>

          </curdForm>

          <!--自定义详情页-->
          <slot
            v-if="formType === 'detail' && useCustomDetailView"
            name="custom-detail-page"
            :data="{formType:formType,isInDrawer:false}"></slot>
          <slot
            v-if="(formType === 'detail' && !useCustomDetailView) || (formType === 'edit')"
            name="subPages"
            :data="formDetailData || {}"/>
        </div>
      </template>
      <!--列表模式的详情模式-->
      <template v-else>
        <el-drawer
          style="padding-bottom: 30px"
          class="app-form"
          :append-to-body="true"
          :visible.sync="formVisible"
          :direction="formDirection"
          :size="formWidth || formSize"
          :show-close="false"
          :with-header="false"
          :before-close="onDrawerClose">
          <!--默认详情表单-->
          <curdForm
            ref="curdForm"
            v-if="!(formType === 'detail' && useCustomDetailView)"
            :form-fields="formFields"
            :detail-data="formDetailData || {}"
            :form-type="formType"
            :form-name="tableName"
            :form-cols="formCols"
            :isInDrawer="true"
            :canModifyThisRow="canModifyThisRow"
            :readonly-mode="readonlyMode"
            @formSubmit="formSubmit"
            @onClose="closeForm">
            <slot
              name="detail-functions"
              :data="formDetailData || {}"></slot>
            <template slot="form-fill-memo" v-if="formFillMemo">
              <el-alert
                show-icon
                title="填写说明"
                :description="formFillMemo"
                type="info"></el-alert>
            </template>
          </curdForm>
          <!--自定义详情页-->
          <slot
            v-if="formType === 'detail' && useCustomDetailView"
            :data="{formType:formType,isInDrawer:true}"
            name="custom-detail-page">
          </slot>
          <!--子表页面-->
          <slot
            v-if="(formType === 'detail' && !useCustomDetailView) || (formType === 'edit')"
            name="subPages"
            :data="formDetailData || {}"/>
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
  transition: 0.2s;
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
import {
  refresh
} from '@/utils/comm-utils'

export default {
  name: 'CurdTable',
  props: {
    dataObject: {
      // table.js 传入
      type: Object,
      default: null,
      required: false
    },
    isRadioModel: {
      // 是否单选模式
      type: Boolean,
      default: false,
      required: false
    },
    listData: {
      // 列表数据
      type: Object,
      default: () => {
        [{
          ShowEdit: false
        }]
      },
      required: true
    },
    fields: {
      // 所有字段
      type: Array,
      default: () => [],
      required: true
    },
    listFields: {
      // 列表字段
      type: Array,
      default: () => [],
      required: true
    },
    detailData: {
      // 详情数据
      type: Object,
      default: null,
      required: true
    },
    defaultAddData: {
      // 默认添加字段值
      type: Object,
      default: () => {
      },
      required: false
    },
    defaultQueryData: {
      // 默认查询字段值
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
      // 表单一行显示几列
      type: Number,
      default: 2,
      required: false
    },
    formWidth: {
      // 表单宽度
      type: String,
      default: null,
      required: false
    },
    rowActions: {
      // 自定义行操作
      type: Array,
      default: () => {
      },
      required: false
    },
    editInTable: {
      // 是否行内编辑
      type: Boolean,
      default: false,
      required: false
    },
    insertButtonName: {
      // 添加按钮名字
      type: String,
      default: '新增',
      required: false
    },
    hiddenSeniorQuery: {
      // 隐藏高级查询
      type: Boolean,
      default: false,
      required: false
    },
    fastQueryFields: {
      // 快速查询字段
      type: String,
      default: null,
      required: false
    },
    fastQueryTips: {
      // 快速查询提示
      type: String,
      default: null,
      required: false
    },
    defaultOrderBy: {
      // 默认排序
      type: String,
      default: null,
      required: false
    },
    singleDataMode: {
      // 单条数据模式
      type: Boolean,
      default: false,
      required: false
    },
    subPageMode: {
      // 子页面模式
      type: Boolean,
      default: false,
      required: false
    },
    readonlyMode: {
      // 只读模式
      type: Boolean,
      default: false,
      required: false
    },
    selectMode: {
      // 选择模式
      type: Boolean,
      default: false,
      required: false
    },
    selectModeCols: {
      // 选择模式显示列数量
      type: Number,
      default: 3,
      required: false
    },
    primaryKey: {
      // 主键字段
      type: String,
      default: 'id',
      required: false
    },
    defaultSelectedKeys: {
      // 已经选择的id组成的数组
      type: Array,
      default: () => [],
      required: false
    },
    tableName: {
      // 已经选择的id组成的数组
      type: String,
      default: '',
      required: false
    },
    permissions: {
      // 已经选择的id组成的数组
      type: Object,
      default: () => {
      },
      required: false
    },
    useCustomDetailView: {
      // 自定义详情页面
      type: Boolean,
      default: false
    },
    useCustomAddView: {
      // 自定义添加页面
      type: Boolean,
      default: false
    },
    isGenerateAddFunc: {
      // 是否新增
      type: Boolean,
      default: true
    },
    isGenerateUpdateFunc: {
      // 是否修改
      type: Boolean,
      default: true
    },
    isGenerateDelFun: {
      // 是否删除
      type: Boolean,
      default: true
    },
    isGenerateDetailFunc: {
      // 是否详情
      type: Boolean,
      default: true
    },
    formFillMemo: {
      // 表单填写说明
      type: String,
      default: null
    },
    maxAddSize: {
      // 最大填写数量
      type: Number,
      default: -1
    },
    canModifyThisRow: {
      type: Function,
      default: () => {
        return true
      }
    },
    canDelete: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      // tableHeight: 307,
      tableHeight: 250,
      queryDataInfo: {}, // 保存查询条件
      formType: 'add',
      formName: '新增' + this.tableName,
      formVisible: false,
      formSize: this.formCols * 600 + 'px',
      formDirection: 'rtl',
      isShowSeniorQuery: false, // 显示高级查询
      lastIsFastQuery: false, // 最后一次查询true 为普通，false为高级
      keywords: '',
      pageIndex: 1,
      pageSize: 10,
      order: this.defaultOrderBy ? this.defaultOrderBy : '', // 排序字段
      // 查询和高级查询
      formFields: [],
      updateFields: [],
      addFields: [],
      detailFields: [],
      queryFields: [],
      queryFrom: {},
      formDetailData: this.detailData,
      // 添加表单的数据
      addFormData: JSON.parse(JSON.stringify(this.defaultAddData)) || {},
      // 当前点击行行号-用于行内编辑
      RowIndex: -1,
      seniorQueryFormData: JSON.parse(JSON.stringify(this.defaultQueryData)) || {},
      tableHeaderFields: this.listFields,
      tableHeaderDialogVisible: false,
      selectedRows: [], // 被选中的行，
      isNeedRefreshBtn: !this.subPageMode && !this.selectMode && true,
      isNeedAddBtn: !this.readonlyMode && !this.selectMode && true, //
      isNeedEditBtn: !this.readonlyMode && !this.selectMode && true,
      isNeedDelBtn: !this.readonlyMode && !this.selectMode && this.canDelete && true,
      isNeedDetailBtn: true,
      isNeedSlotBtn: !this.readonlyMode && !this.selectMode && true,
      isNeedChangeFieldsBtn:
        !this.readonlyMode && !this.subPageMode && !this.selectMode && true,
      isNeedFastQuery: true,
      isNeedSeniorQuery: !this.subPageMode && !this.selectMode && true,
      dataNotExist: false
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
    },
    dataSize: function() {
      let dataSize = 0
      if (this.listData.list) {
        dataSize = this.listData.list.length || this.listData.total
      } else {
        dataSize = this.listData.total
      }
      return dataSize
    },
    canAddMore: function() {
      if (this.maxAddSize === -1) {
        return true
      }
      let dataSize = 0
      if (this.listData.list) {
        dataSize = this.listData.list.length || this.listData.total
      } else {
        dataSize = this.listData.total
      }
      // console.log('dataSize', dataSize, 'this.maxAddSize', this.maxAddSize)
      return dataSize < this.maxAddSize
    },
    isShowCol(index) {
      return !this.selectMode || (this.selectMode && index < this.selectModeCols)
    }
  },
  watch: {
    listData(val) {
      // console.log('watch listData')
      // console.log('watch --listData:', val)
      this.pageIndex = val.pageIndex
      this.pageSize = val.pageSize
      this.total = val.total

      // 重置添加表格数据
      this.addFormData = JSON.parse(JSON.stringify(this.defaultAddData)) || {}

      if (this.singleDataMode) {
        if (this.total > 0) {
          this.showDetail(this.listData.list[0])
        } else if (this.readonlyMode) {
          // 单数据模式并且为只读模式，进入到这里说明数据不存在了
          this.dataNotExist = true
        } else {
          this.showAddInfo()
        }
      } else {
        // 添加当前要编辑的行号
        if (this.listData.list) {
          let i = 0
          this.listData.list.forEach((element) => {
            element['RowIndex'] = i++
          })
        }

        // 默认选中
        this.doDefaultSelect()
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
        this.listData.list.forEach((element) => {
          this.$refs.multipleTable.toggleRowSelection(element, false)
        })
      })
      if (val.length > 0) {
        // 默认选中
        this.$nextTick(() => {
          this.listData.list.forEach((element) => {
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
    // console.log('curd-table this.fields: ', this.fields);
    for (const index in this.fields) {
      const item = this.fields[index]
      if (item.isAdd || item.isShowInAdd) {
        this.addFields.push(item)
      }
      if (item.isQuery) {
        this.queryFields.push(item)
      }
      if (item.isUpdate || item.isShowInUpdate) {
        this.updateFields.push(item)
      }
      if (item.isDetail) {
        this.detailFields.push(item)
      }
    }
  },
  mounted() {

    this.$nextTick(() =>{
      // 增加监听事件，窗口变化时得到高度。
      window.addEventListener('resize', this.getHeight, false)
      this.getHeight()
    })

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
          onEnd: function(evt) {
            // // console.log('evt.oldIndex', evt.oldIndex, 'evt.newIndex', evt.newIndex, 'row', _this.listData.list[evt.oldIndex])
            _this.$emit(
              'rowIndexChange',
              evt.oldIndex,
              evt.newIndex,
              _this.listData.list[evt.oldIndex]
            )
          }
        })
      }

      // 列拖拽
      // const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      // this.sortable = Sortable.create(wrapperTr, {
      //   animation: 180,
      //   delay: 0,
      //   onEnd: evt => {
      //     const oldItem = this.listFields[evt.oldIndex - 2] // -1是因为有序号列，-2是因为有复选框
      //     this.listFields.splice(evt.oldIndex - 2, 1)
      //     this.listFields.splice(evt.newIndex - 2, 0, oldItem)
      //   }
      // })
    }
  },
  methods: {
    getHeight() {
      // 获取浏览器高度并计算得到表格所用高度。
      this.tableHeight = document.documentElement.clientHeight - 302
      // console.log('this.tableHeight',this.tableHeight)
      // this.tableHeight = document.querySelector('.app-main').style.height
      //
      // console.log('app-main',document.querySelector('.app-main'))
      console.log('this.tableHeight',this.tableHeight)
      // console.log('this.tableHeight=========')
    },
    radioRowCheck(val) {
      if (this.isRadioModel) {
        this.$emit('row-select', [val], this.queryDataInfo)
      }
    },
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
    getRowKey(row) {
      return row[this.primaryKey] || row.RowIndex
    },
    resetSeniorQureyForm() {
      this.seniorQueryFormData =
        JSON.parse(JSON.stringify(this.defaultQueryData)) || {}
    },
    refreshRouter() {
      refresh(this.$router)
    },
    closeForm() {
      this.formVisible = false
    },
    onDrawerClose() {
      console.log('onDrawerClose')
      this.formVisible = false
    },
    // 显示信息添加界面
    showAddInfo() {
      // 自定义添加页面
      if (this.useCustomAddView) {
        this.$emit('on-add-click')
        return
      }

      if (!this.singleDataMode) this.formVisible = true
      this.formType = 'add'
      this.formName = '新增' + this.tableName
      this.formFields = this.addFields
      // 添加字段默认值
      // this.formDetailData = this.defaultAddData
      this.formDetailData = JSON.parse(JSON.stringify(this.defaultAddData)) || {}
      console.log('this.formDetailData', this.formDetailData)
      // this.formDetailData = this.addFormData;
      this.$emit('on-show-add')

      // 清空检验信息
      if (this.$refs.curdForm) {
        this.$refs.curdForm.resetFields()
        this.$refs.curdForm.clearValidate()
      }
    },
    // 获取修改内容
    showEditInfo(row) {
      if (!this.singleDataMode) this.formVisible = true
      this.formType = 'edit'
      this.formName = '修改' + this.tableName
      this.formFields = this.detailFields
      // this.formDetailData will update in watch
      this.$emit('detail', row, this.queryDataInfo)
    },
    showSeniorQuery() {
      this.isShowSeniorQuery = true
    },
    hideSeniorQuery() {
      this.isShowSeniorQuery = false
    },
    showDetail(row) {
      if (!this.singleDataMode) this.formVisible = true
      console.log('this.formType: ', this.formType)
      this.formType = 'detail'
      // this.formName = this.tableName + '详情'
      this.formFields = this.detailFields
      // this.formDetailData will update in watch
      console.log('emit detail: ', this.formType)
      this.$emit('detail', row, this.queryDataInfo)
    },

    emitAddData(data) {
      this.$emit('insert', data, this.queryDataInfo)
      // 重置
      this.formDetailData = JSON.parse(JSON.stringify(this.defaultAddData)) || {}
      // if(this.$refs.curdForm){
      //     this.$refs.curdForm.resetFields()
      // }
    },
    emitUpdateData(data) {
      this.$emit('update', data, false, this.queryDataInfo)
    },
    // 分页相关
    handleSizeChange() {
      // 页面显示数量修改
      this.queryData(false)
    },
    handleCurrentChange() {
      // 页码修改
      this.queryData(false)
    },
    queryData(isNewQuery) {
      // 判断是调用普通查询还是高级查询
      if (this.lastIsFastQuery === true) {
        this.fastQuery(isNewQuery) // 普通查询
      } else {
        this.seniorQuery(isNewQuery) // 高级查询
      }
    },
    preSeniorQuery() {
      this.queryFrom = this.seniorQueryFormData
      // console.log(this.queryFrom)s
      for (const inputName in this.seniorQueryFormData) {
        const inputNames = inputName.split('~')
        // 数字类型范围查询
        if (inputNames.length === 2) {
          const fieldName = inputNames[0]
          // console.log(!Array.isArray(this.queryFrom[column]))
          // 添加默认值
          if (
            !this.queryFrom[fieldName] &&
            !Array.isArray(this.queryFrom[fieldName])
          ) {
            this.queryFrom[fieldName] = ['', '']
          }
          if (inputNames[1] === 'start') {
            // console.log('start', '执行了', formData[item])
            this.queryFrom[fieldName][0] = this.seniorQueryFormData[inputName] // xxx~start
          } else if (inputNames[1] === 'end') {
            this.queryFrom[fieldName][1] = this.seniorQueryFormData[inputName] // xxx~end
          }
        } else if (inputName.endsWith('_Srange')) {
          // 字符串范围查询
          const fieldName = inputName.replace('_Srange', '')
          this.queryFrom[fieldName] = this.seniorQueryFormData[inputName].split(
            '~'
          )
        }
      }
      // console.log(this.queryFrom)
      this.seniorQuery(true)
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
      if (isNewQuery) {
        this.pageIndex = 1
      }
      query['pageIndex'] = this.pageIndex
      query['pageSize'] = this.pageSize
      query['order'] = this.order
      this.queryDataInfo = query
      // console.log('seniorQuery----order:', this.order)
      this.$emit('query', query)
    },
    // 普通查询方法
    fastQuery(isNewQuery) {
      this.lastIsFastQuery = true
      const query = {}
      if (isNewQuery) {
        this.pageIndex = 1
      }
      query['pageIndex'] = this.pageIndex
      query['pageSize'] = this.pageSize
      query['keywords'] = this.keywords
      query['order'] = this.order
      query['_fastQueryFields'] = this.fastQueryFields
      this.queryDataInfo = query
      this.$emit('query', query)
    },
    // 重置查询信息
    clearQueryInfo() {
      this.queryFrom = {}
      this.queryDataInfo = {}
    },
    // 删除内容
    deleteInfo(row) {
      this.$emit('del', row, this.queryDataInfo)
    },
    deleteBatch() {
      if (this.selectedRows.length <= 0) {
        this.$message.warning('请选择要删除的行')
        return
      }

      this.$confirm(
        '确认要删除这【' + this.selectedRows.length + '】条数据吗？'
      )
        .then((_) => {
          // 调用删除数据的方法
          this.$emit('deleteBatch', this.selectedRows, this.queryDataInfo)
        })
        .catch((_) => {
        })
    },
    expExcel() {
      console.log('???')
      this.$emit('expExcel', this.queryDataInfo)
    },
    orderByTable({ column, prop, order }) {
      if (order) {
        this.order = prop + ' ' + (order === 'ascending' ? 'ASC' : 'DESC')
      } else {
        this.order = ''
      }
      this.queryData(true)
    },
    fetchData() {
      this.queryData(false)
      this.formVisible = false
    },
    doRowAction(command) {
      this.$emit('rowAction', command.command, command.row, this.queryDataInfo)
    },
    beforeHandleCommand(index, row, command) {
      return {
        index: index,
        row: row,
        command: command
      }
    },
    rowClickHandler(currentRow) {
      // console.log('rowClickHandler')
      if (!this.selectMode) {
        // 非选择模式
        // 当前要编辑的行号
        this.RowIndex = currentRow.RowIndex
      }
    },
    // 行内编辑
    handleRowEdit(index, row, updateFiled) {
      const updateToInfo = {}
      updateToInfo[this.primaryKey] = row[this.primaryKey]
      updateToInfo[updateFiled] = row[updateFiled]

      this.$emit('update', updateToInfo, true, this.queryDataInfo)
    },
    formSubmit(formData, formType) {
      formType = formType || this.formType
      // console.log('CurdTable formSubmit', formData, 'formType', formType)
      if (formType === 'add') {
        // console.log('CurdTable formSubmit add')
        this.emitAddData(formData)
      } else if (formType === 'edit') {
        // console.log('CurdTable formSubmit edit')
        this.emitUpdateData(formData)
      } else {
        console.log('CurdTable formSubmit 传入类型错误！')
      }
    },
    selectionChange(selection) {
      /** 所有选中的行**/
      console.log('selectionChange')
      this.selectedRows = selection
      //if (this.selectMode) {
      // 选择模式
      this.$emit('row-select', this.selectedRows, null, this.queryDataInfo)
      //}
    },
    onTableSelect(rows, row) {
      /** 手动点击复选框 判断当前表格勾选的是选中的还是取消选中的 **/
      // console.log("onTableSelect", this.selectMode);
      if (!this.selectMode) {
        // 非选择模式
        return
      }
      const selected = rows.length && rows.indexOf(row) !== -1
      // console.log(selected) // true就是选中，0或者false是取消选中
      if (selected) {
        this.$emit('row-checked', row, rows, this.queryDataInfo)
      } else {
        this.$emit('row-unchecked', row, rows, this.queryDataInfo)
      }
      this.$emit('row-select-change', rows, null, this.queryDataInfo)
    },
    onTableSelectAll(rows) {
      this.$emit('row-select-change', rows, null, this.queryDataInfo)
    },
    handleDialogClose() {
    },
    doDefaultSelect() {
      // console.log("doDefaultSelect");
      // 默认选中
      this.$nextTick(() => {
        // this.listData.list.forEach(element => {
        //   console.log("element",element)
        // })
        this.listData.list.forEach((element) => {
          if (this.defaultSelectedKeys.indexOf(element[this.primaryKey]) >= 0) {
            this.$refs.multipleTable.toggleRowSelection(element, true)
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .column-button.el-button--medium,
.column-button.el-button--default {
  padding: 6px 8px;
  width: 32px !important;
  margin-left: 5px;
}

::v-deep .column-button.el-button--mini,
.column-button.el-button--small {
  padding: 4px 4px;
  width: 28px !important;
  margin-left: 5px;
}

::v-deep .el-card__body {
  padding: 20px !important;
  padding-bottom: 0px;
}

#app {
  .el-card {
    ::v-deep .el-card__body {
      padding: 20px !important;
      padding-bottom: 0px;
    }
  }
}

::v-deep .el-table-column--selection .cell {
  padding-left: 14px;
  padding-right: 0px;
}
</style>
