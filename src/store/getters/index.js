export default {
  STARSHIPS_PAGE_SIZE(state) {
    return Math.round(state.starships.count / 10)
  },
  PAGINATOR_PAGE(state) {
    return String(state.starships.next.match(/\d+/))
  },
}