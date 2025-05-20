<template>
  <div class="preview-container">
    <div class="center mc">
      <!-- 按钮组 -->
      <div class="button-group flex space-between align-items-center">
        <!-- 左边按钮 -->
        <div class="flex space-between">
          <el-button type="danger" size="small" @click="goBack">返回</el-button>
          <el-button type="success" size="small">生成在线问卷</el-button>
          <el-button type="warning" size="small">生成本地PDF</el-button>
        </div>
        <!-- 题目数量 -->
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ editorStore.questionCount }}</el-text>
        </div>
      </div>
      <!-- 问卷 -->
      <div class="content-group no-border">
        <div class="content mb-10" v-for="(item, index) in editorStore.questionComs" :key="item.id">
          <component
            :is="item.type"
            :status="item.status"
            :serialNum="questionSerialNumber[index]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { queryQuestionnaireById } from '@/db/operation';
import { onMounted, ref } from 'vue';
import { restoreComponentsStatus } from '@/utils';
import { useEditorStore } from '@/stores/useEditor';
import { useQuestionSerialNumber } from '@/composables';

const route = useRoute();
const router = useRouter();
const editorStore = useEditorStore();

// 获取路由参数
const id = Number(route.params.id);

// 获取题目序号
const questionSerialNumber = ref<string[]>([]);

// 根据id获取问卷
const getQuestionnaire = async () => {
  const res = await queryQuestionnaireById(id);
  if (res) {
    // 拿到数据后需要重新还原组件
    restoreComponentsStatus(res.questionComs);
    // 还原问卷仓库的状态
    editorStore.restoreQuestionnaire(res);
    // 在数据加载完成后重新计算序号
    questionSerialNumber.value = useQuestionSerialNumber(editorStore.questionComs).value;
  }
};

// 返回
const goBack = () => {
  const path = history.state.from;
  if (path === 'home') {
    // 从首页进入预览页面
    router.back();
  } else {
    // 从编辑页面进入预览页面
    router.push(`/editor/${id}/questionTypeGroup`);
  }
};

onMounted(() => {
  getQuestionnaire();
});
</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  background-color: url('@/assets/imgs/editor_background.png');
}

.center {
  width: 800px;
}

.button-group {
  width: 100%;
  height: 60px;
  top: 0px;
  left: 0px;
  background-color: var(--white);
  z-index: 100;
}

.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  background-color: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
