// 公共类型

import type { defineComponent } from 'vue';
import type { OptionsStatus, TypeStatus } from '@/types';
// 导出Vue组件类型
export type VueComType = ReturnType<typeof defineComponent>;

// 定义整个业务组件schema的类型
export interface SchemaType {
  type: VueComType;
  name: string;
  id: string;
  status: OptionsStatus | TypeStatus;
}
