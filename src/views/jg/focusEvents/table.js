const tableInfo = {
  listFields: [
    {
      name: 'focusName',
      label: '焦点名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'remarks',
      label: '备注',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'focusId',
      label: '',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'focusName',
      label: '焦点名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'remarks',
      label: '备注',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
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
  keyField: 'focusId',
  editInTable: false,
  fastQueryFields: 'focus_name, remarks',
  fastQueryTips: '焦点名称, 备注',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/focusEvents/add' },
    del: { button: '/focusEvents/del' },
    edit: { button: '/focusEvents/update' },
    detail: { button: '/focusEvents/getById' }
  }

}

export default tableInfo
