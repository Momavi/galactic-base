import axios from "axios";
import router from "../../router";

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
        commit("SET_PAGE_SIZE", Math.round(response.data.count / 10))
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
    if (data.name.length > 0) {
      commit("SET_ISFETCH", false)
      let ship = []
      const term = data.name.toLowerCase();
      try {
        for (let i = 1; i < 5; i++) {
          return instance("/?page=" + i).then(response => {
            if (response.status === 200) {
              for (var key in response.data.results) {
                response.data.results[key].name.toLowerCase().indexOf(term) !== -1 ?
                  ship.push(response.data.results[key]) :
                  null
              }
            }
            router.push({
              path: '/',
              query: {
                argument: term
              }
            })
            commit("SET_ISFETCH", true)
            commit("SET_STARSHIPS_RESULTS", ship)
            return response;
          })
        }
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
    data.atribute === "next" ?
      commit("INCREMENT_CURRENTPAGE") :
      commit("DECREMENT_CURRENTPAGE")
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
        commit("SET_CURRENTPAGE", currentPage);
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