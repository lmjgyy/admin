<template>
  <div class="flex layout" :style="{height:screenHeight+'px'}">
    <div class="layout-menu">
      <side-bar/>
    </div>
    <div class="layout-content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import sideBar from './sideBar'
export default {
  components: { sideBar },
  data () {
    return {
      screenHeight: document.documentElement.clientHeight || document.body.clientHeight
    }
  },

}
</script>
