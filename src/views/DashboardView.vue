<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { user, isAuthenticated } = useAuth0();
console.log(window.location.origin);
console.log(user);
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <h2>Here be all info</h2>
    <pre v-if="isAuthenticated">
      <code>{{ user }}</code>
    </pre>
  </div>
</template>

<style scoped></style>
