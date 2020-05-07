<template>
  <div>{{options}}</div>
</template>

<script>
export default {
  name: 'sideSubmenu',
  props: {
      options: {
          type: Object,
          require: true
      }
  },
};
</script>

<style>
</style>