<template>
  <div class="wrapper">
    <AppHeader />
    <div class="grow">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>
