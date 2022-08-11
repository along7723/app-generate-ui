const tableInfo = {
  listFields: [
    {
      name: 'ip',
      label: 'IP',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'companyId',
      label: '可查看公司',
      isList: true,
      isCode: true,
      codeName: 'companyInfo',
      dicType: 'select-multi',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'menuId',
      label: '菜单名称',
      isList: true,
      isCode: true,
      codeName: 'jgMenu',
      dicType: 'select-multi',
      type: 'code' // 输入框类型  input(默认) code time
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
      name: 'ipId',
      label: '主键id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'ip',
      label: 'IP',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'companyId',
      label: '可查看公司',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'companyInfo',
      dicType: 'select-multi',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'menuId',
      label: '菜单名称',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'jgMenu',
      dicType: 'select-multi',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人id',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: false,
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
      name: 'remarks',
      label: '备注',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
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
  keyField: 'ipId',
  editInTable: false,
  fastQueryFields: 'ip, remarks',
  fastQueryTips: 'IP, 备注',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/IpMenu/add' },
    del: { button: '/IpMenu/del' },
    edit: { button: '/IpMenu/update' },
    detail: { button: '/IpMenu/getById' }
  }

}

export default tableInfo
