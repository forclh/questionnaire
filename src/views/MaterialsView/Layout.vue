<template>
  <div class="layout-container flex">
    <!-- 业务组件选择 -->
    <div class="left flex wrap space-between">
      <slot></slot>
    </div>
    <!-- 显示业务组件 -->
    <div class="center">显示业务组件</div>
    <!-- 业务组件编辑面板 -->
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts"></script>

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
