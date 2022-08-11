const tableInfo = {
  listFields: [],
  fields: [
    {
      name: 'id',
      label: '',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'leaveId',
      label: '请假id',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'userId',
      label: '审批人id',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'userName',
      label: '审批人姓名',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'proposal',
      label: '审批内容',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'state',
      label: '审批状态',
      type: 'input', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '审批时间',
      type: 'input', // 输入框类型  input(默认) code time
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
