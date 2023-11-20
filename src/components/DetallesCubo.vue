<template>
  <div>
    <router-link :to="'/cubos/' + this.$route.params.marca" class="btn btn-success">Back</router-link>
    <h1>Cubo con id: {{this.$route.params.id}}</h1>
    <div v-if="cubo" :key="comentario" style="text-align: left; margin: 3em;">
        <img :src="cubo.imagen" style="width: 200px; height: 200px;"/>
        <h4>Cubo: {{cubo.nombre}}</h4>
        <h2>Modelo: {{ cubo.modelo }}</h2>
        <h2>Marca: {{ cubo.marca }}</h2>
        <h2>Color: {{ cubo.color }}</h2>
        <h2>Precio: {{ cubo.precio }}</h2>
        <h2>Valoracion: {{ cubo.valoracion }}</h2>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
name: "DetallesCubo",
mounted() {
  var id = this.$route.params.id;
  service.getCubosId(id).then(result => {
    this.cubo = result
  })
},
data() {
  return{
    cubo: null,
  }
}
}
</script>

<style>

</style>