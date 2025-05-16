<!-- 大纲面板 -->
<template>
  <!-- 有题目 -->
  <div v-if="editorStore.questionCount > 0">
    <draggable v-model="editorStore.questionComs" item-key="id" @start="startDrag">
      <template #item="{ element, index }" >
        <div class="mb-10" v-show="isQuestionType(element.name)">
          <div class="item" @click="showEditor(index)">
            {{ questionNumberList[index] }}.{{
              element.status.title.status.length > 10
                ? element.status.title.status.slice(0, 10) + '...'
                : element.status.title.status
            }}
          </div>
        </div>
      </template>
    </draggable>
  </div>
  <!-- 没有题目 -->
  <div v-else class="tip flex justify-content-center align-items-center">请添加题目</div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import draggable from 'vuedraggable';
import { useQuestionNumber, useQuestionSelect } from '@/composables';
import { isQuestionType } from '@/types';

const editorStore = useEditorStore();

// 获取题目序号列表
const questionNumberList = useQuestionNumber(editorStore.questionComs);

// 拖动时清空编辑器
const startDrag = () => {
  editorStore.setCurrentQuestionIndex(-1);
};

// 显示题目编辑器
const { showEditor } = useQuestionSelect();
</script>

<style scoped lang="scss">
.item {
  color: var(--font-color-light);
  font-size: var(--font-size-base);
  padding: 10px;
  cursor: pointer;
}

.tip {
  height: calc(100% - 50px);
}

.active {
  transform: scale(1.04);
  transition: 0.5s;
  background-color: var(--border-color);
  border-radius: var(--border-radius-lg);
}
</style>
