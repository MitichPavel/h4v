<template>
  <div class="wrap-btn">
    <button
      class="btn"
      :class="btnClass"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped>
.wrap-btn {
  max-width: 170px;
  padding: 0;
  margin: 0;
}

.btn {
  width: 100%;
  padding: 6px 10px;
  margin: 0;
  border: 1px solid #000;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

@media only screen and (max-width: 1600px) {
  .btn {
    font-size: 16px;
  }
}

@media only screen and (max-width: 1366px) {
  .btn {
    font-size: 13px;
  }
}
</style>
