const tableInfo = {
  listFields: [{
    name: 'info',
    label: '事件描述',
    isList: true,
    type: 'textarea' // 输入框类型  input(默认) code time
  },
    {
      name: 'infoDate',
      label: '事件日期',
      isList: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    }
  ],
  fields: [{
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
      name: 'info',
      label: '事件描述',
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
      type: 'textarea', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'infoDate',
      label: '事件日期',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{
        'required': false
      }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
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
  fastQueryFields: 'info',
  fastQueryTips: '事件描述',
  defaultSortField: '',
  defaultSortType: '',
  tableId: '13617',
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
    // add: {
    //   button: '/otherinfo/add'
    // },
    // del: {
    //   button: '/otherinfo/del'
    // },
    // edit: {
    //   button: '/otherinfo/update'
    // },

    // detail: {
    //   button: '/otherinfo/getById'
    // }
  }

}

export default tableInfo
