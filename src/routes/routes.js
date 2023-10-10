import login from "../components/login.vue"
import facil from "../components/Facil.vue"
import medio from "../components/Medio.vue"
import dificil from "../components/Dificil.vue"

import juegoa from "../components/juegoa.vue" //paises
import juegob from "../components/juegob.vue" //animales
import juegoc from "../components/juegoc.vue" //colores
import juegod from "../components/juegosd.vue" //frutas



import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", component: login },
  { path: "/facil", component: facil },
  { path: "/medio", component: medio },
  { path: "/dificil", component: dificil },
  { path: "/juegoa", component: juegoa },
  { path: "/juegob", component: juegob },
  { path: "/juegoc", component: juegoc },
  { path: "/juegod", component: juegod },



]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})