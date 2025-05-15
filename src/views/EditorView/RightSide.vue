<template>
  <div class="right-side-container">
    <div
      v-if="editorStore.currentQuestionIndex === -1"
      class="content flex justify-content-center align-items-center"
    >
      点击问题进行编辑
    </div>
    <div v-else>
      <EditorPanel :currentCom />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import { useEditorStore } from '@/stores/useEditor';
import EditorPanel from '@/components/SurveyComs/EditItems/EditPanel.vue';
import { isPicLink, isOptionsStatus, isTypeStatus } from '@/types';
import type { PicLink } from '@/types';
import { changeEditorIsShowStatus } from '@/utils';
import { ElMessage } from 'element-plus';
import { updateStatusKey } from '@/types/key';

const editorStore = useEditorStore();
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
  // 修改数据仓库
  switch (configKey) {
    case 'title':
    case 'desc':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "tile or desc". Expected string.');
        return;
      }
      editorStore.setTextStatus(currentCom.value.status[configKey], payload);
      break;
    case 'options':
      if (isOptionsStatus(currentCom.value.status)) {
        if (typeof payload === 'number') {
          // 删除选项
          const result = editorStore.removeOption(currentCom.value.status[configKey], payload);
          if (result) {
            ElMessage.success('删除成功');
          } else {
            ElMessage.error('至少保留两个选项');
          }
          // object类型的payload为图片组件的修改
        } else if (typeof payload === 'object' && isPicLink(payload)) {
          // 修改图片链接
          editorStore.setPicLinkByIndex(currentCom.value.status[configKey], payload);
        } else {
          // 添加选项
          editorStore.addOption(currentCom.value.status[configKey]);
        }
      }
      break;
    case 'position':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position". Expected number.');
        return;
      }
      editorStore.setPosition(currentCom.value.status[configKey], payload);
      break;
    case 'titleSize':
    case 'descSize':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize". Expected number.');
        return;
      }
      editorStore.setCurrentStatus(currentCom.value.status[configKey], payload);
      break;
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleWeight or descWeight". Expected number.');
        return;
      }
      editorStore.setWeight(currentCom.value.status[configKey], payload);
      break;
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleItalic or descItalic". Expected number.');
        return;
      }
      editorStore.setItalic(currentCom.value.status[configKey], payload);
      break;
    case 'titleColor':
    case 'descColor':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "titleColor or descColor". Expected string.');
        return;
      }
      editorStore.setColor(currentCom.value.status[configKey], payload);
      break;
    case 'type':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "type". Expected number.');
        return;
      }
      if (isTypeStatus(currentCom.value.status)) {
        if (isShowChange) {
          // 切换编辑器的显示状态
          changeEditorIsShowStatus(currentCom.value.status, payload);
        }
        editorStore.setCurrentStatus(currentCom.value.status[configKey], payload);
      }
      break;
  }
};

const getLink = (link: PicLink) => {
  updateStatus('options', link);
};
// 向子孙提供更新状态的方法
provide(updateStatusKey, updateStatus);
provide('getLink', getLink);

</script>

<style scoped lang="scss">
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: auto;
}
.content {
  height: 100%;
}
</style>
