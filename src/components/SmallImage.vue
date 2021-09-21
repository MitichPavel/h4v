<template>
  <img
    loading="lazy"
    ref="img"
    :id="imageId"
    class="img"
  >
</template>

<script>
export default {
  props: {
    imageId: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.getSmallImg();
  },
  methods: {
    getSmallImg() {
      this.axios
        .get('https://ddicomdemo20210806204758.azurewebsites.net/Entries/thumbnail/' + this.imageId)
        .then((response) => {
          if (this.$refs.img) {
            this.$refs.img.setAttribute('src', response.config.url);
          }
        });
    },
  }
}
</script>

<style scoped>
.img {
  display: block;
  line-height: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}
</style>
