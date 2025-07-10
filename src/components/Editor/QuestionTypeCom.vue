<template>
  <div
    @click="addQuestionCom"
    draggable="true"
    @dragstart="handleDragStart"
    @dragend="handleDragEnd"
    class="question-type-com-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10"
    :class="{ dragging: isDragging }"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap';
import { updateInitStatus } from '@/utils';
import type { MaterialComType, SchemaType } from '@/types';
import { useEditorStore } from '@/stores/useEditor';
import { eventBus } from '@/utils/eventBus';

// 获取数据仓库
const editorStore = useEditorStore();

const props = defineProps(['type', 'name']);

// 拖拽状态
const isDragging = ref(false);

// 拖拽开始事件
const handleDragStart = (event: DragEvent) => {
  isDragging.value = true;
  // 将组件类型信息存储到拖拽数据中，用于在拖拽结束时（drop）获取组件类型信息
  if (event.dataTransfer) {
    event.dataTransfer.setData(
      'application/json',
      JSON.stringify({
        type: props.type,
        name: props.name,
      }),
    );
    // 设置拖曳效果
    event.dataTransfer.effectAllowed = 'copy';
  }
};

// 拖拽结束事件
const handleDragEnd = () => {
  isDragging.value = false;
};

// 在画布中添加问题（向数据仓库增加问题组件，在画布中会根据仓库渲染问题组件）
const addQuestionCom = () => {
  const questionType = props.type as MaterialComType;
  if (!questionType) {
    console.warn('请先选择问题类型');
    return;
  }
  // 根据问题类型获取问题组件的默认状态
  const defaultStatus = defaultStatusMap[questionType]() as SchemaType;
  // 更新问题组件的初始状态（针对一些预设的信息组件）
  updateInitStatus(defaultStatus, questionType);
  // 添加状态到仓库
  editorStore.addQuestionCom(defaultStatus);
  ElMessage.success(`已添加${props.name}组件`);
  // 滚动到底部
  eventBus.emit('scrollToBottom');
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

.question-type-com-container.dragging {
  opacity: 0.5;
  transform: scale(0.95);
  transition: all 0.2s ease;
}
</style>
