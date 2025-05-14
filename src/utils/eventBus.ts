// 利用mitt提供的事件总线
import mitt from 'mitt';
import type { EventBusType } from '@/types';
// 创建事件总线
export const eventBus = mitt<EventBusType>();

