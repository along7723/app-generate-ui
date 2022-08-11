<template>
  <div
    :class="isInDrawer ? 'in-drawer form-page' : 'form-page'"
    style="position: relative"
  >
    <page-header
      :show-back="!isInDrawer"
      :show-close="isInDrawer"
      @close="onClose"
      :title="pageName"
    ></page-header>
    <div class="form-fill-memo" v-show="currFormType !== 'detail'">
      <slot name="form-fill-memo"></slot>
    </div>
    <!--添加、修改、查询-->
    <el-form
      ref="dataForm"
      :class="currFormType === 'detail' ? 'detail-from' : ''"
      :model="formData"
      :validate-on-rule-change="false"
      label-width="132px"
    >
      <el-row class="form-inputs">
        <span v-for="(item, i) in formFields" :key="item.name">
          <el-col v-if="item.group" :span="24">
            <div class="sys-divider">
              {{ item.group }}
            </div>
          </el-col>
          <el-col
            :span="calcColSpan(colSpan, item.isCrowsRow)"
            v-if="
              item.isDependencyShow
                ? formData[item.dependencyByField] === item.dependencyByValue
                : true
            "
          >
            <!--详情-->
            <template v-if="isDetail && item.isDetail">
              <el-form-item
                :label="item.label"
                :style="
                  item.type === 'richtext' ? 'height: auto !important;' : ''
                "
                class="richtext"
                :prop="item.name"
              >
                <template slot="label" v-if="item.labelShort && item.labelShort!==''">
                    <div :title="item.label">
                      <i
                        class="el-icon-info"
                        style="margin-right:2px;color:#ddd;"/>{{ item.labelShort || item.label || item.name }}
                    </div>
                </template>
                <template v-if="item.type === 'code'">
                  <codeSelect
                    :key="uuid + '_' + i"
                    v-model="formData[item.name]"
                    :dic="item.codeName"
                    :type="item.dicType"
                    translate-mode
                  />
                </template>
                <template v-else-if="item.type === 'time'">
                  <template v-if="item.timeFormat === 'yyyy-MM-dd'">
                    {{ formData[item.name] | formatDate }}
                  </template>
                  <template v-if="item.timeFormat === 'yyyy-MM'">
                    {{ formData[item.name] | formatMonth }}
                  </template>
                  <template v-else>
                    {{ formData[item.name] }}
                  </template>
                </template>
                <template v-else-if="item.type === 'richtext'">
                  <rich-text v-model="formData[item.name]" readonly></rich-text>
                </template>
                <template v-else-if="item.type === 'file'">
                  <single-file
                    v-model="formData[item.name]"
                    readonly
                  ></single-file>
                </template>
                <template v-else-if="item.type === 'image'">
                  <single-image
                    v-model="formData[item.name]"
                    readonly
                  ></single-image>
                </template>
                <template v-else>
                  {{ formData[item.name] }}
                </template>
              </el-form-item>
            </template>

            <!--添加-->
            <!-- <template v-else-if="isAdd && (item.isAdd || item.isShowInAdd)"> -->
            <template v-else-if="isAdd && (item.isAdd || item.isShowInAdd)">
              <el-form-item
                :label="item.label"
                :prop="item.name"
                :style="
                  item.type === 'richtext' || item.type === 'code'
                    ? 'height: auto !important;'
                    : ''
                "
                :rules="item.rules"
              >
                <template slot="label" v-if="item.labelShort && item.labelShort!==''">
                    <span :title="item.label">
                      <i class="el-icon-info"
                         style="margin-right:2px;color:#ddd;"/>{{ item.labelShort || item.label || item.name }}
                    </span>
                </template>
                <template v-if="item.type === 'time'">
                  <template v-if="item.timeFormat === 'yyyy-MM-dd'">
                    <date-date
                      v-model="formData[item.name]"
                      type="date"
                      value-format="yyyy-MM-dd"
                    />
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy'">
                    <el-date-picker
                      v-model="formData[item.name]"
                      type="year"
                      value-format="yyyy"
                    />
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy-MM'">
                    <date-month v-model="formData[item.name]"></date-month>
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy第WW周'">
                    <!--                   <el-date-picker v-model="formData[item.name]" :format="formatDate" type="week" format="yyyy-WW"  placeholder="选择周"/>-->
                    <date-week v-model="formData[item.name]"></date-week>
                  </template>
                  <template v-else>
                    <el-date-picker
                      v-model="formData[item.name]"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                    />
                  </template>
                </template>
                <template v-else-if="item.type === 'richtext'">
                  <rich-text v-model="formData[item.name]"></rich-text>
                </template>
                <template v-else-if="item.type === 'textarea'">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 10}"
                    placeholder="请输入内容"
                    v-model="formData[item.name]">
                  </el-input>
                </template>
                <template v-else-if="item.type === 'file'">
                  <single-file
                    v-model="formData[item.name]"
                    :fileMaxSize="item.fileMaxSize"
                    :accept="item.accept"></single-file>
                </template>
                <template v-else-if="item.type === 'image'">
                  <single-image v-model="formData[item.name]"></single-image>
                </template>
                <template v-else-if="item.type === 'code'">
                  <codeSelect
                    :key="uuid + '_' + i"
                    v-model="formData[item.name]"
                    :dic="item.codeName"
                    :type="item.dicType"
                    :disabled="!item.isAdd && item.isShowInAdd"
                  />
                </template>
                <template v-else-if="item.type === 'number'">
                  <el-input-number
                    v-model="formData[item.name]"
                  ></el-input-number>
                </template>
                <template v-else>
                  <el-input v-model="formData[item.name]"/>
                </template>
              </el-form-item>
            </template>

            <!--修改-->
            <template v-else-if="isEdit && item.isUpdate || item.isShowInUpdate">
              <el-form-item
                :label="item.label"
                :prop="item.name"
                :style="
                  item.type === 'richtext' || item.type === 'code'
                    ? 'height: auto !important;'
                    : ''
                "
                :rules="item.isUpdate?item.rules:null"
              >
                <template slot="label" v-if="item.labelShort && item.labelShort!==''">
                    <span :title="item.label">
                      <i class="el-icon-info"
                         style="margin-right:2px;color:#ddd;"/>{{ item.labelShort || item.label || item.name }}
                    </span>
                </template>
                <template v-if="item.type === 'time'">
                  <template v-if="item.timeFormat === 'yyyy-MM-dd'">
                    <date-date
                      v-model="formData[item.name]"
                      type="date"
                      value-format="yyyy-MM-dd"
                    />
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy'">
                    <el-date-picker
                      v-model="formData[item.name]"
                      type="year"
                      value-format="yyyy"
                    />
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy-MM'">
                    <date-month v-model="formData[item.name]"></date-month>
                  </template>
                  <template v-else-if="item.timeFormat === 'yyyy第WW周'">
                    <date-week v-model="formData[item.name]"></date-week>
                  </template>
                  <template v-else>
                    <el-date-picker
                      v-model="formData[item.name]"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                    />
                  </template>
                </template>
                <template v-else-if="item.type === 'richtext'">
                  <rich-text v-model="formData[item.name]"></rich-text>
                </template>
                <template v-else-if="item.type === 'textarea'">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 10}"
                    placeholder="请输入内容"
                    v-model="formData[item.name]">
                  </el-input>
                </template>
                <template v-else-if="item.type === 'file'">
                  <single-file
                    v-model="formData[item.name]"
                    :fileMaxSize="item.fileMaxSize"
                    :accept="item.accept"></single-file>
                </template>
                <template v-else-if="item.type === 'image'">
                  <single-image v-model="formData[item.name]"></single-image>
                </template>
                <template v-else-if="item.type === 'code'">
                  <codeSelect
                    :key="uuid + '_' + i"
                    v-model="formData[item.name]"
                    :dic="item.codeName"
                    :type="item.dicType"
                    :disabled="!item.isAdd && item.isShowInAdd"
                  />
                </template>
                <template v-else-if="item.type === 'number'">
                  <el-input-number
                    v-model="formData[item.name]"
                  ></el-input-number>
                </template>
                <template v-else>
                  <el-input v-if="item.isUpdate" v-model="formData[item.name]"/>
                  <span v-else-if="item.isShowInUpdate">{{ formData[item.name] }}</span>
                </template>
              </el-form-item>
            </template>
          </el-col>
        </span>
      </el-row>

      <!--按钮区-->
      <el-row
        style="
          position: fixed;
          bottom: 0px;
          height: 60px;
          width: 100%;
          background-color: white;
          z-index: 10;
          margin-left: -20px;
          margin-bottom: 0px;
          border: 1px solid #ccc;
        "
      >
        <el-col :class="isInDrawer ? 'in-drawer-form-buttons' : 'form-buttons'">
          <template v-if="!readonlyMode">
            <template v-if="isDetail">
              <el-button
                icon="el-icon-edit"
                type="primary"
                @click="showEdit"
                v-if="canModifyThisRow && canModifyThisRow(formData)"
              >修改
              </el-button>
              <el-button icon="el-icon-edit" type="primary" v-else title="无修改权限" disabled>修改</el-button>
            </template>
            <template v-else>
              <el-button
                style=""
                type="primary"
                @click="submitUpdateInfo('dataForm')"
              >保存
              </el-button
              >
              <el-button
                v-if="isInDrawer"
                style="margin-left: 20px"
                @click="onClose"
              >取消
              </el-button
              >
            </template>
          </template>
          <span v-else style="color: #999">只读模式</span>
          <!--扩展按钮插槽-->
          <slot v-if="isDetail"></slot>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style lang="scss">
