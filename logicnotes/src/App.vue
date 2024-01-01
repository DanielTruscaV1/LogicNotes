<script setup>
  import AppHeader from "./components/AppHeader.vue";
  import AppNavigation from "./components/AppNavigation.vue";
  import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <AppHeader/>
  <AppNavigation/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style scoped>

</style>
