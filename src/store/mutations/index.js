export default {
  SET_STARSHIPS: (state, starships) => {
    state.starships = starships;
  },
  SET_STARSHIPS_RESULTS: (state, starships) => {
    state.starshipsSearch = starships;
  },
  SET_CURRENTPAGE: (state, page) => {
    state.currentPage = page;
  },
  SET_CURRENT_STARSHIP: (state, starship) => {
    state.currentStarship = starship;
  },
  SET_ISFETCH: (state, truth) => {
    state.isFetch = truth;
  },
  SET_PAGE_SIZE: (state, size) => {
    state.pageSize = size;
  },
  CLEAR_STARSHIPS_SEARCH: (state) => {
    state.starshipsSearch = null;
  },
  INCREMENT_CURRENTPAGE: (state) => {
    state.currentPage < state.pageSize ?
      state.currentPage = state.currentPage + 1 : null
  },
  DECREMENT_CURRENTPAGE: (state) => {
    state.currentPage > 1 ?
      state.currentPage = state.currentPage - 1 : null
  },
}