<script lang="ts" setup>
import { ref } from "vue";
import {
  Ticket,
  Menu as IconMenu,
  DocumentCopy,
  Setting,
  Management,
  SwitchButton,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    :collapse="isCollapse"
    :router="true"
    class="navbar"
    default-active="1"
    @close="handleClose"
    @open="handleOpen"
  >
    <el-menu-item index="dashboard" route="/">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item index="abbonamenti" route="/abbonamenti">
      <el-icon>
        <Ticket />
      </el-icon>
      <template #title>Abbonamenti</template>
    </el-menu-item>
    <el-menu-item index="fatture" route="/fatture">
      <el-icon>
        <Ticket />
      </el-icon>
      <template #title>Fatture</template>
    </el-menu-item>
    <el-menu-item index="pagamenti" route="/pagamenti">
      <el-icon>
        <DocumentCopy />
      </el-icon>
      <template #title>Pagamenti</template>
    </el-menu-item>
    <el-menu-item index="impostazioni" route="/impostazioni">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>Impostazioni</template>
    </el-menu-item>
    <el-menu-item index="amministrazione" route="/amministrazione">
      <el-icon>
        <Management />
      </el-icon>
      <template #title>Amministrazione</template>
    </el-menu-item>
    <el-menu-item index="logout">
      <el-icon>
        <SwitchButton />
      </el-icon>
      <template #title>Logout</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped></style>
