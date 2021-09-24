<template>
  <div class="main-layout">
    <BidImage
      v-if="visibilityBigImage"
    />

    <Navbar />

    <main class="app-content">
      <div class="app-page">
        <Sidebar />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar.vue';
import Navbar from '@/components/app/Navbar.vue';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    Sidebar,
    Navbar,
    BidImage: defineAsyncComponent(() => import('@/components/BigImage.vue')),
  },
  computed: {
    visibilityBigImage() {
      return this.$store.getters.visibilityBigImage;
    },
  },
}
</script>

<style scoped>
.app-content {
  max-width: 1980px;
  padding: 0;
  margin: 0 auto;
}

.app-page {
  display: grid;
  grid-template-columns: 380px 1fr;
}

@media only screen and (max-width:1600px) {
  .app-page {
    grid-template-columns: 250px 1fr;
  }
}

@media only screen and (max-width:1280px) {
  .app-page {
    grid-template-columns: 200px 1fr;
  }
}
</style>
