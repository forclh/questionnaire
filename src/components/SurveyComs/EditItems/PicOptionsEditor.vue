<!-- 图片选项编辑组件 -->
<template>
  <div>
    <div class="flex align-items-center">
      <div class="mr-10">题目选项</div>
      <!-- 添加选项 -->
      <el-button :icon="Plus" size="small" circle @click="addOption"></el-button>
    </div>
    <div v-for="(item, index) in picOptionsArr" :key="index">
      <!-- 选项 -->
      <div class="title flex align-items-center mt-10 mb-10">
        <span>选项{{ index + 1 }}</span>
        <!-- 删除选项 -->
        <el-button
          type="danger"
          :icon="Minus"
          size="small"
          circle
          class="delete"
          @click="removeOption(index)"
        ></el-button>
      </div>
      <!-- 是否上传图片 -->
      <div class="mb-5">
        <div v-if="item.value" class="flex">
          <span class="title mr-5">已上传图片</span>
          <el-link type="primary" @click="deletePic(index)">删除图片</el-link>
        </div>
        <span v-else class="title">未上传图片</span>
      </div>
      <!-- 修改图片标题 -->
      <el-input class="mb-5" placeholder="图片标题" v-model="item.picTitle"></el-input>
      <!-- 修改图片描述 -->
      <el-input type="textarea" :rows="3" placeholder="图片描述" v-model="item.picDesc"></el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { Plus, Minus } from '@element-plus/icons-vue';
import type { PicTitleDescStatusArr } from '@/types';
import { updateStatusKey } from '@/types/key.ts';
import { ElMessageBox, ElMessage } from 'element-plus';
const props = defineProps<{
  currentStatus: number;
  status: PicTitleDescStatusArr;
  configKey: string;
}>();

const updateStatus = inject(updateStatusKey)!;

const picOptionsArr = ref(props.status);
// 添加选项
const addOption = () => {
  if (updateStatus) {
    updateStatus(props.configKey);
  }
};
// 删除选项
const removeOption = (index: number) => {
  if (updateStatus) {
    updateStatus(props.configKey, index);
  }
};
// 删除图片
const deletePic = (index: number) => {
  ElMessageBox.confirm('确定删除图片吗?', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() =>{
    // 确认删除图片
    if (updateStatus) {
      updateStatus(props.configKey, {index, link: ''}); // 覆盖图片链接
    }
  }).catch(() => {
    // 取消删除图片
    ElMessage.info('已取消删除');
  });
};
</script>

<style scoped lang="scss">
.title {
  color: var(--font-color-light);
  font-size: var(--font-size-base);
}

.delete {
  transform: scale(0.8);
}
</style>
