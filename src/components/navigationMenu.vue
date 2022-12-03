<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";

import { ref } from "vue";

import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import OverlayPanel from "primevue/overlaypanel";

import ProfileOverlay from "@/components/ProfileOverlay.vue";

const { user, isAuthenticated, isLoading } = useAuth0();
// const login = () => loginWithRedirect();

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
  <pre v-if="isLoading">Loading ...</pre>
  <!--  <pre v-else>-->
  <OverlayPanel id="profile_overlay" ref="profile" appendTo="body">
    <ProfileOverlay />
  </OverlayPanel>
  <Menubar :model="items">
    <template #end>
      <template v-if="isAuthenticated">
        <Avatar
          :image="user.picture"
          aria-controls="profile_overlay"
          aria:haspopup="true"
          class="mt-1.5 mr-2 cursor-pointer profile"
          referrerpolicy="no-referrer"
          shape="circle"
          size="large"
          @click="toggle_profile"
        />
      </template>
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
