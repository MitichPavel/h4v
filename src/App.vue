<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout';
import MainLayout from '@/layouts/MainLayout';
import LoginLayout from '@/layouts/LoginLayout';

export default {
  components: {
    HomeLayout,
    MainLayout,
    LoginLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'home') + '-layout';
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
