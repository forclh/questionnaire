<template>
  <div @click="addQuestionCom" class="question-type-com-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10">
    {{name}}
  </div>
</template>

<script setup lang="ts">
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap';
import { updateInitStatus } from '@/utils';
import type { MaterialComType } from '@/types';
import { useEditorStore } from '@/stores/useEditor';

// 获取数据仓库
const editorStore = useEditorStore();

const props = defineProps(['type', 'name']);
// 在画布中添加问题（向数据仓库增加问题组件，在画布中会根据仓库渲染问题组件）
const addQuestionCom = () => {
  const questionType = props.type as MaterialComType;
  if (!questionType) {
    console.warn('请先选择问题类型');
    return;
  }
  // 根据问题类型获取问题组件的默认状态
  const defaultStatus = defaultStatusMap[questionType]();
  // 更新问题组件的初始状态
  updateInitStatus(defaultStatus, questionType);
  // 添加状态到仓库
  editorStore.addQuestionCom(defaultStatus);
};
</script>

<style scoped>
.question-type-com-container {
  width: 60px;
  height: 30px;
  background-color: var(--background-color);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  user-select: none;
}
.question-type-com-container:hover {
  background-color: var(--font-color-lightest);
}
</style>
