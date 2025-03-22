<!-- 公共的标题和描述 -->
<template>
  <div class="materials-header-container mb-15">
    <h2 class="font-weight-100">这是一个标题</h2>
    <div class="desc">这是一个描述</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.materials-header-container {
  > h2 {
    font-size: 20px;
    > span {
      margin: 0 5px;
    }
  }

  .desc {
    font-size: var(--font-size-base);
    color: var(--font-color-light);
    text-indent: 5px;
  }
}
</style>
