<script lang="ts" setup>
import { useLoginStore } from "@/stores/login";

const userStore = useLoginStore();
console.log(`user store`, userStore);
</script>

<template>
  <div>
    <template v-if="userStore.isLoggedIn">
      <code>{{ userStore.user }}</code>
    </template>
    <template v-else>
      <code>Not logged in</code>
    </template>
  </div>
</template>

<style scoped></style>
