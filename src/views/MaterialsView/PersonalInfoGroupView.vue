<template>
  <Layout>
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoName' }"
      >姓名</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoIdCard' }"
      >身份证</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoUniversity' }"
      >大学</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoMajor' }"
      >专业</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoIndustry' }"
      >行业</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoCompany' }"
      >公司</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoPosition' }"
      >职位</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoGender' }"
      >性别</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoEducation' }"
      >学历</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoOccupation' }"
      >职业</router-link
    >
    <router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      :to="{ name: 'personalInfoAge' }"
      >年龄</router-link
    >
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
</script>
