import { createStore } from 'vuex';

export default createStore({
  state: {
    data: [],
    filtredData: null,
    bigImage: {
      visibility: false,
      id: null,
    },
    filterParams: {
      filter: '',
      from: '',
      to: '',
    },

    loader: false,
    errorMessage: '',
  },
  mutations: {
    setBigImgId: (state, id) => state.bigImage.id = id,

    setData: (state, serverData) => state.data = [...state.data, ...serverData],
    clearData: (state) => state.data = [],

    setFiltredData: (state, filtredData) => state.filtredData = filtredData,
    clearFiltredData: (state) => state.filtredData = null,

    showBigImage: (state) => state.bigImage.visibility = true,
    hideBigImage: (state) => state.bigImage.visibility = false,

    clearFilter: (state) => {
      state.filterParams.filter = '';
      state.filterParams.from = '';
      state.filterParams.to = '';
    },

    hideLoader: (state) => state.loader = false,
    showLoader: (state) => state.loader = true,

    hideErrorMessage: (state) => state.errorMessage = '',
    showErrorMessage: (state, message) => state.errorMessage = message,
  },
  getters: {
    getBigImgId: (state) => state.bigImage.id,

    patientsDataLoader: (state) => state.patientsDataLoader,

    getData: (state) => state.data,
    getFiltredData: (state) => state.filtredData,
    getFilterParams: (state) => state.filterParams,

    visibilityBigImage: (state) => state.bigImage.visibility,

    loader: (state) => state.loader,
    errorMessage: (state) => state.errorMessage,
  },
});
