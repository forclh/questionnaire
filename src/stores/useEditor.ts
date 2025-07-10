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
import type { SchemaType, Questionnaire, TypeStatus } from '@/types';
import { isQuestionType } from '@/types';
// 数据库操作
import {
  addQuestionnaire,
  updateQuestionnaireById,
  queryQuestionnaireById,
  deleteQuestionnaireById,
} from '@/db/operation';
// 编辑器组件
import TextTypeEditor from '@/components/SurveyComs/EditItems/TextTypeEditor.vue';
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue';
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue';
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue';
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue';
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue';
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue';
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue';
import textNoteDefaultStatus from '@/config/defaultStatus/TextNote.ts';

import { v4 as uuidv4 } from 'uuid';
import { markRaw } from 'vue';

// 初始化问题组件列表（有两个说明的默认组件）
const initQuestionComs = () =>
  [
    Object.assign({}, textNoteDefaultStatus(), {
      status: <TypeStatus>{
        type: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['标题', '段落'],
          isShow: true,
          editCom: markRaw(TextTypeEditor),
          name: 'text-type-editor',
        },
        title: {
          id: uuidv4(),
          status: '问卷标题',
          isShow: true,
          editCom: markRaw(TitleEditor),
          name: 'title-editor',
        },
        desc: {
          id: uuidv4(),
          status: '默认描述内容',
          isShow: false,
          editCom: DescEditor,
          name: 'desc-editor',
        },
        position: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['左对齐', '居中对齐'],
          isShow: false,
          editCom: markRaw(PositionEditor),
          name: 'position-editor',
        },
        titleSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['26', '24', '22'],
          isShow: true,
          editCom: markRaw(SizeEditor),
          name: 'size-editor',
        },
        descSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['16', '14', '12'],
          isShow: false,
          editCom: markRaw(SizeEditor),
          name: 'size-editor',
        },
        titleWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: true,
          editCom: markRaw(WeightEditor),
          name: 'weight-editor',
        },
        descWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: false,
          editCom: markRaw(WeightEditor),
          name: 'weight-editor',
        },
        titleItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: true,
          editCom: markRaw(ItalicEditor),
          name: 'italic-editor',
        },
        descItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: false,
          editCom: markRaw(ItalicEditor),
          name: 'italic-editor',
        },
        titleColor: {
          id: uuidv4(),
          status: '#000',
          isShow: true,
          editCom: markRaw(ColorEditor),
          name: 'color-editor',
        },
        descColor: {
          id: uuidv4(),
          status: '#909399',
          isShow: false,
          editCom: markRaw(ColorEditor),
          name: 'color-editor',
        },
      },
    }),
    Object.assign({}, textNoteDefaultStatus(), {
      status: <TypeStatus>{
        type: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['标题', '段落'],
          isShow: true,
          editCom: markRaw(TextTypeEditor),
          name: 'text-type-editor',
        },
        title: {
          id: uuidv4(),
          status: '默认标题内容',
          isShow: false,
          editCom: markRaw(TitleEditor),
          name: 'title-editor',
        },
        desc: {
          id: uuidv4(),
          status:
            '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
          isShow: true,
          editCom: markRaw(DescEditor),
          name: 'desc-editor',
        },
        position: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['左对齐', '居中对齐'],
          isShow: true,
          editCom: markRaw(PositionEditor),
          name: 'position-editor',
        },
        titleSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['26', '24', '22'],
          isShow: false,
          editCom: markRaw(SizeEditor),
          name: 'size-editor',
        },
        descSize: {
          id: uuidv4(),
          currentStatus: 0,
          status: ['16', '14', '12'],
          isShow: true,
          editCom: markRaw(SizeEditor),
          name: 'size-editor',
        },
        titleWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: false,
          editCom: markRaw(WeightEditor),
          name: 'weight-editor',
        },
        descWeight: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['加粗', '正常'],
          isShow: true,
          editCom: markRaw(WeightEditor),
          name: 'weight-editor',
        },
        titleItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: false,
          editCom: markRaw(ItalicEditor),
          name: 'italic-editor',
        },
        descItalic: {
          id: uuidv4(),
          currentStatus: 1,
          status: ['斜体', '正常'],
          isShow: true,
          editCom: markRaw(ItalicEditor),
          name: 'italic-editor',
        },
        titleColor: {
          id: uuidv4(),
          status: '#000',
          isShow: false,
          editCom: markRaw(ColorEditor),
          name: 'color-editor',
        },
        descColor: {
          id: uuidv4(),
          status: '#909399',
          isShow: true,
          editCom: markRaw(ColorEditor),
          name: 'color-editor',
        },
      },
    }),
  ] as SchemaType[];

export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentQuestionIndex: -1, // 当前选中的问题组件索引, 一开始没有选中时为-1
    questionCount: 0, // 问题总数
    questionComs: initQuestionComs() as SchemaType[], // 问题组件列表（用于在画布中渲染具体的题目）
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
    removeQuestion(index: number) {
      // 在删除前先检查是否为题目类型
      const isQuestion = isQuestionType(this.questionComs[index].name);
      // 删除元素
      this.questionComs.splice(index, 1);
      // 如果是题目类型，减少题目总数
      if (isQuestion) {
        this.questionCount--;
      }
    },
    // 重置问卷
    resetQuestionComs() {
      this.questionComs = initQuestionComs();
      this.currentQuestionIndex = -1;
      this.questionCount = 0;
    },
    // 保存问卷
    saveQuestionComs(questionnaire: Questionnaire) {
      return addQuestionnaire(questionnaire);
    },
    // 还原问卷仓库的状态（questionComs, questionCount）
    restoreQuestionnaire(questionnaire: Questionnaire) {
      this.questionComs = questionnaire.questionComs;
      this.questionCount = questionnaire.questionNumber;
      this.currentQuestionIndex = -1;
    },
    // 更新问卷
    updateQuestionnaire(id: number, questionnaire: Partial<Questionnaire>) {
      return updateQuestionnaireById(id, questionnaire);
    },
    // 根据id查询问卷内容
    getQuestionnaireById(id: number) {
      return queryQuestionnaireById(id);
    },
    // 根据id删除问卷
    removeQuestionnaireById(id: number) {
      return deleteQuestionnaireById(id);
    },
  },
});
