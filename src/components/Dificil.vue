<template>
  <h1>Selecciona la categoria</h1>
  <a href="../../index.html" id="Volver">Volver</a>
  <div id="flex">

    <div id="tarjetas">

      <div id="categoria2" @click="selectCategory('countriesList')" :class="{ selected: selectedCategory === 'countriesList' }">
        <img src="https://img.freepik.com/vector-premium/ilustracion-globo-planeta-tierra-plana-mapa-mundo_385450-21.jpg?w=2000  ">
        <br>
        <h2>Paises</h2>

        <button id="jugar" type="button" class="button1"><router-link to="/juegoa" class="text-black">play</router-link></button>

        <router-view></router-view>

      </div>

    </div>

    <div id="tarjetas">

      <div id="categoria2">
        <img  src="https://i.pinimg.com/originals/4c/18/68/4c18686eae46e736254c6b4e1ba6b98a.png">
        <br>
        <h2>Frutas</h2>
 <button id="jugar" type="button" class="button1"><router-link to="/juegod" class="text-black">play</router-link></button>

<router-view></router-view>
      </div>

    </div>

    <div id="tarjetas">

      <div id="categoria3"><img
        src="https://cdn.pixabay.com/photo/2020/03/22/12/10/animal-cartoon-face-4956914_1280.png">
        <br>
        <h2>Animales</h2>

        <button id="jugar" type="button" class="button1"><router-link to="/juegob" class="text-black">play</router-link></button>

<router-view></router-view>
      </div>

    </div>

    <div id="tarjetas">

      <div id="categoria4"><img
          src="https://www.clipartmax.com/png/full/194-1949271_l%C3%A1pices-de-colores-de-dibujos-animados-lapices-de-colores-animados-png.png">
        <br>
        <h2>Colores</h2>
        <button id="jugar" type="button" class="button1"><router-link to="/juegoc" class="text-black">play</router-link></button>

<router-view></router-view>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  selectedCategory: String,
});

const emit = defineEmits();

const selectCategory = (category) => {
  emit('categorySelected', category);
};


</script>


<style scoped>
h1 {
  text-align: center;
  text-align: center;
  font-size: 40px;
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;

}
h2 {
  text-align: center;
  text-align: center;
  font-size: 28px;
  color: rgb(0, 0, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;

}

#flex {
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 25% 25% 25% 25%;
}

#tarjetas {
  margin: 60px;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 2px rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0.562);
}


img {
  width: 160px;
  height: 190px;
}


#categoria1,
#categoria2,
#categoria3,
#categoria4 {
  display: flex;
  justify-items: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

#jugar{
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: rgb(182, 218, 252);
  border: 0px;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  text-decoration: none;
}
#jugar:hover {
  background-color: rgb(54, 100, 250);
  width: 120px;
  height: 45px;
}

body {
  padding: 0;
  margin: 0;
  background-color: black;
  background-image: url("");
  background-repeat: no-repeat; 
  background-size: cover; 
}
#Volver{
  color: rgb(255, 255, 255);
  position: fixed;
  top: 90%;
  left: 90PX;
  font-size: 2em;
  text-decoration: none;
}

</style>