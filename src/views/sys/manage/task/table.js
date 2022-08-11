const tableInfo = {
  listFields: [
    {
      name: 'serviceName',
      label: '服务名称',
      isList: true,
      isSort: true,
      fieldProp: 'service_name',
      isCode: true,
      codeName: 'ServiceName',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'taskName',
      label: '任务名称',
      isList: true,
      isSort: true,
      fieldProp: 'task_name',
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'taskClass',
      label: '任务执行类',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'taskCron',
      label: '运行计划',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'runOnStart',
      label: '启动时运行',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'taskUseState',
      label: '是否启用',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'taskRunState',
      label: '是否运行中',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'taskId',
      label: '任务id',
      isCode: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'serviceName',
      label: '服务名称',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'ServiceName',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'taskName',
      label: '任务名称',
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
      name: 'taskClass',
      label: '任务执行类',
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
      name: 'taskCron',
      label: '运行计划',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'runOnStart',
      label: '启动时运行',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'taskMemo',
      label: '任务备注',
      isList: false,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'taskUseState',
      label: '是否启用',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'radio',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'taskRunState',
      label: '是否运行中',
      isList: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'updateUser',
      label: '修改人',
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'updateTime',
      label: '修改时间',
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 1,
  keyField: 'taskId',
  editInTable: true,
  fastQueryFields: 'task_name',
  fastQueryTips: '任务名称',
  defaultSortField: 'service_name',
  defaultSortType: 'asc',
  permissions: {
    add: { button: '/task/add' },
    del: { button: '/task/del' },
    edit: { button: '/task/update' },
    detail: { button: '/task/getById' }
  }

}

export default tableInfo
