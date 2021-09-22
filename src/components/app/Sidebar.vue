<template>
  <div class="sidebar">
    <div class="wrap-sidebar-title">
      <h2 class="sidebar-title">
        Filtry
      </h2>
    </div>
    <form class="filter">
      <div class="wrap-inputs">
        <input
          ref="searchText"
          v-model="filterParams.filter"
          autocomplete="off"
          type="text"
          placeholder="szukaj po wszystkim"
          maxlength="80"
          class="filter-input input-text"
        />
        <div class="group-date">

          <label class="wrap-input">
            <span class="label">
              Data <b>od</b>
            </span>
            <input
              ref="dateStart"
              v-model="filterParams.from"
              autocomplete="off"
              type="date"
              class="filter-input input-date"
              :min="dateStart.min"
              :max="dateStart.max"
              @input="setStart"
            />
          </label>

          <label class="wrap-input">
            <span class="label">
              Data <b>do</b>
            </span>
            <input
              ref="dateEnd"
              v-model="filterParams.to"
              autocomplete="off"
              type="date"
              class="filter-input input-date"
              :min="dateEnd.min"
              :max="dateEnd.max"
              @input="setEnd"
            />
          </label>

        </div>
      </div>
      <div class="footer">
        <InputBtn
          type="submit"
          btnClass="filter"
          @click.prevent="getFiltredDataFromServer"
        >
          Filtruj
        </InputBtn>
        <InputBtn
          type="reset"
          btnClass="clear"
          @click="clearFilter"
        >
          Wyczyść filtry
        </InputBtn>
      </div>
    </form>
  </div>
</template>

