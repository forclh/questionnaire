import type { VueComType } from './common.ts';

// --定义status中属性的类型--
export interface BaseProps {
  id: string;
  name: string;
  isShow: boolean;
  editCom: VueComType;
}

export type StringStatusArr = Array<string>;
export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDescStatusArr = Array<{ picTitle: string; picDesc: string; value: string }>;
// 选项数组的三种情况
export type OptionStatusArr = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

export interface TextProps extends BaseProps {
  status: string;
}

export interface OptionsProps extends BaseProps {
  status: OptionStatusArr;
  currentStatus: number;
}

// --定义整个status的类型--
// 每个组件都有的公共项
export interface BaseStatus {
  [key: string]: TextProps | OptionsProps;
  title: TextProps;
  desc: TextProps;
  position: OptionsProps;
  titleSize: OptionsProps;
  descSize: OptionsProps;
  titleWeight: OptionsProps;
  descWeight: OptionsProps;
  titleItalic: OptionsProps;
  descItalic: OptionsProps;
  titleColor: TextProps;
  descColor: TextProps;
}

export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}

export interface TypeStatus extends BaseStatus {
  type: OptionsProps;
}

export function isOptionsStatus(status: OptionsStatus | TypeStatus): status is OptionsStatus {
  return 'options' in status;
}

export function isTypeStatus(status: OptionsStatus | TypeStatus): status is TypeStatus {
  return 'type' in status;
}

// 判断status是否为string[]
export function isStringArr(status: OptionStatusArr): status is StringStatusArr {
  return Array.isArray(status) && status.length > 0 && typeof status[0] === 'string';
}

// 判断status是否为{value: string, status: string}[]
export function isValueStatusArr(status: OptionStatusArr): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === 'object' &&
    'value' in status[0] &&
    'status' in status[0]
  );
}

// 判断status是否为{picTitle: string, picDesc: string, value: string}[]
export function isPicTitleDescStatusArr(status: OptionStatusArr): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === 'object' &&
    'picTitle' in status[0] &&
    'picDesc' in status[0] &&
    'value' in status[0]
  );
}

export type PicLink = { index: number; link: string };
export function isPicLink(obj: object): obj is PicLink {
  return 'index' in obj && 'link' in obj;
}

export type GetLink = (obj: PicLink) => void;
