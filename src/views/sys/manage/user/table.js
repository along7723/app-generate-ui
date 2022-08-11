const tableInfo = {
  listFields: [
    {
      name: 'account',
      label: '账号',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'account',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'nickname',
      label: '昵称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'nickname',
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
      name: 'orgCode',
      label: '机构代码',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'org_code',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'idNumber',
      label: '证件号码',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'phone',
      label: '电话',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'phone',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'email',
      label: '邮箱',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'email',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'state',
      label: '用户状态',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'state',
      isCode: true,
      codeName: 'UserState',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'createTime',
      label: '创建时间',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'create_time',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    }
  ],
  fields: [
    {
      name: 'userId',
      label: '用户id',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'accountType',
      label: '账号类型',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'AccountType',
      dicType: 'radio-button',
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
      name: 'account',
      label: '账号',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkString20',
        'label': '20字符',
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
      name: 'password',
      label: '密码',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
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
      name: 'nickname',
      label: '昵称',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
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
      name: 'sex',
      label: '性别',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'Sex',
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
      name: 'birthday',
      label: '生日',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'orgCode',
      label: '机构代码',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'tradeDepartment',
      label: '行业部门',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: false,
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
      name: 'level',
      label: '用户等级',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
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
      name: 'phone',
      label: '电话',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkPhone',
        'label': '手机号码',
        'type': 'string',
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
      name: 'email',
      label: '邮箱',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkEmail',
        'label': '邮箱',
        'type': 'string',
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
      name: 'createType',
      label: '用户来源',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'state',
      label: '用户状态',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'UserState',
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
      name: 'reason',
      label: '未通过原因',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      type: 'text', // 输入框类型  input(默认) code time
    },
    {
      name: 'logoffTime',
      label: '注销时间',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'createUser',
      label: '创建用户',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'lastLoginTime',
      label: '最后登录时间',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'lastLoginSn',
      label: '最后登录批次号',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'lastLoginIp',
      label: '最后登录ip',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'verifier',
      label: '审核人',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'verifyTime',
      label: '审核时间',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'avatar',
      label: '用户头像',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'expiryDate',
      label: '过期日期',
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
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'idNumber',
      label: '证件号码',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'roleName',
      label: '角色名称',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'loginStatus',
      label: '',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'userId',
  editInTable: true,
  fastQueryFields: 'account, nickname',
  fastQueryTips: '账号, 昵称',
  defaultSortField: 'state',
  defaultSortType: 'desc',
  tableId: '13083',
  timeLineField: {},
  isExpExcel: false, // 是否显示导出excel按钮
  permissions: {}

}

export default tableInfo
