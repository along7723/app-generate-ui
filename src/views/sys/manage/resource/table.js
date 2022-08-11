const tableInfo = {
  listFields: [
    {
      name: 'parentName',
      label: '父资源名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'name',
      label: '资源名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },

    {
      name: 'menuId',
      label: '所属菜单',
      isList: true,
      isCode: true,
      codeName: 'SysMenu',
      dicType: 'tree',
      type: 'code', // 输入框类型  input(默认) code time
      isFixed: false,
      isShowTips: false
    },
    {
      name: 'uri',
      label: '资源访问路径',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'type',
      label: '权限类型',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'service',
      label: '所属微服务',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'state',
      label: '启用和启停',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'isNeedLogin',
      label: '是否需要登录',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'isCheckPermission',
      label: '是否校验权限',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'isLogging',
      label: '是否记录日志',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    }
  ],
  fields: [
    {
      name: 'resourceId',
      label: 'id',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'parentId',
      label: '父id',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'parentName',
      label: '父资源名称',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '资源名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'menuId',
      label: '所属菜单',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'SysMenu',
      dicType: 'tree',
      rules: {},
      type: 'code', // 输入框类型  input(默认) code time
      isScope: false // 是否范围查询
    },
    {
      name: 'comment',
      label: '备注',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'uri',
      label: '资源访问路径',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'type',
      label: '权限类型',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'service',
      label: '所属微服务',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'state',
      label: '启用和启停',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isNeedLogin',
      label: '是否需要登录',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isCheckPermission',
      label: '是否校验权限',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isLogging',
      label: '是否记录日志',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {
    //name: '1'
  },
  defaultQueryData: {
    //name: '2'
  },
  formCols: 2,
  keyField: 'resource_id',
  editInTable: false

}

export default tableInfo
