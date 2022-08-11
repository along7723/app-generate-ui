const tableInfo = {
  listFields: [
    {
      name: 'taskId',
      label: '定时任务',
      isList: true,
      isCode: true,
      codeName: 'SysTaskName',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'runType',
      label: '运行方式',
      isList: true,
      isCode: true,
      codeName: 'SysTaskRunType',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'runTime',
      label: '运行时间',
      isList: true,
      isSort: true,
      fieldProp: 'run_time',
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'useTime',
      label: '任务用时',
      isList: true,
      isSort: true,
      fieldProp: 'use_time',
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'status',
      label: '成功状态',
      isList: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
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
      name: 'taskId',
      label: '定时任务',
      isList: true,
      isDetail: true,
      isCode: true,
      codeName: 'SysTaskName',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'runType',
      label: '运行方式',
      isList: true,
      isDetail: true,
      isCode: true,
      codeName: 'SysTaskRunType',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'runTime',
      label: '运行时间',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'useTime',
      label: '任务用时',
      isList: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'status',
      label: '成功状态',
      isList: true,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'errorInfo',
      label: '错误信息',
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 1,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: '',
  fastQueryTips: '',
  defaultSortField: 'run_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/taskLogs/add' },
    del: { button: '/taskLogs/del' },
    edit: { button: '/taskLogs/update' },
    detail: { button: '/taskLogs/getById' }
  }

}

export default tableInfo
