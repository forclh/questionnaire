<!-- 公共的标题和描述 -->
<template>
  <div class="materials-header-container mb-15">
    <h2 class="font-weight-100" :style="{ fontSize: `${titleSize}px`, color: titleColor }">
      <span class="mr-10">{{ serialNum }}.</span>
      <span :class="{ 'font-bold': !titleWeight, 'font-italic': !titleItalic }">{{ title }}</span>
    </h2>
    <div
      class="desc"
      :class="{ 'font-bold': !descWeight, 'font-italic': !descItalic }"
      :style="{ fontSize: `${descSize}px`, color: descColor }"
    >
      {{ desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  serialNum: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  titleSize: {
    type: String,
    default: '22',
  },
  descSize: {
    type: String,
    default: '16',
  },
  titleWeight: {
    type: Number,
    default: 0,
  },
  descWeight: {
    type: Number,
    default: 0,
  },
  titleItalic: {
    type: Number,
    default: 0,
  },
  descItalic: {
    type: Number,
    default: 0,
  },
  titleColor: {
    type: String,
  },
  descColor: {
    type: String,
  },
});
</script>

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
