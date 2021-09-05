<template>
  <div class="overlay">
    <div
      :class="{ loading : imageLoader }"
      class="window"
    >
      <div class="bar">
        <div
          class="wrap-close"
          @click="closeBigImage"  
        >
          <img src="@/assets/images/svg/x.svg" class="close">
        </div>
      </div>
      <div class="wrap-img">
        <img src="#" alt="#" class="img">
      </div>
      <img src="@/assets/images/svg/loader_white.svg" class="loader">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imageLoader() {
      return this.$store.getters.imageLoader;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.pageScroll(false);
    });
  },
  methods: {
    closeBigImage() {
      this.pageScroll(true);
      this.$store.commit('hideBigImage');
    },
    pageScroll(scroll = false) {
      if (!scroll) {
        document.body.style.overflow = 'hidden';
        return;
      }
      document.body.style.overflow = '';
    },
  },
}
</script>

<style scoped>
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 2000px;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.overlay .window {
  position: relative;
  box-sizing: border-box;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  background-color: #cad2da;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.overlay .window .bar {
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  padding: 10px;
  background-color: #DFE2E6;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.overlay .window .wrap-img {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-top: 1px solid #bdbdd4;
  z-index: 101;
}

.overlay .window.loading .wrap-img {
  display: none;
}

.overlay .window .loader {
  box-sizing: border-box;
  display: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.overlay .window.loading .loader {
  display: block;
}

.overlay .window .bar .wrap-close {
  box-sizing: border-box;
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 0 0 auto;
  border: 1px solid #bdbdd4;
  border-radius: 2px;
  cursor: pointer;
}

.overlay .window .bar .wrap-close .close {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
