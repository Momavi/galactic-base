<template>
  <span class="wrapper" v-if="!STARSHIPS_SEARCH">
    <StarshipItem :data="STARSHIPS.results" />
  </span>
  <div class="wrapper" v-else>
    <StarshipItem :data="STARSHIPS_SEARCH" />
  </div>
</template>

<script>
import StarshipItem from "./StarshipItem.vue";
export default {
  components: { StarshipItem },
  name: "Starship",
  computed: {
    STARSHIPS() {
      return this.$store.getters.STARSHIPS;
    },
    STARSHIPS_SEARCH() {
      return this.$store.getters.STARSHIPS_SEARCH;
    },
  },

};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
}
</style>
