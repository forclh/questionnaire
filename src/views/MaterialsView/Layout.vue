<template>
  <div class="layout-container flex">
    <!-- 业务组件选择 -->
    <div class="left flex wrap space-between">
      <slot></slot>
    </div>
    <!-- 显示业务组件 -->
    <div class="center">
      <router-view v-slot="{ Component }">
        <!-- 传递状态和序号 -->
        <component :is="Component" :status="currentComStatus" :serialNum="1"></component>
      </router-view>
    </div>
    <!-- 业务组件编辑面板 -->
    <div class="right">
      <EditPanel :currentCom />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPanel from '@/components/SurveyComs/EditItems/EditPanel.vue';
import { useMaterialStore } from '@/stores/useMaterial.ts';
import { computed, provide } from 'vue';
import { updateStatusKey } from '@/types/key.ts';
import { ElMessage } from 'element-plus';
import { isPicLink } from '@/types';
// 数据仓库
const store = useMaterialStore();
// 获取当前选中组件的状态数据
const currentComStatus = computed(() => {
  // 使用类型断言确保访问status属性
  return store.coms[store.currentMaterialCom].status;
});
// 获取当前选中的组件
const currentCom = computed(() => {
  return store.coms[store.currentMaterialCom];
});
// 向子孙提供更新状态的方法
const updateStatus = (configKey: string, payload?: string | number | object) => {
  // 修改数据仓库
  switch (configKey) {
    case 'title':
    case 'desc':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "tile or desc". Expected string.');
        return;
      }
      store.setTestStatus(currentComStatus.value[configKey], payload);
      break;
    case 'options':
      if (typeof payload === 'number') {
        // 删除选项
        const result = store.removeOption(currentComStatus.value[configKey], payload);
        if (result) {
          ElMessage.success('删除成功');
        } else {
          ElMessage.error('至少保留两个选项');
        }
        // object类型的payload为图片组件的修改
      } else if (typeof payload === 'object' && isPicLink(payload)) {
        // 修改图片链接
        store.setPicLinkByIndex(currentComStatus.value[configKey], payload);
      } else {
        // 添加选项
        store.addOption(currentComStatus.value[configKey]);
      }
      break;
    case 'position':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "position". Expected number.');
        return;
      }
      store.setPosition(currentComStatus.value[configKey], payload);
      break;
    case 'titleSize':
    case 'descSize':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleSize or descSize". Expected number.');
        return;
      }
      store.setSize(currentComStatus.value[configKey], payload);
      break;
    case 'titleWeight':
    case 'descWeight':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleWeight or descWeight". Expected number.');
        return;
      }
      store.setWeight(currentComStatus.value[configKey], payload);
      break;
    case 'titleItalic':
    case 'descItalic':
      if (typeof payload !== 'number') {
        console.error('Invalid payload type for "titleItalic or descItalic". Expected number.');
        return;
      }
      store.setItalic(currentComStatus.value[configKey], payload);
      break;
    case 'titleColor':
    case 'descColor':
      if (typeof payload !== 'string') {
        console.error('Invalid payload type for "titleColor or descColor". Expected string.');
        return;
      }
      store.setColor(currentComStatus.value[configKey], payload);
      break;
  }
};
// 向子孙提供更新状态的方法
provide(updateStatusKey, updateStatus);
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  // Header组件高度50px，h1高度50px，上下margin 20px，最后20px避免贴底
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);

  .left {
    width: 180px;
    text-align: center;
    align-items: flex-start;
    padding: 20px;
  }

  .center {
    width: 550px;
    // 多减去的60px是上下文的padding，最后减去20px防止贴底
    height: calc(100vh - 100px - 60px - 40px - 20px);
    overflow-y: scroll;
    padding: 30px;
    border-left: 1px solid var(--border-color);
  }

  .right {
    width: 350px;
    height: calc(100vh - 100px - 40px - 20px);
    overflow-y: scroll;
    border-left: 1px solid var(--border-color);
  }
}
</style>
