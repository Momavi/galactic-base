<template>
  <div class="paginator">
    <div
      v-if="isFetch && currentPage !== 1"
      class="paginator__btn-prev paginator__btn"
      v-bind:class="{ active: starships.previous }"
      @click="
        prevPage();
        this.GET_STARSHIPS_URL({ link: starships.previous });
      "
    >
      Пред
    </div>
    <div v-else class="paginator__btn-prev paginator__btn">Пред</div>
    <ul class="paginator__list">
      <li
        class="paginator__list-li"
        v-for="n in STARSHIPS_PAGE_SIZE"
        :key="n"
        :class="{ active: currentPage === n }"
        @click="
          setPage(n);
          this.GET_STARSHIPS_NUMBER(n);
        "
      >
        {{ n }}
      </li>
    </ul>
    <div
      v-if="isFetch && currentPage !== STARSHIPS_PAGE_SIZE"
      class="paginator__btn-next paginator__btn"
      :class="{ active: starships.next }"
      @click="
        nextPage();
        this.GET_STARSHIPS_URL({ link: starships.next });
      "
    >
      След
    </div>
    <div v-else class="paginator__btn-next paginator__btn">След</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Paginator",
  data: function() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(["starships", "isFetch"]),
    ...mapGetters(["STARSHIPS_PAGE_SIZE", "PAGINATOR_PAGE"]),
  },
  methods: {
    ...mapActions(["GET_STARSHIPS_URL"]),
    ...mapActions(["GET_STARSHIPS_NUMBER"]),
    nextPage() {
      this.currentPage <
      Math.round(this.$store.getters.STARSHIPS_PAGE_SIZE / 10)
        ? null
        : this.currentPage++;
    },
    prevPage() {
      this.currentPage > 1 ? this.currentPage-- : null;
    },
    setPage(number) {
      this.currentPage = number;
    },
  },
};
</script>

<style scoped lang="scss">
.paginator {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  &__list {
    display: flex;
    padding: 0;
    &-li {
      margin-right: 10px;
      list-style-type: none;
      padding: 5px;
      border: 2px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      &.active {
        color: #00ff8ccb;
        border-bottom: 2px solid #00ff8ccb;
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        border: 2px solid #00ff8ccb;
        background-color: #093a23cb;
      }
    }
  }
  &__btn {
    background-color: #0d2e1f67;
    border: 2px solid #013820b6;
    color: rgba(216, 216, 216, 0.404);
    border-radius: 15px;
    margin: 0;
    padding: 6px 15px;
    text-decoration: none;
    user-select: none;
    transition: all 0.3s;
    &-prev {
      margin-right: 25px;
    }
    &-next {
      margin-left: 25px;
    }
    &.active {
      background-color: #42b98367;
      border: 2px solid #0ece78b6;
      color: rgb(216, 216, 216);
      cursor: pointer;
      &:hover {
        background-color: #00ff8ccb;
        border: 2px solid #00ff6aee;
        color: rgba(5, 5, 5, 0.87);
      }
    }
  }
}
</style>
