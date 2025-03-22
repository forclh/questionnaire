<!-- 单选题组件 -->
<template>
  <MaterialsHeader></MaterialsHeader>
  <div class="radio-group">
    <el-radio-group>
      <el-radio value="1">选择1</el-radio>
      <el-radio value="2">选择2</el-radio>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue';
</script>

<style scoped></style>
