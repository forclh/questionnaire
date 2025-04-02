<!-- 文本输入类型切换组件 -->
<template>
  <ButtonGroup title="文本类型" :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="changeType(0)">
        <font-awesome-icon :icon="'align-left'"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="changeType(1)">
        <font-awesome-icon :icon="'align-center'"></font-awesome-icon>
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

const updateStatus = inject(updateStatusKey)!;
// 修改文本框类型
const changeType = (type: number) => {
  updateStatus(props.configKey, type);
};
</script>
