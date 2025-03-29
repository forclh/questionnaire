<!-- 图片单选组件 -->
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
    <div>
      <el-radio-group v-model="radioValue" class="radio-group flex wrap">
        <el-radio
          v-for="(item, index) in computedStatus.options"
          :key="index"
          :value="item.value"
          class="picOption flex mb-15"
        >
          <PicItem v-bind="{...item, index}"/>
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue';
import PicItem from '@/components/SurveyComs/Common/PicItem.vue';
import type { OptionsStatus } from '@/types/index.ts';
import {
  getTextStatus,
  getCurrentStatus,
  getPicTitleDescStatusArr,
  getStringStatusByCurrentStatus,
} from '@/utils/index.ts';

const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const computedStatus = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getPicTitleDescStatusArr(props.status.options),
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

const radioValue = ref('');
</script>

<style scoped lang="scss">
.picOption {
  height: auto;
  flex-direction: column-reverse;
  margin-right: 0;  // 覆盖el-radio的默认样式
}

.radio-group {
  width: 100%;
  justify-content: space-evenly;
}
</style>
