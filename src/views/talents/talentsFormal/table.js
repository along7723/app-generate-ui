const tableInfo = {
  listFields: [
    {
      name: 'name',
      label: '姓名',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: true,
      fieldProp: 'name',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'sex',
      label: '性别',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 40,
      isSort: false,
      fieldProp: 'sex',
      isCode: true,
      codeName: 'Sex',
      dicType: 'radio',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'birthday',
      label: '出生日期',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 80,
      isSort: false,
      fieldProp: 'birthday',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd'
    },
    {
      name: 'idno',
      label: '证件号码',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 140,
      isSort: false,
      fieldProp: 'idno',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'idtype',
      label: '证件类型',
      isList: true,
      listColWidth: 100,
      isCode: true,
      codeName: 'IdType',
      dicType: 'select',
      type: 'code' // 输入框类型  input(默认) code time
    },
    {
      name: 'phone',
      label: '联系电话',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'phone',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'education',
      label: '最高学历',
      labelShort: '',
      isList: true,
      isFixed: false,
      isShowTips: false,
      listColWidth: 60,
      isSort: false,
      fieldProp: 'education',
      isCode: true,
      codeName: 'Education',
      dicType: 'select',
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'latDomain',
      label: '专业技术职称/技能水平',
      labelShort: '技术职称',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'lat_domain',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'workCompany',
      label: '工作单位',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: true,
      fieldProp: 'work_company',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    },
    {
      name: 'workJob',
      label: '现任职务',
      isList: true,
      isFixed: false,
      isShowTips: false,
      isSort: false,
      fieldProp: 'work_job',
      isCode: false,
      codeName: '',
      dicType: 'select',
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: ''
    }
  ],
  fields: [
    {
      name: 'talId',
      label: '主键id',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'photo',
      label: '照片（彩色免冠1寸照片）',
      labelShort: '照片',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': false }],
      type: 'image', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'name',
      label: '姓名',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkNameZH',
        'label': '中文姓名',
        'type': 'string',
        'trigger': 'blur'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'sex',
      label: '性别',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'Sex',
      dicType: 'radio',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空', 'trigger': 'blur' }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'birthday',
      label: '出生日期',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'time', // 输入框类型  input(默认) code time
      timeFormat: 'yyyy-MM-dd',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'idtype',
      label: '证件类型',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'IdType',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'idno',
      label: '证件号码',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isShowInAdd: false,
      isQuery: true,
      isUpdate: false,
      isShowInUpdate: true,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'nationality',
      label: '国籍',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'countyCode',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'jgd',
      label: '籍贯地',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'RegionCity',
      dicType: 'cascader',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'nation',
      label: '民族',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'Nation',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'politicsStatus',
      label: '政治面貌',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'PoliticsStatus',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'hjd',
      label: '户籍地',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: true,
      codeName: 'RegionCity',
      dicType: 'cascader',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'graduateSchool',
      label: '毕业院校',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': false }],
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'maritalStatus',
      label: '婚姻状况',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: true,
      codeName: 'MaritalStatus',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'height',
      label: '身高(cm)',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'weight',
      label: '体重(kg)',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'number', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'workYears',
      label: '从事金融工作年限',
      labelShort: '金融工作年限',
      isAdd: true,
      isUpdate: true,
      isDetail: true,
      rules: [{ 'required': false }],
      type: 'number', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'education',
      label: '最高学历',
      labelShort: '',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'Education',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'marjor',
      label: '最高学位',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'Marjor',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'latDomain',
      label: '专业技术职称/技能水平',
      labelShort: '技术职称',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'workCompany',
      label: '工作单位',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'workJob',
      label: '现任职务',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'jkzk',
      label: '健康状况',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'csd',
      label: '出生地',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      isCode: true,
      codeName: 'RegionCity',
      dicType: 'cascader',
      type: 'code', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'jzd',
      label: '通讯地',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'RegionCity',
      dicType: 'cascader',
      rules: [{ 'required': false }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'jzdxz',
      label: '通讯地详址',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': false }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'phone',
      label: '联系电话',
      group: '',
      isList: true,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }, {
        'validator': 'checkMobile',
        'label': '手机号码',
        'type': 'string',
        'trigger': 'blur'
      }],
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'dzyx',
      label: '电子邮箱',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isExpert',
      label: '是否专家',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'switch',
      rules: [{ 'required': true, 'type': 'string', 'label': '必填', 'message': '字段值不能为空' }],
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'expertLevel',
      label: '专家级别',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'ExpertLevel',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: true,
      dependencyByField: 'isExpert',
      dependencyByValue: '1',
      isCrowsRow: false
    },
    {
      name: 'zc',
      label: '专长',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: true,
      isShowInAdd: false,
      isQuery: true,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: true,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'shjz',
      label: '社会兼职',
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tjdw',
      label: '推荐单位',
      labelShort: '',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tjdwLxr',
      label: '推荐单位联系人',
      labelShort: '单位联系人',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'tjdwDh',
      label: '推荐单位联系人电话',
      labelShort: '联系人电话',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'bz',
      label: '备注',
      isList: false,
      isAdd: true,
      isQuery: true,
      isUpdate: true,
      isDetail: true,
      type: 'text', // 输入框类型  input(默认) code time
      isScope: true // 是否范围查询
    },
    {
      name: 'isNeedCheck',
      label: '是否需要审核',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'checkLevel',
      label: '审核级别',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'checkedUser',
      label: '审核人',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'status',
      label: '状态',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: true,
      isCode: true,
      codeName: 'examine',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: true
    },
    {
      name: 'createCompId',
      label: '创建公司',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'createUser',
      label: '创建用户',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'createTime',
      label: '创建时间',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: true,
      isShowInUpdate: false,
      isDetail: false,
      isCode: false,
      codeName: '',
      dicType: 'select',
      rules: { required: false },
      type: 'text', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    },
    {
      name: 'isPromise',
      label: '本人承诺',
      labelShort: '',
      group: '',
      isList: false,
      isAdd: false,
      isShowInAdd: false,
      isQuery: false,
      isUpdate: false,
      isShowInUpdate: false,
      isDetail: false,
      isCode: true,
      codeName: 'YesOrNo',
      dicType: 'select',
      rules: { required: false },
      type: 'code', // 输入框类型  input(默认) code time
      timeFormat: '',
      isScope: true, // 是否范围查询
      isDependencyShow: false,
      dependencyByField: '',
      dependencyByValue: '',
      isCrowsRow: false
    }
  ],
  defaultAddData: {},
  defaultQueryData: {},
  formCols: 2,
  keyField: 'talId',
  editInTable: false,
  fastQueryFields: 'name',
  fastQueryTips: '姓名',
  defaultSortField: 'name',
  defaultSortType: 'asc',
  tableId: '13570',
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
  isExpExcel: true,//是否显示导出excel按钮
  permissions: {
    add: { button: '/talents/add' },
    del: { button: '/talents/del' },
    edit: { button: '/talents/update' },
    export: { button: '/talents/excel' },
    detail: { button: '/talents/getById' }
  }

}

export default tableInfo
