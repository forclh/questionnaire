import type { SchemaType } from '@/types';
import { computed } from 'vue';
import { isQuestionType } from '@/types';

// 返回问卷题目序号的数组
// 最终形成的数组示例为：[1,2,null,3,4,null,5,6,null]
export function useQuestionNumber(questionComs: SchemaType[]) {
  return computed(() => {
    let questionNumber = 1;
    return questionComs.map((item) => {
      // 判断是否为题目
      if (isQuestionType(item.name)) {
        // 填充0使序号为两位
        return questionNumber < 10 ? `0${questionNumber++}` : `${questionNumber++}`;
      }
      return null;
    });
  });
}