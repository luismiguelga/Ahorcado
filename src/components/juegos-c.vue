<script>
import { ref } from 'vue';

export default {
  setup() {

    let categoriesList = ref({
  'coloreslist': ['negro', 'naranja', 'rojo', 'naranja', 'cafe', 'verde', 'morado', 'azul']
});

    let selectVector = ref(categoriesList.value['coloreslist'])

    let word = ref('');
    let hiddenWord = ref('');
    const letters = 'abcdefghijklmnñopqrstuvwxyz'.split('');
    let usedLetters = ref([]);
    let incorrectLetters = ref([]);
    let wrongWords = ref(0);
    let maxwrongWords = 6;
    let gameOver = ref(false);
    let youWin = ref(false);

    const chooseWord = () => {
  // Determinar de qué categoría seleccionar palabras
  let selectedCategory = 'coloreslist'; // Por defecto, seleccionar de 'coloreslist'

  word.value = categoriesList.value[selectedCategory][Math.floor(Math.random() * categoriesList.value[selectedCategory].length)];
  hiddenWord.value = '_'.repeat(word.value.length);
};


    const checkLetter = (letter) => {
      if (!(youWin.value || gameOver.value)) {

        if (usedLetters.value.includes(letter)) { return; }
        usedLetters.value.push(letter);

        if (word.value.includes(letter)) {
          for (let i = 0; i < word.value.length; i++) {
            if (word.value[i] === letter) {
              hiddenWord.value = hiddenWord.value.substring(0, i) + letter + hiddenWord.value.substring(i + 1);
            }
          }
          if (!hiddenWord.value.includes('_')) {
            gameOver.value = true;
            youWin.value = true;
          }
        } else {
          incorrectLetters.value.push(letter);
          wrongWords.value++;
          if (wrongWords.value >= maxwrongWords) {
            gameOver.value = true;
            youWin.value = false;
          }
        }
      }
    };

    const restartGame = () => {
      usedLetters.value = [];
      incorrectLetters.value = [];
      wrongWords.value = 0;
      gameOver.value = false;
      youWin.value = false;
      chooseWord();
    };

    chooseWord();

    return {
      word,
      youWin,
      letters,
      gameOver,
      wrongWords,
      categoriesList,
      hiddenWord,
      usedLetters,
      selectVector,
      maxwrongWords,
      incorrectLetters,
      checkLetter,
      restartGame,
    };
  },
};
</script>
  


<template>
  

  <link rel="stylesheet" type="text/css" href="stylej.css">

  <div class="flex">
    <h1>¡Juego del ahorcado!</h1>

    <div class="text-center mb-5">
      <h2 v-if="!gameOver" class="text-uppercase font-monospace space">{{ hiddenWord }}</h2>
      <h2 v-if="gameOver" class="text-capitalize">{{ word }}</h2>
    </div>

    <div class="grid">
      <button v-for="letter in letters" :key="letter" @click="checkLetter(letter)"
        :class="{ 'disabled': usedLetters.includes(letter), 'btn-danger': usedLetters.includes(letter) }"
        class="px-5 py-3 border rounded mx-1 my-1 text-center btn btn-info text-uppercase" style="width: 1px">{{ letter
        }}</button>
    </div>


    <div class="flex">
      <div v-if="gameOver" class="text-center">
        <p v-if="youWin" class="h3 text-success">¡Ganaste!</p>
        <p v-if="!youWin" class="h3 text-danger">¡Perdiste!</p>
        <button @click="restartGame" class="btn btn-primary mt-3">Jugar de nuevo</button>
      </div>
    </div>
  </div>
  
  <a href="../../index.html" id="Volver">Volver</a>
  <img :src="'./src/assets/' + wrongWords + '.png'" alt="Ahorcado imagenes" class="mx-auto d-block mb-5" />
</template>

<style scoped>
img{
position: fixed;
top: 100px;
left: 100px;
}

h2 {
  font-size: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  color: rgb(255, 255, 255);
  box-shadow: 1px 1px 10px 4px rgb(0, 0, 0);
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: white;
  margin: 5%;
}


button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.7em 1.2em;
  font-size: 1.5em;
  font-family: inherit;
  background-color: #1a1a1a;
  text-align: center;
}

button:hover {
  background-color: #f7f7d6;
  border-color: #000000;

}

  button {
    background-color: #fac000;
  }

.flex {
  display: grid;
  justify-items: center;
  grid-template-rows: 25% 25% 35%;
  text-align: center;
}

.grid {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(9, 1fr);
  gap: 15px;
}

p {
  font-size: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  color: rgb(0, 0, 0);
}

#Volver {
  color: rgb(255, 255, 255);
  position: fixed;
  top: 90%;
  left: 90PX;
  font-size: 2em;
}


</style>
