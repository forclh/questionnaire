<template>
  <Layout>
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'singleSelect' }"
      >单选题</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'multiSelect' }"
      >多选题</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'optionSelect' }"
      >下拉选择</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'singlePicSelect' }"
      >图片单选题</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'multiPicSelect' }"
      >图片多选题</router-link
    >
  </Layout>
</template>

<script setup>
import Layout from '@/views/MaterialsView/Layout.vue';
</script>

<style lang="scss" scoped></style>
