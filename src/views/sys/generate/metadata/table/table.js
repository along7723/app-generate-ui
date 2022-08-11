const tableInfo = {
  listFields: [
    {
      name: 'tId',
      label: '表ID',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 't_id',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'tName',
      label: '表名',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 't_name',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'tComment',
      label: '表注释',
      isList: true,
      isFixed: false,
      isShowTips: true,
      isSort: true,
      fieldProp: 't_comment',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'dbId',
      label: '数据源',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'db_id',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'tSchema',
      label: '库名',
      isList: true
    },
    {
      name: 'listPageStyle',
      label: '列表样式',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'list_page_style',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'dataLevel',
      label: '数据级别',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'data_level',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'moduleFullName',
      label: '模块名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'module_full_name',
      isCode: false,
      codeName: '',
      dicType: 'select'
    }
  ],
  fields: [
    {
      name: 'tId',
      label: '表ID',
      group: '元数据',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tSchema',
      label: '库名',
      isList: true,
      isAdd: true,
      isQuery: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbId',
      label: '数据源',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tName',
      label: '表名',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tComment',
      label: '表注释',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dataLevel',
      label: '数据级别',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateAddFunc',
      label: '生成添加功能',
      group: '生成配置',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateUpdateFunc',
      label: '生成修改功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateDelFun',
      label: '生成删除功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateDetailFunc',
      label: '生成详情功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateImportFunc',
      label: '生成导入功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateExportFunc',
      label: '生成导出功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'exportNumLimit',
      label: '导出数量限制',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'number', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGeneratePrintListFunc',
      label: '生成列表打印功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGeneratePrintDetailFunc',
      label: '生成打印详情功能',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateFastQueryFunc',
      label: '生成快速查询',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateWarterMark',
      label: '生成用户水印',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isGenerateSenoirQueryFunc',
      label: '生成高级查询',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'moduleFullName',
      label: '模块名称',
      group: '生成参数',
      isList: true,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'packageName',
      label: '包名',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'urlMapping',
      label: 'URL',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'keyField',
      label: '主键字段',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'fastQueryFields',
      label: '快速查询字段',
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'fastQueryTips',
      label: '快速查询提示',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'editInTable',
      label: '行内编辑',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'moduleIsMultiple',
      label: '是否分包',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'listPageStyle',
      label: '列表样式',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'formCols',
      label: '表单列数',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'defaultSortField',
      label: '默认排序字段',
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'defaultSortType',
      label: '默认排序方式',
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'data', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {
    name: '1'
  },
  defaultQueryData: {
    name: '2'
  },
  formCols: 2,
  keyField: 't_id',
  fastQueryFields: 't_name, t_comment',
  fastQueryTips: '表名, 表注释',
  defaultSortField: 't_name',
  defaultSortType: 'ASC'

}

export default tableInfo
