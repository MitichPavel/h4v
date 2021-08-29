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
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
