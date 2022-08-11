const tableInfo = {
  listFields: [
    {
      name: 'msgType',
      label: '消息类型',
      isList: true,
      isCode: true,
      codeName: 'MessageType',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'msgTitle',
      label: '消息标题',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'sender',
      label: '发送人',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'sendTime',
      label: '发送时间',
      isList: true,
      isSort: true,
      fieldProp: 'send_time',
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'sendTo',
      label: '发送对象',
      isList: true,
      isSort: false,
      fieldProp: 'send_to',
      isCode: true,
      codeName: 'SendTo',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'msgId',
      label: '主键',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'msgType',
      label: '消息类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isDetail: true,
      isCode: true,
      codeName: 'MessageType',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'msgTitle',
      label: '消息标题',
      isList: true,
      isAdd: true,
      isQuery: true,
      isDetail: true,
      rules: [{ 'required': false }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'msgContent',
      label: '消息内容',
      isAdd: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'msgImage',
      label: '消息图片',
      isAdd: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'pkFieldValue',
      label: '主键字段值',
      isAdd: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'sender',
      label: '发送人',
      isList: true,
      isQuery: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'sendTime',
      label: '发送时间',
      isList: true,
      isQuery: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'sendTo',
      label: '发送对象',
      isList: true,
      isAdd: true,
      isQuery: true,
      isDetail: true,
      isCode: true,
      codeName: 'SendTo',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'msgId',
  editInTable: false,
  fastQueryFields: 'msg_title',
  fastQueryTips: '消息标题',
  defaultSortField: 'send_time',
  defaultSortType: 'desc',
  tableId: '13610',
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
  isExpExcel: false,//是否显示导出excel按钮
  permissions: {
    add: { button: '/message/add' },
    del: { button: '/message/del' },
    edit: { button: '/message/update' },

    detail: { button: '/message/getById' }
  }

}

export default tableInfo
