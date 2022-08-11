const tableInfo = {
  fields: [
    {
      name: 'id',
      label: 'id',
      isList: true, // 是否列表显示
      isCode: false, // 是否字典项
      isUpdate: true, // 是否修改
      isDetail: false, // 是否详情
      rules: [
        { required: true, message: '这是必填项2', trigger: 'blur' },
        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
      ], // 验证
      isAdd: false, // 是否添加
      type: 'text', // 输入框类型  input(默认) code time
      isQuery: false, // 是否高级查询
      isOrder: true, // 是否排序
      isScope: true, // 是否范围查询
      codeName: 'spiderMode' // 字典名称
    },
    {
      name: 'name',
      label: '名称',
      isList: true, // 是否列表显示
      isCode: false, // 是否字典项
      isUpdate: true, // 是否修改
      isDetail: true, // 是否详情
      isHide: false, // 是否隐藏
      isKey: true, // 是否主键
      rules: [
        { required: true, message: '这是必填项', trigger: 'blur' },
        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
      ],
      isAdd: true, // 是否添加
      type: 'text', // 输入框类型  input(默认) code time
      isQuery: true, // 是否高级查询
      isOrder: false, // 是否排序
      isScope: true// 是否范围查询
    },
    {
      name: 'title',
      label: '标题',
      isList: true, // 是否列表显示
      isCode: false, // 是否字典项
      isUpdate: true, // 是否修改
      isDetail: true, // 是否详情
      isHide: false, // 是否隐藏
      isKey: true, // 是否主键
      isRequired: true, // 是否必填
      isAdd: true, // 是否添加
      type: 'text', // 输入框类型  input(默认) code time
      isQuery: true, // 是否高级查询
      isOrder: false // 是否排序

    },
    {
      name: 'type',
      label: '类型',
      isList: true, // 是否列表显示
      isCode: true, // 是否字典项
      isUpdate: true, // 是否修改
      isDetail: true, // 是否详情
      isHide: false, // 是否隐藏
      isKey: true, // 是否主键
      rules: {}, // 验证
      isAdd: false, // 是否添加
      type: 'text', // 输入框类型  input(默认) code time
      isQuery: true, // 是否高级查询
      isOrder: false, // 是否排序
      codeName: 'spiderMode' // 字典名称
    },
    {
      name: 'createTime',
      label: '创建时间',
      isList: true, // 是否列表显示
      isCode: false, // 是否字典项
      isUpdate: true, // 是否修改
      isDetail: true, // 是否详情
      isHide: false, // 是否隐藏
      isKey: true, // 是否主键
      isRequired: true, // 是否必填
      isAdd: false, // 是否添加
      type: 'time', // 输入框类型  input(默认) code time
      isQuery: true, // 是否高级查询
      isOrder: false// 是否排序
    }
  ],
  defaultAddData: {
    name: '1'
  },
  defaultQueryData: {
    name: '2'
  }
}

export default tableInfo
