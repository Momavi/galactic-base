<template>
  <div class="paginator">
    <div
      class="paginator__btn-prev paginator__btn"
      v-bind:class="{ active: STARSHIPS.previous }"
      @click="this.GET_STARSHIPS_PREV()"
    >
      Пред
    </div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <div
      class="paginator__btn-next paginator__btn"
      v-bind:class="{ active: STARSHIPS.next }"
      @click="this.GET_STARSHIPS_NEXT()"
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
  },
  methods: {
    ...mapActions(["GET_STARSHIPS_PREV"]),
    ...mapActions(["GET_STARSHIPS_NEXT"]),
  },
};
</script>

<style scoped lang="scss">
.paginator {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  &__btn {
    background-color: #0d2e1f67;
    border: 2px solid #013820b6;
    color: rgba(216, 216, 216, 0.404);
    border-radius: 15px;
    margin: 0;
    padding: 6px 15px;
    user-select: none;
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
