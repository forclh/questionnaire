// 定义数据库中问卷的存储类型
import type { SchemaType } from '@/types';

// 表的类型
export interface Questionnaire {
  createTime: number;  // 使用时间戳
  updateTime: number;
  title: string;
  questionNumber: number;
  questionComs: SchemaType[]
}