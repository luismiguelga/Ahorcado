import { createApp } from 'vue'
import './style.css'
//Conecta el html con el main.js y el main.js se conecta con el vue
import App from './App.vue'
import juego from './components/juego.vue'
import frutas from './components/juegos-f.vue'
import animales from './components/juegos-a.vue'
import colores from './components/juegos-c.vue'
// separador



import Facil from './components/Facil.vue'
import Medio from './components/Medio.vue'
import Dificil from './components/Dificil.vue'


createApp(App).mount('#app')
createApp(juego).mount('#juego')
createApp(frutas).mount('#frutas')
createApp(animales).mount('#animales')
createApp(colores).mount('#colores')


document.querySelector('#btnfac').addEventListener("click", () => {
  createApp(Facil).mount('#app')
}),

  document.querySelector('#btnmed').addEventListener("click", () => {
    createApp(Medio).mount('#app')
  }),


  document.querySelector('#btndif').addEventListener("click", () => {
    createApp(Dificil).mount('#app')
  })




