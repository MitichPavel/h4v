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
        <li class="case-item">
          <div class="wrap-img">
            <img src="@/assets/images/photo.jpg" alt="photo" class="img">
          </div>
          <div class="id">
            545543543
          </div>
          <div class="date">
            data  badania
          </div>
          <div class="owner">
            józef Kowalski
          </div>
          <div class="patient">
            Pucio
          </div>
          <div class="species">
            kot
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
        <li class="case-item">
          <div class="wrap-img">
            <img src="@/assets/images/photo.jpg" alt="photo" class="img">
          </div>
          <div class="id">
            545543543
          </div>
          <div class="date">
            data  badania
          </div>
          <div class="owner">
            józef Kowalski
          </div>
          <div class="patient">
            Pucio
          </div>
          <div class="species">
            kot
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
  }
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

.img {
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
