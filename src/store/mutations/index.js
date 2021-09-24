export default {
  SET_STARSHIPS: (state, starships) => {
    state.starships = starships;
  },
  SET_STARSHIPS_RESULTS: (state, starships) => {
    state.starships.results = starships;
  },
  SET_CURRENTPAGE: (state, page) => {
    state.currentPage = page;
  },
  SET_CURRENT_STARSHIP: (state, starship) => {
    state.currentStarship = starship
  },
  SET_ISFETCH: (state, truth) => {
    state.isFetch = truth;
  },
  INCREMENT_CURRENTPAGE: (state) => {
    state.currentPage = state.currentPage + 1;
  },
  DECREMENT_CURRENTPAGE: (state) => {
    state.currentPage = state.currentPage - 1;
  }
}