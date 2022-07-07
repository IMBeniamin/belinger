<script lang="ts" setup>
import { RouterView } from "vue-router";
import NavigationMenu from "@/components/navigationMenu.vue";
</script>

<template>
  <el-container class="application">
    <template v-if="$route.name">
      <el-aside class="navmenu" width="auto">
        <NavigationMenu />
      </el-aside>
    </template>
    <el-main :style="{ padding: 0 }">
      <RouterView />
    </el-main>
  </el-container>
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100%;
}

.application {
  height: 100%;
}

.navmenu {
  height: 100%;
}
</style>
