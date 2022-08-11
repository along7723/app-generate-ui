const tableInfo = {
  listFields: [
    {
      name: 'clsId',
      label: '标签分类id',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'cls_id',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'clsName',
      label: '标签分类名称',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'cls_name',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'createUser',
      label: '创建人',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'create_user',
      isCode: false,
      codeName: '',
      dicType: 'select'
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'create_time',
      isCode: false,
      codeName: '',
      dicType: 'select'
    }
  ],
  fields: [
    {
      name: 'clsId',
      label: '标签id',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: true,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'clsName',
      label: '标签名称',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createUser',
      label: '创建人',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      group: '',
      isList: true,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
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
  keyField: 'cls_id',
  editInTable: false,
  fastQueryFields: 'cls_name',
  fastQueryTips: '标签名称',
  defaultSortField: 'cls_name',
  defaultSortType: 'asc'

}

export default tableInfo
