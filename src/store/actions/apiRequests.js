import axios from "axios";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/starships',
});

export default {
  async GET_STARSHIPS({
    commit
  }) {
    commit("SET_ISFETCH", false)
    try {
      return instance("/").then(response => {
        commit("SET_STARSHIPS", response.data);
        commit("SET_ISFETCH", true)
        return response;
      })
    } catch (error) {
      console.log(error);
      commit("SET_ISFETCH", true)
      return error;
    }
  },
  async SET_STARSHIP_SEARCH({
    commit
  }, data) {
    if (data.length > 0) {
      commit("SET_ISFETCH", false)
      try {
        return instance("?search=" + data).then(response => {
          commit("SET_ISFETCH", true)
          commit("SET_STARSHIPS_RESULTS", response.data.results)
          return response;
        })
      } catch (error) {
        console.log(error);
        commit("SET_ISFETCH", true)
        return error;
      }
    }
  },
  async GET_STARSHIPS_URL({
    commit
  }, data) {
    commit("SET_ISFETCH", false)
    try {
      return instance(data.link).then(response => {
        commit("SET_STARSHIPS", response.data);
        commit("CLEAR_STARSHIPS_SEARCH")
        commit("SET_ISFETCH", true)
        return response;
      })
    } catch (error) {
      console.log(error);
      commit("SET_ISFETCH", true)
      return error;
    }
  },
  async GET_STARSHIPS_NUMBER({
    commit
  }, currentPage) {
    commit("SET_ISFETCH", false)
    try {
      return instance("/?page=" + currentPage).then(response => {
        commit("SET_STARSHIPS", response.data);
        commit("CLEAR_STARSHIPS_SEARCH")
        commit("SET_ISFETCH", true)
        return response;
      })
    } catch (error) {
      console.log(error);
      commit("SET_ISFETCH", true)
      return error;
    }
  },
}