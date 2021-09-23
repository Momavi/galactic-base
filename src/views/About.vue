<template>
  <div class="about">
    <div v-if="CURRENTSTARSHIP">
      <h1>{{ CURRENTSTARSHIP.name }}</h1>
      <div class="about__wrapper">
        <p>
          Модель: <strong>{{ CURRENTSTARSHIP.model }}</strong>
        </p>
        <p>
          Класс корабля: <strong>{{ CURRENTSTARSHIP.starship_class }}</strong>
        </p>
        <p>
          Производитель: <strong>{{ CURRENTSTARSHIP.manufacturer }}</strong>
        </p>
        <p>
          Цена: <strong>{{ CURRENTSTARSHIP.cost_in_credits.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') }}</strong> кредитов
        </p>
        <p>
          Длина: <strong>{{ CURRENTSTARSHIP.length }}</strong> км
        </p>
        <p>
          Максимальная атмосферная скорость:
          <strong>{{ CURRENTSTARSHIP.max_atmosphering_speed }}</strong>
          КМ/Ч
        </p>
        <p>
          Экипаж: <strong>{{ CURRENTSTARSHIP.crew }}</strong> человек
        </p>
        <p>
          Пассажиры: <strong>{{ CURRENTSTARSHIP.passengers }}</strong> человек
        </p>
        <p>
          Грузоподъемность:
          <strong>{{ CURRENTSTARSHIP.cargo_capacity.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') }}</strong> кг
        </p>
        <p>
          Гарантия: <strong>{{ CURRENTSTARSHIP.consumables }}</strong>
        </p>
        <p>
          Скорость гипердвигателя:
          <strong>{{ CURRENTSTARSHIP.hyperdrive_rating }}</strong>
        </p>
        <p>
          MGLT:
          <strong>{{ CURRENTSTARSHIP.MGLT }}</strong>
        </p>
        <span v-if="CURRENTSTARSHIP.pilots">
          Пилоты:
          <p v-for="pilot in CURRENTSTARSHIP.pilots" :key="pilot">
            {{ pilot }},
          </p>
        </span>
        <span v-if="CURRENTSTARSHIP.films">
          Фильмы:
          <p v-for="film in CURRENTSTARSHIP.films" :key="film">{{ film }},</p>
        </span>
        <p>
          Дата создания:
          <strong>{{ CURRENTSTARSHIP.created }}</strong>
        </p>
        <p>
          Дата изменения:
          <strong>{{ CURRENTSTARSHIP.edited }}</strong>
        </p>
        <p>
          Ссылка на источник:
          <a href="CURRENTSTARSHIP.url">{{ CURRENTSTARSHIP.url }}</a>
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
    CURRENTSTARSHIP() {
      return this.$store.getters.CURRENTSTARSHIP;
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
