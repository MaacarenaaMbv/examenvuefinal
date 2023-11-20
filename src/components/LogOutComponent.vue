<template>
    <h2>Estas seguro de que deseas cerrar sesion? </h2>
  <button @click="cerrarSesion()" class="btn btn-danger">Cerrar Sesion</button>
    <h4>{{ this.mensaje }}</h4>
</template>

<script>
export default {
    name:"LogOutComponent",
    methods: {
        cerrarSesion() {
            localStorage.removeItem('response')
            this.mensaje = "Sesion cerrada correctamente"
        }
    },
    data() {
        return{
            mensaje: ""
        }
    }
}
</script>

<style>

</style>