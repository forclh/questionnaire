<template>
  <Layout>
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoPhone' }"
      >手机</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoWeChat' }"
      >微信</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoQQ' }"
      >QQ</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoEmail' }"
      >邮箱</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoAddress' }"
      >地址</router-link
    >
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
</script>

<style lang="scss" scoped></style>
