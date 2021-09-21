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
      <div
        ref="wrap"
        class="wrap"
      >
        <div
          class="wrap-img"
          @mouseleave="() => { if (isDown && isMove) moveOff(); }"
        >
          <img
            ref="img"
            class="img"
            draggable="false"
            :class="{ move : isMove && isDown, zoomed : currentScale > 1 }"
            @mousedown="getOffset"
            @mousemove="moveOn"
            @mouseup="moveOff"
          >
        </div>
      </div>
      <div
        class="zoom-widget"
        :class="{ disabled : !widget }"  
      >
        <div
          class="zoom-out"
          :class="{ disabled : currentScale === 1 }"
          @click="() => {
            if (currentScale > 1) zoom(-stepScale);
          }"  
        >
          <img 
            class="icon" 
            src="@/assets/images/svg/zoom_out.svg" 
            alt="zoom out"
            draggable="false"
          >
        </div>
        <div 
          class="zoom-in"
          :class="{ disabled : currentScale === maxScale }"
          @click="() => {
            if (currentScale < maxScale) zoom(stepScale);
          }"
        >
          <img
            class="icon"
            src="@/assets/images/svg/zoom_in.svg"
            alt="zoom in"
            draggable="false"
          >
        </div>
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
      widget: false,

      isDown: false,
      isMove: false,
      offset: [0, 0],

      maxScale: null,
      stepScale: null,
      currentScale: 1,
    };
  },
  computed: {
    renderedImg() {
      return document.querySelector('.img');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.pageScroll(false);

      const initScale = setInterval(() => {
        if (this.renderedImg.height) {
          clearInterval(initScale);
          this.loading = false;
          this.widget = true;

          this.maxScale = this.scale() * 5;
          this.stepScale = this.maxScale / 10;
        }
      }, 200);
    });
  },
  beforeCreate() {
    // Get big image
    const id = this.$store.getters.getBigImgId;
    this.axios.get(`https://ddicomdemo20210806204758.azurewebsites.net/Entries/photo/${id}`)
      .then((response) => {
        this.$refs.img.setAttribute('src', response.config.url);
      });
  },
  methods: {
    getOffset(e) {
      if (this.currentScale > 1) {
        this.isDown = true;

        this.offset[0] = this.$refs.img.offsetLeft - e.clientX;
        this.offset[1] = this.$refs.img.offsetTop - e.clientY;
      }
    },
    moveOn(e) {
      if (this.currentScale > 1) {
        this.isMove = true;

        if (this.isDown) {

          this.$refs.img.style.top = (e.clientY + this.offset[1]) + 'px';
          this.$refs.img.style.left = (e.clientX + this.offset[0]) + 'px';
        }
      }
    },
    moveOff() {
      this.isMove = false;
      this.isDown = false;
    },
    resetPosition() {
      this.$refs.img.style.top = 'auto';
      this.$refs.img.style.left = 'auto';
    },

    scale() {
      return this.renderedImg.height / parseInt(getComputedStyle(this.$refs.wrap).height, 10) - 1;
    },
    zoom(step) {
      this.currentScale += step;

      if (step < 0) {
        this.resetPosition();
      }

      if (this.currentScale + step < 1) {
        this.resetPosition();

        this.currentScale = 1;
        this.$refs.img.style.transform = 'scale(1)';
        return;
      }

      if (this.currentScale + step > this.maxScale) {
        this.currentScale = this.maxScale;
        this.$refs.img.style.transform = `scale(${this.maxScale})`;
        return;
      }

      this.$refs.img.style.transform = `scale(${this.currentScale + step})`;
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
  user-select: none;
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

.overlay .window .wrap {
  height: calc(100% - 42px);
  border-width: 30px;
  border-bottom-width: 60px;
  border-color: #1E2832;
  border-style: solid;
}

.overlay .window .wrap-img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 101;
  overflow: hidden;
}

.overlay .window.loading .wrap-img {
  display: none;
}

.overlay .window .wrap-img .img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.2s ease-out;
}

.overlay .window .wrap-img .img.move.zoomed {
  transition: transform 0s;
}

.overlay .window .wrap-img .img.move.zoomed:hover {
  cursor: grabbing;
}

.overlay .window .wrap-img .img.zoomed:hover {
  cursor: grab;
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

.overlay .window .zoom-widget {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
}

.overlay .window .zoom-widget.disabled {
  opacity: 0;
  transform: opacity .3s ease-out;
}

.overlay .window .zoom-widget.disabled .zoom-in,
.overlay .window .zoom-widget.disabled .zoom-out {
  pointer-events: none;
}

.overlay .window .zoom-in,
.overlay .window .zoom-out {
  background-color: rgb(201, 199, 199);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.16s ease-out;
  border: 1px solid #ccc;
  user-select: none; 
}

.overlay .window .zoom-in:hover,
.overlay .window .zoom-out:hover {
  background-color: #d6d4d4;
}

.overlay .window .zoom-in.disabled,
.overlay .window .zoom-out.disabled {
  opacity: .5;
  pointer-events: none;
  transition: all 0.3s ease-out;
}

.overlay .window .zoom-in .icon,
.overlay .window .zoom-out .icon {
  width: 65%;
  height: 65%;
}
</style>
