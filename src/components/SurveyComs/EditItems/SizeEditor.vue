<!-- 尺寸编辑组件 -->
<template>
  <ButtonGroup :title :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="changeSize(0)">
        <font-awesome-icon :icon="'font'" size="lg"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="changeSize(1)">
        <font-awesome-icon :icon="'font'" size="sm"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 2 }" @click="changeSize(2)">
        <font-awesome-icon :icon="'font'" size="xs"></font-awesome-icon>
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
  return props.configKey === 'titleSize' ? '标题尺寸' : '描述尺寸';
});
// 更新状态方法
const updateStatus = inject(updateStatusKey)!;
// 改变尺寸
const changeSize = (size: number) => {
  updateStatus(props.configKey, size);
};
</script>
