<template>
  <div class="home-layout">
    <Navbar />

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
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
