export default {
  fm: {
    components: {
      fields: {
        input: '单行文本',
        textarea: '多行文本',
        number: '计数器',
        radio: '单选框组',
        checkbox: '多选框组',
        time: '时间选择器',
        date: '日期选择器',
        rate: '评分',
        color: '颜色选择器',
        select: '下拉选择框',
        switch: '开关',
        slider: '滑块',
        text: '文字',
        blank: '自定义区域',
        fileupload: '文件',
        imgupload: '图片',
        editor: '编辑器',
        cascader: '级联选择器',
        selectTree: '下拉选择树',
        table: '子表单',
        user: '用户',     //*jeeplus定制修改*/
        role: '角色',
        office: '机构',
        area: '区域',
        dict: '字典',
        grid: '栅格布局',
        tabs: '标签页',
        divider: '分割线',
        html: 'HTML',
        component: '自定义组件',
        report: '表格布局'
      },
      basic: {
        title: '基础字段',
      },
      advance: {
        title: '高级字段',
      },
      layout: {
        title: '布局字段',
      },
      custom: {
        title: '自定义字段'
      }
    },
    description: {
      containerEmpty: '从左侧拖拽或点击来添加字段',
      configEmpty: '请添加字段',
      tableEmpty: '将字段拖拽到此处',
      uploadJsonInfo: 'JSON格式如下，直接复制生成的json覆盖此处代码点击确定即可'
    },
    message: {
      copySuccess: '复制成功',
      validError: '表单数据校验失败',
      noPut: '不支持添加此字段',
      errorTip: '自定义错误提示',
      notSupport: '当前浏览器不支持'
    },
    actions: {
      import: '导入JSON',
      clear: '清空',
      preview: '预览',
      json: '生成JSON',
      code: '生成代码',
      getData: '获取数据',
      reset: '重置',
      copyData: '复制',
      cancel: '取 消',
      confirm: '确 定',
      addOption: '添加选项',
      addColumn: '添加列',
      addTab: '添加标签',
      upload: '点击上传',
      add: '添加',
      undo: '撤销',
      redo: '重做',
      enabledEdit: '启用编辑',
      disabledEdit: '禁用编辑',
      clearSelect: '重置选择',
      close: '关闭',
      export: '导出'
    },
    config: {
      form: {
        title: '表单属性',
        labelPosition: {
          title: '标签对齐方式',
          left: '左对齐',
          right: '右对齐',
          top: '顶部对齐'
        },
        labelWidth: '表单标签宽度',
        size: '组件尺寸',
        customClass: '自定义Class',
        customJs: '自定义Js',
        beforeSave: '保存前执行',
        afterSave: '保存后执行',
        width: '表单宽度',
        styleSheets: '表单样式表'
      },
      widget: {
        title: '字段属性',
        model: '字段标识',
        name: '标题',
        width: '宽度',
        height: '高度',
        size: '大小',
        labelWidth: '标签宽度',
        custom: '自定义',
        placeholder: '占位内容',
        layout: '布局方式',
        block: '块级',
        inline: '行内',
        contentPosition: '文案位置',
        left: '左侧',
        right: '右侧',
        center: '居中',
        showInput: '显示输入框',
        min: '最小值',
        max: '最大值',
        step: '步长',
        multiple: '是否多选',
        filterable: '是否可搜索',
        allowHalf: '允许半选',
        showAlpha: '支持透明度选择',
        showLabel: '是否显示标签',
        option: '选项',
        staticData: '静态数据',
        remoteData: '动态数据',
        dictData: '数据字典',
        dictType: '字典类型',
        remoteFunc: '方法函数',
        remoteAssigned: '赋值变量',
        value: '值',
        label: '标签',
        childrenOption: '子选项',
        defaultValue: '默认值',
        showType: '显示类型',
        isRange: '是否为范围选择',
        isTimestamp: '是否获取时间戳',
        startPlaceholder: '开始时间占位内容',
        endPlaceholder: '结束时间占位内容',
        format: '格式',
        limit: '最大上传数',
        isQiniu: '使用七牛上传',
        tokenFunc: '获取七牛Token方法',
        imageAction: '图片上传地址',
        tip: '提示说明文字',
        action: '上传地址',
        headers: '设置上传的请求头部',
        defaultType: '绑定数据类型',
        string: '字符串',
        object: '对象',
        array: '数组',
        number: '数字',
        boolean: '布尔值',
        integer: '整数',
        float: '浮点数',
        url: 'URL地址',
        email: '邮箱地址',
        hex: '十六进制',
        flex: 'Flex布局',
        responsive: '响应式布局',
        gutter: '栅格间隔',
        columnOption: '列配置项',
        span: '栅格占据的列数',
        responsiveSpan: '响应式栅格数',
        offset: '栅格左侧的间隔格数',
        push: '栅格向右移动格数',
        pull: '栅格向左移动格数',
        justify: '水平排列方式',
        justifyStart: '左对齐',
        justifyEnd: '右对齐',
        justifyCenter: '居中',
        justifySpaceAround: '两侧间隔相等',
        justifySpaceBetween: '两端对齐',
        align: '垂直排列方式',
        alignTop: '顶部对齐',
        alignMiddle: '居中',
        alignBottom: '底部对齐',
        type: '风格类型',
        default: '默认',
        card: '选项卡',
        borderCard: '卡片化',
        tabPosition: '选项卡位置',
        top: '顶部',
        left: '左侧',
        right: '右侧',
        bottom: '底部',
        tabOption: '标签配置项',
        tabName: '标签名称',
        customClass: '自定义Class',
        attribute: '操作属性',
        dataBind: '数据绑定',
        hidden: '隐藏',
        readonly: '完全只读',
        disabled: '禁用',
        editable: '文本框可输入',
        clearable: '显示清除按钮',
        arrowControl: '使用箭头进行时间选择',
        isDelete: '可删除',
        isEdit: '可编辑',
        showPassword: '显示密码',
        showScore: '显示分数',
        validate: '校验',
        required: '必填',
        patternPlaceholder: '填写正则表达式',
        newOption: '新选项',
        tab: '标签页',
        isOnlySelectLeaf: '是否只允许选择叶子节点',
        dataUrl: '数据接口',
        validatorRequired: '必须填写',
        validatorType: '格式不正确',
        validatorPattern: '格式不匹配',
        userMax: '允许选择的最大用户数',
        customTemplates: '自定义模板',
        setting: '设置',
        hideLabel: '隐藏标签',
        borderWidth: '表格边框宽度',
        borderColor: '表格边框颜色'
      },
      list: {//*jeeplus定制修改*/
        title: '列表属性',
        isShow: '显示',
        isSort: '排序',
        isSearch: '检索',
        attribute: '列属性'
      }
    },
    upload: {
      preview: '预览',
      edit: '替换',
      delete: '删除'
    },
    tooltip: {
      trash: '删除',
      clone: '复制',
      addrow: '插入行',
      addcolumn: '插入列',
      mergedown: '向下合并',
      mergeright: '向右合并',
      deleterow: '删除当前行',
      deletecolumn: '删除当前列',
      cellsetting: '表格设置',
      insertcolumnleft: '左插入列',
      insertcolumnright: '右插入列',
      insertrowbefore: '上插入行',
      insertrowafter: '下插入行',
      splitcolumns: '拆分成列',
      splitrows: '拆分成行'
    }
  }
}