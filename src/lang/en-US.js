export default {
  fm: {
    components: {
      fields: {
        input: 'Input',
        textarea: 'Textarea',
        number: 'Number',
        radio: 'Radio',
        checkbox: 'Checkbox',
        time: 'Time',
        date: 'Date',
        rate: 'Rate',
        color: 'Color',
        select: 'Select',
        switch: 'Switch',
        slider: 'Slider',
        text: 'Text',
        blank: 'Custom',
        fileupload: 'File',
        imgupload: 'Image',
        editor: 'Editor',
        cascader: 'Cascader',
        selectTree: 'TreeSelect',
        table: 'Sub-table',
        user: 'User',//*jeeplus定制修改*/
        role: 'Role',
        office: 'Office',
        area: 'Area',
        dict: 'Dict',
        grid: 'Grid',
        tabs: 'Tabs',
        divider: 'Divider',
        html: 'HTML',
        component: 'Component',
        report: 'Table'
      },
      basic: {
        title: 'Basic Field',
      },
      advance: {
        title: 'Advance Field',
      },
      layout: {
        title: 'Layout',
      },
      custom: {
        title: 'Custom Field'
      }
    },
    description: {
      containerEmpty: 'You can drag and drop or click the item from the left  to add widgets',
      configEmpty: 'Please add a field',
      tableEmpty: 'Drag the field here',
      uploadJsonInfo: 'There is the format of JSON below，you can overwrite it with you own JSON code'
    },
    message: {
      copySuccess: 'Copy Successed',
      validError: 'Form data validation failed',
      noPut: 'Don\'t support adding this field',
      errorTip: 'Custom error tips',
      notSupport: 'Not supported by current browser'
    },
    actions: {
      import: 'Import JSON',
      clear: 'Clear',
      preview: 'Preview',
      json: 'Generate JSON',
      code: 'Generate code',
      getData: 'Get data',
      reset: 'Reset',
      copyData: 'Copy',
      cancel: 'Cancel',
      confirm: 'Confirm',
      addOption: 'Add option',
      addColumn: 'Add column',
      addTab: 'Add tab',
      upload: 'Upload',
      add: 'Add',
      undo: 'Undo',
      redo: 'Redo',
      enabledEdit: 'Enabled edit',
      disabledEdit: 'Disabled edit',
      clearSelect: 'Reset selection',
      close: 'Close',
      export: 'Export'
    },
    config: {
      form: {
        title: 'Form Attribute',
        labelPosition: {
          title: 'Label Position',
          left: 'Left',
          right: 'Right',
          top: 'Top'
        },
        labelWidth: 'Label Width',
        size: 'Size',
        customClass: 'Custom Class',
        beforeSave: 'execute before save',
        afterSave: 'execute after save',
        width: 'Form Width',
        styleSheets: 'Style Sheets'
      },
      widget: {
        title: 'Component Attribute',
        model: 'ID',
        name: 'Name',
        width: 'Width',
        height: 'Height',
        size: 'Size',
        labelWidth: 'Label Width',
        custom: 'Custom',
        placeholder: 'Placeholder',
        layout: 'Layout',
        block: 'Block',
        inline: 'Inline',
        contentPosition: 'Content Position',
        left: 'Left',
        right: 'Right',
        center: 'Center',
        showInput: 'Display Input Box',
        min: 'Minimum',
        max: 'Maximum',
        step: 'Step',
        multiple: 'Multiple',
        filterable: 'Searchable',
        allowHalf: 'Allow Half',
        showAlpha: 'Support transparency options',
        showLabel: 'Show lable',
        option: 'Option',
        staticData: 'Static Data',
        remoteData: 'Dynamic Data',
        dictData: 'Dict Data',
        dictType: 'Dict Type',
        remoteFunc: 'Function',
        remoteAssigned: 'Assigned Variable',
        value: 'Value',
        label: 'Label',
        childrenOption: 'Sub-Option',
        defaultValue: 'Default Value',
        showType: 'Display type',
        isRange: 'Range Time',
        isTimestamp: 'Get time stamp',
        startPlaceholder: 'Placeholder of start time',
        endPlaceholder: 'Placeholder of end time',
        format: 'Format',
        limit: 'Maximum Upload Count',
        isQiniu: 'Upload with Qiniu Cloud',
        tokenFunc: 'A funchtin to get QiNiu token',
        imageAction: 'Picture upload address',
        tip: 'Text Prompt',
        action: 'Request URL',
        headers: 'Request headers',
        defaultType: 'Data Type',
        string: 'String',
        object: 'Object',
        array: 'Array',
        number: 'Number',
        boolean: 'Boolean',
        integer: 'Integer',
        float: 'Float',
        url: 'URL',
        email: 'E-mail',
        hex: 'Hexadecimal',
        gutter: 'Grid Spacing',
        columnOption: 'Column Configuration',
        flex: 'Flex Layout',
        responsive: 'Responsive Layout',
        span: 'Grid spans',
        responsiveSpan: 'Responsive columns',
        offset: 'Offset',
        push: 'Push',
        pull: 'Pull',
        justify: 'Horizontal Arrangement',
        justifyStart: 'Start',
        justifyEnd: 'End',
        justifyCenter: 'Center',
        justifySpaceAround: 'Space Around',
        justifySpaceBetween: 'Space Between',
        align: 'Vertical Arrangement',
        alignTop: 'Top',
        alignMiddle: 'Middle',
        alignBottom: 'Bottom',
        type: 'Type',
        default: 'Default',
        card: 'Tabs',
        borderCard: 'Border-Card',
        tabPosition: 'Tab Position',
        top: 'Tob',
        left: 'Left',
        right: 'Right',
        bottom: 'Bottom',
        tabOption: 'Label Configuration',
        tabName: 'Tab Name',
        customClass: 'Custom Class',
        attribute: 'Attribute Action',
        dataBind: 'Data Binding',
        hidden: 'Hidden',
        readonly: 'Read Only',
        disabled: 'Disabled',
        editable: 'Text box is editable',
        clearable: 'Display Clear Button',
        arrowControl: 'Use the arrow for time selection',
        isDelete: 'Deletable',
        isEdit: 'Editable',
        showPassword: 'Display Password',
        showScore: 'Show Score',
        validate: 'Validation',
        required: 'Required',
        patternPlaceholder: 'Fill in the regular expressions',
        newOption: 'New Option',
        tab: 'Tab',
        isOnlySelectLeaf: 'is only select leaf',
        dataUrl: 'data url',
        validatorRequired: ' required',
        validatorType: ' invaild format',
        validatorPattern: ' unmatched pattern',
        customTemplates: 'Custom templates',
        setting: 'Setting',
        hideLabel: 'Hide Label',
        borderWidth: 'Border Width',
        borderColor: 'Border Color',
        user: {
          list: 'can select how many users'
        }
      },
      list: {
        title: 'List',//*jeeplus定制修改*/
        isShow: 'Showable',
        isSort: 'Sortable',
        isSearch: 'Searchable',
        attribute: 'column'
      }
    },
    upload: {
      preview: 'preview',
      edit: 'replace',
      delete: 'delete'
    },
    tooltip: {
      trash: 'trash',
      clone: 'clone',
      addrow: 'add row',
      addcolumn: 'add column',
      mergedown: 'merge down',
      mergeright: 'merge right',
      deleterow: 'delete current row',
      deletecolumn: 'delete current column',
      cellsetting: 'cell setting',
      insertcolumnleft: 'insert column left',
      insertcolumnright: 'insert column right',
      insertrowbefore: 'insert row before',
      insertrowafter: 'insert row after',
      splitcolumns: 'split into columns',
      splitrows: 'split into rows'
    }
  }
}