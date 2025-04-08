<!-- 字体粗细编辑组件 -->
<template>
  <ButtonGroup title="说明类型" :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="changeType(0)">
        <!-- TODO：图标优化 -->
        <font-awesome-icon :icon="'heading'" size="lg"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="changeType(1)">
        <font-awesome-icon :icon="'paragraph'" size="sm"></font-awesome-icon>
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import { inject } from 'vue';
import { updateStatusKey } from '@/types/key.ts';
const props = defineProps<{
  currentStatus: number;
  status: string[];
  configKey: string;
}>();

// 更新状态方法
const updateStatus = inject(updateStatusKey)!;
// 改变类型
const changeType = (type: number) => {
  updateStatus(props.configKey, type, true);
};
</script>
