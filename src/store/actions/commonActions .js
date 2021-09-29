import router from "../../router";

export default {
  CURRENT_STARSHIP({
    commit
  }, data) {
    commit("SET_CURRENT_STARSHIP", data.starship)
    const link_number = Number(data.url.match(/\d+/))
    router.push({
      path: `/about/${link_number}`
    })
  },
  CLEAR_STARSHIPS_SEARCH({
    commit
  }) {
    commit("CLEAR_STARSHIPS_SEARCH")
    router.push({
      path: '/',
    })
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