// 组件市场中所有组件的状态仓库
import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap.ts';
import type { SchemaType, TextProps, OptionsProps, PicLink } from '@/types';
import { isStringArr, isPicTitleDescStatusArr } from '@/types';
export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    // 当前选中的业务组件
    currentMaterialCom: 'singleSelect',
    // 记录所有的业务组件
    coms: {
      singleSelect: defaultStatusMap['singleSelect'](),
      singlePicSelect: defaultStatusMap['singlePicSelect'](),
    } as Record<string, SchemaType>,
  }),

  actions: {
    // 修改业务组件中status为文本的属性值
    setTestStatus(testProps: TextProps, text: string) {
      testProps.status = text;
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
    setSize(optionsProps: OptionsProps, size: number) {
      optionsProps.currentStatus = size;
    },
    // 修改字体粗细
    setWeight(optionsProps: OptionsProps, size: number) {
      optionsProps.currentStatus = size;
    },
    // 修改字体倾斜
    setItalic(optionsProps: OptionsProps, size: number) {
      optionsProps.currentStatus = size;
    },
    // 修改字体颜色
    setColor(optionsProps: TextProps, color: string) {
      optionsProps.status = color;
      console.log(optionsProps.status);
    },
    // 设置当前选中的业务组件
    setCurrentMaterialCom(com: string) {
      this.currentMaterialCom = com;
    },
    // 设置图片组件的value
    setPicLinkByIndex(optionsProps: OptionsProps, payload: PicLink) {
      if (isPicTitleDescStatusArr(optionsProps.status)) {
        optionsProps.status[payload.index].value = payload.link;
      }
    },
  },
});
