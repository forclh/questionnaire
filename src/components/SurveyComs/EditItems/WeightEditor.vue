<!-- 字体粗细编辑组件 -->
<template>
  <ButtonGroup :title :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="changeWeight(0)">
        <!-- TODO：图标优化 -->
        <font-awesome-icon :icon="'bold'" size="lg"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="changeWeight(1)">
        <font-awesome-icon :icon="'bold'" size="sm"></font-awesome-icon>
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import { computed } from 'vue';
import { inject } from 'vue';
import { updateStatusKey } from '@/types/key.ts';
const props = defineProps<{
  currentStatus: number;
  status: string[];
  configKey: string;
}>();
// 标题
const title = computed(() => {
  return props.configKey === 'titleWeight' ? '标题粗细' : '描述粗细';
});
// 更新状态方法
const updateStatus = inject(updateStatusKey)!;
// 改变尺寸
const changeWeight = (size: number) => {
  updateStatus(props.configKey, size);
};
</script>
