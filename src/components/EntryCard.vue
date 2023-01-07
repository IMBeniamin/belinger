<script lang="ts">
import Card from "primevue/card";
import type Invoice from "@/interfaces/Invoice";

export default {
  name: "EntryCard",
  components: {
    Card,
  },
  props: {
    data: {
      type: Object as () => Invoice,
      required: true,
    },
  },
};
</script>

<template>
  <Card>
    <template #header>{{ data.id }}</template>
    <template #title>{{ data.emission }}</template>
    <template #content>{{ data.account }}</template>
    <template #footer>{{ data.expiry }}</template>
  </Card>
</template>

<style lang="sass" scoped>
.p-card
  border-radius: 1.5em
  margin: 1em
  padding: 1em

.paid
  background: linear-gradient(#00b09b, #96c93d)

.unpaid
  background: linear-gradient(#ff5e57, #ffc371)

.expired
  background: linear-gradient(#ff5e57, #730000)
</style>
