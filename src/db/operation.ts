// 提供数据库操作的方法

import { db } from './db';
import type { Questionnaire } from '@/types';

// 添加问卷
export const addQuestionnaire = async (questionnaire: Questionnaire) => {
  return await db.questionnaires.add(questionnaire);
};

// 查询所有数据
export const queryAllQuestionnaire = async () => {
  return await db.questionnaires.toArray();
};

// 根据id查询某一条数据
export const queryQuestionnaireById = async (id: number) => {
  return await db.questionnaires.get(id);
};

// 根据id删除某一条数据
export const deleteQuestionnaireById = async (id: number) => {
  return await db.questionnaires.delete(id);
};

// 根据id更新某一条数据(Partial<Questionnaire>表示Questionnaire类型的子集)
export const updateQuestionnaireById = async (
  id: number,
  questionnaire: Partial<Questionnaire>,
) => {
  return await db.questionnaires.update(id, questionnaire);
};
