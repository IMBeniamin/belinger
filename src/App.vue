<script lang="ts" setup>
import { RouterView } from "vue-router";
import NavigationMenu from "@/components/navigationMenu.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <template v-if="$route.name">
        <el-aside>
          <NavigationMenu />
        </el-aside>
      </template>
      <el-main :style="{ padding: 0 }">
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style>
@import "@/assets/base.css";

.common-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.common-layout > .el-container {
  flex: 1;
}

.common-layout > .el-container > .el-aside {
  width: 200px;
  background-color: #fff;
  border-right: 1px solid #ebeef5;
}

.common-layout > .el-container > .el-main {
  flex: 1;
  padding: 0;
}
</style>
