import Global from "@/Global";
import axios from "axios"

export default class ServiceCubos {
    getMarcas() {
        return new Promise(function(resolve){
            var request = "api/Cubos/Marcas";
            var url = Global.urlApiCubos + request;
            var marcas = [];
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }
    getCubos() {
        return new Promise(function(resolve){
            var request = "api/Cubos";
            var url = Global.urlApiCubos + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    findCubosMarca(marca) {
        return new Promise(function(resolve){
            var request = "/api/Cubos/CubosMarca/" + marca;
            var url = Global.urlApiCubos + request;
            var cubos = [];
            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos)
            })
        })
    }

    getComentariosCubo(idCubo){
        return new Promise(function(resolve) {
            var request = "/api/ComentariosCubo/GetComentariosCubo/" + idCubo;
            var url = Global.urlApiCubos + request;
            var comentarios = [];
            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios)
            })
        })

    }

    getCubosId(idCubo){
        return new Promise(function(resolve) {
            var request = "/api/Cubos/" + idCubo;
            var url = Global.urlApiCubos + request;
            var cubo = {};
            axios.get(url).then(response => {
                cubo = response.data;
                resolve(cubo)
            })
        })
    }

}