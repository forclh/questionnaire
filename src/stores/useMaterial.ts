// 组件市场中所有组件的状态仓库
import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap.ts';
import type { TextProps, OptionsProps, PicLink, MaterialComType, SchemaType } from '@/types';
import { isStringArr, isPicTitleDescStatusArr } from '@/types';
import { updateInitStatus } from '@/utils';

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
  'personalInfoBirth'
] as MaterialComType[];
// 初始化后的状态对象
const initializedStatus: { [key: string]: SchemaType } = {};
keyToInitStatus.forEach((key) => {
  const defaultStatus = defaultStatusMap[key]();
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
    },
  }),

  actions: {
    // 设置当前选中的业务组件
    setCurrentMaterialCom(com: string) {
      this.currentMaterialCom = com;
    },
    // 修改业务组件中status为文本的属性值
    setTextStatus(textProps: TextProps, text: string) {
      textProps.status = text;
    },
    // 增加选项操作
    addOption(optionsProps: OptionsProps) {
      // 普通单选
      if (isStringArr(optionsProps.status)) {
        const lastItem = optionsProps.status[optionsProps.status.length - 1];
        const match = lastItem.match(/(\d+)/);
        const newIndex = match ? parseInt(match[0]) + 1 : 1;
        optionsProps.status.push(`新增选项${newIndex}`);
      } else if (isPicTitleDescStatusArr(optionsProps.status)) {
        // 图片单选
        const lastItem = optionsProps.status[optionsProps.status.length - 1];
        const match = lastItem.picTitle.match(/(\d+)/);
        const newIndex = match ? parseInt(match[0]) + 1 : 1;
        optionsProps.status.push({
          picTitle: `图片标题${newIndex}`,
          picDesc: `图片描述${newIndex}`,
          value: '',
        });
      }
    },
    // 删除选项操作
    removeOption(optionsProps: OptionsProps, index: number) {
      // 至少剩余两个选项
      if (optionsProps.status.length <= 2) {
        return false;
      }
      optionsProps.status.splice(index, 1);
      return true;
    },
    // 修改对齐方式
    setPosition(optionsProps: OptionsProps, index: number) {
      optionsProps.currentStatus = index;
    },
    // 修改尺寸
    setCurrentStatus(optionsProps: OptionsProps, index: number) {
      optionsProps.currentStatus = index;
    },
    // 修改字体粗细
    setWeight(optionsProps: OptionsProps, index: number) {
      optionsProps.currentStatus = index;
    },
    // 修改字体倾斜
    setItalic(optionsProps: OptionsProps, index: number) {
      optionsProps.currentStatus = index;
    },
    // 修改字体颜色
    setColor(textProps: TextProps, color: string) {
      textProps.status = color;
    },

    // 设置图片组件的value
    setPicLinkByIndex(optionsProps: OptionsProps, payload: PicLink) {
      if (isPicTitleDescStatusArr(optionsProps.status)) {
        optionsProps.status[payload.index].value = payload.link;
      }
    },
  },
});
