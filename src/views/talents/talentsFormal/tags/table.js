const tableInfo = {
  listFields: [
    {
      name: 'tagId',
      label: '标签名称',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'tag_id',
      isCode: true,
      codeName: 'Tags',
      dicType: 'radio-button',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
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
      name: 'talId',
      label: '人才id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tagId',
      label: '标签名称',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'Tags',
      dicType: 'radio-button',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
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
  fastQueryFields: '',
  fastQueryTips: '',
  defaultSortField: '',
  defaultSortType: '',
  tableId: '13575',
  timeLineField: {},
  isExpExcel: false,//是否显示导出excel按钮
  permissions: {}

}

export default tableInfo
