<template>
  <div class="overlay">
    <div
      :class="{ loading : loading }"
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
        <img
          ref="img"
          class="img"
          draggable="false"
          @mousemove.self="moveOn"
          @mousedown="getOffset"
          @mouseup="moveOff"
        >
      </div>
      <img src="@/assets/images/svg/loader_white.svg" class="loader">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      isDown: false,
      offset: [0, 0],
    };
  },
  computed: {
    srcBigImg() {
      return this.$store.getters.getBigImgSrc;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.pageScroll(false);
      this.getBigImg();
    });
  },
  methods: {
    getOffset(e) {
      console.log('down', this.$refs.img.offsetLeft);
      this.isDown = true;
      this.offset[0] = this.$refs.img.offsetLeft - e.clientX;
      this.offset[1] = this.$refs.img.offsetTop - e.clientY;
    },
    moveOn(e) {
      console.log('move');
      if (this.isDown) {
        console.log('move and down');
        this.$refs.img.style.left = (e.clientX + this.offset[0]) + 'px';
        this.$refs.img.style.top  = (e.clientY + this.offset[1]) + 'px';
      }
    },
    moveOff() {
      console.log('up');
      this.isDown = false;
    },
    getBigImg() {
      const id = this.$store.getters.getBigImgId;
      this.axios.get(`https://ddicomdemo20210806204758.azurewebsites.net/Entries/photo/${id}`)
        .then((response) => {
          this.$refs.img.setAttribute('src', response.config.url);
          this.loading = false;
        });
    },
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
  width: 100%;
  height: 100%;
  background-color: #1E2832;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 42px);
  padding: 30px 30px 80px 30px;
  border-top: 1px solid #bdbdd4;
  z-index: 101;
}

.overlay .window.loading .wrap-img {
  display: none;
}

.overlay .window .wrap-img .img {
  position: absolute; 
  left: 0; 
  top: 0; 
  max-width: 100%;
  max-height: 100%;
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
