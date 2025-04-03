// 工具库

import { isStringArr, isPicTitleDescStatusArr, isValueStatusArr } from '@/types';
import type { TextProps, OptionsProps, TypeStatus } from '@/types';

export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  if (props && isStringArr(props.status)) {
    return props.status;
  }
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  if (props && isPicTitleDescStatusArr(props.status)) {
    return props.status;
  }
}

export function getValueStatusArr(props: OptionsProps) {
  if (props && isValueStatusArr(props.status)) {
    return props.status;
  }
}

export function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArr(props.status)) {
    return props.status[props.currentStatus];
  }
}

export function changeEditorIsShowStatus(status: TypeStatus, type: number) {
  if (type !== status.type.currentStatus) {
    let editorNames = [
      'title',
      'desc',
      'position',
      'titleSize',
      'descSize',
      'titleWeight',
      'descWeight',
      'titleColor',
      'descColor',
      'titleItalic',
      'descItalic',
    ];
    for (let i in editorNames) {
      status[editorNames[i]].isShow = !status[editorNames[i]].isShow;
    }
  }
}
