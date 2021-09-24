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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
}

#app {
  font-family: 'Montserrat';
  text-align: center;
  color: #000000;
}
</style>
