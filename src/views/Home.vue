<template>
  <div class="home">
    <h1>Home page.</h1>
    <div class="baner">
      Miejsce na reklamę.
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  height: calc(100vh - 55px);
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
