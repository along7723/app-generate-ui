const tableInfo = {
  listFields: [
    {
      name: 'name',
      label: '姓名',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'name',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'sex',
      label: '性别',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'sex',
      isCode: true,
      codeName: 'Sex',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'idno',
      label: '证件号码',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'idno',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'workCompany',
      label: '工作单位',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'workJob',
      label: '职务',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'id',
      label: '',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'planId',
      label: '培训id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'talId',
      label: '人才id',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'name',
      label: '姓名',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'sex',
      label: '性别',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'Sex',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'birthday',
      label: '出生日期',
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
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'idno',
      label: '证件号码',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
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
      label: '文化程度',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: true,
      codeName: 'Education',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'workCompany',
      label: '工作单位',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'workJob',
      label: '职务',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
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
      isShowInAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
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
  fastQueryFields: 'name',
  fastQueryTips: '姓名',
  defaultSortField: 'name',
  defaultSortType: 'asc',
  tableId: '13567',
  timeLineField: {},
  isExpExcel: false, // 是否显示导出excel按钮
  permissions: {}

}

export default tableInfo
