const tableInfo = {
  listFields: [{
    name: 'fName',
    label: '字段名',
    labelShort: '',
    isList: true,
    isFixed: false,
    isShowTips: false,
    isSort: false,
    fieldProp: 'f_name',
    isCode: false,
    codeName: '',
    dicType: 'select',
    type: 'text', // 输入框类型  input(默认) code time
    timeFormat: ''
  },
    {
      name: 'fComment',
      label: '字段注释',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'f_comment',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'fShortComment',
      label: '字段简注',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 80,
      isSort: false,
      fieldProp: 'f_short_comment',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isKey',
      label: '是否主键',
      labelShort: 'PK',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_key',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'fieldGroup',
      label: '字段分组',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'field_group',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'listColWidth',
      label: '列宽',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'list_col_width',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'inputType',
      label: '组件类型',
      labelShort: '组件',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'input_type',
      isCode: true,
      codeName: 'InputType',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'dateType',
      label: '时间格式',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 80,
      isSort: false,
      fieldProp: 'date_type',
      isCode: true,
      codeName: 'TimeFormat',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'dicCode',
      label: '代码字典表',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 0,
      isSort: false,
      fieldProp: 'dic_code',
      isCode: true,
      codeName: 'Dics',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'dicType',
      label: '代码框类型',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 0,
      isSort: false,
      fieldProp: 'dic_type',
      isCode: true,
      codeName: 'SelectType',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'rules',
      label: '校验规则',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 0,
      isSort: false,
      fieldProp: 'rules',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'rule', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isAdd',
      label: '是否添加',
      labelShort: '增',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_add',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isUpdate',
      label: '是否修改',
      labelShort: '改',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_update',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isDetail',
      label: '是否详情',
      labelShort: '详',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_detail',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isQuery',
      label: '是否查询',
      labelShort: '查',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_query',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isFastQuery',
      label: '是否快速查询',
      labelShort: '快查',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_fast_query',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isList',
      label: '是否列表',
      labelShort: '列',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_list',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isSort',
      label: '是否排序',
      labelShort: '排序',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_sort',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isDefaultSort',
      label: '是否默认排序',
      labelShort: '默排',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_default_sort',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'defaultSortType',
      label: '默认排序方式',
      labelShort: '默序',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'default_sort_type',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isCrowssRow',
      label: '是否独占一行',
      labelShort: '独行',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'is_crowss_row',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'isExport',
      label: '是否导出',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'isImport',
      label: '是否导入',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'importList',
      label: '导入顺序',
      labelShort: '',
      isList: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    }
  ],
  fields: [{
    name: 'fId',
    label: '字段id',
    labelShort: '',
    group: '元数据',
    isList: false,
    isAdd: true,
    isQuery: false,
    isUpdate: true,
    isDetail: true,
    isCode: false,
    codeName: '',
    dicType: 'select',
    rules: {
      required: false
    },
    type: 'text', // 输入框类型  input(默认) code time
    timeFormat: '',
    isScope: true, // 是否范围查询
    isDependencyShow: false,
    dependencyByField: '',
    dependencyByValue: '',
    isCrowsRow: false
  },
    {
      name: 'dbId',
      label: '数据源id',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'tId',
      label: '表id',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fName',
      label: '字段名',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{
        'required': true,
        'label': '必填',
        'message': '字段值不能为空',
        'bb': 'bb'
      }, {
        'validator': 'checkString50',
        'label': '50字符',
        'message': '字符长度不能超过50',
        'trigger': 'blur'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fComment',
      label: '字段注释',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{
        'required': false
      }, {
        'validator': 'checkString20',
        'label': '20字符',
        'message': '字符长度不能超过20',
        'trigger': 'blur',
        'min': 1,
        'max': 100
      }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fShortComment',
      label: '字段简注',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isShowTips',
      label: '是否显示提示',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fType',
      label: '字段类型',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fLength',
      label: '字段长度',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isKey',
      label: '是否主键',
      labelShort: 'PK',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isUnique',
      label: '是否唯一约束',
      labelShort: '唯一',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isIndex',
      label: '是否索引',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'indexType',
      label: '索引类型',
      isList: false,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'defaultQueryValue',
      label: '',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'inputType',
      label: '组件类型',
      labelShort: '组件',
      group: '表单属性',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'InputType',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'defaultValue',
      label: '默认值',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isMust',
      label: '是否必填',
      labelShort: '必填',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fieldGroup',
      label: '字段分组',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'fieldLevel',
      label: '字段级别',
      isList: false,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isCode',
      label: '是否代码字段',
      labelShort: '代码',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'inputType',
      dependencyByValue: 'code',
      isCrowsRow: false
    },
    {
      name: 'dicCode',
      label: '代码字典表',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'Dics',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'inputType',
      dependencyByValue: 'code',
      isCrowsRow: false
    },
    {
      name: 'dicType',
      label: '代码框类型',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'SelectType',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'inputType',
      dependencyByValue: 'code',
      isCrowsRow: false
    },
    {
      name: 'dateType',
      label: '时间格式',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'TimeFormat',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'inputType',
      dependencyByValue: 'time',
      isCrowsRow: false
    },
    {
      name: 'rules',
      label: '校验规则',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'rule', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'formIndex',
      label: '表单顺序',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isCrowssRow',
      label: '是否独占一行',
      labelShort: '独行',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'crowssRowHeight',
      label: '行高',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isHideInUpdate',
      label: '',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isAutoGenarate',
      label: '是否自动生成',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'autoGenarateMethod',
      label: '自动生成方法',
      isList: false,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isAdd',
      label: '是否添加',
      labelShort: '增',
      group: '添加配置',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isShowInAdd',
      label: '添加是否显示',
      labelShort: '增隐',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isAdd',
      dependencyByValue: '0',
      isCrowsRow: false
    },
    {
      name: 'isUpdate',
      label: '是否修改',
      labelShort: '改',
      group: '修改配置',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isShowInUpdate',
      label: '修改时显示',
      labelShort: '改隐',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isUpdate',
      dependencyByValue: '0',
      isCrowsRow: false
    },
    {
      name: 'isQuery',
      label: '是否查询',
      labelShort: '查',
      group: '查询配置',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isFastQuery',
      label: '是否快速查询',
      labelShort: '快查',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isList',
      label: '是否列表',
      labelShort: '列',
      group: '列表配置',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isSort',
      label: '是否排序',
      labelShort: '排序',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isList',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'listColWidth',
      label: '列宽',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isList',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'defaultSortType',
      label: '默认排序方式',
      labelShort: '默序',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isList',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'isDefaultSort',
      label: '是否默认排序',
      labelShort: '默排',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isList',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'listIndex',
      label: '列表顺序',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isList',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'isHideInDetail',
      label: '详情是否隐藏',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isFixed',
      label: '是否固定列',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isList',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'isDetail',
      label: '是否详情',
      labelShort: '详',
      group: '详情配置',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isDependencyShow',
      label: '是否依赖',
      labelShort: '',
      group: '依赖属性',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {
        required: false
      },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'dependencyByField',
      label: '依赖字段',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isDependencyShow',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'dependencyByValue',
      label: '依赖字段值',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isDependencyShow',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'createUser',
      label: '创建人',
      labelShort: '',
      group: '创建信息',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: false,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isImport',
      label: '是否导入',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isExport',
      label: '是否导出',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'fieldPrefix',
      label: '字段展示前缀',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'fieldSuffix',
      label: '字段展示后缀',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'fId',
  fastQueryFields: 'f_name, f_comment',
  fastQueryTips: '字段名, 字段注释',
  defaultSortField: '1',
  defaultSortType: 'asc',
  tableId: '3088',
  timeLineField: {},
  permissions: {}

}

export default tableInfo
