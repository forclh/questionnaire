// 该文件为题型组面板的配置文件，用于存储题型组面板的配置信息

import {
  CircleCheck,
  Files,
  EditPen,
  ChatLineSquare,
  User,
  Message,
} from '@element-plus/icons-vue';

// 题型组配置列表
export const QuestionTypeGroupConfigList = [
  {
    title: '选择', // 题型组标题
    icon: CircleCheck, // 题型组图标
    // 题型组包含的题型列表
    questionTypeList: [
      // 题型类型（对应题型组件）和展示的名称
      { type: 'singleSelect', name: '单选题' },
      { type: 'multiSelect', name: '多选题' },
      { type: 'optionSelect', name: '下拉选择' },
      { type: 'singlePicSelect', name: '图片单选' },
      { type: 'multiPicSelect', name: '图片多选' },
    ],
  },
  {
    title: '文本输入',
    icon: EditPen,
    questionTypeList: [{ type: 'textInput', name: '文本输入' }],
  },
  {
    title: '高级题型',
    icon: Files,
    questionTypeList: [
      { type: 'dateSelect', name: '日期' },
      { type: 'scoreSelect', name: '评分' },
    ],
  },
  {
    title: '备注说明',
    icon: ChatLineSquare,
    questionTypeList: [{ type: 'textNote', name: '备注说明' }],
  },
  {
    title: '个人信息',
    icon: User,
    questionTypeList: [
      { type: 'personalInfoGender', name: '性别' },
      { type: 'personalInfoEducation', name: '学历' },
    ],
  },
  {
    title: '联系方式',
    icon: Message,
    questionTypeList: [
      { type: 'personalInfoName', name: '姓名' },
      { type: 'personalInfoIdCard', name: '身份证' },
      { type: 'personalInfoUniversity', name: '大学' },
      { type: 'personalInfoMajor', name: '专业' },
      { type: 'personalInfoIndustry', name: '行业' },
      { type: 'personalInfoPosition', name: '职位' },
      { type: 'personalInfoCompany', name: '公司' },
      { type: 'personalInfoGender', name: '性别' },
      { type: 'personalInfoEducation', name: '学历' },
      { type: 'personalInfoOccupation', name: '职业' },
      { type: 'personalInfoAge', name: '年龄' },
      { type: 'personalInfoBirth', name: '出生日期' },
    ],
  },
];
