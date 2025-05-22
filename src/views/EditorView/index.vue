<template>
  <!-- 顶部导航栏 -->
  <div class="header">
    <Header :isEditor="true" :questionnaireId="questionnaireId" />
  </div>
  <!-- 编辑器主体区域 -->
  <div class="container">
    <!-- 左侧区域 -->
    <LeftSide />
    <!-- 右侧区域 -->
    <RightSide />
  </div>
  <div>
    <!-- 中间区域 -->
    <Center />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from '@/components/Common/Header.vue';
import LeftSide from '@/views/EditorView/LeftSide/index.vue';
import RightSide from '@/views/EditorView/RightSide.vue';
import Center from '@/views/EditorView/Center.vue';
import { useEditorStore } from '@/stores/useEditor';
import { computed, provide } from 'vue';
import { restoreComponentsStatus } from '@/utils';
import { updateStatusKey } from '@/types/key';
import { dispatchStatus } from '@/stores/dispatch';
import type { PicLink } from '@/types';
import { ElMessage } from 'element-plus';

const route = useRoute();

// 问卷id
const questionnaireId = computed(() => (route.params.id ? String(route.params.id) : ''));

const editorStore = useEditorStore();
editorStore.resetQuestionComs();

if (questionnaireId) {
  editorStore.getQuestionnaireById(Number(questionnaireId.value)).then((res) => {
    if (res) {
      restoreComponentsStatus(res.questionComs);
      editorStore.restoreQuestionnaire(res);
    }
  });
}

// 当前选中的问题组件
const currentCom = computed(() => {
  return editorStore.questionComs[editorStore.currentQuestionIndex];
});

// 向子孙提供更新状态的方法
const updateStatus = (
  configKey: string,
  payload?: string | number | PicLink,
  isShowChange?: Boolean,
) => {
  if (!currentCom.value) {
    ElMessage.error('请先选择题目');
    return;
  }
  // 修改数据仓库
  dispatchStatus(editorStore, currentCom.value.status, configKey, payload, isShowChange);
};

const getLink = (link: PicLink) => {
  updateStatus('options', link);
};
// 向子孙提供更新状态的方法
provide(updateStatusKey, updateStatus);
provide('getLink', getLink);
</script>

<style scoped>
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.container {
  width: calc(100% - 40px);
  padding: 20px;
  /* Header的高度50px，上下padding 20px */
  height: calc(100vh - 50px - 40px);
  background: url('@/assets/imgs/editor_background.png');
  position: fixed;
  top: 50px;
}
</style>
