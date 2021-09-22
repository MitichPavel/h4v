<template>
  <div class="cases">
    <div class="wrap-page-title">
      <h2 class="page-title">
        Lista zdjęć RTG DIACOM
      </h2>
    </div>
    <div class="header">
      <ul class="header-list">
        <li class="header-item">
          Zdjęcie
        </li>
        <li class="header-item">
          nr sprawy
        </li>
        <li class="header-item">
          data  badania
        </li>
        <li class="header-item">
          właściciel
        </li>
        <li class="header-item">
          pacjent
        </li>
        <li class="header-item">
          gatunek
        </li>
      </ul>
    </div>

    <div class="content">
      <ul
        v-if="caseList || message"
        class="case-list"
      >
        <li
          v-for="(item, i) in caseList"
          :key="i"
          class="case-item"
        >
          <div
            class="wrap-img"
            @click="showBigImg(item.id)"
          >
            <img
              class="img"
              :src="`data:image/jpeg;base64,${item.thumbnail}`"
            >
          </div>
          <div class="id">
            {{ item.studyId }}
          </div>
          <div class="date">
            {{ new Date(item.studyDate).toLocaleDateString() }}
          </div>
          <div class="owner">
            {{ item.responsiblePerson }}
          </div>
          <div class="patient">
            {{ item.patientName }}
          </div>
          <div class="species">
            {{ item.patientSpeciesDescription }}
          </div>
          <Button
            btnClass="btn-open"
          >
            Otwórz
          </Button>
          <Button
            btnClass="btn-send"
          >
            Wyślij do opisu
          </Button>
        </li>
      </ul>
      <div class="info">
        <div
          v-if="message"
          class="message"
        >
          {{ message }}
        </div>
        <div
          class="loading"
          v-if="loader"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      getMore: false,
    }
  },
  beforeMount() {
    this.$store.commit('showLoader');
  },
  computed: {
    caseList() {
      return this.$store.getters.getFiltredData || this.$store.getters.getData;
    },
    loader() {
      return this.$store.getters.loader;
    },
    message() {
      return this.$store.getters.errorMessage;
    },
  },
  methods: {
    showBigImg(id) {
      this.$store.commit('showBigImage');
      this.$store.commit('setBigImgId', id);
    },
  },
}
</script>

<style>
.cases {
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0;
}

@media only screen and (max-width:1280px) {
  .cases {
    padding: 0 5px 0 0;
  }
}

.wrap-page-title {
  position: relative;
  box-sizing: border-box;
  padding: 16px 10px;
}

.wrap-page-title::after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: '';
  width: 100%;
  height: 5px;
  background-color: #FFD80E;
}

.page-title {
  text-align: left;
}

.header {
  padding: 18px 0 12px 0;
}

.header-list {
  box-sizing: border-box;
  padding: 0 5px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  list-style-type: none;
}

.cases .content .info {
  position: relative;
  height: 100px;
  width: 100%;
  z-index: 1;
}

.cases .content .info .loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 120px;
  height: 20px;
  background-image: url(./../assets/images/svg/loader_dots.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  z-index: 2;
}

.cases .content .info .message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #5e6267;
  background-color: #fff;
  z-index: 3;
}

.cases .content .case-list {
  list-style-type: none;
}

.cases .content .case-list .case-item {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: max-content;
  grid-gap: 10px;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  padding: 5px;
  border-top: 2px solid #DFE2E6;
  font-size: 18px;
}

@media only screen and (max-width:1280px) {
  .cases .content .case-list .case-item {
    font-size: 15px;
  }
}

.cases .content .case-list .case-item:nth-child(2n) {
  background-color: #F8F8F8;
}

.cases .content .case-list .case-item .wrap-img {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 122.3px;
  background-image: url(./../assets/images/svg/loader.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  cursor: zoom-in;
}

@media only screen and (max-width: 1600px) {
  .cases .content .case-list .case-item .wrap-img {
    min-height: calc((100vw - 570px) / 8);
  }
}

@media only screen and (max-width: 1280px) {
  .cases .content .case-list .case-item .wrap-img {
    min-height: calc((100vw - 470px) / 8);
  }
}

.cases .content .case-list .case-item .wrap-img .img {
  display: block;
  line-height: 0;
  box-sizing: border-box;
  width: 100%;
  height: auto;
}
</style>>
<style>
.btn-open {
  background-color: #000;
  color: #fff;
}

.btn-send {
  background-color: #C18F23;
  color: #000;
}
</style>
