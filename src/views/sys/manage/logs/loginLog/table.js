const tableInfo = {
  listFields: [
    {
      name: 'userId',
      label: '用户名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'user_id',
      isCode: true,
      codeName: 'SysUser',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'userAccount',
      label: '用户账号',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'user_account',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'loginTime',
      label: '登录时间',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'login_time',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss'
    },
    {
      name: 'loginIp',
      label: '登录ip',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'login_ip',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'loginSuccess',
      label: '登录成功',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'login_success',
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'token',
      label: '登录凭证',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 180,
      isSort: false,
      fieldProp: 'token',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'errorInfo',
      label: '错误信息',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'error_info',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    }
  ],
  fields: [
    {
      name: 'id',
      label: '主键',
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
      dependencyByValue: ''
    },
    {
      name: 'userId',
      label: '用户名称',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'SysUser',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: ''
    },
    {
      name: 'userAccount',
      label: '用户账号',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
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
      dependencyByValue: ''
    },
    {
      name: 'loginTime',
      label: '登录时间',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: ''
    },
    {
      name: 'loginIp',
      label: '登录ip',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
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
      dependencyByValue: ''
    },
    {
      name: 'loginSuccess',
      label: '登录成功',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: ''
    },
    {
      name: 'token',
      label: '登录凭证',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
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
      dependencyByValue: ''
    },
    {
      name: 'errorInfo',
      label: '错误信息',
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
      dependencyByValue: ''
    }
  ],
  defaultAddData: {
    name: '1'
  },
  defaultQueryData: {
    name: '2'
  },
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: 'user_account, login_ip',
  fastQueryTips: '用户账号, 登录ip',
  defaultSortField: 'login_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/loginLog/add' },
    del: { button: '/loginLog/del' },
    edit: { button: '/loginLog/update' },
    detail: { button: '/loginLog/getById' }
  }

}

export default tableInfo
