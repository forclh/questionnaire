<template>
  <div class="center-container" ref="centerContainerRef">
    <draggable v-model="editorStore.questionComs" item-key="id" @start="startDrag">
      <template #item="{ element, index }">
        <div
          class="content mb-10 relative"
          :class="{ active: editorStore.currentQuestionIndex === index }"
          @click="showEditor(index)"
          :key="element.id"
          :ref="el => componentRefs[index] = el"
        >
          <component
            :is="element.type"
            :status="element.status"
            :serialNum="questionNumberList[index]"
          />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import { nextTick, ref, type ComponentPublicInstance } from 'vue';
import { eventBus } from '@/utils/eventBus';
import draggable from 'vuedraggable';
// 组合式函数
import { useQuestionNumber, useQuestionSelect } from '@/composables';

// 获取数据仓库
const editorStore = useEditorStore();

// 添加题目时需要滑动到底部
const centerContainerRef = ref<HTMLElement | null>(null);

// 滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (centerContainerRef.value) {
      window.scrollTo({
        top: centerContainerRef.value.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
};

// 选中的组件滚动到中间
const componentRefs = ref<(Element | ComponentPublicInstance | null)[]>([]);

const scrollToCenter = (index: number) => {
  nextTick(() => {
    const element = componentRefs.value[index];
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
};
// 通过事件总线提供滚动到底部的功能
eventBus.on('scrollToBottom', scrollToBottom);
eventBus.on('scrollToCenter', scrollToCenter);
// 显示题目编辑器
const { showEditor } = useQuestionSelect();

// 拖动时清空编辑器
const startDrag = () => {
  editorStore.setCurrentQuestionIndex(-1);
};

// 获取题目序号列表
const questionNumberList = useQuestionNumber(editorStore.questionComs);
</script>

<style scoped lang="scss">
.center-container {
  width: 50%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin: 70px auto;
  padding: 20px;
  background: var(--white);
  position: relative;
  .content {
    cursor: pointer;
    padding: 10px;
    background-color: var(--white);
    border-radius: var(--border-radius-sm);
    &:hover {
      transform: scale(1.01);
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}
.active {
  transform: scale(1.01);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.delete-btn {
  right: -5px;
  top: -10px;
}
</style>
