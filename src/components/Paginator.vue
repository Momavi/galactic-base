<template>
  <div class="paginator">
    <div
      class="paginator__btn-prev paginator__btn"
      v-bind:class="{ active: STARSHIPS.previous }"
      @click="
        this.GET_STARSHIPS_URL({ link: STARSHIPS.previous, atribute: 'prev' })
      "
    >
      Пред
    </div>
    <ul class="paginator__list">
      <li
        class="paginator__list-li"
        v-for="n in PAGESIZE"
        :key="n"
        v-bind:class="{ active: CURRENTPAGE === n }"
        @click="this.GET_STARSHIPS_NUMBER(n)"
      >
        {{ n }}
      </li>
    </ul>
    <div
      class="paginator__btn-next paginator__btn"
      v-bind:class="{ active: STARSHIPS.next }"
      @click="
        this.GET_STARSHIPS_URL({ link: STARSHIPS.next, atribute: 'next' })
      "
    >
      След
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Paginator",
  computed: {
    STARSHIPS() {
      return this.$store.getters.STARSHIPS;
    },
    CURRENTPAGE() {
      return this.$store.getters.CURRENTPAGE;
    },
    PAGESIZE() {
      return this.$store.getters.PAGESIZE;
    },
  },
  methods: {
    ...mapActions(["GET_STARSHIPS_URL"]),
    ...mapActions(["GET_STARSHIPS_NUMBER"]),
  },
};
</script>

<style scoped lang="scss">
.active {
  color: #00ff8ccb;
  text-decoration: underline;
}
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
      border-radius: 25px;
      cursor: pointer;
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
    cursor: pointer;
    transition: all 0.3s;
    &-prev {
      margin-right: 30px;
    }
    &-next {
      margin-left: 30px;
    }
    &.active {
      background-color: #42b98367;
      border: 2px solid #0ece78b6;
      color: rgb(216, 216, 216);
      &:hover {
        background-color: #00ff8ccb;
        border: 2px solid #00ff6aee;
        color: rgba(5, 5, 5, 0.87);
      }
    }
  }
}
</style>
