<!-- 描述编辑组件 -->
<template>
  <div>
    <div class="mb-10">描述内容</div>
    <el-input
      v-model="desc"
      @input="inputHandle"
      placeholder="请输入描述内容"
      :rows="5"
      type="textarea"
    ></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types';
import { updateStatusKey } from '@/types/key.ts';
import { ref, inject } from 'vue';
const props = defineProps<{
  id: string;
  status: string;
  isShow: boolean;
  editCom: VueComType;
  configKey: string;
}>();
// 描述
const desc = ref(props.status);
const updateStatus = inject(updateStatusKey)!;

const inputHandle = (newVal: string) => {
  updateStatus(props.configKey, newVal);
};
</script>
