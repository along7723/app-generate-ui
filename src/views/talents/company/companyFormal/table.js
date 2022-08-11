const tableInfo = {
  listFields: [
    {
      name: 'compName',
      label: '企业名称',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'comp_name',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'taxpayerId',
      label: '纳税人识别号',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'taxpayer_id',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'establishDate',
      label: '成立日期',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'establish_date',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    },
    {
      name: 'location',
      label: '所在地',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'location',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'compNatrue',
      label: '企业性质',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'comp_natrue',
      isCode: true,
      codeName: 'CompanyNature',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'industry',
      label: '所属行业',
      isList: true,
      isCode: true,
      codeName: 'companyIndustry',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'scale',
      label: '企业规模',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'scale',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'corpName',
      label: '法人姓名',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'corp_name',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'compUser',
      label: '企业联系人',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'compPhone',
      label: '联系人电话',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'status',
      label: '状态',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'status',
      isCode: true,
      codeName: 'examine',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    }
  ],
  fields: [
    {
      name: 'compId',
      label: '企业id',
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
      name: 'compName',
      label: '企业名称',
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
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'taxpayerId',
      label: '纳税人识别号',
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
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'establishDate',
      label: '成立日期',
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
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'location',
      label: '所在地',
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
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'address',
      label: '详细地址',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'compNatrue',
      label: '企业性质',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'CompanyNature',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'industry',
      label: '所属行业',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'companyIndustry',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'taxNatrue',
      label: '税收性质',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'TaxNature',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'scale',
      label: '企业规模',
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
      rules: { required: false },
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'businessType',
      label: '业务类型',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
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
      name: 'riskStatus',
      label: '风险状况',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
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
      name: 'equityChange',
      label: '股权变更',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'corpName',
      label: '法人姓名',
      group: '法人信息',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'corpIdno',
      label: '法人身份证号',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
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
      name: 'corpSex',
      label: '法人性别',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
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
      name: 'corpPhone',
      label: '法人电话',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'compUser',
      label: '企业联系人',
      group: '联系人信息',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'compPhone',
      label: '联系人电话',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'status',
      label: '状态',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'examine',
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
      name: 'createUser',
      label: '创建人',
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
      name: 'createTime',
      label: '创建时间',
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
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'compId',
  editInTable: false,
  fastQueryFields: 'comp_name, taxpayer_id, establish_date, location, corp_name, comp_user, comp_phone, industry',
  fastQueryTips: '企业名称, 纳税人识别号, 成立日期, 所在地, 法人姓名, 企业联系人, 联系人电话, 所属行业',
  defaultSortField: 'comp_name',
  defaultSortType: 'asc',
  tableId: '13563',
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
  isExpExcel: false,//是否显示导出excel按钮
  permissions: {
    // add: { button: '/company/add' },
    // del: { button: '/company/del' },
    // edit: { button: '/company/update' },
    // export: { button: '/company/excel' },
    // detail: { button: '/company/getById' }
  }

}

export default tableInfo
