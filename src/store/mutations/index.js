export default {
  SET_STARSHIPS: (state, starships) => {
    state.starships = starships;
  },
  SET_STARSHIPS_RESULTS: (state, starships) => {
    state.starshipsSearch = starships;
  },
  SET_CURRENT_STARSHIP: (state, starship) => {
    state.currentStarship = starship;
  },
  SET_ISFETCH: (state, truth) => {
    state.isFetch = truth;
  },
  CLEAR_STARSHIPS_SEARCH: (state) => {
    state.starshipsSearch = null;
  },
}