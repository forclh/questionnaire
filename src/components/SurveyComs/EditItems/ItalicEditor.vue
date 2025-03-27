<!-- 字体倾斜编辑组件 -->
<template>
  <ButtonGroup :title :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="changeItalic(0)">
        <!-- TODO：图标优化 -->
        <font-awesome-icon :icon="'italic'" size="lg"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="changeItalic(1)">
        <font-awesome-icon :icon="'italic'" size="sm"></font-awesome-icon>
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
  return props.configKey === 'titleItalic' ? '标题倾斜' : '描述倾斜';
});
// 更新状态方法
const updateStatus = inject(updateStatusKey)!;
// 改变倾斜
const changeItalic = (size: number) => {
  updateStatus(props.configKey, size);
};
</script>
