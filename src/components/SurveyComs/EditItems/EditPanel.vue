<!-- 右侧整个编辑面板 -->
<template>
  <div class="edit-panel-container">
    <!-- 对象遍历，key为键 -->
    <div v-for="(item, key) in currentCom.status" :key="item.id" class="mb-20">
      <!-- configKey的作用： -->
      <component :is="item.editCom" v-if="item.isShow" :configKey="key" v-bind="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SchemaType } from '@/types/index.ts';

defineProps<{
  currentCom: SchemaType,
}>();
</script>

<style scoped lang="scss">
.edit-panel-container {
  padding: 30px;
  background-color: var(--bg-color);
}
</style>
