const tableInfo = {
  listFields: [
    {
      name: 'userId',
      label: '请假人',
      isList: true,
      type: 'text', // 输入框类型  input(默认) code time
    },
    {
      name: 'leaveType',
      label: '请假类型',
      isList: true,
      type: 'text', // 输入框类型  input(默认) code time
    },
    {
      name: 'startTime',
      label: '开始时间',
      isList: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    {
      name: 'endTime',
      label: '结束时间',
      isList: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    {
      name: 'leaveDays',
      label: '请假天数',
      isList: true,
      type: 'number', // 输入框类型  input(默认) code time
    },
  ],
  fields: [
    {
      name: 'id',
      label: '主键',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'userId',
      label: '请假人',
      isList: true,
      isQuery: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'leaveType',
      label: '请假类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'leaveReason',
      label: '请假原因',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'startTime',
      label: '开始时间',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
      isScope: true, // 是否范围查询
    },
    {
      name: 'endTime',
      label: '结束时间',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
      isScope: true, // 是否范围查询
    },
    {
      name: 'leaveDays',
      label: '请假天数',
      isList: true,
      isQuery: true,
      type: 'number', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'realityStartTime',
      label: '实际开始时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'realityEndTime',
      label: '实际结束时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'processInstanceId',
      label: '流程实例id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'realityLeaveDays',
      label: '实际请假天数',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'processApplyTime',
      label: '提交申请时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'processStatus',
      label: '流程状态',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'updateUser',
      label: '修改人',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
    {
      name: 'updateTime',
      label: '修改时间',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
    },
  ],
  defaultAddData:{
  },
  defaultQueryData:{
  },
  formCols: 2,
  keyField: 'id',
  editInTable: false,
  fastQueryFields: '',
  fastQueryTips: '',
  defaultSortField: '',
  defaultSortType: '',
  tableId:  '13623',
  cardImage:'', //图片列表图片字段
  timeLineField: {
    dateField: '',
    titleField: '',
    descriptionFiled: '',
    categoryField: '',
    thumbnailField: '',
    iconField: '',
    colorField: ''
  },
  isExpExcel: false,//是否显示导出excel按钮
  permissions: {
    // add: { button: '/leave/add' },
    // del: { button: '/leave/del' },
    // edit: { button: '/leave/update' },
    //
    // detail: { button: '/leave/getById' }
  }

}

export default tableInfo
