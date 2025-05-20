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
import { computed } from 'vue';
import { restoreComponentsStatus } from '@/utils';

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
