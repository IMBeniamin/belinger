<script lang="ts" setup>
import NavigationMenu from "@/components/navigationMenu.vue";
</script>

<template>
  <template v-if="$route.name">
    <NavigationMenu />
  </template>
  <template v-else>
    <router-view />
  </template>
</template>

<script lang="ts"></script>

<style>
@import "@/assets/base.css";
</style>
