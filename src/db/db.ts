import Dexie, { type Table } from 'dexie';
import type { Questionnaire } from '@/types';

class QuestionnaireDB extends Dexie {
  // 表的每一条记录是Questionnaire类型，主键是number类型（非空断言）
  questionnaires!: Table<Questionnaire, number>

  constructor() {
    super('questionnaireDB');  // 数据库名称
    this.version(1).stores({
      questionnaires: '++id, createTime, updateTime, title, questionNumber, questionComs'
    })
  }
}

export const db = new QuestionnaireDB();
