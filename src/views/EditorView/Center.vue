<template>
  <div class="center-container" ref="centerContainerRef">
    <div
      v-for="(item, index) in editorStore.questionComs"
      :key="item.id"
      class="content mb-10 relative"
      :class="{ active: editorStore.currentQuestionIndex === index }"
    >
      <component :is="item.type" :status="item.status" :serialNum="1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import { nextTick, ref } from 'vue';
import { eventBus } from '@/utils/eventBus';

// 获取数据仓库
const editorStore = useEditorStore();

// 添加题目时需要滑动到底部
const centerContainerRef = ref<HTMLElement | null>(null);
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

// 通过事件总线提供滚动到底部的功能
eventBus.on('scrollToBottom', scrollToBottom);
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
