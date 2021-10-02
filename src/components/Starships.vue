<template>
  <span class="wrapper" v-if="!starshipsSearch" v-once>
    <Starship :data="starships.results" />
  </span>
  <div class="wrapper" v-else>
    <Starship :data="starshipsSearch" />
  </div>
</template>

<script>
import Starship from "./Starship.vue";
import { mapState } from "vuex";

export default {
  name: "Starships",
  components: { Starship },
  computed: {
    ...mapState(["starships", "starshipsSearch"]),
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
