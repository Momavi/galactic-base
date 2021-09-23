<template>
  <div v-for="starship in STARSHIPS.results" :key="starship.name">
    <div class="starship">
      <div class="starship__data">
        <h3>{{ starship.name }}</h3>
        <p>Цена в кредитах: {{ starship.cost_in_credits }}</p>
        <p>Класс: {{ starship.starship_class }}</p>
      </div>
      <div>
        <button class="starship__btn">Подробнее</button>
        <p class="starship__manufacturer">
          Производитель: {{ starship.manufacturer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Starship",
  computed: {
    STARSHIPS() {
      return this.$store.getters.STARSHIPS;
    },
  },
};
</script>

<style scoped lang="scss">
.starship {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 250px;
  min-height: 300px;
  margin: 40px 25px 15px;
  padding: 15px;
  font-size: 18px;
  border: 2px solid #42b98371;
  border-radius: 30px;
  &__data {
    margin-bottom: 10px;
  }
  &__btn {
    background-color: #42b98367;
    border: 2px solid #0ece78b6;
    border-radius: 15px;
    margin: 0;
    padding: 6px 15px;
    color: rgb(216, 216, 216);
    transition: all 0.3s;
    &:hover {
      background-color: #00ff8ccb;
      border: 2px solid #00ff6aee;
      color: rgba(5, 5, 5, 0.87);
    }
  }
  &__manufacturer {
    margin: 9px 0;
    opacity: 0.7;
  }
}
</style>
