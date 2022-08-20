<script lang="ts" setup>
import { RouterView } from "vue-router";
import { ref } from "vue";

import NavigationMenu from "@/components/navigationMenu.vue";
</script>

<template>
  <template v-if="$route.name">
    <NavigationMenu />
  </template>
  <RouterView />
</template>

<script lang="ts"></script>

<style>
@import "@/assets/base.css";
</style>
