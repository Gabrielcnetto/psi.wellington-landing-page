<template>
  <div class="w-full sm:px-10 py-3 bg-white flex flex-row justify-between items-center">
    <!--logo-->
   <div class=" flex flex-col justify-center items-center">
     <img :src="WellLogo"  class="w-20">
     <p class="text-sm font-bold" >Wellington Netto</p> 
     <p class=" hidden sm:block text-xs text-gray-600 ">Psicologo & Orientador Profissional</p>
   </div>
    <!--opções -->
    <ul class=" hidden options sm:flex flex-row gap-4 font-medium text-lg text-gray-800 cursor-pointer">
      <li>Sobre</li>
      <li> <a href="#clinic">Psicologia Clínica</a> </li>
      <li> <a href="#work1">Orientação profissional</a> </li>
    </ul>
    <!--contact-->
    <contact class="hidden sm:flex"></contact>
  </div>
</template>

<script setup>
import contact from '../buttons/contact.vue';
import WellLogo from "@/assets/img/logo-well.png"
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* só aplica no <ul> com class "options" */
.options {
  font-family: "Lato", sans-serif;
}
</style>
