<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";
import type User from "@/interfaces/User";
import { useLoginStore } from "@/stores/login";

const { user, isAuthenticated } = useAuth0();

const userStore = useLoginStore();

if (isAuthenticated) {
  userStore.setUser(user.value as User);
  console.log(`set user store to ${userStore}`);
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <h2>Here be all info</h2>
    <pre v-if="isAuthenticated">
      <code>{{ userStore }}</code>
    </pre>
  </div>
</template>

<style scoped></style>
