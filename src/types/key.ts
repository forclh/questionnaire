import type { InjectionKey } from 'vue';

// 定义 injection key类型
// 定义更新状态函数的类型
type UpdateStatusFn = (configKey: string, payload?: string | number | object) => void;
export const updateStatusKey = Symbol() as InjectionKey<UpdateStatusFn>;
