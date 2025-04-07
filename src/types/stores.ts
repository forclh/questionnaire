// 定义store的类型
import type { TextProps, OptionsProps, PicLink, SchemaType } from '@/types';
// 题目类型
export type QuestionType =
  | 'singleSelect'
  | 'multiSelect'
  | 'singlePicSelect'
  | 'multiPicSelect'
  | 'optionSelect'
  | 'textInput'
  | 'personalInfoGender'
  | 'personalInfoName'
  | 'personalInfoIdCard'
  | 'personalInfoUniversity'
  | 'personalInfoMajor'
  | 'personalInfoIndustry'
  | 'personalInfoPosition'
  | 'personalInfoCompany'
  | 'personalInfoEducation'
  | 'personalInfoOccupation'
  | 'personalInfoAge';

// 非题目类型
export type NonQuestionType = 'textNote';
// 业务组件类型（题目类型 + 非题目类型）
export type MaterialComType = QuestionType | NonQuestionType;

// actions
export interface Actions {
  setCurrentMaterialCom: (com: MaterialComType) => void;
  // 公共actions
  setTextStatus: (textProps: TextProps, text: string) => void;
  addOption: (optionsProps: OptionsProps) => void;
  removeOption: (optionsProps: OptionsProps, index: number) => Boolean;
  setPosition: (optionsProps: OptionsProps, index: number) => void;
  setCurrentStatus: (optionsProps: OptionsProps, index: number) => void;
  setWeight: (optionsProps: OptionsProps, index: number) => void;
  setItalic: (optionsProps: OptionsProps, index: number) => void;
  setColor: (textProps: TextProps, color: string) => void;
  setPicLinkByIndex: (optionsProps: OptionsProps, payload: PicLink) => void;
}

// state
export interface MaterialStore extends Actions {
  currentMaterialCom: MaterialComType;
  coms: Record<MaterialComType, SchemaType>;
}
