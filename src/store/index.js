import axios from "axios";
import {
  createStore
} from "vuex";

export default createStore({
  state: {
    starships: [],
  },
  mutations: {
    SET_STARSHIPS: (state, starships) => {
      state.starships = starships;
    },
  },
  getters: {
    STARSHIPS(state) {
      return state.starships;
    },
  },
  actions: {
    GET_STARSHIPS({
      commit
    }) {
      return axios("https://swapi.dev/api/starships/?format=json", {
          method: "GET",
        })
        .then((response) => {
          commit("SET_STARSHIPS", response.data);
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
});