import axios from "axios";
import {
  createStore
} from "vuex";

export default createStore({
  state: {
    starships: null,
    currentPage: 1,
    isFetch: true,
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
    async GET_STARSHIPS({
      commit
    }) {
      try {
        const response = await axios("https://swapi.dev/api/starships/?format=json", {
          method: "GET",
        });
        commit("SET_STARSHIPS", response.data);
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async GET_STARSHIPS_NEXT({
      getters,
      commit
    }) {
      try {
        const response = await axios(getters.STARSHIPS.next, {
          method: "GET",
        });
        commit("SET_STARSHIPS", response.data);
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async GET_STARSHIPS_PREV({
      getters,
      commit
    }) {
      try {
        const response = await axios(getters.STARSHIPS.previous, {
          method: "GET",
        });
        commit("SET_STARSHIPS", response.data);
        return response;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
  modules: {},
});