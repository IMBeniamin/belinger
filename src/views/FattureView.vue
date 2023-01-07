<script>
import EntryCard from "@/components/EntryCard.vue";
import Checkbox from "primevue/checkbox";
import { api } from "@/global/api";
import ProgressSpinner from "primevue/progressspinner";
import axios from "axios";
import { useLoginStore } from "@/stores/login";

const userStore = useLoginStore();
console.log(`user store`, userStore);
console.log("api", api);
export default {
  name: "FattureView",
  components: {
    EntryCard,
    ProgressSpinner,
  },
  data() {
    return {
      entries: null,
      hidePaid: false,
    };
  },
  mounted() {
    axios
      // .get("https://belingapi.imben.it/api/v1/invoices")
      .get(`${api.url}/invoices`)
      .then((response) => {
        this.entries = response.data.data.filter((entry) => {
          return entry.customer === userStore.user?.ssn;
        });
        console.log("entries", this.entries);
        console.log("response", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <input id="john" v-model="hidePaid" type="checkbox" value="hidePaid" />
  <label for="hidePaid">Nascondi pagate</label>
  <div class="flex justify-items-start flex-wrap">
    <template v-if="entries">
      <template v-for="entry in entries" :key="entry.id">
        <template v-if="!hidePaid && entry.paid === true">
          <EntryCard :data="entry" />
        </template>
      </template>
    </template>
    <template v-else>
      <ProgressSpinner aria-label="Basic ProgressSpinner" />
    </template>
  </div>
</template>

<style scoped></style>
