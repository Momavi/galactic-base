<template>
  <div v-if="currentStarship" class="about">
    <div>
      <h1>{{ currentStarship.name }}</h1>
      <div class="about__wrapper">
        <p>
          Модель: <strong>{{ currentStarship.model }}</strong>
        </p>
        <p>
          Класс корабля: <strong>{{ currentStarship.starship_class }}</strong>
        </p>
        <p>
          Производитель: <strong>{{ currentStarship.manufacturer }}</strong>
        </p>
        <p>
          Цена:
          <strong>{{
            REGULAR_SPACE_FOR_NUMBER(CURRENT_STARSHIP.cost_in_credits)
          }}</strong>
          кредитов
        </p>
        <p>
          Длина: <strong>{{ currentStarship.length }}</strong> км
        </p>
        <p>
          Максимальная атмосферная скорость:
          <strong>{{ currentStarship.max_atmosphering_speed }}</strong>
          КМ/Ч
        </p>
        <p>
          Экипаж: <strong>{{ currentStarship.crew }}</strong> человек
        </p>
        <p>
          Пассажиры: <strong>{{ currentStarship.passengers }}</strong> человек
        </p>
        <p>
          Грузоподъемность:
          <strong>
            <regular-space-for-number
              :number="currentStarship.cargo_capacity"
            />
          </strong>
          кг
        </p>
        <p>
          Гарантия: <strong>{{ currentStarship.consumables }}</strong>
        </p>
        <p>
          Скорость гипердвигателя:
          <strong>{{ currentStarship.hyperdrive_rating }}</strong>
        </p>
        <p>
          MGLT:
          <strong>{{ currentStarship.MGLT }}</strong>
        </p>
        <span v-if="currentStarship.pilots.length > 0">
          Пилоты:
          <p v-for="pilot in currentStarship.pilots" :key="pilot">
            {{ pilot }},
          </p>
        </span>
        <span v-else>
          Пилоты: неизвестны
        </span>
        <span v-if="currentStarship.films">
          Фильмы:
          <p v-for="film in currentStarship.films" :key="film">{{ film }},</p>
        </span>
        <p>
          Дата создания:
          <strong>{{ currentStarship.created }}</strong>
        </p>
        <p>
          Дата изменения:
          <strong>{{ currentStarship.edited }}</strong>
        </p>
        <p>
          Ссылка на источник:
          <a :href="currentStarship.url">{{ currentStarship.url }}</a>
        </p>
      </div>
    </div>
  </div>
  <div v-else>Тут ничего нет, попробуйте перейти на главную страницу</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "About",
  components: { RegularSpaceForNumber },
  computed: {
    ...mapState(["currentStarship"]),
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
