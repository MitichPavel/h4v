<template>
  <div class="input-like-btn">
    <label
      class="wrap"
      :class="btnClass"
    >
      <input
        :type=type
        :value=value
      />
      <span class="value">
        <slot>{{ type }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    btnClass: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style>
.input-like-btn {
  box-sizing: border-box;
  max-width: 170px;
  padding: 0;
  margin: 0;
}

.input-like-btn  .wrap {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 6px 20px;
  margin: 0;
  border: 1px solid #000;
  white-space: nowrap;
  cursor: pointer;
}

.input-like-btn  .wrap input {
  display: none;
}

.input-like-btn  .wrap .value:first-letter {
  text-transform: uppercase;
}
</style>
