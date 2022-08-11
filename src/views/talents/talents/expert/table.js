const tableInfo = {
  listFields: [
    {
      name: 'expertId',
      label: '级别代码',
      isList: true,
      isSort: true,
      fieldProp: 'expert_id',
      type: 'number' // 输入框类型  input(默认) code time
    },
    {
      name: 'expertName',
      label: '级别名称',
      isList: true,
      isSort: true,
      fieldProp: 'expert_name',
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'expertMemo',
      label: '级别备注',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'createUser',
      label: '创建人',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'expertId',
      label: '级别代码',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'number', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'number', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'expertName',
      label: '级别名称',
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
      name: 'expertMemo',
      label: '级别备注',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      isList: true,
      isDetail: true,
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
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 1,
  keyField: 'expertId',
  editInTable: false,
  fastQueryFields: 'expert_name',
  fastQueryTips: '级别名称',
  defaultSortField: 'expert_id',
  defaultSortType: 'asc',
  permissions: {
    // add: { button: '/expert/add' },
    // del: { button: '/expert/del' },
    // edit: { button: '/expert/update' },
    // detail: { button: '/expert/getById' }
  }

}

export default tableInfo
