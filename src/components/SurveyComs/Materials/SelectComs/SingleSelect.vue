<!-- 单选题组件 -->
<template>
  <div :class="{'text-center': computedStatus.position}">
    <MaterialsHeader
    :serialNum="serialNum"
    :title="computedStatus.title"
    :desc="computedStatus.desc"
  />
  <div class="radio-group">
    <el-radio-group>
      <el-radio  v-for="(item, index) in computedStatus.options" :key="index" :value="item">{{item}}</el-radio>
    </el-radio-group>
  </div>
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue';
import type { OptionsStatus } from '@/types/index.ts';
import { getTextStatus, getStringStatus, getCurrentStatus } from '@/utils/index.ts';

const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const computedStatus = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
  position: getCurrentStatus(props.status.position),
}));
</script>

<style scoped></style>
