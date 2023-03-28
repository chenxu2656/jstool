<template>
 <el-container>
    <el-aside class="el-aside">
      <BackSidebar />
    </el-aside>
    <el-container id="con">
      <el-header>
      </el-header>
      <el-main class="el-main">
        <router-view></router-view>
    </el-main>
    </el-container>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script setup>
import BackSidebar from '@/components/BackSidebar.vue';
</script>
<style lang="scss">
.el-aside {
    height: 100vh;
}
</style>