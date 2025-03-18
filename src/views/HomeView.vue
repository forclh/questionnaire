<template>
  <div class="pl-20 pr-20 pt-20 pb-20">
    <h1 class="font-weight-100 text-center">问卷系统</h1>
    <!-- 按钮组 -->
    <div class="mb-15">
      <el-button type="primary" :icon="Plus" @click="goToEditor">创建问卷</el-button>
      <el-button type="success" :icon="Compass" @click="goToMarket">组件市场</el-button>
    </div>
    <!-- 问卷列表 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column fixed prop="createDate" label="创建日期" width="150" />
      <el-table-column prop="title" label="问卷标题" />
      <el-table-column prop="surveyCount" label="题目数" width="150" align="center" />
      <el-table-column prop="updateDate" label="最近更新日期" width="150" align="center" />
      <el-table-column label="操作" width="300" align="center">
        <template>
          <el-button type="primary" size="small" link>查看问卷</el-button>
          <el-button type="primary" size="small" link>编辑</el-button>
          <el-button type="primary" size="small" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from '@element-plus/icons-vue';
import { ref } from 'vue';
// 路由
import { useRouter } from 'vue-router';
const router = useRouter();

const tableData = ref([]);

const goToEditor = () => {
  router.push('/editor');
};

const goToMarket = () => {
  router.push('/materials');
};
</script>

<style lang="scss" scoped></style>
