import router from "../../router";

export default {
  CURRENT_STARSHIP({
    commit
  }, data) {
    commit("SET_CURRENT_STARSHIP", data)
    router.push('about')
  },
  SET_STARSHIP_FOR_NAME({
    commit
  }, data) {
    const ship = []
    const term = data.name.toLowerCase();
    for (var key in data.STARSHIPS.results) {
      data.STARSHIPS.results[key].name.toLowerCase().startsWith(term) ?
        ship.push(data.STARSHIPS.results[key]) :
        null
    }
    commit("SET_STARSHIPS_RESULTS", ship)
  },
  CLEAR_STARSHIPS_SEARCH({
    commit
  }) {
    commit("CLEAR_STARSHIPS_SEARCH")
  },
  SET_CHANGE_POPUP_SHOW({
    commit
  }, truth) {
    commit("CHANGE_POPUP_SHOW", truth)
  },
  SET_PAGE_SIZE({
    commit
  }, size) {
    commit("SET_PAGE_SIZE", size)
  },
}