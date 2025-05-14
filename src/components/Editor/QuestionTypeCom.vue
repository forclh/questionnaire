<template>
  <div class="question-type-com-container pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10">
    {{name}}
  </div>
</template>

<script setup lang="ts">
defineProps(['type', 'name']);
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