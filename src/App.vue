<template>
  <div id="container">
    <div id="inicio">

<h1>holaaaa</h1>
    </div>
    <router-view></router-view>
  </div>


</template>

<script setup>
import { ref } from "vue";

</script>


<style scoped>
#container {
  margin: 135px;
  width: 1;
}


#inicio {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: red;
}

h1 {
  text-align: center;
  font-size: 40px;
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;

}

#btnfac{
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: rgb(122, 122, 122);
  border: 0px;
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}

#btnfac1{
  width: 0px;
  height: 0px;
  border-radius: 0px;
  background-color: rgb(0, 0, 0);
  border: 0px;
  font-size: 0px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}





#btnmed{
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: rgb(122, 122, 122);
  border: 0px;
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold; 
}
#btndif{
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: rgb(122, 122, 122);
  border: 0px;
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}

#btnfac:hover {
  background-color: rgb(245, 207, 207);
  width: 180px;
  height: 60px;
}
#btnmed:hover {
  background-color: rgb(245, 207, 207);
  width: 180px;
  height: 60px;
}
#btndif:hover {
  background-color: rgb(245, 207, 207);
  width: 180px;
  height: 60px;
}

</style>