.el-drawer.rtl {
  overflow-y: scroll;
}
</style>

<script>
import DateWeek from '../DateWeek/index'
import DateDate from '@/components/Sys/DateDate'

export default {
  name: 'CrudFrom',
  components: { DateDate, DateWeek },
  props: {
    readonlyMode: {
      type: Boolean,
      default: false,
      required: false
    },
    formFields: {
      type: Array,
      default: () => [],
      required: true
    },
    detailData: {
      type: Object,
      default: () => {
      },
      required: false
    },
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    formType: {
      type: String,
      default: 'add',
      required: true
    },
    formName: {
      type: String,
      default: '',
      required: false
    },
    formCols: {
      type: Number,
      default: 1,
      required: false
    },
    isInDrawer: {
      type: Boolean,
      default: false,
      required: false
    },
    canModifyThisRow: {
      type: Function,
      default: () => {
        return true
      }
    }
  },
  data() {
    return {
      test: '',
      // formData: {sex:'1'},
      formData: this.detailData || {},
      currFormType: this.formType,
      formNameMap: { query: '查询', detail: '详情', add: '新增', edit: '修改' },
      colSpan: 24 / this.formCols,
      uuid: this.$uuid.v1()
    }
  },
  computed: {
    isQuery: function() {
      return this.currFormType === 'query'
    },
    isDetail: function() {
      return this.currFormType === 'detail'
    },
    isAdd: function() {
      return this.currFormType === 'add'
    },
    isEdit: function() {
      return this.currFormType === 'edit'
    },
    pageName: function() {
      if (this.isAdd) {
        return this.formNameMap[this.currFormType] + this.formName
      } else {
        return this.formName + this.formNameMap[this.currFormType]
      }
    }
  },
  watch: {
    formType(val) {
      // console.log("CurdForm watch formType ----", val);
      this.currFormType = val
    },
    test(val) {
      // console.log('CurdForm watch formType ----', val)
      // console.log("test", val);
    },
    detailData(val) {
      // console.log("CurdForm watch detailData ----", val);
      this.uuid = this.$uuid.v1()
      this.formData = val || {}
    }
  },
  created() {
    // console.log('CurdForm created detailData', this.detailData)
    // console.log('CurdForm created this.formType', this.formType)
    // console.log('CurdForm created formFields', this.formFields)
    //  console.log("CurdForm  detailData ----", this.detailData);
    this.$nextTick(function() {
      this.clearValidate()
    })
  },
  mounted() {
    this.$nextTick(function() {
      this.clearValidate()
    })
  },
  methods: {
    submitUpdateInfo(dataForm) {
      console.log('formData', this.formData)
      debugger
      // console.log('submitUpdateInfo', dataForm)
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.$emit('formSubmit', this.formData, this.currFormType)
          if (this.currFormType === 'edit' && !this.isInDrawer) {
            this.currFormType = 'detail'
          }
          this.clearValidate()
        }
      })
    },
    resetFields() {
      this.$refs.dataForm.resetFields()
    },
    clearValidate() {
      this.$refs.dataForm.clearValidate()
    },
    onClose() {
      // 重置formType状态
      this.currFormType = this.formType
      this.clearValidate()
      this.$emit('onClose')
    },
    showEdit(row) {
      // this.formVisible = true
      this.currFormType = 'edit'
      // this.formFields = this.detailFields
      // this.formDetailData will update in watch
      // this.$emit('detail', row)
    },
    calcColSpan(defaultColSpan, isCrowsRow) {
      // console.log('isCrowsRow', isCrowsRow)
      if (isCrowsRow) {
        // console.log('isCrowsRow', isCrowsRow)
        return 24
      }
      return defaultColSpan
    }
  }
}
</script>

<style scoped lang="scss">
.in-drawer {
  padding-left: 20px;
  padding-right: 20px;
}

/*详情模式下隐藏表单验证提示*/
::v-deep .detail-from {
  .el-form-item__error {
    display: none;
  }
}

.el-page-header {
  margin-bottom: 20px;
  padding-bottom: 15px;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  border-bottom: 1px solid #efefef;
}

.page-header {
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 20px;
}

::v-deep .el-row.form-inputs {
  margin-bottom: 30px;
}

::v-deep .form-page .el-page-header__content {
  font-size: 16px !important;
}

.form-buttons {
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.in-drawer-form-buttons {
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding-left: 20px;
}

// 会引起富文本框高度不能展开
// ::v-deep .el-form-item--medium .el-form-item__content {
//   // height: 36px;
// }

// 解决错行问题
::v-deep .el-radio-group {
  height: 30px !important;
}

.form-fill-memo {
  padding-bottom: 20px;
}
</style>
