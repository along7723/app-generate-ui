const tableInfo = {
  listFields: [{
    name: 'college',
    label: '毕业学校',
    labelShort: '',
    isList: true,
    isFixed: false,
    isShowTips: false,
    isSort: false,
    fieldProp: 'college',
    isCode: false,
    codeName: '',
    dicType: 'select',
    type: 'text', // 输入框类型  input(默认) code time
    timeFormat: ''
  },
    {
      name: 'major',
      label: '专业名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'major',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'education',
      label: '学历',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'education',
      isCode: true,
      codeName: 'Education',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'degree',
      label: '学位',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'degree',
      isCode: true,
      codeName: 'Marjor',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'startYears',
      label: '入学年月',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'start_years',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM'
    },
    {
      name: 'endYears',
      label: '毕业年月',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'end_years',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM'
    }
  ],
  fields: [{
    name: 'id',
    label: '主键',
    type: 'text', // 输入框类型  input(默认) code time
    isScope: true // 是否范围查询
  },
    {
      name: 'talId',
      label: '人才id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'college',
      label: '毕业学校',
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
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
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
      name: 'major',
      label: '专业名称',
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
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
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
      name: 'education',
      label: '学历',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'Education',
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
      name: 'degree',
      label: '学位',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'Marjor',
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
      name: 'startYears',
      label: '入学年月',
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
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'endYears',
      label: '毕业年月',
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
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'memo',
      label: '备注',
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
      type: 'textarea', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: true
    },
    {
      name: 'createUser',
      label: '创建人',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: false,
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
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: false,
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
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: '',
  fastQueryTips: '',
  defaultSortField: '',
  defaultSortType: '',
  tableId: '13573',
  cardImage: '', //图片列表图片字段
  timeLineField: {
    dateField: '',
    titleField: '',
    descriptionFiled: '',
    categoryField: '',
    thumbnailField: '',
    iconField: '',
    colorField: ''
  },
  isExpExcel: false, //是否显示导出excel按钮
  permissions: {
    // add: { button: '/education/add' },
    // del: { button: '/education/del' },
    // edit: { button: '/education/update' },

    // detail: { button: '/education/getById' }
  }

}

export default tableInfo
