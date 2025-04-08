<template>
  <Layout>
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'dateSelect' }"
      >日期/时间</router-link
    >
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
</script>
