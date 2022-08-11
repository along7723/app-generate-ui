const tableInfo = {
  listFields: [
    {
      name: 'paramScope',
      label: '应用范围',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      listColWidth: 120,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'paramKey',
      label: '参数键',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'paramValue',
      label: '参数值',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'isLock',
      label: '是否锁定',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch'
    },
    {
      name: 'paramName',
      label: '参数说明',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    }
  ],
  fields: [
    {
      name: 'id',
      label: '参数ID',
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
      name: 'paramScope',
      label: '应用范围',
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
      name: 'paramKey',
      label: '参数键',
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
      name: 'paramValue',
      label: '参数值',
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
      name: 'isLock',
      label: '是否锁定',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: {},
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'paramName',
      label: '参数说明',
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
      name: 'updateUser',
      label: '修改人',
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
      name: 'updateTime',
      label: '修改时间',
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
  editInTable: true

}

export default tableInfo
