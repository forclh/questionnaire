// 组件市场中所有组件的状态仓库
import { defineStore } from "pinia";
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap.ts';
import type { OptionsStatus } from '@/types';
// 定义组件状态映射类型
interface ComStatusMap {
  [key: string]: {
    status: OptionsStatus;
    [key: string]: any;
  }
}

export const useMaterialStore = defineStore("materialStore", {
  state: () => ({
    // 当前选中的业务组件
    currentMaterialCom: 'singleSelect',
    // 记录所有的业务组件
    coms: {
      singleSelect: defaultStatusMap['singleSelect']()
    } as ComStatusMap
  })
})
