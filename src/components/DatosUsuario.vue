<template>
    <h1>Perfil de usuario</h1>
  <div style="margin: 0 auto; width: 70%;">
    <label>Id Usuario: </label>
    <input type="text" class="form-control" :value="usuario.idUsuario" disabled><br/>
    <label>Nombre: </label>
    <input type="text" class="form-control" :value="usuario.nombre" disabled><br/>
    <label>Email: </label>
    <input type="text" class="form-control" :value="usuario.email" disabled><br/>
  </div>
</template>

<script>
import ServiceLogin from '@/services/ServiceLogin';
const service = new ServiceLogin();

export default {
  name: "DatosUsuario",
  mounted(){
    var token = localStorage.getItem('response')
    service.obtenerDatosUsuario(token).then(datosresponse => {
      this.usuario = datosresponse.data;
      console.log(this.usuario)
    })
  },
  data(){
    return{
      usuario: null
    }
  }
}
</script>

<style>

</style>