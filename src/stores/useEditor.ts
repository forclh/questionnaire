// 该仓库用于存储编辑器画布的状态
import { defineStore } from 'pinia';
import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setCurrentStatus,
  setPicLinkByIndex,
  setWeight,
  setItalic,
  setColor,
} from '@/stores/actions';
import type { SchemaType } from '@/types';
import { isQuestionType } from '@/types';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentQuestionIndex: -1, // 当前选中的问题组件索引, 一开始没有选中时为-1
    questionCount: 0, // 问题总数
    questionComs: [] as SchemaType[], // 问题组件列表（用于在画布中渲染具体的题目）
  }),
  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setCurrentStatus,
    setPicLinkByIndex,
    setWeight,
    setItalic,
    setColor,
    addQuestionCom(questionCom: SchemaType) {
      this.questionComs.push(questionCom);
      this.currentQuestionIndex = -1;
      // 如果传入的值是题目类型，则增加题目总数
      if (isQuestionType(questionCom.name)) {
        this.questionCount++;
      }
    },
    setCurrentQuestionIndex(index: number) {
      this.currentQuestionIndex = index;
    },
  },
});
