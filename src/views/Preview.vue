<template>
  <div class="preview-container">
    <div class="center mc">
      <!-- 按钮组 -->
      <div class="button-group flex space-between align-items-center">
        <!-- 左边按钮 -->
        <div class="flex space-between no-print">
          <el-button type="danger" size="small" @click="goBack">返回</el-button>
          <el-button type="success" size="small" @click="generateOnline">生成在线问卷</el-button>
          <el-button type="warning" size="small" @click="generatePDF">生成本地PDF</el-button>
        </div>
        <!-- 题目数量 -->
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ editorStore.questionCount }}</el-text>
        </div>
      </div>
      <!-- 问卷 -->
      <div class="no-border content-group">
        <div class="content mb-10" v-for="(item, index) in editorStore.questionComs" :key="item.id">
          <component
            :is="item.type"
            :status="item.status"
            :serialNum="questionSerialNumber[index]"
          />
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="生成在线问卷" width="500">
      分享链接：<a :href="quizLink" target="_blank">{{ quizLink }}</a>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="copyLink">复制链接</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, computed, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';
import { restoreComponentsStatus } from '@/utils';
import { useEditorStore } from '@/stores/useEditor';
import { useQuestionSerialNumber } from '@/composables';
import { isUnsuitablePDFComType } from '@/types';

const route = useRoute();
const router = useRouter();
const editorStore = useEditorStore();

let dialogVisible = ref(false); // 控制对话框是否显示
let quizLink = ref(''); // 存储在线答题的链接

// 获取路由参数
const id = Number(route.params.id);

// 获取题目序号
const questionSerialNumber = computed(
  () => useQuestionSerialNumber(editorStore.questionComs).value,
);

// 根据id获取问卷
const getQuestionnaire = async () => {
  const res = await editorStore.getQuestionnaireById(id);
  if (res) {
    // 拿到数据后需要重新还原组件
    restoreComponentsStatus(res.questionComs);
    // 还原问卷仓库的状态
    editorStore.restoreQuestionnaire(res);
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

// 生成本地PDF
const generatePDF = () => {
  // 1. 检查当前的问卷是否存在不适合生成PDF的业务组件
  const isUnsuitable = editorStore.questionComs.some((item) => isUnsuitablePDFComType(item.name));
  if (isUnsuitable) {
    ElMessage.warning('当前问卷存在不适合生成PDF的业务组件');
    return;
  }
  // 2. 生成PDF
  // 直接使用浏览器接口生成pdf
  window.print();
};

// 生成在线问卷
const generateOnline = async () => {
  // 1.将问卷数据传递到服务器，服务器存储来内存中（项目简化后做法）
  const id = uuidv4();
  // 2. 将问卷内容和id传递到服务器
  await fetch('/api/saveQuiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      quizData: {
        questionComs: JSON.stringify(editorStore.questionComs),
        questionCount: editorStore.questionCount,
      },
    }),
  });
  // 3.构建链接id，匹配服务器
  quizLink.value = `${window.location.origin}/quiz/${id}`;
  // 4.显示弹出框
  dialogVisible.value = true;
};

// 复制链接
const copyLink = () => {
  dialogVisible.value = false;
  navigator.clipboard.writeText(quizLink.value);
  ElMessage.success('在线答题连接已复制');
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

// 媒体查询打印时隐藏边框和打印按钮（打印时会引用相应的样式）
@media print {
  .no-border {
    border: none;
    box-shadow: none;
  }

  .no-print {
    display: none;
  }
}
</style>
