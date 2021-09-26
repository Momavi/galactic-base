import router from "../../router";

export default {
  CURRENT_STARSHIP({
    commit
  }, data) {
    commit("SET_CURRENT_STARSHIP", data)
    router.push('about')
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