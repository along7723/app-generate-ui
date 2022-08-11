const tableInfo = {
  listFields: [
    {
      name: 'code',
      label: '代码',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: ''
    },
    {
      name: 'name',
      label: '名称',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: ''
    },
    {
      name: 'sort',
      label: '排序',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: ''
    },
    {
      name: 'backgroundColor',
      label: '背景颜色',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: ''
    }
  ],
  fields: [
    {
      name: 'dicCode',
      label: '字典代码',
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dicName',
      label: '字典名称',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'parentCode',
      label: '父代码',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'code',
      label: '代码',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '名称',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'spell',
      label: '拼音',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'sort',
      label: '排序',
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'backgroundColor',
      label: '背景颜色',
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {
    name: ''
  },
  defaultQueryData: {
    /* name: '2'*/
  },
  formCols: 1,
  keyField: 'id'
}

export default tableInfo
