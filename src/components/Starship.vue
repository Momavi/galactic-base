<template>
  <div v-for="starship in data" :key="starship.name">
    <div class="starship" @click="this.CURRENT_STARSHIP(starship)">
      <div class="starship__data">
        <h3>{{ starship.name }}</h3>
        <p>
          Цена:
          <regular-space-for-number :number="starship.cost_in_credits" />
          кредитов
        </p>
        <p>Класс: {{ starship.starship_class }}</p>
      </div>
      <div>
        <p class="starship__manufacturer">
          Производитель: {{ starship.manufacturer }}
        </p>
        <button class="starship__btn">
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RegularSpaceForNumber from "./RegularSpaceForNumber.vue";
import { mapActions } from "vuex";

export default {
  name: "Starship",
  components: { RegularSpaceForNumber },
  props: ["data"],
  methods: {
    ...mapActions(["CURRENT_STARSHIP"]),
  },
};
</script>

<style scoped lang="scss">
.starship {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  min-height: 350px;
  margin: 40px 25px 15px;
  padding: 15px;
  font-size: 18px;
  border: 2px solid #42b98371;
  border-radius: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.726);
  cursor: pointer;

  &__data {
    margin-bottom: 10px;
  }
  &__btn {
    background-color: #42b98367;
    border: 2px solid #0ece78b6;
    border-radius: 15px;
    margin: 0;
    padding: 9px 16px;
    color: rgb(216, 216, 216);
    cursor: pointer;
    transition: all 0.3s;
    &-link {
      text-decoration: none;
      color: #cfd2d4;
    }
    &:hover {
      background-color: #00ff8cb7;
      border: 2px solid #00ff6ada;
      color: rgba(5, 5, 5, 0.87);
    }
  }
  &__manufacturer {
    margin: 9px 0;
    opacity: 0.7;
  }
}
</style>
