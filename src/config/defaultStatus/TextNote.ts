// 业务组件
import TextNote from '@/components/SurveyComs/Materials/NoteComs/TextNote.vue';
// 编辑组件
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue';
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue';
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue';
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue';
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue';
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue';
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue';
import TextTypeEditor from '@/components/SurveyComs/EditItems/TextTypeEditor.vue';

import { v4 as uuidV4 } from 'uuid';

import { markRaw } from 'vue';

// 不能导出对象，否则会导致多个业务组件共同一个数据状态
export default function () {
  return {
    type: markRaw(TextNote),
    name: 'textNote',
    id: uuidV4(), // 确保id不重复
    // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
    status: {
      type: {
        id: uuidV4(),
        status: ['标题', '段落'],
        currentStatus: 1, // 当前选中的状态的下标
        isShow: true,
        name: 'typeEditor',
        editCom: markRaw(TextTypeEditor),
      },
      title: {
        id: uuidV4(),
        status: '备注说明标题',
        isShow: false, // 是否显示该组件
        name: 'titleEditor',
        editCom: markRaw(TitleEditor),
      },
      desc: {
        id: uuidV4(),
        status: '备注说明描述',
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
        isShow: false,
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
        isShow: false,
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
        isShow: false,
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
        isShow: false,
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
