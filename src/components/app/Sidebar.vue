<template>
  <div class="sidebar">
    <div class="wrap-sidebar-title">
      <h2 class="sidebar-title">
        Filtry
      </h2>
    </div>
    <div class="filter">
      <div class="wrap-inputs">
        <input
          type="text"
          placeholder="szukaj po wszystkim"
          class="filter-input input-text"
        />
        <div class="wrap-date">
          <label
            class="label"
            for="date-from"
          >
            <input
              id="date-from"
              type="text"
              placeholder="dd/mm/rr"
              maxlength="8"
              class="filter-input input-date"
            />
            Data od
          </label>
          <label
            class="label"
            for="date-till"
          >
            <input
              id="date-till"
              type="text"
              placeholder="dd/mm/rr"
              maxlength="8"
              class="filter-input input-date"
            />
            Data do
          </label>
          
        </div>
      </div>
      <div class="footer">
        <Button
          btnClass="btn-filter"
        >
          Filtruj
        </Button>
        <Button
          btnClass="btn-clear-filter"
        >
          Wyczyść filtry
        </Button>
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
  methods: {
    clickDate() {
      document.querySelector('#date-till').focus();
    }
  },
}
</script>


<style scoped>
.sidebar {
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  padding: 16px 18px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.filter {
  box-sizing: border-box;
  padding: 0;
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.filter-input {
  box-sizing: border-box;
  width: 100%;
  min-height: 39px;
  padding: 0 10px;
  margin: 0;
  border: 1px solid #000;
}

.wrap-date {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch; */
  padding: 0;
  margin: 14px 0 20px 0;
}

.label {
  text-align: left;
}

.sidebar .footer {
  box-sizing: border-box;
  width: max-content;
}

/* #label-date-till {
  box-sizing: border-box;
  background-color: #fff;
  width: 122px;
  max-width: 122px;
  min-height: 39px;
  padding: 8px;
}

.input-text {
  box-sizing: border-box;
  min-width: 266px;
}

.input-date {
  box-sizing: border-box;
  width: 122px;
  max-width: 122px;
}

.input-date::-webkit-calendar-picker-indicator {
  box-sizing: border-box;
  width: 40px;
} */
</style>
<style>
.btn-filter {
  box-sizing: border-box;
  padding: 6px 20px;
  margin-bottom: 14px;
  background-color: #B4B4BE;
  border: 1px solid #B4B4BE;
}

.btn-clear-filter {
  box-sizing: border-box;
  padding: 6px 20px;
  background-color: #fff;
  border: 1px solid #000;
} 
</style>
