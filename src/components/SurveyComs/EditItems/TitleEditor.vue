<!-- 标题编辑组件 -->
<template>
  <!-- TODO -->
  <div>
    <div class="mb-10">标题内容</div>
    <el-input v-model="text" @input="inputHandle"></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types';
import { ref, inject } from 'vue';
const props = defineProps<{
  id: string;
  status: string;
  isShow: boolean;
  editCom: VueComType;
  configKey: string;
}>();

const text = ref(props.status);
// 获取祖先组件传过来的方法
const updateStatus = inject('updateStatus');

const inputHandle = (newVal: string) => {
  updateStatus(props.configKey, newVal)
};

</script>

<style scoped></style>
