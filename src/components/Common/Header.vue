<template>
  <div class="header-container flex align-items-center">
    <div class="left flex justify-content-center align-items-center">
      <el-button circle size="small" :icon="ArrowLeft" @click="goHome" />
    </div>
    <div class="center flex align-items-center space-between pl-15 pr-15">
      <!-- 左侧按钮组 -->
      <div v-if="isEditor">
        <!-- 说明此时是编辑器面板 -->
        <div v-if="!questionnaireId">
          <el-button type="danger" size="small" @click="resetQuestionnaire"> 重置问卷 </el-button>
          <el-button type="success" size="small" @click="saveQuestionnaire"> 保存问卷 </el-button>
        </div>
        <div v-else>
          <el-button type="warning" size="small" @click="updateQuestionnaire"> 更新问卷 </el-button>
        </div>
      </div>
      <!-- 预览按钮 -->
      <div v-if="questionnaireId">
        <el-button type="primary" size="small" @click="goToPreview"> 预览问卷 </el-button>
      </div>
    </div>
    <div class="right flex align-items-center justify-content-center">
      <el-avatar :size="30" :src="avatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import avatar from '@/assets/imgs/avatar.jpg';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useEditorStore } from '@/stores/useEditor';
import type { Questionnaire } from '@/types';

const props = defineProps({
  isEditor: {
    type: Boolean,
    default: true,
  },
  questionnaireId: {
    type: String,
    default: '',
  },
});

const router = useRouter();
const editorStore = useEditorStore();

const goHome = () => {
  localStorage.setItem('activeView', 'home');
  router.push('/');
};

// 重置问卷
const resetQuestionnaire = async () => {
  try {
    await ElMessageBox.confirm('确定要重置问卷嘛？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    });
    ElMessage.success('重置问卷成功');
    editorStore.resetQuestionComs();
  } catch (error) {
    ElMessage.info('取消重置');
  }
};

// 保存问卷
const saveQuestionnaire = async () => {
  try {
    // 输入标题提示框
    const { value } = await ElMessageBox.prompt('请输入问卷标题', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info',
    });
    // 构建问卷数据
    const questionnaire: Questionnaire = {
      title: value,
      createTime: Date.now(),
      updateTime: Date.now(),
      questionNumber: editorStore.questionCount,
      // indexDB可以存无方法的对象数组
      questionComs: JSON.parse(JSON.stringify(editorStore.questionComs)), // TODO：这种方式恢复时存在问题
    };

    // 保存问卷
    const id = await editorStore.saveQuestionComs(questionnaire);
    ElMessage.success('保存问卷成功');
    router.push(`/editor/${id}/questionTypeGroup`);
  } catch (error) {
    if (error === 'cancel') {
      ElMessage.info('已取消保存');
    } else {
      ElMessage.info('问卷保存失败');
    }
  }
};

// 更新问卷
const updateQuestionnaire = async () => {
  try {
    await ElMessageBox.confirm('确定要更新问卷嘛？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    });
    // 构建问卷数据
    const questionnaire: Partial<Questionnaire> = {
      updateTime: Date.now(),
      questionNumber: editorStore.questionCount,
      questionComs: JSON.parse(JSON.stringify(editorStore.questionComs)),
    };
    // 更新问卷
    editorStore.updateQuestionnaire(Number(props.questionnaireId), questionnaire);
    ElMessage.success('更新问卷成功');
  } catch (error) {
    ElMessage.info('取消更新');
  }
};

// 跳转预览页面
const goToPreview = async () => {
  try {
    await ElMessageBox.confirm('预览会自动保存问卷，是否跳转预览？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info',
    });
    // 更新问卷
    await updateQuestionnaire();
    // 跳转预览
    router.push({
      path: `/preview/${props.questionnaireId}`,
      state: {
        from: 'editor',
      },
    });
  } catch (e) {
    ElMessage.info('已取消跳转');
  }
};
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);

  .left {
    width: 60px;
    height: 100%;
  }

  .center {
    flex: 1; // 弹性盒子存在剩余空间则拉升
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }

  .right {
    width: 80px;
    height: 100%;
  }
}
</style>
