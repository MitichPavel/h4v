import { createStore } from 'vuex';

export default createStore({
  state: {
    bigImage: {
      visibility: false,
    },
  },
  mutations: {
    showBigImage: (state) => state.bigImage.visibility = true,
    hideBigImage: (state) => state.bigImage.visibility = false,
  },
  getters: {
    visibilityBigImage: (state) => state.bigImage.visibility,
  },
});
