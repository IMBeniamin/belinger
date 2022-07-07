<template>
  <section>
    <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        default-active="2"
        @close="handleClose"
        @open="handleOpen"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item disabled index="3">
        <el-icon>
          <document/>
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/Abbonamenti">Abbonamenti</router-link>
      |
      <router-link to="/Amministrazione">Amministrazione</router-link>
      |
      <router-link to="/">Dashboard</router-link>
      |
      <router-link to="/Fatture">Fatture</router-link>
      |
      <router-link to="/Impostazioni">Impostazioni</router-link>
      |
      <router-link to="/Pagamenti">Pagamenti</router-link>
      |
      <router-link to="/Login">Login</router-link>
      |
    </div>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
