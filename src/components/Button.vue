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
  cursor: pointer;
}
</style>
