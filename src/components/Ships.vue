<template >
  <div v-if="STARSHIPS !== null">
    <div class="hello"></div>
    <h2>Количество кораблей: {{ STARSHIPS.count }}</h2>
    <div
      class="wrapper"
      v-for="starship in STARSHIPS.results"
      :key="starship.name"
    >
      <div class="starship">
        <h3>{{ starship.name }}</h3>
        <p>Цена в кредитах: {{ starship.cost_in_credits }}</p>
        <p>Класс: {{ starship.starship_class }}</p>
        <p class="starship__manufacturer">
          Производитель: {{ starship.manufacturer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'Ships',
  computed: {
    STARSHIPS() {
      return this.$store.getters.STARSHIPS;
    }
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.starship {
  margin-bottom: 120px;
  padding: 20px;
  border: 2px solid #42b98371;
  border-radius: 30px;
  &__manufacturer {
    margin-top: 40px;
    opacity: 0.75;
  }
}
</style>
