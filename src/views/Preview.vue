<template>
  <div>预览页面</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { queryQuestionnaireById } from '@/db/operation';
import { onMounted } from 'vue';
import { restoreComponentsStatus } from '@/utils';
import { useEditorStore } from '@/stores/useEditor';

const route = useRoute();
const editorStore = useEditorStore();

// 获取路由参数
const id = Number(route.params.id);

// 根据id获取问卷
const getQuestionnaire = async () => {
  const res = await queryQuestionnaireById(id);
  if (res) {
    // 拿到数据后需要重新还原组件
    restoreComponentsStatus(res.questionComs);
    // 还原问卷仓库的状态
    editorStore.restoreQuestionnaire(res);
  }
};

onMounted(() => {
  getQuestionnaire();
});
</script>

<style scoped></style>
