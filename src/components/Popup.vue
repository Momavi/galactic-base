<template>
  <div
    class="popup"
    v-bind:class="{ active: IS_POPUP_OPEN, close: !IS_POPUP_OPEN }"
  >
    <div class="popup__body">
      <div class="popup__close" @click="SET_CHANGE_POPUP_SHOW(false)">×</div>
      <p class="popup__text">
        Поиск кораблей, временно работает только в рамках одной страницы
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Popup",
  computed: {
    IS_POPUP_OPEN() {
      return this.$store.getters.IS_POPUP_OPEN;
    },
  },
  methods: {
    ...mapActions(["SET_CHANGE_POPUP_SHOW"]),
  },
};
</script>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 5%;
  right: 0;
  &.open {
    height: 100%;
    display: block;
  }
  &.close {
    height: 0;
    display: none;
  }
  &__body {
    margin: 0px 50px;
    max-width: 200px;
    background: rgb(34, 32, 32);
    border: 2px solid #27634a;
    padding: 15px 10px;
    border-radius: 10px;
    max-height: 50%;
  }
  &__close {
    text-align: right;
    margin-top: -15px;
    font-size: 36px;
    cursor: pointer;
    color: rgb(177, 177, 177);
  }
  &__text {
    margin: 0 1px;
  }
}
</style>
