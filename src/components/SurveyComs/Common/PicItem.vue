<template>
  <div>
    <div class="pic-item-container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          action="/api/upload"
          name="image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <div v-else class="avatar-uploader-icon">
            <el-icon :size="30"><Plus /></el-icon>
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
import { ref, inject, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps } from 'element-plus';
import type { GetLink, PicLink } from '@/types';
const props = defineProps({
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
  index: {
    type: Number,
    default: 0,
  },
});

const imageUrl = ref('');

watch(
  () => props.value,
  async (newValue) => {
    if (newValue) {
      // value不为空说明有图片的服务器地址，发送服务器请求获取图片
      // 方式一：如果服务器返回相对路径，可以通过fetch请求获取图片或者拼接地址
      // blob的好处在可以对图片进行额外操作，但是需要额外的网络请求和数据处理，
      // 且需要手动管理 URL.createObjectURL 创建的 URL（最好在组件销毁时调用 URL.revokeObjectURL 释放）
      // const response = await fetch(newValue);
      // console.log(response);
      // const blob = await response.blob();
      // // 使用blob来创建File对象
      // const file = new File([blob], 'image.jpg', { type: blob.type });
      // imageUrl.value = URL.createObjectURL(file);
      // 方式二：如果服务器返回绝对路径，直接赋值，标签的跨域资源不受同源策略的限制
      imageUrl.value = newValue;
    } else {
      // value为空说明没有图片的服务器地址
      imageUrl.value = '';
    }
  },
  {
    immediate: true,
  },
);

const getLink = inject('getLink', (link: PicLink) => {
  console.warn('getLink not provided to PicItem component');
}) as GetLink;
// 上传成功
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  getLink({
    index: props.index,
    link: response.imageUrl as string,
  });
};
// 上传前检查
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!');
    return false; // 返回false阻止上传
  }
  return true;
};
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

.avatar-uploader-icon {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
