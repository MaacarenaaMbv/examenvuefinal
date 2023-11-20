<template>
  <div>
    <h1>Cubos de la marca {{ this.$route.params.marca }}</h1>

    <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem; margin: 0 auto;">
      <img :src="cubo.imagen" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">Marca: {{ cubo.marca }}</p>
        <h4 class="card-title" style="color:green">Precio: {{ cubo.precio }}</h4>
        <router-link :to="'/detalles/' + cubo.idCubo + '/' + cubo.marca" class="btn btn-primary">Detalles</router-link>
        <router-link :to="'/comentarios/' + cubo.idCubo + '/' + cubo.marca" class="btn btn-danger">Comentarios</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
  name: "CubosComponent",
  mounted() {
    var marca = this.$route.params.marca
    service.findCubosMarca(marca).then(result => {
      this.cubos = result;
    })
  },
   /*updated() {
   var marca = this.$route.params.marca
    service.findCubosMarca(marca).then(result => {
      this.cubos = result;
    })
  },*/
  data() {
    return {
      cubos: [],
    }
  }
}
</script>

<style>

</style>