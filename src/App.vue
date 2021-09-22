<template>
  <div id="nav">
    <router-link to="/">Cписок кораблей</router-link> |
    <router-link to="/about">Текущий корабль</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
