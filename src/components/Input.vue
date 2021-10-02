<template>
  <div class="input__wrapper">
    <input
      class="input-box"
      v-model="searchText"
      type="text"
      placeholder="Название корабля"
      @keyup.enter="
        this.SET_STARSHIP_SEARCH({
          starships: starships,
          name: searchText,
        })
      "
    />
    <div class="input__button">
      <button
        class="input__button-btn"
        @click="
          this.SET_STARSHIP_SEARCH({
            starships: starships,
            name: searchText,
          })
        "
      >
        Поиск
      </button>
      <button
        class="input__reset input__button-btn"
        :class="{ active: starshipsSearch }"
        @click="
          this.CLEAR_STARSHIPS_SEARCH({
            starships: starships,
            name: searchText,
          })
        "
      >
        Очистить поиск
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Input",
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapState(["starships", "starshipsSearch"]),
  },
  methods: {
    ...mapActions(["SET_STARSHIP_SEARCH"]),
    ...mapActions(["CLEAR_STARSHIPS_SEARCH"]),
  },
};
</script>

<style scoped lang="scss">
.input {
  &__wrapper {
    & span {
      margin-right: 15px;
    }
  }
  &-box {
    width: 200px;
    height: 35px;
    padding-left: 15px;
    border: none;
    border-radius: 20px;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, 0.842);
    outline: none;
  }
  &__button {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    &-btn {
      background-color: #6c721367;
      border: 2px solid #747c07b7;
      border-radius: 15px;
      color: rgb(241, 241, 241);
      margin: 0 0 25px 0;
      padding: 9px 16px;
      color: rgb(216, 216, 216);
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #a5af1193;
        border: 2px solid #c7d40ab7;
      }
    }
  }
  &__reset {
    display: none;
    margin-left: 30px;
    &.active {
      display: block;
    }
  }
}
</style>
