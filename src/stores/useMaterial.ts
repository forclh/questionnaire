// 组件市场中所有组件的状态仓库
import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap.ts';
import type { MaterialComType, SchemaType } from '@/types';
import { updateInitStatus } from '@/utils';
import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setCurrentStatus,
  setPicLinkByIndex,
  setWeight,
  setItalic,
  setColor,
} from '@/stores/actions';

// 记录哪些组件需要初始化
const keyToInitStatus = [
  'personalInfoGender',
  'personalInfoName',
  'personalInfoIdCard',
  'personalInfoUniversity',
  'personalInfoMajor',
  'personalInfoIndustry',
  'personalInfoPosition',
  'personalInfoCompany',
  'personalInfoEducation',
  'personalInfoOccupation',
  'personalInfoAge',
  'personalInfoBirth',
  'personalInfoPhone',
  'personalInfoWeChat',
  'personalInfoQQ',
  'personalInfoEmail',
  'personalInfoAddress',
] as MaterialComType[];

// 初始化后的状态对象
const initializedStatus: { [key: string]: SchemaType } = {};
keyToInitStatus.forEach((key) => {
  const defaultStatus = defaultStatusMap[key]() as SchemaType;
  updateInitStatus(defaultStatus, key);
  initializedStatus[key] = defaultStatus;
});

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    // 当前选中的业务组件
    currentMaterialCom: 'singleSelect',
    // 记录所有的业务组件
    coms: {
      // 选择组件
      singleSelect: defaultStatusMap['singleSelect'](),
      multiSelect: defaultStatusMap['multiSelect'](),
      singlePicSelect: defaultStatusMap['singlePicSelect'](),
      multiPicSelect: defaultStatusMap['multiPicSelect'](),
      optionSelect: defaultStatusMap['optionSelect'](),
      // 文本输入组件
      textInput: defaultStatusMap['textInput'](),
      // 备注组件
      textNote: defaultStatusMap['textNote'](),
      // 高级题型组件
      dateSelect: defaultStatusMap['dateSelect'](),
      scoreSelect: defaultStatusMap['scoreSelect'](),
      // 个人信息预设组件
      personalInfoGender: initializedStatus['personalInfoGender'],
      personalInfoName: initializedStatus['personalInfoName'],
      personalInfoIdCard: initializedStatus['personalInfoIdCard'],
      personalInfoUniversity: initializedStatus['personalInfoUniversity'],
      personalInfoMajor: initializedStatus['personalInfoMajor'],
      personalInfoIndustry: initializedStatus['personalInfoIndustry'],
      personalInfoPosition: initializedStatus['personalInfoPosition'],
      personalInfoCompany: initializedStatus['personalInfoCompany'],
      personalInfoEducation: initializedStatus['personalInfoEducation'],
      personalInfoOccupation: initializedStatus['personalInfoOccupation'],
      personalInfoAge: initializedStatus['personalInfoAge'],
      personalInfoBirth: initializedStatus['personalInfoBirth'],
      // 联系方式预设组件
      personalInfoPhone: initializedStatus['personalInfoPhone'],
      personalInfoWeChat: initializedStatus['personalInfoWeChat'],
      personalInfoQQ: initializedStatus['personalInfoQQ'],
      personalInfoEmail: initializedStatus['personalInfoEmail'],
      personalInfoAddress: initializedStatus['personalInfoAddress'],
    },
  }),
  actions: {
    // 设置当前选中的业务组件
    setCurrentMaterialCom(com: MaterialComType) {
      this.currentMaterialCom = com;
    },
    setTextStatus,
    // 增加选项操作
    addOption,
    // 删除选项操作
    removeOption,
    // 修改对齐方式
    setPosition,
    // 修改尺寸
    setCurrentStatus,
    // 修改字体粗细
    setWeight,
    // 修改字体倾斜
    setItalic,
    // 修改字体颜色
    setColor,
    // 设置图片组件的value
    setPicLinkByIndex,
  },
});
