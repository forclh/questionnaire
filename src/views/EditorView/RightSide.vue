<template>
  <div class="right-side-container">
    <div
      v-if="editorStore.currentQuestionIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击问题进行编辑
    </div>
    <div v-else>
      <EditorPanel :currentCom />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import { useEditorStore } from '@/stores/useEditor';
import EditorPanel from '@/components/SurveyComs/EditItems/EditPanel.vue';
import type { PicLink, EditorStore } from '@/types';

const editorStore = useEditorStore() as unknown as EditorStore;
// 当前选中的问题组件
const currentCom = computed(() => {
  return editorStore.questionComs[editorStore.currentQuestionIndex];
});
</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: auto;
}
.content {
  height: 100%;
}
</style>
