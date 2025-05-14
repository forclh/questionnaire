<template>
  <div class="header-container flex align-items-center">
    <div class="left flex justify-content-center align-items-center">
      <el-button circle size="small" :icon="ArrowLeft" @click="goHome" />
    </div>
    <div class="center"></div>
    <div class="right flex align-items-center justify-content-center">
      <el-avatar :size="30" :src="avatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import avatar from '@/assets/imgs/avatar.jpg';

const router = useRouter();

const goHome = () => {
  localStorage.setItem('activeView', 'home');
  router.push('/');
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
