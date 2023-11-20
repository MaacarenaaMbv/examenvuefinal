<template>
  <div>
    <router-link :to="'/cubos/' + this.$route.params.marca" class="btn btn-success">Back</router-link>
    <h1>
        Comentarios para el cubo {{ this.$route.params.id }}
    </h1>
    <div v-for="comentario in comentarios" :key="comentario" style="text-align: left; margin: 3em;">
        <h4>{{comentario.comentario}}</h4>
        <h2>Fecha comentario: {{ comentario.fechaComentario }}</h2>
    </div>
    <div v-if="comentarios.length === 0"><h1 style="color: red;">No hay comentarios</h1></div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: "ComentariosComponent",
    mounted() {
        var id = this.$route.params.id;
        service.getComentariosCubo(id).then(result => {
            this.comentarios = result
        })
    },
    data() {
        return {
            comentarios: []
        }
    }
}
</script>

<style>

</style>