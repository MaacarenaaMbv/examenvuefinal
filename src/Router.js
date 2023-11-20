import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CubosComponent from "./components/CubosComponent.vue"
import DetallesComponent from "./components/DetallesCubo.vue";
import ComentariosComponent from "./components/ComentariosComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import LogOutComponent from "./components/LogOutComponent.vue"
import DatosUsuario from "./components/DatosUsuario.vue"
import ComprasUsuario from "./components/ComprasUsuario.vue"

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/cubos/:marca", component: CubosComponent
    },
    {
        path: "/detalles/:id/:marca", component: DetallesComponent
    },
    {
        path: "/comentarios/:id/:marca", component: ComentariosComponent
    }
    ,
    {
        path: "/login", component: LoginComponent
    }
    ,
    {
        path: "/logout", component: LogOutComponent
    }
    ,
    /*{
        path: "/datosusuario/:idUsuario/:nombre/:email", component: DatosUsuario
    }*/
    {
        path: "/datosusuario", component: DatosUsuario
    },
    {
        path: "/comprasusuario", component: ComprasUsuario
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;