<template>
  <div>
    <h1>Compras realizadas por el usuario</h1>
    <div v-for="compra in compras" :key="compra"><br/>
      <h3 style="color: blue;">Id del cubo: {{ compra.idCubo }}</h3>
      <h3 style="color: pink;">Id del pedido: {{ compra.idPedido }}</h3>
      <h3 style="color: blueviolet;">Id del Usuario: {{ compra.idUsuario }}</h3>
      <h3 style="color: green;">Fecha del pedido: {{ compra.fechaPedido }}</h3>
    </div><br/>
    <h4>{{ mensaje }}</h4>
  </div>
</template>

<script>
import ServiceLogin from '@/services/ServiceLogin';
const service = new ServiceLogin();

export default {
  name: "ComprasUsuario",
  mounted() {
    var token = localStorage.getItem('response')
    service.verComprasUsuario(token).then(response => {
      this.compras = response.data;
      console.log(this.compras)
    })
    .catch(error => {
        this.mensaje = "Tienes que iniciar sesion primero"
        console.log(error)
    });
  },
  data(){
    return {
      compras: [],
      mensaje: ""
    }
  }
}
</script>

<style>

</style>