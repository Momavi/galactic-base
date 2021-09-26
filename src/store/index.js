import {
  createStore
} from "vuex";

import mutations from "./mutations"
import getters from "./getters";
import apiRequests from './actions/apiRequests'
import commonActions from './actions/commonActions '

const actions = {
  ...apiRequests,
  ...commonActions,
}

export default createStore({
  state: {
    starships: null,
    starshipsSearch: null,
    currentPage: 1,
    currentStarship: null,
    pageSize: null,
    isFetch: false,
  },
  mutations,
  getters,
  actions,
  modules: {},
});