<template>
  <div class="w-full h-auto  bg-orange-100/40 rounded-2xl grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-8">
    
    <div class="flex flex-col gap-4 justify-center items-start w-full px-2 sm:px-6 p-5">
      <h1 class="text-2xl sm:text-4xl font-medium leading-snug">
        {{ Comprimentar() }}<br>
        Eu sou o psicólogo<br>
        <span class="text-black font-bold">Wellington Carlos Netto</span>
      </h1>
      <!--<p class="crp text-sm sm:text-sm mt-3 font-medium text-black">CRP - XX/XXXXX</p>-->
      <p class="brev_desc text-xs sm:text-sm">
        Psicólogo, graduado pela Universidade Feevale (RS), com pós-graduação em Análise do Comportamento Aplicado (ABA). Atuo como Terapeuta Cognitivo-Comportamental e como Orientador Profissional 
        e de Carreira, tendo impactado mais de 400 pessoas por meio de projetos de orientação profissional.
      </p>
      <div class="mt-4 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3">
        <contact></contact>
        <button class="h-12 w-44 border-2 border-green-800 cursor-pointer rounded-lg text-black font-semibold text-sm">
          <p class="see_more text-xs"><a href="#about">Leia mais</a></p>
        </button>
      </div>
    </div>

    <div class="w-full h-60 sm:h-full flex items-center justify-center rounded-lg sm:rounded-r-2xl">
      <img :src="WellPhoto" class="sm:rounded-r-2xl rounded-b-2xl sm:rounded-none" >
    </div>

  </div>
</template>

<script setup>
import contact from '../buttons/contact.vue';
import WellPhoto from "@/assets/img/first-block-well.jpeg"
function Comprimentar() {
    let _date = new Date();
    let _hour = _date.getHours();

    if (_hour < 12) {
        return "Bom dia!";
    } else if (_hour < 18) { // já sabemos que _hour >= 12 aqui
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* só aplica no <ul> com class "options" */
.crp {
    font-family: "Lato", sans-serif;
}
.see_more{
      font-family: "Lato", sans-serif;
}
.brev_desc{
    font-family: "Lato", sans-serif;
}
</style>
