<script setup lang="ts">
import { ref } from "vue";

import axios from "axios";
import Menu from "primevue/menu";
import Button from "primevue/button";

const items = ref([
  // {
  //   label: "Navigate",
  //   items: [
  //     {
  //       label: "Vue Website",
  //       icon: "pi pi-external-link",
  //       url: "https://vuejs.org/",
  //     },
  //     {
  //       label: "Router",
  //       icon: "pi pi-upload",
  //       command: () => {
  //         window.location.hash = "/fileupload";
  //       },
  //     },
  //   ],
  // },
]);
</script>

<template>
  <div class="flex items-center space-x-4 mb-5">
    <img class="w-20 h-20 rounded-full" src="/avatars/rooster.svg" alt="" />
    <div class="font-medium dark:text-white">
      <div class="text-xl">Samuel D. Catalan</div>
      <div class="text-lg text-gray-500 dark:text-gray-400">
        SamuelDCatalan@armyspy.com
      </div>
    </div>
  </div>
  <template v-if="items.length > 0">
    <Menu :model="items" />
  </template>
  <div class="flex justify-between profile-controls">
    <Button icon="pi pi-cog" class="p-button-rounded p-button-text" />
    <Button icon="pi pi-sign-out" class="p-button-rounded p-button-text" />
  </div>
</template>

<style>
.profile-controls > button > .p-button-icon {
  font-size: 1.5em !important;
}
</style>
