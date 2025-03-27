<!-- 颜色编辑组件 -->
<template>
  <ButtonGroup :title :status>
    <el-button-group>
      <el-color-picker v-model="color" @change="changeColor" />
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import { computed, ref } from 'vue';
import { inject } from 'vue';
import { updateStatusKey } from '@/types/key.ts';
const props = defineProps<{
  status: string;
  configKey: string;
}>();
// 标题
const title = computed(() => {
  return props.configKey === 'titleColor' ? '标题颜色' : '描述颜色';
});
// 更新状态方法
const updateStatus = inject(updateStatusKey)!;
const color = ref(props.status);
// 改变颜色
const changeColor = () => {
  updateStatus(props.configKey, color.value);
};
</script>
