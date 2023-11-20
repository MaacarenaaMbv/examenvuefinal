<template>
  <MenuNavegacion/>
  <router-view></router-view>
</template>

<script>
import MenuNavegacion from './components/MenuNavegacion.vue';

export default {
  name: 'App',
  components: {
    MenuNavegacion
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
