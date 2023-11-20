<template>
    <h2>Estas seguro de que deseas cerrar sesion? </h2>
  <button @click="cerrarSesion()" class="btn btn-danger">Cerrar Sesion</button>
</template>

<script>
export default {
    name:"LogOutComponent",
    methods: {
        cerrarSesion() {
            localStorage.removeItem('response')
        }
    }
}
</script>

<style>

</style>