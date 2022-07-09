<script lang="ts" setup>
import { ref } from "vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div />
</template>

<style scoped>
.menu {
  height: 100%;
}
</style>
