<template>
  <Header :isEditor="false" />
  <div>
    <h1 class="text-center font-weight-100 p0">组件市场</h1>
    <div class="materials-container flex mc">
      <!-- 导航 -->
      <nav class="category mc">
        <router-link class="category-item" :to="{ name: 'selectGroup' }">
          <el-icon>
            <CircleCheck />
          </el-icon>
          <div>选择</div>
        </router-link>
        <router-link class="category-item" :to="{ name: 'inputGroup' }">
          <el-icon>
            <EditPen />
          </el-icon>
          <div>文本输入</div>
        </router-link>
        <router-link class="category-item" :to="{ name: 'advancedGroup' }">
          <el-icon>
            <Files />
          </el-icon>
          <div>高级题型</div>
        </router-link>
        <router-link class="category-item" :to="{ name: 'noteGroup' }">
          <el-icon>
            <ChatLineSquare />
          </el-icon>
          <div>备注说明</div>
        </router-link>
        <router-link class="category-item" :to="{ name: 'personalInfoGroup' }">
          <el-icon>
            <User />
          </el-icon>
          <div>个人信息</div>
        </router-link>
        <router-link class="category-item" :to="{ name: 'contactGroup' }">
          <el-icon>
            <Message />
          </el-icon>
          <div>联系方式</div>
        </router-link>
      </nav>
      <!-- 路由出口 -->
      <div class="group-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Common/Header.vue';
// 图标
import {
  CircleCheck,
  Files,
  EditPen,
  ChatLineSquare,
  User,
  Message,
} from '@element-plus/icons-vue';
</script>

<style scoped lang="scss">
h1 {
  margin: 20px 0;
}

.materials-container {
  width: 1180px;
  height: 600px;

  .category {
    width: 70px;
    height: 100%;

    .category-item {
      width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      text-align: center;
      text-decoration: none;
      font-size: var(--font-size-base);
      color: var(--white);
      border-top-left-radius: var(--border-radius-lg);
      border-bottom-left-radius: var(--border-radius-lg);
    }
    // 四个一组设置颜色
    @for $i from 1 through 4 {
      .category-item:nth-child(4n + #{$i}) {
        @if $i == 1 {
          background-color: var(--primary-color);
        } @else if $i == 2 {
          background-color: var(--success-color);
        } @else if $i == 3 {
          background-color: var(--warning-color);
        } @else if $i == 4 {
          background-color: var(--error-color);
        }
      }
    }
  }

  .group-view {
    width: calc(1180px - 70px);
    height: 100%;
  }
}
</style>
