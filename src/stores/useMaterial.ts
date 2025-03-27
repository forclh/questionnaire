// 组件市场中所有组件的状态仓库
import { defineStore } from 'pinia';
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap.ts';
import type { SchemaType, TextProps, OptionsProps } from '@/types';
import { isStringArr } from '@/types';
export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    // 当前选中的业务组件
    currentMaterialCom: 'singleSelect',
    // 记录所有的业务组件
    coms: {
      singleSelect: defaultStatusMap['singleSelect'](),
    } as Record<string, SchemaType>,
  }),

  actions: {
    // 修改业务组件中status为文本的属性值
    setTestStatus(testProps: TextProps, text: string) {
      testProps.status = text;
    },
    // 增加选项操作
    addOption(optionsProps: OptionsProps) {
      if (isStringArr(optionsProps.status)) {
        const lastItem = optionsProps.status[optionsProps.status.length - 1];
        const match = lastItem.match(/(\d+)/);
        const newIndex = match ? parseInt(match[0]) + 1 : 1;
        optionsProps.status.push(`新增选项${newIndex}`);
      }
    },
    // 删除选项操作
    removeOption(optionsProps: OptionsProps, index: number) {
      // 至少剩余两个选项
      if (optionsProps.status.length <= 2) {
        return false;
      }
      if (isStringArr(optionsProps.status)) {
        optionsProps.status.splice(index, 1);
      }
      return true;
    },
  },
});
