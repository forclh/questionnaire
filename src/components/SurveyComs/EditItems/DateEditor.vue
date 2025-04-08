<!-- 颜色编辑组件 -->
<template>
  <ButtonGroup title="日期类型" :status="status[currentStatus].status">
    <el-button-group>
      <el-select placeholder="日期类型" style="width: 100px" @change="changeDateType">
        <el-option
          v-for="item in status"
          :key="item.value"
          :value="item.value"
          :label="item.status"
        />
      </el-select>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import { inject } from 'vue';
import { updateStatusKey } from '@/types/key.ts';
import type { ValueStatusArr } from '@/types';
const props = defineProps<{
  status: ValueStatusArr;
  configKey: string;
  currentStatus: number;
}>();

const typeArr = props.status.map((item) => item.value);

// 更新状态方法
const updateStatus = inject(updateStatusKey)!;

const changeDateType = (val: string) => {
  // 找到当前值的索引
  const payload = typeArr.indexOf(val);
  updateStatus(props.configKey, payload);
};
</script>
