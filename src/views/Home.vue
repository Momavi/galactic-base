<template>
  <div v-if="starships !== null">
    <Input />
    <div v-if="!starshipsSearch">
      <Paginator />
      <h2>Количество кораблей: {{ starships.count }}</h2>
    </div>
    <div v-else>
      <h2>Найдено кораблей: {{ starshipsSearch.length }}</h2>
    </div>
    <div v-if="isFetch">
      <Starships />
    </div>
    <div v-else>
      <img src="@/assets/preloader.svg" alt="" />
    </div>
  </div>
  <div v-else>
    <img src="@/assets/preloader.svg" alt="" />
  </div>
</template>

<script>
import Paginator from "@/components/Paginator.vue";
import Starships from "@/components/Starships.vue";
import Input from "@/components/Input.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["starships", "isFetch", "starshipsSearch"]),
  },
  components: {
    Input,
    Paginator,
    Starships,
  },
};
</script>
