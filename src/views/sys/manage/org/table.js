const tableInfo = {
  listFields: [
    {
      name: 'orgCode',
      label: '部门代码',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'orgName',
      label: '部门名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'memo',
      label: '部门备注',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'indexNumber',
      label: '排序',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'id',
      label: '主键',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'parentId',
      label: '父主键',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'orgCode',
      label: '部门代码',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'orgName',
      label: '部门名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'memo',
      label: '部门备注',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'indexNumber',
      label: '排序',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建用户',
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
  keyField: 'id',
  editInTable: false,
  fastQueryFields: 'org_code, org_name',
  fastQueryTips: '机构代码, 机构名称',
  defaultSortField: 'org_code',
  defaultSortType: 'asc',
  permissions: {
    add: { button: '/org/add' },
    del: { button: '/org/del' },
    edit: { button: '/org/update' },
    detail: { button: '/org/getById' }
  }

}

export default tableInfo
