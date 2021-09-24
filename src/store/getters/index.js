export default {
  STARSHIPS(state) {
    return state.starships;
  },
  CURRENT_STARSHIP(state) {
    return state.currentStarship
  },
  CURRENTPAGE(state) {
    return state.currentPage;
  },
  FETCH(state) {
    return state.isFetch;
  },
  PAGESIZE(state) {
    return state.pageSize;
  }
}