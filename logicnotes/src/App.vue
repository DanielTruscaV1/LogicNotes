<script setup>
  import AppHeader from "./components/AppHeader.vue";
  import AppNavigation from "./components/AppNavigation.vue";
  import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader/>
    <AppNavigation/>
    <router-view></router-view>
    <AppFooter/>
  </div>
  
</template>

<style scoped>
  div 
  {
    display:flex;
    flex-direction:column;
  }
</style>
