<template>
  <div class="left-side-container flex">
    <div class="tabs">
      <!-- 题型 -->
      <router-link
        class="tab-item"
        exact-active-class="tab-show"
        :to="{ name: 'questionType' }"
      >
        <el-icon>
          <Memo />
        </el-icon>
        <span class="tab-item-title mt-5">题型</span>
      </router-link>
      <!-- 大纲 -->
      <router-link
        class="tab-item"
        exact-active-class="tab-show"
        :to="{ name: 'outline' }"
      >
        <el-icon>
          <Document />
        </el-icon>
        <span class="tab-item-title mt-5">大纲</span>
      </router-link>
    </div>
    <!-- 路由视图出口 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Outline from './Outline.vue';
import QuestionType from './QuestionType.vue';
import { Memo, Document } from '@element-plus/icons-vue';
</script>

<style scoped lang="scss">
.left-side-container {
  width: 300px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  left: 20px;
  top: 70px;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  > .tabs {
    width: 20%;
    height: 100%;
    border-right: 1px solid var(--border-color);
    > .tab-item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--font-color-light);
      text-decoration: none;
      cursor: pointer;
      > .tab-item-title {
        font-size: var(--font-size-base);
      }
    }
    > .tab-show {
      color: var(--primary-color);
    }
  }
  > .tab-pane {
    width: 80%;
    // 高度需要减去padding部分，否则会溢出
    height: calc(100% - 50px);
    padding: 25px;
    overflow-y: scroll;
  }
}
</style>
