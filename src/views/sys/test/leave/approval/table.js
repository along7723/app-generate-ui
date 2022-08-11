const tableInfo = {
  listFields: [
    {
      name: 'type',
      label: '类型',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: true,
      codeName: 'leaveType',
      dicType: 'select'
    },
    {
      name: 'state',
      label: '状态',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: true,
      codeName: 'leaveState',
      dicType: 'select'
    },
    {
      name: 'content',
      label: '事由',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'duration',
      label: '请假天数',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'startTime',
      label: '开始时间',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'endTime',
      label: '结束时间',
      labelShort: '',
      isFixed: false,
      isShowTips: false,
      isCode: false,
      codeName: '',
      dicType: 'select'
    }
  ],
  fields: [
    {
      name: 'id',
      label: '主键',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'userId',
      label: '申请人id',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'user',
      label: '申请人',
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'type',
      label: '类型',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'leaveType',
      dicType: 'select',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'state',
      label: '状态',
      isAdd: false,
      isQuery: true,
      isUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'leaveState',
      dicType: 'select',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'content',
      label: '事由',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'duration',
      label: '请假天数',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'startTime',
      label: '开始时间',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'endTime',
      label: '结束时间',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      type: 'time', // 输入框类型  input(默认) code time
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
  editInTable: false

}

export default tableInfo
