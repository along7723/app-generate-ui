const tableInfo = {
  listFields: [
    {
      name: 'name',
      label: '角色名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'name',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'comment',
      label: '备注信息',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'comment',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'dataLevel',
      label: '数据级别',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'data_level',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'fieldLevel',
      label: '字段级别',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'field_level',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'state',
      label: '状态',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'state',
      isCode: false,
      codeName: '',
      dicType: 'select'
    }
  ],
  fields: [
    {
      name: 'roleId',
      label: '角色id',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '角色名称',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'comment',
      label: '备注信息',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'dataLevel',
      label: '数据级别',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'fieldLevel',
      label: '字段级别',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'state',
      label: '状态',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '',
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
  keyField: 'role_id',
  editInTable: false,
  fastQueryFields: 'name',
  fastQueryTips: '角色名称',
  defaultSortField: 'name',
  defaultSortType: ''

}

export default tableInfo
