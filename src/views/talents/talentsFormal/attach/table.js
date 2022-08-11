const tableInfo = {
  listFields: [{
    name: 'attachName',
    label: '附件名称',
    isList: true,
    type: 'text' // 输入框类型  input(默认) code time
  },
    {
      name: 'attachFile',
      label: '附件',
      isList: true,
      type: 'file' // 输入框类型  input(默认) code time
    }
  ],
  fields: [{
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
      name: 'attachName',
      label: '附件名称',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'attachFile',
      label: '附件',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'file', // 输入框类型  input(默认) code time
      accept: '.png,.jpg,.jpeg,.pdf',
      fileMaxSize: 10,
      isScope: true, // 是否范围查询
      isCrowsRow: true
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
  fastQueryFields: 'attach_name',
  fastQueryTips: '附件名称',
  defaultSortField: '',
  defaultSortType: '',
  tableId: '13621',
  cardImage: '', //图片列表图片字段
  timeLineField: {
    dateField: '',
    titleField: '',
    descriptionFiled: '',
    categoryField: '',
    thumbnailField: '',
    iconField: '',
    colorField: ''
  },
  isExpExcel: false, //是否显示导出excel按钮
  permissions: {
    // add: {
    //   button: '/attach/add'
    // },
    // del: {
    //   button: '/attach/del'
    // },
    // edit: {
    //   button: '/attach/update'
    // },

    // detail: {
    //   button: '/attach/getById'
    // }
  }

}

export default tableInfo
