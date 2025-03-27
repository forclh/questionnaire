<!-- 位置对齐组件 -->
<template>
  <ButtonGroup title="居中设置" :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{ select: currentStatus === 0 }" @click="changePositon(0)">
        <font-awesome-icon :icon="'align-left'"></font-awesome-icon>
      </el-button>
      <el-button :class="{ select: currentStatus === 1 }" @click="changePositon(1)">
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

const changePositon = (pos: number) =>{
  updateStatus(props.configKey, pos)
}
</script>
