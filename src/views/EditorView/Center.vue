<template>
  <div class="center-container" ref="centerContainerRef">
    <div v-for="item in editorStore.questionComs" :key="item.id">
      <component :is="item.type" :status="item.status" :serialNum="1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
// 获取数据仓库
const editorStore = useEditorStore();

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
