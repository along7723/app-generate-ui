const tableInfo = {
  listFields: [
    {
      name: 'companyName',
      label: '公司名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'remarks',
      label: '公司备注',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'indexNumber',
      label: '显示顺序',
      isList: true,
      type: 'number' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'companyId',
      label: '公司id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'companyName',
      label: '公司名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'remarks',
      label: '公司备注',
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
      name: 'indexNumber',
      label: '显示顺序',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'number', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: false,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'companyId',
  fastQueryFields: 'company_name, remarks, index_number',
  fastQueryTips: '公司名称, 公司备注, 显示顺序',
  defaultSortField: 'index_number',
  defaultSortType: 'asc',
  permissions: {
    add: { button: '/company/add' },
    del: { button: '/company/del' },
    edit: { button: '/company/update' },
    detail: { button: '/company/getById' }
  }

}

export default tableInfo
