<!-- 下拉选择组件 -->
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
    <div>
      <el-select
        v-model="selectValue"
        placeholder="请选择"
        style="width: 240px"
        size="large"
        @click.stop
        @change="emitAnswer(selectValue)"
      >
        <el-option
          v-for="(item, index) in computedStatus.options"
          :key="index"
          :value="item"
          :label="item"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue';
import type { OptionsStatus } from '@/types/index.ts';
import {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from '@/utils/index.ts';
import { useAnswer } from '@/composables';

const emits = defineEmits(['updateAnswer']);
const { emitAnswer } = useAnswer(emits);

const props = defineProps<{
  serialNum: string;
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

const selectValue = ref('');
</script>
