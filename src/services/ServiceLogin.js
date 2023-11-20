import Global from "@/Global";
import axios from "axios";

export default class ServiceLogin {
    iniciarSesion(usuario) {
        const json = JSON.stringify(usuario);
        const headers = {
            'Content-Type': 'application/json',
        };
        const request = "api/manage/login";
        const url = Global.urlApiCubos + request;
        return axios.post(url,json, { headers })
    }

    obtenerDatosUsuario(token){
        const request = "/api/Manage/PerfilUsuario";
        const url = Global.urlApiCubos + request;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token,
        }
        return axios.get(url, { headers })
    }

    verComprasUsuario(token){
        const request = "/api/compra/ComprasUsuario";
        const url = Global.urlApiCubos + request;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token,
        }
        return axios.get(url, { headers })
    }
}