// 工具库

import { isStringArr, isPicTitleDescStatusArr, isValueStatusArr } from '@/types';
import type { TextProps, OptionsProps, TypeStatus, SchemaType, MaterialComType, Questionnaire } from '@/types';
import {
  genderStatus,
  OccupationStatus,
  educationStatus,
  ageStatus,
} from '@/config/defaultStatus/initStatus';
import type { TableColumnCtx } from 'element-plus';

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

export function getValueStatusByCurrentStatus(props: OptionsProps) {
  if (props && isValueStatusArr(props.status)) {
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
  // 提取公共部分，设置默认描述内容
  comStatus.status.desc.status = '默认描述内容';

  switch (newMaterialCom) {
    case 'personalInfoName':
      comStatus.name = 'personalInfoName';
      comStatus.status.title.status = '您的姓名是';
      break;
    case 'personalInfoGender':
      comStatus.name = 'personalInfoGender';
      comStatus.status.title.status = '您的性别是';
      comStatus.status.options.status = genderStatus();
      break;
    case 'personalInfoIdCard':
      comStatus.name = 'personalInfoIdCard';
      comStatus.status.title.status = '您的身份证号是';
      break;
    case 'personalInfoUniversity':
      comStatus.name = 'personalInfoUniversity';
      comStatus.status.title.status = '您的学校是';
      break;
    case 'personalInfoMajor':
      comStatus.name = 'personalInfoMajor';
      comStatus.status.title.status = '您的专业是';
      break;
    case 'personalInfoIndustry':
      comStatus.name = 'personalInfoIndustry';
      comStatus.status.title.status = '您的行业是';
      break;
    case 'personalInfoPosition':
      comStatus.name = 'personalInfoPosition';
      comStatus.status.title.status = '您的职位是';
      break;
    case 'personalInfoCompany':
      comStatus.name = 'personalInfoCompany';
      comStatus.status.title.status = '您的公司是';
      break;
    case 'personalInfoEducation':
      comStatus.name = 'personalInfoEducation';
      comStatus.status.title.status = '您的学历是';
      comStatus.status.options.status = educationStatus();
      break;
    case 'personalInfoOccupation':
      comStatus.name = 'personalInfoOccupation';
      comStatus.status.title.status = '您的职业是';
      comStatus.status.options.status = OccupationStatus();
      break;
    case 'personalInfoAge':
      comStatus.name = 'personalInfoAge';
      comStatus.status.title.status = '您的年龄是';
      comStatus.status.options.status = ageStatus();
      break;
    case 'personalInfoBirth':
      comStatus.name = 'personalInfoBirth';
      comStatus.status.title.status = '请选择出生日期';
      break;
  }
}


// 处理日期格式
export function formatDate(row: Questionnaire, column: TableColumnCtx<Questionnaire>, cellValue: number) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Intl.DateTimeFormat('zh-CN', options).format(new Date(cellValue));
}