const tableInfo = {
  listFields: [{
    name: 'paperName',
    label: '论著名称',
    isList: true,
    type: 'text' // 输入框类型  input(默认) code time
  },
    {
      name: 'publishDate',
      label: '发表时间',
      isList: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    },
    {
      name: 'publishWhere',
      label: '发表载体',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'isFirstAuthor',
      label: '是否第一作者',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio-button',
      type: 'code' // 输入框类型  input(默认) code time
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
      name: 'paperName',
      label: '论著名称',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'publishDate',
      label: '发表时间',
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
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true // 是否范围查询
    },
    {
      name: 'publishWhere',
      label: '发表载体',
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
      isScope: true // 是否范围查询
    },
    {
      name: 'isFirstAuthor',
      label: '是否第一作者',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio-button',
      rules: [{
        'required': true,
        'type': 'string',
        'label': '必填',
        'message': '字段值不能为空',
        'trigger': 'blur'
      }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'journalRecordInfo',
      label: '国际国内知名期刊收录情况',
      labelShort: '收录情况',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'textarea', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'journalUseInfo',
      label: '国际国内知名期刊或重要会议引用情况',
      labelShort: '引用情况',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'textarea', // 输入框类型  input(默认) code time
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
      label: '更新人',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'updateTime',
      label: '更新时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: 'paper_name, publish_date',
  fastQueryTips: '论著名称, 发表时间',
  defaultSortField: '',
  defaultSortType: '',
  tableId: '13618',
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
    //   button: '/paper/add'
    // },
    // del: {
    //   button: '/paper/del'
    // },
    // edit: {
    //   button: '/paper/update'
    // },

    // detail: {
    //   button: '/paper/getById'
    // }
  }

}

export default tableInfo
