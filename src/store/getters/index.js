export default {
  STARSHIPS(state) {
    return state.starships;
  },
  STARSHIPS_SEARCH(state) {
    return state.starshipsSearch;
  },
  CURRENT_STARSHIP(state) {
    return state.currentStarship;
  },
  CURRENT_PAGE(state) {
    return state.currentPage;
  },
  ISFETCH(state) {
    return state.isFetch;
  },
  PAGESIZE(state) {
    return state.pageSize;
  },
}