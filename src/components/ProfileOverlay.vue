<script lang="ts" setup>
import { ref } from "vue";

import axios from "axios";

import Menu from "primevue/menu";
import Button from "primevue/button";

import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();
const _logout: any = () => {
  logout({ returnTo: "https://imben.it" });
};
const items = ref([]);
</script>

<template>
  <div class="flex items-center space-x-4 mb-5">
    <img alt="" class="w-20 h-20 rounded-full" src="/avatars/rooster.svg" />
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
    <Button class="p-button-rounded p-button-text" icon="pi pi-cog" />
    <Button
      class="p-button-rounded p-button-text"
      icon="pi pi-sign-out"
      @click="_logout"
    />
  </div>
</template>

<style>
.profile-controls > button > .p-button-icon {
  font-size: 1.5em !important;
}
</style>
