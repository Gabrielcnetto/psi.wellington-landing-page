<template>
  <div class="w-full sm:px-10 py-3 bg-white flex flex-row justify-between items-center">
    <!--logo-->
    <div class="flex flex-row justify-center items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-brain-icon lucide-brain">
                <path d="M12 18V5" />
                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                <path d="M18 18a4 4 0 0 0 2-7.464" />
                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                <path d="M6 18a4 4 0 0 1-2-7.464" />
                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
            </svg>
      <p class="Text-sm font-bold">Wellington <br>Netto</p>
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
import mindImage from "@/assets/img/mind.svg"
import contact from '../buttons/contact.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* só aplica no <ul> com class "options" */
.options {
  font-family: "Lato", sans-serif;
}
</style>
