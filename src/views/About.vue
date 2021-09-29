<template>
  <div class="about">
    <div v-if="CURRENT_STARSHIP">
      <h1>{{ CURRENT_STARSHIP.name }}</h1>
      <div class="about__wrapper">
        <p>
          Модель: <strong>{{ CURRENT_STARSHIP.model }}</strong>
        </p>
        <p>
          Класс корабля: <strong>{{ CURRENT_STARSHIP.starship_class }}</strong>
        </p>
        <p>
          Производитель: <strong>{{ CURRENT_STARSHIP.manufacturer }}</strong>
        </p>
        <p>
          Цена:
          <strong>{{
            REGULAR_SPACE_FOR_NUMBER(CURRENT_STARSHIP.cost_in_credits)
          }}</strong>
          кредитов
        </p>
        <p>
          Длина: <strong>{{ CURRENT_STARSHIP.length }}</strong> км
        </p>
        <p>
          Максимальная атмосферная скорость:
          <strong>{{ CURRENT_STARSHIP.max_atmosphering_speed }}</strong>
          КМ/Ч
        </p>
        <p>
          Экипаж: <strong>{{ CURRENT_STARSHIP.crew }}</strong> человек
        </p>
        <p>
          Пассажиры: <strong>{{ CURRENT_STARSHIP.passengers }}</strong> человек
        </p>
        <p>
          Грузоподъемность:
          <strong>{{
            REGULAR_SPACE_FOR_NUMBER(CURRENT_STARSHIP.cargo_capacity)
          }}</strong>
          кг
        </p>
        <p>
          Гарантия: <strong>{{ CURRENT_STARSHIP.consumables }}</strong>
        </p>
        <p>
          Скорость гипердвигателя:
          <strong>{{ CURRENT_STARSHIP.hyperdrive_rating }}</strong>
        </p>
        <p>
          MGLT:
          <strong>{{ CURRENT_STARSHIP.MGLT }}</strong>
        </p>
        <span v-if="CURRENT_STARSHIP.pilots.length > 0">
          Пилоты:
          <p v-for="pilot in CURRENT_STARSHIP.pilots" :key="pilot">
            {{ pilot }},
          </p>
        </span>
        <span v-else>
          Пилоты: неизвестны
        </span>
        <span v-if="CURRENT_STARSHIP.films">
          Фильмы:
          <p v-for="film in CURRENT_STARSHIP.films" :key="film">{{ film }},</p>
        </span>
        <p>
          Дата создания:
          <strong>{{ CURRENT_STARSHIP.created }}</strong>
        </p>
        <p>
          Дата изменения:
          <strong>{{ CURRENT_STARSHIP.edited }}</strong>
        </p>
        <p>
          Ссылка на источник:
          <a v-bind:href="CURRENT_STARSHIP.url">{{ CURRENT_STARSHIP.url }}</a>
        </p>
      </div>
    </div>
    <div v-else>Тут ничего нет, перейдите на главную страницу</div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    CURRENT_STARSHIP() {
      return this.$store.getters.CURRENT_STARSHIP;
    },
  },
  methods: {
    REGULAR_SPACE_FOR_NUMBER(number) {
      return number.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
