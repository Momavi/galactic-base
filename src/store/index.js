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
    currentPage: 1,
    currentStarship: null,
    pageSize: 4,
  },
  mutations,
  getters,
  actions,
  modules: {},
});