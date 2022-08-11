const tableInfo = {
  fields: [
    {
      name: 'dbId',
      label: '数据库id',
      isAdd: false,
      isList: true,

      isQuery: false,
      isUpdate: false,
      isDetail: false,

      listIndex: 0,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbType',
      label: '数据库类型',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 1,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbName',
      label: '数据源名称',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 2,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbSchema',
      label: '库名',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 3,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbComment',
      label: '数据源备注',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 4,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbDriver',
      label: '数据库驱动',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 5,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbUrl',
      label: '数据库url',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 6,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbUser',
      label: '数据库用户',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 7,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dbPassword',
      label: '数据库密码',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 8,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 9,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: 'createUser',
      isAdd: true,
      isList: true,

      isQuery: true,
      isUpdate: true,
      isDetail: true,

      listIndex: 10,

      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {
    name: '1'
  },
  defaultQueryData: {
    name: '2'
  }
}

export default tableInfo
