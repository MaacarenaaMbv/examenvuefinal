<template>
  <div>
    <h1>Home Component Cubos</h1>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-around;">
      <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem; margin: 0 auto; display: flex;">
      <img :src="cubo.imagen" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">Marca: {{ cubo.marca }}</p>
        <h4 class="card-title" style="color:green">Precio: {{ cubo.precio }}</h4>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name: "HomeComponent",
    mounted() {
        service.getCubos().then(result => {
            this.cubos = result;
        })
    },
    data() {
        return  {
            cubos: []
        }
    }
}
</script>

<style>

</style>