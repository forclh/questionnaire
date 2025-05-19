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
      <el-table-column prop="createTime" label="创建日期" width="200" :formatter="formatDate" />
      <el-table-column prop="title" label="问卷标题" />
      <el-table-column prop="questionNumber" label="题目数" width="150" align="center" />
      <el-table-column
        prop="updateTime"
        label="最近更新日期"
        width="200"
        align="center"
        :formatter="formatDate"
      />
      <el-table-column label="操作" width="300" align="center">
        <template #default="scope">
          <el-button type="primary" size="small" link @click="goToPreview(scope.row.id)"
            >查看问卷</el-button
          >
          <el-button type="primary" size="small" link>编辑</el-button>
          <el-button type="primary" size="small" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';
// 路由
import { useRouter } from 'vue-router';
import { queryAllQuestionnaire } from '@/db/operation';
import { ElMessage } from 'element-plus';
import type { Questionnaire } from '@/types';
import { formatDate } from '@/utils';

const router = useRouter();
const tableData = ref<Questionnaire[]>([]);

const goToEditor = () => {
  localStorage.setItem('activeView', 'editor');
  router.push('/editor');
};

const goToMarket = () => {
  localStorage.setItem('activeView', 'materials');
  router.push('/materials');
};

// 获取问卷列表
const getQuestionnaireList = async () => {
  try {
    const questionnaireList = await queryAllQuestionnaire();
    tableData.value = questionnaireList;
  } catch (error) {
    ElMessage.info('获取问卷列表失败');
  }
};

onMounted(() => {
  getQuestionnaireList();
});

// 跳转到预览页面
const goToPreview = (id: number) => {
  router.push({
    path: `/preview/${id}`,
    state: {
      from: 'home',
    },
  });
};
</script>

<style lang="scss" scoped></style>