<script>
import InputBtn from '@/components/InputBtn.vue';
export default {
  data() {
    return {
      totalPagesCount: null,
      page: 0,
      pageSize: 20,
      filterParams: {
        filter: '',
        from: '',
        to: '',
      },
      url: `https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=${this.page}&pageSize=${this.pageSize}`,
      dateStart: {
        max: '',
      },
      dateEnd: {
        min: '',
        max: '',
      },
    };
  },
  computed: {
    numberOfPages() {
      return Math.floor((this.totalPagesCount + this.pageSize - 1) / this.pageSize);
    },
    loader() {
      return this.$store.getters.loader;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.setDefMaxDate();

      this.scrollWatcher();
    });
  },
  beforeMount() {
    // Get data from server
    this.axios
      .get(`https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=${this.page}&pageSize=${this.pageSize}`)
      .then((response) => {
        this.totalPagesCount = response.data.count;
        this.$store.commit('setData', [...response.data.data]);
        console.log(`Loaded page ${this.page + 1}/${this.numberOfPages}`);
      })
      .catch((error) => {
        this.$store.commit('showErrorMessage', 'Wystąpił błąd. Nie udało się pobrać dane.');
        console.log(`Error: ${error}`);
      })
      .finally(() => {
        this.$store.commit('hideLoader');
      });
  },
  components: {
    InputBtn,
  },
  methods: {
    getDataFromServer() {
      this.page = 0;
      this.totalPagesCount = null;
      this.$store.commit('showLoader');

      this.axios
        .get(`https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=${this.page}&pageSize=${this.pageSize}`)
        .then((response) => {
          this.totalPagesCount = response.data.count;
          this.$store.commit('setData', [...response.data.data]);
        })
        .catch((error) => {
          this.$store.commit('showErrorMessage', 'Wystąpił błąd. Nie udało się pobrać dane.');
          console.log(`Error: ${error}`);
        })
        .finally(() => {
          this.$store.commit('hideLoader');
        });
    },
    scrollWatcher() {
      console.log('Scroll watcher added');
      window.addEventListener('scroll', () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      
        if (bottomOfWindow) {
          this.loadMore();
        }
      });
    },
    getFiltredDataFromServer() {
      this.page = 0;
      this.totalPagesCount = null;

      this.$store.commit('clearFiltredData');
      this.$store.commit('clearData');
      this.$store.commit('showLoader');

      const path = this.createRequestPath();
      if (path === '') return;
      const newUrl = 'https://ddicomdemo20210806204758.azurewebsites.net/Entries' + path;
      console.log(newUrl);
      console.log(this.filterParams);

      this.axios
        .get(newUrl)
        .then((response) => {
          if (response.data.count === 0) {
            console.log('Nie znaleziono wyników dla Twojego wyszukiwania.');
            this.$store.commit('showErrorMessage', 'Nie znaleziono wyników dla Twojego wyszukiwania.');
            return;
          }
        
          this.$store.commit('hideErrorMessage');

          this.$store.commit('setFiltredData', [...response.data.data]);
        })
        .catch((error) => {
          this.$store.commit('showErrorMessage', 'Wystąpił błąd. Nie udało się pobrać dane.');

          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(`Response whith error ${error.response.status}`);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
        })
        .finally(() => {
          this.$store.commit('hideLoader');
        });
    },
    loadMore() {
      this.$store.commit('hideErrorMessage');

      if (this.$store.getters.getFiltredData === null) {

        if (this.page + 1 < this.numberOfPages && !this.$store.getters.loader) {
          this.$store.commit('showLoader');
          this.page += 1;

          this.axios
            .get(`https://ddicomdemo20210806204758.azurewebsites.net/Entries?page=${this.page}&pageSize=${this.pageSize}`).then((response) => {
              this.$store.commit('setData', [...response.data.data]);
              this.$store.commit('hideLoader');
              console.log('Loaded page', this.page + 1, '/', this.numberOfPages);
            })
            .catch((error) => {
              this.page -= 1;
              this.$store.commit('showErrorMessage', 'Wystąpił błąd. Nie udało się pobrać dane.');

              if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(`Response whith error ${error.response.status}`);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
            })
            .finally(() => {
              this.$store.commit('hideLoader');
            });
        }
      }
    },
    createRequestPath() {
      const params = {...this.filterParams};
      let requestSymb = '?';
      let path = '';

      /* change the date "to" to filter with this date inclusive */
      if (params.to !== '') {
        params.to = this.incrementDate(params.to);
      }

      Object.entries(params).forEach((input) => {
        if (input[1] !== '') {
          path += requestSymb + input[0] + '=' + encodeURIComponent(input[1]);
          requestSymb = '&';
        } else {
          path += '';
        }
      });

      return path;
    },
    clearFilter() {
      this.$store.commit('clearFilter');
      this.$store.commit('clearFiltredData');
      this.$store.commit('clearData');
      this.$store.commit('hideErrorMessage');

      this.filterParams.filter = '';
      this.filterParams.from = '';
      this.filterParams.to = '';

      this.clearInputs();

      this.getDataFromServer();
    },
    setStart() {
      this.dateEnd.min = this.$refs.dateStart.value;
    },
    setEnd() {
      this.dateStart.max = this.$refs.dateEnd.value;
    },
    setDefMaxDate() {
      const today = new Date().toISOString().split("T")[0];
      this.dateStart.max = today;
      this.dateEnd.max = today;
    },
    clearInputs() {
      this.dateEnd.min = '';
      this.setDefMaxDate();
    },
    incrementDate(dateString) {
      /* correct format dateString  - 'yyyy-mm-dd' */
      return new Date(new Date(dateString).setDate(new Date(dateString).getDate() + 1))
        .toISOString().split("T")[0];
    },
  },
}
</script>

<style scoped>
.sidebar {
  box-sizing: border-box;
  width: 100%;
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
  padding: 0 5px 0 8px;
  margin: 0;
  border: 1px solid #000;
}

.group-date {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  padding: 0;
  margin: 34px 0 20px 0;
}

@media only screen and (max-width:1600px) {
  .group-date {
    grid-template-columns: 1fr;
  }
}

.group-date .wrap-input {
  text-align: left;
}

.group-date .wrap-input span.label {
  box-sizing: border-box;
  padding: 4px 0;
  font-size: 14px;
  color: #000;
}

.sidebar .footer {
  box-sizing: border-box;
  width: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  margin: 16px 0 0 0;
}

@media only screen and (max-width:1600px) {
  .sidebar .footer {
    grid-template-columns: 1fr;
  }
}
</style>
<style>
.sidebar .filter .footer .input-like-btn .wrap.filter {
  padding: 6px 20px;
  margin-bottom: 14px;
  background-color: #B4B4BE;
  border: 1px solid #B4B4BE;
}

.sidebar .filter .footer .input-like-btn .wrap.clear {
  padding: 6px 20px;
  background-color: #fff;
  border: 1px solid #000;
} 
</style>
