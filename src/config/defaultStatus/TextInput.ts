// 文本输入的schema配置
// 配置单选题(业务组件) --> 编辑组件  之间的对应关系

// 业务组件
import TextInput from '@/components/SurveyComs/Materials/InputComs/TextInput.vue';
// 编辑组件
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue';
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue';
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue';
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue';
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue';
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue';
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue';
import TextInputTypeEditor from '@/components/SurveyComs/EditItems/TextInputTypeEditor.vue';

import { v4 as uuidV4 } from 'uuid';

import { markRaw } from 'vue';

// 不能导出对象，否则会导致多个业务组件共同一个数据状态
export default function () {
  return {
    type: TextInput,
    name: 'textInput',
    id: uuidV4(), // 确保id不重复
    // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
    status: {
      type: {
        id: uuidV4(),
        status: ['单行文本', '多行文本'],
        currentStatus: 0,
        isShow: true,
        name: 'textInputTypeEditor',
        editCom: markRaw(TextInputTypeEditor),
      },
      title: {
        id: uuidV4(),
        status: '默认标题内容',
        isShow: true, // 是否显示该组件
        name: 'titleEditor',
        editCom: markRaw(TitleEditor),
      },
      desc: {
        id: uuidV4(),
        status: '默认描述内容',
        isShow: true,
        name: 'descEditor',
        editCom: markRaw(DescEditor),
      },
      position: {
        id: uuidV4(),
        status: ['左对齐', '居中对齐'],
        currentStatus: 0,
        isShow: true,
        name: 'positionEditor',
        editCom: markRaw(PositionEditor),
      },
      titleSize: {
        id: uuidV4(),
        status: ['22', '20', '18'],
        currentStatus: 0,
        isShow: true,
        name: 'sizeEditor',
        editCom: markRaw(SizeEditor),
      },
      descSize: {
        id: uuidV4(),
        status: ['16', '14', '12'],
        currentStatus: 0,
        isShow: true,
        name: 'sizeEditor',
        editCom: markRaw(SizeEditor),
      },
      titleWeight: {
        id: uuidV4(),
        status: ['加粗', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'weightEditor',
        editCom: markRaw(WeightEditor),
      },
      descWeight: {
        id: uuidV4(),
        status: ['加粗', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'weightEditor',
        editCom: markRaw(WeightEditor),
      },
      titleItalic: {
        id: uuidV4(),
        status: ['斜体', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italicEditor',
        editCom: markRaw(ItalicEditor),
      },
      descItalic: {
        id: uuidV4(),
        status: ['斜体', '正常'],
        currentStatus: 1,
        isShow: true,
        name: 'italicEditor',
        editCom: markRaw(ItalicEditor),
      },
      titleColor: {
        id: uuidV4(),
        status: '#000',
        isShow: true,
        name: 'colorEditor',
        editCom: markRaw(ColorEditor),
      },
      descColor: {
        id: uuidV4(),
        status: '#909399',
        isShow: true,
        name: 'colorEditor',
        editCom: markRaw(ColorEditor),
      },
    },
  };
}
