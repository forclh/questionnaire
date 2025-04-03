<template>
  <Layout>
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'textNote' }"
      >备注说明</router-link
    >
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
</script>

<style lang="scss" scoped></style>
