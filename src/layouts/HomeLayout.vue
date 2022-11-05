<template>
  <div class="home-layout">
    <Navbar
      cases="/cases"
      login="/login"
    />

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';
export default {
  components: {
    Navbar,
  }
}
</script>

<style scoped>
.app-content {
  padding: 0;
  margin: 0;
}
</style>
