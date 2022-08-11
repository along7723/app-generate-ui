const tableInfo = {
  listFields: [{
    name: 'jobTitle',
    label: '招聘名称',
    isList: true,
    type: 'text' // 输入框类型  input(默认) code time
  },
    {
      name: 'jobCompany',
      label: '招聘企业',
      isList: true,
      isCode: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'status',
      label: '状态',
      isList: true,
      isSort: false,
      fieldProp: 'status',
      isCode: true,
      codeName: 'jobState',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    }
  ],
  fields: [{
    name: 'id',
    label: '主键id',
    type: 'text', // 输入框类型  input(默认) code time
    isScope: true, // 是否范围查询
    isCrowsRow: false
  },
    {
      name: 'jobTitle',
      label: '招聘名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{
        'required': true,
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'jobCompany',
      label: '招聘企业',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      rules: [{
        'required': true,
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'jobContent',
      label: '招聘内容',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{
        'required': true,
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空'
      }],
      type: 'richtext', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'status',
      label: '状态',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: false,
      isCode: true,
      codeName: 'jobState',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      isDetail: false,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'updateUser',
      label: '修改人',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'updateTime',
      label: '修改时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: 'job_title, job_company',
  fastQueryTips: '招聘名称, 招聘企业',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  tableId: '13613',
  cardImage: '', //图片列表图片字段
  timeLineField: {
    dateField: '',
    titleField: '',
    descriptionFiled: '',
    categoryField: '',
    thumbnailField: '',
    iconField: '',
    colorField: ''
  },
  isExpExcel: false, //是否显示导出excel按钮
  permissions: {
    // add: { button: '/jobInfo/add' },
    // del: { button: '/jobInfo/del' },
    // edit: { button: '/jobInfo/update' },

    // detail: { button: '/jobInfo/getById' }
  }

}

export default tableInfo
