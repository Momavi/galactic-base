export default {
  CURRENT_STARSHIP({
    commit
  }, data) {
    commit("SET_CURRENT_STARSHIP", data)
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
}