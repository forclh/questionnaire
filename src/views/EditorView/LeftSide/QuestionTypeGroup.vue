<!-- 题型面板 -->
<template>
  <div class="question-type-group-container">
    <QuestionTypeGroupCom
      v-for="group in QuestionTypeGroupConfigList"
      :key="group.title"
      v-bind="group"
    />
  </div>
</template>

<script setup lang="ts">
import QuestionTypeGroupCom from '@/components/Editor/QuestionTypeGroupCom.vue';
import { QuestionTypeGroupConfigList } from '@/config/QuestionTypeGroupConfig';
</script>

<style lang="scss" scoped>
.question-type-group-container {
  height: calc(100vh - 50px - 40px);
  overflow: hidden;
}
</style>
