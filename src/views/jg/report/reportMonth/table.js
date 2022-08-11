const tableInfo = {
  listFields: [
    {
      name: 'reportType',
      label: '报表类型',
      isList: true,
      isCode: true,
      codeName: 'reportType',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'companyId',
      label: '公司名称',
      isList: true,
      isCode: true,
      codeName: 'companyInfo',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'money',
      label: '金额',
      isList: true,
      type: 'number' // 输入框类型  input(默认) code time
    },
    {
      name: 'years',
      label: '年月',
      isList: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM'
    }
  ],
  fields: [
    {
      name: 'reportId',
      label: 'id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'reportType',
      label: '报表类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'reportType',
      dicType: 'select',
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'companyId',
      label: '公司名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'companyInfo',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'money',
      label: '金额',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'number', 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkDecimal',
        'label': '小数',
        'type': 'number',
        'trigger': 'blur',
        'min': 0,
        'precision': 4
      }],
      type: 'number', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'years',
      label: '年月',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM',
      isScope: false // 是否范围查询
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
  keyField: 'reportId',
  editInTable: false,
  fastQueryFields: 'money, years',
  fastQueryTips: '金额, 年月',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/reportMonth/add' },
    del: { button: '/reportMonth/del' },
    edit: { button: '/reportMonth/update' },
    detail: { button: '/reportMonth/getById' }
  }

}

export default tableInfo
