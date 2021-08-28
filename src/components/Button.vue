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

<style>
.wrap-btn {
  box-sizing: border-box;
  max-width: 170px;
  padding: 0;
  margin: 0;
}

.btn {
  box-sizing: border-box;
  width: 100%;
  padding: 6px 10px;
  margin: 0;
  border: 1px solid #000;
  white-space: nowrap;
  cursor: pointer;
}
</style>
