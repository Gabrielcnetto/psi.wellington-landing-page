<template>
  <div class="w-full h-auto p-5 px-4 sm:px-20 py-10 sm:py-0 bg-orange-100/40 rounded-2xl grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center gap-8">
    
    <div class="flex flex-col gap-4 justify-center items-start w-full px-2 sm:px-6 p-5">
      <h1 class="text-3xl sm:text-5xl font-medium leading-snug">
        {{ Comprimentar() }}<br>
        Eu sou o psicólogo<br>
        <span class="text-green-800 font-bold">Wellington Carlos Netto</span>
      </h1>
      <p class="crp text-sm sm:text-sm mt-3 font-medium text-black">CRP - XX/XXXXX</p>
      <p class="brev_desc text-sm sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, explicabo perferendis ea repudiandae
        quaerat quo aperiam consequatur cumque veniam eum praesentium labore! Earum minus ut soluta dolore
        quasi, provident quam.
      </p>
      <div class="mt-4 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3">
        <contact></contact>
        <button class="h-12 w-44 border-2 border-green-800 cursor-pointer rounded-lg text-black font-semibold text-sm">
          <p class="see_more text-xs"><a href="#about">Leia mais</a></p>
        </button>
      </div>
    </div>

    <div class="w-full h-60 sm:h-full bg-orange-400 flex items-center justify-center rounded-lg">
      <p>Foto aqui</p>
    </div>

  </div>
</template>

<script setup>
import contact from '../buttons/contact.vue';
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* só aplica no <ul> com class "options" */
.crp {
    font-family: 'Poppins', sans-serif;
}
.see_more{
      font-family: 'Poppins', sans-serif;
}
.brev_desc{
    font-family: 'Poppins', sans-serif;
}
</style>
