import {
  createStore
} from "vuex";

import mutations from "./mutations";
import getters from "./getters";
import apiRequests from "./actions/apiRequests";
import commonActions from "./actions/commonActions";

const actions = {
  ...apiRequests,
  ...commonActions,
}

export default createStore({
  state: {
    starships: null,
    starshipsSearch: null,
    currentStarship: null,
    isFetch: false,
  },
  mutations,
  getters,
  actions,
  modules: {},
});