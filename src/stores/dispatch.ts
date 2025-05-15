// 数据仓库更新方法
import type { MaterialStore, EditorStore, PicLink, TypeStatus, OptionsStatus } from '@/types';
import { isOptionsStatus, isPicLink, isTypeStatus } from '@/types';
import { ElMessage } from 'element-plus';
import { changeEditorIsShowStatus } from '@/utils';

export function dispatchStatus(
  store: MaterialStore | EditorStore,
  status: TypeStatus | OptionsStatus,
  configKey: string,
  payload?: string | number | PicLink,
  isShowChange?: Boolean,
) {
  switch (configKey) {
    case 'title':
    case 'desc':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "tile or desc". Expected string.');
        return;
      }
      store.setTextStatus(status[configKey], payload);
      break;
    case 'options':
      if (isOptionsStatus(status)) {
        if (typeof payload === 'number') {
          // 删除选项
          const result = store.removeOption(status[configKey], payload);
          if (result) {
            ElMessage.success('删除成功');
          } else {
            ElMessage.error('至少保留两个选项');
          }
          // object类型的payload为图片组件的修改
        } else if (typeof payload === 'object' && isPicLink(payload)) {
          // 修改图片链接
          store.setPicLinkByIndex(status[configKey], payload);
        } else {
          // 添加选项
          store.addOption(status[configKey]);
        }
      }
      break;
    case 'position':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position". Expected number.');
        return;
      }
      store.setPosition(status[configKey], payload);
      break;
    case 'titleSize':
    case 'descSize':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize". Expected number.');
        return;
      }
      store.setCurrentStatus(status[configKey], payload);
      break;
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleWeight or descWeight". Expected number.');
        return;
      }
      store.setWeight(status[configKey], payload);
      break;
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleItalic or descItalic". Expected number.');
        return;
      }
      store.setItalic(status[configKey], payload);
      break;
    case 'titleColor':
    case 'descColor':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "titleColor or descColor". Expected string.');
        return;
      }
      store.setColor(status[configKey], payload);
      break;
    case 'type':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "type". Expected number.');
        return;
      }
      if (isTypeStatus(status)) {
        if (isShowChange) {
          // 切换编辑器的显示状态
          changeEditorIsShowStatus(status, payload);
        }
        store.setCurrentStatus(status[configKey], payload);
      }
      break;
  }
}
