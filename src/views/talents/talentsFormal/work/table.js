const tableInfo = {
  listFields: [{
    name: 'company',
    label: '工作单位',
    labelShort: '',
    isList: true,
    isFixed: false,
    isShowTips: false,
    isSort: false,
    fieldProp: 'company',
    isCode: false,
    codeName: '',
    dicType: 'select',
    type: 'text', // 输入框类型  input(默认) code time
    timeFormat: ''
  },
    {
      name: 'job',
      label: '职务',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'job',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'jobDuty',
      label: '职称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'job_duty',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'startDate',
      label: '开始时间',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'start_date',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    },
    {
      name: 'endDate',
      label: '结束时间',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'end_date',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    }
  ],
  fields: [{
    name: 'id',
    label: '主键id',
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
      name: 'company',
      label: '工作单位',
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
      isCrowsRow: true
    },
    {
      name: 'companyLocation',
      label: '单位地址',
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
      name: 'job',
      label: '职务',
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
      name: 'jobDuty',
      label: '职称',
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
      rules: [{
        'required': false,
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
      name: 'startDate',
      label: '开始时间',
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
      rules: [{
        'required': true,
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'endDate',
      label: '结束时间',
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
      rules: [{
        'required': true,
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'leaveReason',
      label: '离职原因',
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
      name: 'companyAppraise',
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
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
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
  tableId: '13579',
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
    // add: { button: '/work/add' },
    // del: { button: '/work/del' },
    // edit: { button: '/work/update' },

    // detail: { button: '/work/getById' }
  }

}

export default tableInfo
