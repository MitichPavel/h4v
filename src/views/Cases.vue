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
      <ul class="case-list">
        <li
          v-for="(item, i) in cases"
          :key="i"
          class="case-item"
        >
          <div class="wrap-img">
            <a href="#" class="img-link">
              <img
                :src="src + item.thumbnail"
                alt="photo"
                class="img"
              >
            </a>
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
      cases: null,
      src: 'data:image/jpeg;base64,',
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.get('https://ddicomdemo20210806204758.azurewebsites.net/Entries').then((response) => {
        this.cases = [...response.data.data];
        console.log(this.cases);
      });
    },
    getPhoto(i) {
      this.axios.get('https://ddicomdemo20210806204758.azurewebsites.net/Entries?pageSize=1&filter=%20').then((response) => {
        console.log(response.data.data[i]);
        this.src += response.data.data[i].thumbnail;
      });
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

.case-list {
  list-style-type: none;
}

.cases .content .case-list .case-item {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  border-top: 2px solid #DFE2E6;
  font-size: 18px;
}

@media only screen and (max-width:1280px) {
  .cases .content .case-list .case-item {
    font-size: 15px;
  }
}

.case-item:nth-child(2n) {
  background-color: #F8F8F8;
}

.cases .content .case-list .case-item .img-link:hover {
  cursor: zoom-in;
}

.cases .content .case-list .case-item .img {
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
