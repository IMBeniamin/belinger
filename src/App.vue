<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Abbonamenti">Abbonamenti</router-link> |
    <router-link to="/Amministrazione">Amministrazione</router-link> |
    <router-link to="/Dashboard from">Dashboard</router-link> |
    <router-link to="/Fatture from">Fatture</router-link> |
    <router-link to="/Impostazioni">Impostazioni</router-link> |
    <router-link to="/Pagamenti">Pagamenti</router-link> |
  </div>
  <router-view />
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
