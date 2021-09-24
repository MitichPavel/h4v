<template>
  <div class="login-layout">
    <main class="app-content">
      <div class="app-page">
        <NavbarLogin />

        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavbarLogin from '@/components/app/NavbarLogin.vue';
export default {
  components: {
    NavbarLogin,
  }
}
</script>

<style scoped>

</style>
