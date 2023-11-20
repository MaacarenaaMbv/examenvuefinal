<template>
    <h1>Perfil de usuario</h1>
  <div v-if="usuario" style="margin: 0 auto; width: 70%;">
    <label>Id Usuario: </label>
    <input type="text" class="form-control" :value="usuario.idUsuario" disabled><br/>
    <label>Nombre: </label>
    <input type="text" class="form-control" :value="usuario.nombre" disabled><br/>
    <label>Email: </label>
    <input type="text" class="form-control" :value="usuario.email" disabled><br/>
  </div>
  <h4>{{ mensaje }}</h4>
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
    .catch(error => {
        this.mensaje = "Tienes que iniciar sesion primero"
        console.log(error)
    });
  },
  data(){
    return{
      usuario: null,
      mensaje: ""
    }
  }
}
</script>

<style>

</style>