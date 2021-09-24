import axios from "axios";

export default {
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
  async GET_STARSHIPS_URL({
    commit
  }, data) {
    try {
      const response = await axios(data.link, {
        method: "GET",
      });
      0
      data.atribute === "next" ?
        commit("INCREMENT_CURRENTPAGE") :
        commit("DECREMENT_CURRENTPAGE")

      commit("SET_STARSHIPS", response.data);

      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async GET_STARSHIPS_NUMBER({
    commit
  }, number) {
    try {
      const response = await axios("https://swapi.dev/api/starships/?page=" + number + "&format=json", {
        method: "GET",
      });
      commit("SET_STARSHIPS", response.data);
      commit("SET_CURRENTPAGE", number)
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
}