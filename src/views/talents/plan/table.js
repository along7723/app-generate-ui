const tableInfo = {
  listFields: [{
    name: 'planName',
    label: '计划名称',
    labelShort: '',
    isList: true,
    isFixed: false,
    isShowTips: false,
    isSort: true,
    fieldProp: 'plan_name',
    isCode: false,
    codeName: '',
    dicType: 'select',
    type: 'text', // 输入框类型  input(默认) code time
    timeFormat: ''
  },
    {
      name: 'planDepartment',
      label: '组织单位',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'plan_department',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'planMembers',
      label: '计划人数',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'plan_members',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'members',
      label: '成员数量',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'members',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'startTime',
      label: '计划年份',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'start_time',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy'
    },
    {
      name: 'createTime',
      label: '创建时间',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'create_time',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: ''
    }
  ],
  fields: [{
    name: 'id',
    label: '主键id',
    group: '',
    isList: false,
    isAdd: false,
    isQuery: false,
    isUpdate: false,
    isShowInUpdate: false,
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
      name: 'planName',
      label: '计划名称',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
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
      name: 'planDescription',
      label: '计划描述',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
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
      name: 'planDepartment',
      label: '组织单位',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
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
      name: 'planMembers',
      label: '计划人数',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
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
      name: 'members',
      label: '成员数量',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
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
      name: 'startTime',
      label: '计划年份',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'endTime',
      label: '结束日期',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'createUser',
      label: '创建人',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
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
      labelShort: '',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {
        required: false
      },
      type: 'time', // 输入框类型  input(默认) code time
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
  fastQueryFields: 'plan_name',
  fastQueryTips: '计划名称',
  defaultSortField: 'start_time',
  defaultSortType: 'desc',
  tableId: '13566',
  timeLineField: {},
  isExpExcel: false, //是否显示导出excel按钮
  permissions: {}

}

export default tableInfo
