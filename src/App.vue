<template>
  <div id="nav">
    <router-link class="nav__link" to="/">Cписок кораблей</router-link>
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
