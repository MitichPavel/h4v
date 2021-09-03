<template>
  <div class="overlay">
    <div class="window">
      <div class="bar">
        <button class="wrap-close">
          <img src="@/assets/images/svg/x.svg" alt="close" class="close">
        </button>
      </div>
      <div class="wrap-img">
        <img src="#" alt="#" class="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.window {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 20px;
  background-color: #1E2832;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.window .bar {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: #203244;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom: 1px solid #414150;
}
.window .bar .wrap-close {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 0 0 auto;
}
.window .bar .wrap-close .close {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
