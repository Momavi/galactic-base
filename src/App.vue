<template>
  <div id="nav">
    <router-link @click="CLEAR_STARSHIPS_SEARCH()" class="nav__link" to="/"
      >Cписок кораблей</router-link
    >
    <span v-if="CURRENT_STARSHIP">
      |
      <router-link to="/about">Текущий корабль</router-link>
    </span>
  </div>
  <router-view />
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  components: {},
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["STARSHIPS"]),
    ...mapGetters(["CURRENT_STARSHIP"]),
  },
  methods: {
    ...mapActions(["GET_STARSHIPS"]),
    ...mapActions(["CLEAR_STARSHIPS_SEARCH"]),
  },
  mounted() {
    this.GET_STARSHIPS();
  },
};
</script>

<style lang="scss">
body {
  background-color: #131516;
  margin: 0;
}
::-webkit-scrollbar {
  width: 14px;
  background-color: #1f1d1d;
}
::-webkit-scrollbar-thumb {
  background-color: #27634a;
}
::-webkit-scrollbar-track {
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #131516;
  color: #cfd2d4;
}

#nav {
  padding: 30px;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
