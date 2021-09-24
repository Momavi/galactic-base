<template>
  <div v-if="STARSHIPS !== null">
    <Input />
    <Paginator />
    <h2>Количество кораблей: {{ STARSHIPS.count }}</h2>
    <div class="wrapper" v-if="ISFETCH">
      <Starship />
    </div>
    <div v-else>
      <img src="@/assets/preloader.svg" alt="" />
    </div>
  </div>
  <div v-else>
    <img src="@/assets/preloader.svg" alt="" />
  </div>
</template>

<script lang="js">
import Paginator from "@/components/Paginator.vue";
import Starship from "@/components/Starship.vue";
import Input from "@/components/Input.vue";

export default {
  name: 'Home',
  computed: {
    STARSHIPS() {
      return this.$store.getters.STARSHIPS;
    },
    ISFETCH() {
      return this.$store.getters.ISFETCH;
    }
  },
  components: {
    Input,
    Paginator,
    Starship,
  },
}
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
