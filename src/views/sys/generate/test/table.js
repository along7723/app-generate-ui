const tableInfo = {
  listFields: [
    {
      name: 'id',
      label: 'id',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: ''
    },
    {
      name: 'newField',
      label: '测试字段',
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
      label: '名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'title',
      label: '标题',
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
      label: '类型',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isCode: true,
      codeName: 'UserType',
      dicType: 'select'
    },
    {
      name: 'createTime',
      label: '时间',
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
      name: 'newField',
      label: '测试字段',
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
      name: 'id',
      label: 'id',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '名称',
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
      name: 'title',
      label: '标题',
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
      label: '类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'UserType',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '时间',
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
  editInTable: true,
  tableId: '3092'

}

export default tableInfo
