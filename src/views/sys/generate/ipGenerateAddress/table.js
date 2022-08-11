const tableInfo = {
  listFields: [
    {
      name: 'ip',
      label: 'ip地址',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'name',
      label: '名称',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'frontAddress',
      label: '前端地址',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'backstageAddress',
      label: '后端地址',
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
      name: 'ip',
      label: 'ip地址',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkIP',
        'label': 'IP地址',
        'type': 'string',
        'trigger': 'blur'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'frontAddress',
      label: '前端地址',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'backstageAddress',
      label: '后端地址',
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
      label: '创建人',
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
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: 'ip, name, front_address, backstage_address',
  fastQueryTips: 'ip地址, 名称, 前端地址, 后端地址',
  defaultSortField: '',
  defaultSortType: '',
  permissions: {
    /*    add: {button: '/ipGenerateAddress/add'},
        del: {button: '/ipGenerateAddress/del'},
        edit: {button: '/ipGenerateAddress/update'},
        detail: {button: '/ipGenerateAddress/getById'}*/
  }

}

export default tableInfo
