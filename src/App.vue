<script lang="ts" setup>
import { RouterView } from "vue-router";

import { ref } from "vue";

import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

import NavigationMenu from "@/components/navigationMenu.vue";

const visibleLeft = ref(true);
</script>

<template>
  <template v-if="$route.name">
    <div class="container">
      <Sidebar
        v-model:visible="visibleLeft"
        :dismissable="true"
        :modal="true"
        class="p-sidebar-sm"
      >
        <h3>Left Sidebar</h3>
        <Button
          class="w-5 h-5 bg-white"
          icon="pi pi-arrow-right"
          @click="visibleLeft = !visibleLeft"
        />
      </Sidebar>
      <NavigationMenu />
    </div>
  </template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/main.css";

.p-sidebar {
  background-color: red;
}
</style>
