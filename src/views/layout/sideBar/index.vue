<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b">
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <side-submenu :options="item" :index="index" v-if="item.children&&item.children.length>1"/>
          <el-menu-item :index="item.path" :key="index" v-else>
            <i :class="`fa fa-${item.meta.icon}`"></i>
            <span>{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
</template>

<script>
// import route from '@/router/index.js'
import sideSubmenu from "./sideSubmenu";
export default {
  components: {
    sideSubmenu
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style>

</style>