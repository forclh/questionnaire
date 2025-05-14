<template>
  <div class="question-type-group-com-container mc">
    <div class="mb-20">
      <!-- 题型组标题和图标 -->
      <div class="group-title font-weight-500 mb-15 flex align-items-center">
        <el-icon>
          <component :is="icon" />
        </el-icon>
        <span class="title ml-5">{{ title }}</span>
      </div>
      <!-- 题型组包含的题型组件列表 -->
      <div class="flex wrap space-between">
        <QuestionTypeCom
          v-for="item in questionTypeList"
          :key="item.type"
          v-bind="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionTypeCom from '@/components/Editor/QuestionTypeCom.vue';
defineProps(['title', 'icon', 'questionTypeList']);
</script>

<style scoped>
.question-type-group-com-container {
  width: 90%;
}
.title {
  font-size: var(--font-size-base);
  position: relative;
  bottom: 1px;
}
</style>