const tableInfo = {
  listFields: [
    {
      name: 'msgId',
      label: '消息id',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'receiver',
      label: '接收人',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'isRead',
      label: '是否已读',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'readTime',
      label: '阅读时间',
      isList: true,
      isSort: true,
      fieldProp: 'read_time',
      type: 'text' // 输入框类型  input(默认) code time
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
      name: 'msgId',
      label: '消息id',
      isList: true,
      isAdd: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'receiver',
      label: '接收人',
      isList: true,
      isAdd: true,
      isQuery: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isRead',
      label: '是否已读',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'readTime',
      label: '阅读时间',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'id',
  fastQueryTips: '请输入关键词',
  defaultSortField: 'read_time',
  defaultSortType: 'desc',
  tableId: '13611',
  timeLineField: {},
  permissions: {}

}

export default tableInfo
