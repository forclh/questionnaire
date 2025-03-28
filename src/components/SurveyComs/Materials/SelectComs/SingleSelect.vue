<!-- 单选题组件 -->
<template>
  <!-- 通过text-center类来进行对齐 -->
  <div :class="{ 'text-center': computedStatus.position }">
    <MaterialsHeader
      :serialNum="serialNum"
      :title="computedStatus.title"
      :desc="computedStatus.desc"
      :titleSize="computedStatus.titleSize"
      :descSize="computedStatus.descSize"
      :titleWeight="computedStatus.titleWeight"
      :descWeight="computedStatus.descWeight"
      :titleItalic="computedStatus.titleItalic"
      :descItalic="computedStatus.descItalic"
      :titleColor="computedStatus.titleColor"
      :descColor="computedStatus.descColor"
    />
    <div class="radio-group">
      <el-radio-group>
        <el-radio v-for="(item, index) in computedStatus.options" :key="index" :value="item">{{
          item
        }}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue';
import type { OptionsStatus } from '@/types/index.ts';
import {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from '@/utils/index.ts';

const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const computedStatus = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}));
</script>

<style scoped></style>
