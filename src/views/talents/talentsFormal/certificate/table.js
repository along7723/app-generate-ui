const tableInfo = {
  listFields: [
    {
      name: 'name',
      label: '证书名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'name',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'level',
      label: '证书级别',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'level',
      isCode: true,
      codeName: 'TitleLevel',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'obtainDate',
      label: '获得时间',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'obtain_date',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    }
  ],
  fields: [
    {
      name: 'id',
      label: '主键id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'talId',
      label: '人才id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '证书名称',
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
      timeFormat: '',
      isScope: true // 是否范围查询
    },
    {
      name: 'level',
      label: '证书级别',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'TitleLevel',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true // 是否范围查询
    },
    {
      name: 'obtainDate',
      label: '获得时间',
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
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
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
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: '',
  fastQueryTips: '',
  defaultSortField: '',
  defaultSortType: ''

}

export default tableInfo
