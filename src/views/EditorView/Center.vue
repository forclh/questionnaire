<template>
  <div
    class="center-container"
    ref="centerContainerRef"
    @drop="handleDrop"
    @dragover="handleDragOver"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    :class="{ 'drag-over': isDragOver }"
  >
    <draggable v-model="editorStore.questionComs" item-key="id" @start="startDrag">
      <template #item="{ element, index }">
        <div
          class="content mb-10 relative"
          :class="{ active: editorStore.currentQuestionIndex === index }"
          @click="showEditor(index)"
          :key="element.id"
          :ref="(el) => (componentRefs[index] = el)"
        >
          <component
            :is="element.type"
            :status="element.status"
            :serialNum="questionSerialNumber[index]"
          />
          <!-- 删除按钮 -->
          <div class="delete-btn absolute" v-show="editorStore.currentQuestionIndex === index">
            <el-button
              type="danger"
              size="small"
              class="ml-10"
              :icon="Close"
              circle
              @click.stop="removeQuestion(index)"
            ></el-button>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import { nextTick, ref, type ComponentPublicInstance, computed } from 'vue';
import { eventBus } from '@/utils/eventBus';
import draggable from 'vuedraggable';
import { Close } from '@element-plus/icons-vue';
import { ElMessageBox, ElMessage } from 'element-plus';
// 组合式函数
import { useQuestionSerialNumber, useQuestionSelect } from '@/composables';
import { defaultStatusMap } from '@/config/defaultStatus/defaultStatusMap';
import { updateInitStatus } from '@/utils';
import type { MaterialComType, SchemaType } from '@/types';

// 获取数据仓库
const editorStore = useEditorStore();

// 拖拽状态
const isDragOver = ref(false);

// 添加题目时需要滑动到底部
const centerContainerRef = ref<HTMLElement | null>(null);

// 滚动到底部
const scrollToBottom = () => {
  nextTick(() => {
    if (centerContainerRef.value) {
      window.scrollTo({
        top: centerContainerRef.value.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
};

// 选中的组件滚动到中间
const componentRefs = ref<(Element | ComponentPublicInstance | null)[]>([]);

const scrollToCenter = (index: number) => {
  nextTick(() => {
    const element = componentRefs.value[index];
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
};
// 通过事件总线提供滚动到底部的功能
eventBus.on('scrollToBottom', scrollToBottom);
eventBus.on('scrollToCenter', scrollToCenter);
// 显示题目编辑器
const { showEditor } = useQuestionSelect();

// 拖动时清空编辑器
const startDrag = () => {
  editorStore.setCurrentQuestionIndex(-1);
};

// 处理拖拽进入
const handleDragEnter = (event: DragEvent) => {
  console.log('dragenter');
  event.preventDefault();
  isDragOver.value = true;
};

// 处理拖拽悬停
const handleDragOver = (event: DragEvent) => {
  console.log('dragover');
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'copy';
  }
};

// 处理拖拽离开
const handleDragLeave = (event: DragEvent) => {
  console.log('dragleave');
  // 只有当离开整个容器时才设置为false
  if (!centerContainerRef.value?.contains(event.relatedTarget as Node)) {
    isDragOver.value = false;
  }
};

// 处理拖拽放置
const handleDrop = (event: DragEvent) => {
  console.log('drop');
  event.preventDefault();
  isDragOver.value = false;

  if (event.dataTransfer) {
    try {
      const data = JSON.parse(event.dataTransfer.getData('application/json'));
      const questionType = data.type as MaterialComType;

      if (!questionType) {
        console.warn('无效的组件类型');
        return;
      }

      // 根据问题类型获取问题组件的默认状态
      const defaultStatus = defaultStatusMap[questionType]() as SchemaType;
      // 更新问题组件的初始状态（针对一些预设的信息组件）
      updateInitStatus(defaultStatus, questionType);
      // 添加状态到仓库
      editorStore.addQuestionCom(defaultStatus);
      // 滚动到底部
      eventBus.emit('scrollToBottom');

      ElMessage.success(`已添加${data.name}组件`);
    } catch (error) {
      console.error('解析拖拽数据失败:', error);
      ElMessage.error('添加组件失败');
    }
  }
};

// 获取题目序号
const questionSerialNumber = computed(
  () => useQuestionSerialNumber(editorStore.questionComs).value,
);

// 删除题目
const removeQuestion = (index: number) => {
  // 询问是否删除
  ElMessageBox.confirm('确定删除该题目吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      // 点击确定
      editorStore.removeQuestion(index);
      editorStore.setCurrentQuestionIndex(-1);
      ElMessage.success('删除成功');
    })
    .catch(() => {
      // 点击取消
      ElMessage.info('取消删除');
    });
};
</script>

<style scoped lang="scss">
.center-container {
  width: 50%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin: 70px auto;
  padding: 20px;
  background: var(--white);
  position: relative;
  .content {
    cursor: pointer;
    padding: 10px;
    background-color: var(--white);
    border-radius: var(--border-radius-sm);
    &:hover {
      transform: scale(1.01);
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}
.active {
  transform: scale(1.01);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.delete-btn {
  right: -5px;
  top: -10px;
}

.center-container.drag-over {
  border: 2px dashed #409eff;
  background-color: rgba(64, 158, 255, 0.05);
  transition: all 0.3s ease;
}

.center-container.drag-over::before {
  content: '拖拽组件到此处添加';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #409eff;
  font-size: 16px;
  font-weight: 500;
  pointer-events: none;
  z-index: 10;
}
</style>
