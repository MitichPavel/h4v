import { createStore } from 'vuex';

export default createStore({
  state: {
    patientsDataLoader: false,
    imageLoader: false,
    data: null,
    filtredData: null,
    bigImage: {
      visibility: false,
    },
    filterParams: {
      filter: null,
      from: null,
      to: null,
    },
    filterPath: null,
  },
  mutations: {
    patientsDataLoaderON: (state) => state.patientsDataLoader = true,
    patientsDataLoaderOFF: (state) => state.patientsDataLoader = false,

    imageLoaderON: (state) => state.imageLoader = true,
    imageLoaderOFF: (state) => state.imageLoader = false,

    setData: (state, serverData) => state.data = serverData,
    clearData: (state) => state.data = null,

    setFiltredData: (state, filtredData) => state.filtredData = filtredData,
    clearFiltredData: (state) => state.filtredData = null,

    showBigImage: (state) => state.bigImage.visibility = true,
    hideBigImage: (state) => state.bigImage.visibility = false,

    setFilterPath: (state, path) => state.filterPath = path,
    clearFilter: (state) => {
      state.filterParams.filter = null;
      state.filterParams.from = null;
      state.filterParams.to = null;
      state.filterPath = null;
    },
  },
  getters: {
    patientsDataLoader: (state) => state.patientsDataLoader,
    imageLoader: (state) => state.imageLoader,

    getData: (state) => state.data,
    getFiltredData: (state) => state.filtredData,
    getFilterParams: (state) => state.filterParams,

    visibilityBigImage: (state) => state.bigImage.visibility,

    getfilterPath: (state) => state.filterPath,
  },
});
