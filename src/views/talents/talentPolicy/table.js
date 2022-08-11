const tableInfo = {
  listFields: [{
    name: 'policyTitle',
    label: '政策标题',
    isList: true,
    type: 'text' // 输入框类型  input(默认) code time
  },
    {
      name: 'status',
      label: '状态',
      isList: true,
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
    isScope: true // 是否范围查询
  },
    {
      name: 'policyTitle',
      label: '政策标题',
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
      name: 'policyContent',
      label: '政策内容',
      isList: false,
      isAdd: true,
      isQuery: false,
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
      isCode: true,
      codeName: 'jobState',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
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
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'updateUser',
      label: '修改人',
      isList: false,
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
  fastQueryFields: 'policy_title',
  fastQueryTips: '政策标题',
  defaultSortField: '',
  defaultSortType: '',
  tableId: '13622',
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
    // add: { button: '/talentPolicy/add' },
    // del: { button: '/talentPolicy/del' },
    // edit: { button: '/talentPolicy/update' },

    // detail: { button: '/talentPolicy/getById' }
  }

}

export default tableInfo
