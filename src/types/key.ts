import type { InjectionKey } from 'vue';
import type { PicLink } from '@/types';

// 定义 injection key类型
// 定义更新状态函数的类型
type UpdateStatusFn = (
  configKey: string,
  payload?: string | number | PicLink,
  isShowChange?: Boolean,
) => void;
export const updateStatusKey = Symbol() as InjectionKey<UpdateStatusFn>;
