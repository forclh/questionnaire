<template>
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
    <el-date-picker
      v-model="dateValue"
      :type="computedStatus.type?.value"
      placeholder="请选择日期"
      @change="emitAnswer(dateValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue';
import type { TypeStatus } from '@/types/index.ts';
import {
  getTextStatus,
  getValueStatusByCurrentStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from '@/utils/index.ts';
import { useAnswer } from '@/composables';

const emits = defineEmits(['updateAnswer']);
const { emitAnswer } = useAnswer(emits);

const props = defineProps<{
  serialNum: string;
  status: TypeStatus;
}>();

const computedStatus = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  type: getValueStatusByCurrentStatus(props.status.type),
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

const dateValue = ref(new Date());
</script>
