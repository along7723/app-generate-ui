const tableInfo = {
  listFields: [
    {
      name: 'menuId',
      label: '类型',
      isList: true,
      isCode: true,
      codeName: 'jgMenu',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'articleTitle',
      label: '文章标题',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'annex',
      label: '附件地址',
      isList: true,
      type: 'file' // 输入框类型  input(默认) code time
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true,
      isSort: true,
      fieldProp: 'create_time',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss'
    }
  ],
  fields: [
    {
      name: 'articleId',
      label: '文章id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'menuId',
      label: '类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'jgMenu',
      dicType: 'select',
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'focusId',
      label: '焦点事件',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'jgFocus',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'menuId',
      dependencyByValue: '4',
      isCrowsRow: true
    },
    {
      name: 'companyId',
      label: '所属公司',
      isList: false,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'companyInfo',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'dataType',
      label: '资料类型',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'dataType',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'menuId',
      dependencyByValue: '7',
      isCrowsRow: true
    },
    {
      name: 'articleTitle',
      label: '文章标题',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'articleContent',
      label: '文章内容',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'richtext', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'annex',
      label: '附件地址',
      group: '',
      isList: true,
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      type: 'file', // 输入框类型  input(默认) code time
      isScope: true, // 是否范围查询
      isCrowsRow: true
    },
    {
      name: 'createUser',
      label: '创建人id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true,
      isQuery: true,
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd HH:mm:ss',
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
  keyField: 'articleId',
  editInTable: false,
  fastQueryFields: 'menu_id, article_title, article_content',
  fastQueryTips: '类型, 文章标题, 文章内容',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/articleManage/add' },
    del: { button: '/articleManage/del' },
    edit: { button: '/articleManage/update' },
    detail: { button: '/articleManage/getById' }
  }

}

export default tableInfo
