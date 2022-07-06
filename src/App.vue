<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Abbonamenti">Abbonamenti</router-link> |
    <router-link to="/Amministrazione">Amministrazione</router-link> |
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/Fatture">Fatture</router-link> |
    <router-link to="/Impostazioni">Impostazioni</router-link> |
    <router-link to="/Pagamenti">Pagamenti</router-link> |
  </div>
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {}
}
</script>

<style scoped>
</style>
