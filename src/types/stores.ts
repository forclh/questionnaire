// 定义store的类型
import type { TextProps, OptionsProps, PicLink, SchemaType, VueComType } from '@/types';
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
  | 'personalInfoAge'
  | 'personalInfoBirth'
  | 'dateSelect'
  | 'scoreSelect';

// 非题目类型
export type NonQuestionType = 'textNote';
// 业务组件类型（题目类型 + 非题目类型）
export type MaterialComType = QuestionType | NonQuestionType;

// 编辑组件类型
export type EditorComType =
  | 'colorEditor'
  | 'dateEditor'
  | 'descEditor'
  | 'italicEditor'
  | 'optionsEditor'
  | 'picOptionsEditor'
  | 'positionEditor'
  | 'sizeEditor'
  | 'textInputTypeEditor'
  | 'textTypeEditor'
  | 'titleEditor'
  | 'weightEditor';

// 所有组件类型
export type AllComType = MaterialComType | EditorComType;

// 组件映射类型
export type ComponentMapType = Record<AllComType, VueComType>;

// actions
export interface Actions {
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

// 仓库类型
export interface MaterialStore extends Actions {
  currentMaterialCom: MaterialComType;
  coms: Record<MaterialComType, SchemaType>;
  setCurrentMaterialCom: (com: MaterialComType) => void;
}

export interface EditorStore extends Actions {
  currentQuestionIndex: number;
  questionComs: SchemaType[];
  setCurrentQuestionIndex: (index: number) => void;
  addQuestionCom: (questionCom: SchemaType) => void;
}

// 题目类型列表
export const QuestionTypeList = [
  'singleSelect',
  'multiSelect',
  'singlePicSelect',
  'multiPicSelect',
  'optionSelect',
  'textInput',
  'personalInfoGender',
  'personalInfoName',
  'personalInfoIdCard',
  'personalInfoUniversity',
  'personalInfoMajor',
  'personalInfoIndustry',
  'personalInfoPosition',
  'personalInfoCompany',
  'personalInfoEducation',
  'personalInfoOccupation',
  'personalInfoAge',
  'personalInfoBirth',
  'dateSelect',
  'scoreSelect',
];

// 判断传入的值是否是题目类型
export function isQuestionType(type: string): type is QuestionType {
  return QuestionTypeList.includes(type as QuestionType);
}

// 不适合生成PDF的组件类型(下拉选择、日期选择、评分选择)
export const unsuitablePDFComType = [
  'optionSelect',
  'dateSelect',
  'scoreSelect',
  'personalInfoBirth',
];

// 判断传入的值是否是不适合生成PDF的组件类型
export function isUnsuitablePDFComType(type: string): Boolean {
  return unsuitablePDFComType.includes(type);
}

export type QuizData = {
  questionCount: number;
  questionComs: SchemaType[];
};
