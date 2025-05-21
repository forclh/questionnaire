<template>
  <div v-if="quizData.questionCount">
    <div class="quiz-container mc">
      <div class="mt-30 mb-20">题目数量：{{ quizData.questionCount }}</div>
      <div class="content mb-10" v-for="(item, index) in quizData.questionComs" :key="item.id">
        <component
          :is="item.type"
          :status="item.status"
          :serialNum="questionSerialNumber[index]"
          @updateAnswer="updateAnswer(index, $event)"
        />
      </div>
      <div class="mt-20 mb-20 text-center">
        <el-button type="primary" @click="submitAnswers">提交答案</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { useQuestionSerialNumber } from '@/composables';
import { restoreComponentsStatus } from '@/utils';
import type { QuizData } from '@/types';

const route = useRoute();
const quizData = ref<QuizData>({
  questionComs: [],
  questionCount: 0,
});
// 序号
const questionSerialNumber = computed(
  () => useQuestionSerialNumber(quizData.value.questionComs).value,
);

// 构建答案数据
const answers = ref<{ [key: number]: string | number }>({}); // 存储发送到服务器的答案

const updateAnswer = (index: number, answer: string | number) => {
  const serialNum = questionSerialNumber.value[index];
  if (serialNum !== '') {
    // 说明是题目组件
    answers.value[index] = answer;
  }
};

// 提交答案
const submitAnswers = async () => {
  try {
    const quizId = route.params.id;
    await fetch('/api/submitAnswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizId,
        answers: answers.value,
      }),
    });
    ElMessage.success('提交成功');
  } catch (e) {
    ElMessage.error('提交失败');
  }
};

onMounted(async () => {
  const quizId = route.params.id;
  // 从服务器获取问卷内容
  const response = await fetch(`/api/getQuiz/${quizId}`);
  const data = await response.json();
  data.questionComs = JSON.parse(data.questionComs); // 转换成对象
  restoreComponentsStatus(data.questionComs); // 恢复组件
  quizData.value = data;
});
</script>

<style scoped lang="scss">
.quiz-container {
  width: 800px;
}
</style>
