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
  </div>
</template>

<style scoped></style>
