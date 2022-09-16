<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from "vue";

import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import OverlayPanel from "primevue/overlaypanel";

import ProfileOverlay from "@/components/ProfileOverlay.vue";

const { user, isAuthenticated } = useAuth0();
console.log(window.location.origin);
console.log(user);

const items = ref([
  {
    label: "Dashboard",
    icon: "pi pi-fw pi-th-large",
    to: "/",
  },
  {
    label: "Abbonamenti",
    icon: "pi pi-fw pi-list",
    to: "/abbonamenti",
  },
  {
    label: "Fatture",
    icon: "pi pi-fw pi-money-bill",
    to: "/fatture",
  },
  {
    label: "Ricevute",
    icon: "pi pi-fw pi-book",
    to: "/ricevute",
  },
  {
    label: "Pagamenti",
    icon: "pi pi-fw pi-euro",
    to: "/pagamenti",
  },
  {
    label: "Impostazioni",
    icon: "pi pi-fw pi-cog",
    to: "/impostazioni",
  },
  {
    label: "Amministrazione",
    icon: "pi pi-fw pi-briefcase",
    to: "/amministrazione",
    visible: true,
  },
  {
    label: "Privacy",
    icon: "pi pi-fw pi-lock",
    to: "/privacy",
  },
]);

const profile = ref();
const toggle_profile = (event: Event) => {
  profile.value.toggle(event);
};
</script>

<template>
  <OverlayPanel id="profile_overlay" ref="profile" appendTo="body">
    <ProfileOverlay />
  </OverlayPanel>
  <Menubar :model="items">
    <template #end>
      <pre v-if="isAuthenticated">
        <Avatar
            aria-controls="profile_overlay"
            aria:haspopup="true"
            class="mt-1.5 mr-2 cursor-pointer profile"
            image={{ shape="circle"
            size="large"
            user.picture}}
            @click="toggle_profile"
        />
      </pre>
    </template>
  </Menubar>
  <router-view />
</template>

<style scoped>
.profile {
  transition: box-shadow 0.1s ease-out;
}

.profile:hover {
  box-shadow: inset 0 0 0.25em #fff, 0 0 0.25em #fff;
  transition: box-shadow 0.1s ease-out;
}
</style>
