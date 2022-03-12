<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import MainHeader from "./components/main-header.vue";
import MainFooter from "./components/main-footer.vue";
</script>

<template>
  <MainHeader></MainHeader>
  <router-view></router-view>
  <MainFooter></MainFooter>
</template>

<style>
#app {
  overflow: hidden;
}
</style>
