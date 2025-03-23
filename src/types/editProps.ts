import type { VueComType } from "./common.ts";


// --定义status中属性的类型--
export interface BaseProps {
  id: string,
  name: string,
  isShow: boolean,
  editCom: VueComType
}

export type StringStatusArr = Array<string>;
export type ValueStatusArr = Array<{ value: string, status: string }>;
export type PicTitleDescStatusArr = Array<{ picTitle: string, picDesc: string, value: String }>;

export interface TextProps extends BaseProps {
  status: string
}

// status为数组的情况（三种）
export interface OptionsProps extends BaseProps {
  status: StringStatusArr | ValueStatusArr | PicTitleDescStatusArr
  currentStatus: number
}

// --定义整个status的类型--
// 每个组件都有的公共项
export interface BaseStatus {
  title: TextProps,
  desc: TextProps,
  position: OptionsProps,
  titleSize: OptionsProps,
  descSize: OptionsProps,
  titleWeight: OptionsProps,
  descWeight: OptionsProps,
  titleItalic: OptionsProps,
  descItalic: OptionsProps,
  titleColor: TextProps,
  descColor: TextProps
}


export interface OptionsStatus extends BaseStatus {
  options: OptionsProps
}
