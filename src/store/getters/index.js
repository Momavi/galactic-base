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
  ISFETCH(state) {
    return state.isFetch;
  },
  PAGESIZE(state) {
    return state.pageSize;
  }
}