<template>
  <div>
    <div style="width: 80%; margin: 0 auto;">
        <label class="form-label"> Email </label><br/>
        <input type="text" v-model="email" placeholder="Email" class="form-control"><br/>
        <label class="form-label"> Contraseña </label><br/>
        <input type="password" v-model="password" placeholder="Contraseña" class="form-control"><br/>
        <button @click="inicioUsuario()" class="btn btn-primary">Iniciar Sesion</button>
    </div>
  </div>
</template>

<script>
import ServiceLogin from "./../services/ServiceLogin";
const service = new ServiceLogin();

export default {
    name: "LoginComponent",
    methods: {
        inicioUsuario() {
            const newUser = {
                email: this.email,
                password: this.password,
                usuario: []
            };
            console.log(newUser);

            service.iniciarSesion(newUser).then(response => {
                const token = response.data.response;
                console.log(token);
                //Guardar el token en localStorage
                localStorage.setItem('response', token);
                /*service.obtenerDatosUsuario(token).then(datosresponse => {
                    this.usuario = datosresponse.data;
                    this.$router.push('/datosusuario/' + this.usuario.idUsuario + '/' + this.usuario.nombre + '/' + this.usuario.email);
                    console.log(this.usuario)
                })*/
            })
            .catch(error => {
                console.error(error);
                alert('Datos incorrectos. Por favor, verifique su email y contraseña.');
            });

        }
    },
    /*mounted() {
        const storedToken = localStorage.getItem('response')
        console.log(storedToken)
    },*/
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style>

</style>