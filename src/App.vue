<script lang="ts" setup>
import { RouterView } from "vue-router";

import { ref } from "vue";

import Sidebar from "primevue/sidebar";
import Button from "primevue/button";

import NavigationMenu from "@/components/navigationMenu.vue";

const visibleLeft = ref(true);
const expanded = ref(false);
const log = console.log;
</script>

<template>
  <template v-if="$route.name">
    <div class="container">
      <!--      <Sidebar-->
      <!--        id="sidebar"-->
      <!--        ref="sidebar"-->
      <!--        v-model:visible="visibleLeft"-->
      <!--        :class="{-->
      <!--          'p-sidebar-sm': !visibleLeft.value,-->
      <!--          'p-sidebar-md': visibleLeft.value,-->
      <!--        }"-->
      <!--        :dismissable="true"-->
      <!--        :modal="true"-->
      <!--      >-->
      <!--        <Button-->
      <!--          class="w-10 h-10"-->
      <!--          icon="pi pi-arrow-right"-->
      <!--          @click="-->
      <!--            log(expanded);-->
      <!--            expanded = !expanded;-->
      <!--          "-->
      <!--        />-->
      <!--      </Sidebar>-->
      <NavigationMenu />
    </div>
  </template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script lang="ts"></script>

<style>
@import "@/assets/base.css";

.p-sidebar {
  background-color: blue;
}

.p-sidebar-left.p-sidebar-sm {
  width: 3rem;
}

.p-sidebar-left.p-sidebar-md {
  width: 20rem;
}
</style>
