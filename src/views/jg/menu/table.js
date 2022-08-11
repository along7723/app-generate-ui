const tableInfo = {
  listFields: [
    {
      name: 'menuName',
      label: '菜单名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'menuMark',
      label: '菜单顺序',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'isPower',
      label: '是否需要权限',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio-button',
      type: 'code' // 输入框类型  input(默认) code time
    }, {
      name: 'menuRemarks',
      label: '备注',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio-button',
      type: 'code' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'menuId',
      label: '主键id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'menuName',
      label: '菜单名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'menuMark',
      label: '菜单顺序',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: false,
      isDetail: true,
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkNumber1',
        'label': '非零正整数',
        'trigger': 'blur'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isPower',
      label: '是否需要权限',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio-button',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }, {
      name: 'menuRemarks',
      label: '备注',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': false }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人id',
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
  defaultAddData: {
    name: '1'
  },
  defaultQueryData: {
    name: '2'
  },
  formCols: 2,
  keyField: 'menuId',
  editInTable: false,
  fastQueryFields: 'menu_name, menu_mark',
  fastQueryTips: '菜单名称, 菜单顺序',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/menuNameMangage/add' },
    del: { button: '/menuNameMangage/del' },
    edit: { button: '/menuNameMangage/update' },
    detail: { button: '/menuNameMangage/getById' }
  }

}

export default tableInfo
