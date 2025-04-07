// 工具库

import { isStringArr, isPicTitleDescStatusArr, isValueStatusArr } from '@/types';
import type { TextProps, OptionsProps, TypeStatus, SchemaType, MaterialComType } from '@/types';
import { genderStatus } from '@/config/defaultStatus/initStatus';
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

export function updateInitStatus(comStatus: SchemaType, newMaterialCom: MaterialComType) {
  switch (newMaterialCom) {
    case 'personalInfoGender':
      comStatus.name = 'personalInfoGender';
      comStatus.status.title.status = '您的性别是';
      comStatus.status.desc.status = '默认描述内容';
      comStatus.status.options.status = genderStatus();
      break;
  }
}
