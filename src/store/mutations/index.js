export default {
  SET_STARSHIPS: (state, starships) => {
    state.starships = starships;
  },
  SET_CURRENTPAGE: (state, page) => {
    state.currentPage = page;
  },
  SET_CURRENT_STARSHIP: (state, starship) => {
    state.currentStarship = starship
  },
  INCREMENT_CURRENTPAGE: (state) => {
    state.currentPage = state.currentPage + 1;
  },
  DECREMENT_CURRENTPAGE: (state) => {
    state.currentPage = state.currentPage - 1;
  }
}