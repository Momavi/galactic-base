<template>
  <div v-if="STARSHIPS !== null">
    <Input />
    <div v-if="!STARSHIPS_SEARCH">
      <Paginator />
      <h2>Количество кораблей: {{ STARSHIPS.count }}</h2>
    </div>
    <div v-else>
      <h2>Найдено короблей: {{ STARSHIPS_SEARCH.length }}</h2>
    </div>

    <div v-if="ISFETCH">
      <Starship />
    </div>
    <div v-else>
      <img src="@/assets/preloader.svg" alt="" />
    </div>
    <Popup />
  </div>
  <div v-else>
    <img src="@/assets/preloader.svg" alt="" />
  </div>
</template>

<script lang="js">
import Paginator from "@/components/Paginator.vue";
import Starship from "@/components/Starship.vue";
import Input from "@/components/Input.vue";
import Popup from "@/components/Popup.vue";

export default {
  name: 'Home',
  computed: {
    STARSHIPS() {
      return this.$store.getters.STARSHIPS;
    },
    ISFETCH() {
      return this.$store.getters.ISFETCH;
    },
    STARSHIPS_SEARCH() {
      return this.$store.getters.STARSHIPS_SEARCH;
    },
  },
  components: {
    Input,
    Paginator,
    Starship,
    Popup
  },
}
</script>

<style scoped lang="scss"></style>
