<template>
  <div class="common-layout">
    <el-container>
      <template v-if="$route.name">
        <el-aside>
          <el-menu
              :collapse="isCollapse"
              :router="true"
              class="navbar"
              default-active="1"
              @close="handleClose"
              @open="handleOpen"
          >
            <el-menu-item index="Abbonamenti" route="/Abbonamenti">
              <template #title>Abbonamenti</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </template>
      <el-main
          :style="{padding: 0}">
        <router-view/>
      </el-main>
    </el-container>
  </div>

  <!--      <router-link to="/Abbonamenti">Abbonamenti</router-link>-->
  <!--      <router-link to="/Amministrazione">Amministrazione</router-link>-->
  <!--      <router-link to="/">Dashboard</router-link>-->
  <!--      <router-link to="/Fatture">Fatture</router-link>-->
  <!--      <router-link to="/Impostazioni">Impostazioni</router-link>-->
  <!--      <router-link to="/Pagamenti">Pagamenti</router-link>-->
  <!--      <router-link to="/Login">Login</router-link>-->
</template>

<script setup>
import {ref} from 'vue'

const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

.navbar:not(.el-menu--collapse) {
  min-height: 400px;
}
</style>
