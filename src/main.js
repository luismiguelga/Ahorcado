import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./routes/routes.js"





const app = createApp(App)

app.use(router)
app.mount('#app')



document.querySelector('#btnfac').addEventListener("click", () => {
  createApp(Facil).mount('#app')
}),

  document.querySelector('#btnmed').addEventListener("click", () => {
    createApp(Medio).mount('#app')
  }),


  document.querySelector('#btndif').addEventListener("click", () => {
    createApp(Dificil).mount('#app')
  })




