// 仓库的公共actions

import type { TextProps, OptionsProps, PicLink} from '@/types';
import { isStringArr, isPicTitleDescStatusArr } from '@/types';

// 修改业务组件中status为文本的属性值
export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

// 增加选项操作
export function addOption(optionsProps: OptionsProps) {
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
}

// 删除选项操作
export function removeOption(optionsProps: OptionsProps, index: number) {
  // 至少剩余两个选项
  if (optionsProps.status.length <= 2) {
    return false;
  }
  optionsProps.status.splice(index, 1);
  return true;
}
// 修改对齐方式
export function setPosition(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}
// 修改尺寸
export function setCurrentStatus(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

// 修改字体粗细
export function setWeight(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}
// 修改字体倾斜
export function setItalic(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}
// 修改字体颜色
export function setColor(textProps: TextProps, color: string) {
  textProps.status = color;
}
// 设置图片组件的value
export function setPicLinkByIndex(optionsProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDescStatusArr(optionsProps.status)) {
    optionsProps.status[payload.index].value = payload.link;
  }
}