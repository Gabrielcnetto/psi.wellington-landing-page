<template>
  <div class="w-full px-10 py-3 bg-white flex flex-row justify-between items-center">
    <!--logo-->
    <div class="w-15 h-15">
      <p>Logotipo</p>
    </div>
    <!--opções -->
    <ul class=" hidden options sm:flex flex-row gap-4 font-medium text-sm text-gray-800 cursor-pointer">
      <li>Sobre</li>
      <li> <a href="#clinic">Psicologia Clínica</a> </li>
      <li>Orientação profissional</li>
    </ul>
    <!--contact-->
    <contact class="hidden sm:flex"></contact>
  </div>
</template>

<script setup>
import contact from '../buttons/contact.vue';
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* só aplica no <ul> com class "options" */
.options {
  font-family: 'Poppins', sans-serif;
}
</style>
