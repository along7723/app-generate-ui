const tableInfo = {
  listFields: [
    {
      name: 'msgType',
      label: '消息类型',
      isList: true,
      isSort: true,
      fieldProp: 'msg_type',
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'typeName',
      label: '类型名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'routePath',
      label: '页面路由',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'pkFieldName',
      label: '主键字段名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'msgType',
      label: '消息类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'typeName',
      label: '类型名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'routePath',
      label: '页面路由',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'pkFieldName',
      label: '主键字段名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'msgType',
  fastQueryFields: 'msg_type, type_name',
  fastQueryTips: '消息类型, 类型名称',
  defaultSortField: '1',
  defaultSortType: 'asc',
  tableId: '13612',
  timeLineField: {},
  permissions: {}

}

export default tableInfo
