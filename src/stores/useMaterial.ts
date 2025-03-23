// 组件市场中所有组件的状态仓库
import { defineStore } from "pinia";
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap.ts';
export const userMaterialStore = defineStore("materialStore", {
  state: () => ({
    // 记录所有的业务组件
    coms: {
      singleSelect: defaultStatusMap['singleSelect']()
    }
  })
})
