import axios from "axios";

export default {
  async GET_STARSHIPS({
    commit
  }) {
    commit("SET_ISFETCH", false)
    try {
      const response = await axios("https://swapi.dev/api/starships/?format=json", {
        method: "GET",
      });
      commit("SET_PAGE_SIZE", Math.round(response.data.count / 10))
      commit("SET_STARSHIPS", response.data);
      commit("SET_ISFETCH", true)
      return response;
    } catch (error) {
      console.log(error);
      commit("SET_ISFETCH", true)
      return error;
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
      const response = await axios(data.link, {
        method: "GET",
      });
      commit("SET_STARSHIPS", response.data);
      commit("CLEAR_STARSHIPS_SEARCH")
      commit("SET_ISFETCH", true)
      return response;
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
      const response = await axios("https://swapi.dev/api/starships/?page=" + currentPage + "&format=json", {
        method: "GET",
      });
      commit("SET_STARSHIPS", response.data);
      commit("SET_CURRENTPAGE", currentPage);
      commit("CLEAR_STARSHIPS_SEARCH")
      commit("SET_ISFETCH", true)
      return response;
    } catch (error) {
      console.log(error);
      commit("SET_ISFETCH", true)
      return error;
    }
  },
}