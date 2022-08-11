const tableInfo = {
  listFields: [
    {
      name: 'carouselTitle',
      label: '标题',
      isList: true,
      type: 'text' // 输入框类型  input(默认) code time
    },
    {
      name: 'carouselPicture',
      label: '图片地址',
      isList: true,
      type: 'image' // 输入框类型  input(默认) code time
    },
    {
      name: 'articleId',
      label: '关联文章',
      isList: true,
      isCode: true,
      codeName: 'jgArticle',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    }
  ],
  fields: [
    {
      name: 'carouselId',
      label: '轮播id',
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'carouselTitle',
      label: '标题',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'carouselPicture',
      label: '图片地址',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': true, 'label': '必填', 'message': '字段值不能为空' }],
      type: 'image', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'articleId',
      label: '关联文章',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'jgArticle',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
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
  keyField: 'carouselId',
  editInTable: false,
  fastQueryFields: 'carousel_title',
  fastQueryTips: '标题',
  defaultSortField: 'create_time',
  defaultSortType: 'desc',
  permissions: {
    add: { button: '/carouselManage/add' },
    del: { button: '/carouselManage/del' },
    edit: { button: '/carouselManage/update' },
    detail: { button: '/carouselManage/getById' }
  }

}

export default tableInfo
