<!-- 选项编辑组件 -->
<template>
  <div>
    <!-- 文本 -->
    <div class="flex align-items-center mb-5">
      <div class="mr-10">选项</div>
      <el-button size="small" :icon="Plus" circle @click="addOption"></el-button>
    </div>
    <!-- 选项 -->
    <div v-for="(_, index) in status" :key="index" class="flex align-items-center">
      <el-input v-model="optionsArr[index]" placeholder="选项" class="mt-5 mb-5 mr-10"></el-input>
      <el-button
        type="danger"
        size="small"
        :icon="Minus"
        circle
        @click="removeOption(index)"
      ></el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue';
import type { VueComType } from '@/types';
import { ref, inject } from 'vue';
import { updateStatusKey } from '@/types/key.ts';
const props = defineProps<{
  id: string;
  status: string[];
  isShow: boolean;
  editCom: VueComType;
  configKey: string;
}>();

// 数组类型传递的是地址，因此这里修改数组中的元素等同于仓库中修改
const optionsArr = ref(props.status);

const updateStatus = inject(updateStatusKey)!;
// 添加选项
const addOption = () => {
  updateStatus(props.configKey);
};
// 删除选项
const removeOption = (index: number) => {
  updateStatus(props.configKey, index);
};
</script>

<style scoped></style>
