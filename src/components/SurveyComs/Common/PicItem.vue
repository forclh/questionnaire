<template>
  <div>
    <div class="pic-item-container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else>
            <el-icon><Plus /></el-icon>
          </div>
        </el-upload>
      </div>
      <!-- 图片标题和描述 -->
      <div class="bottom flex justify-content-center align-items-center flex-direction-column">
        <div>{{ picTitle }}</div>
        <div class="desc mt-5 mb-5">{{ picDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';

defineProps({
  picTitle: {
    type: String,
    default: '',
  },
  picDesc: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
});

const imageUrl = ref('');
// 上传成功
const handleAvatarSuccess = () => {
  console.log('handleAvatarSuccess');
};
// 上传前检查
const beforeAvatarUpload = () => {
  console.log('beforeAvatarUpload');
}
</script>

<style scoped lang="scss">
.pic-item-container {
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);

  > .top {
    width: 100%;
    height: 200px;
    background-color: var(--font-color-lightest);
  }

  > .bottom {
    height: 100px;
    font-size: var(--font-size-lg);

    > desc {
      font-size: var(--font-size-base);
      color: var(--font-color-light);
    }
  }
}

.avatar {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
