<template>
  <div
    id="about"
    class="w-full flex px-5 sm:px-20 py-5 flex-col justify-start items-start min-h-[30rem]"
  >
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-start h-full"
    >
      <!-- imagem -->
       <img :src="wellingtonImg" class="object-cover w-full h-[15rem] sm:h-full bg-red-50 flex items-center justify-center rounded-2xl  ">

      <!-- texto -->
      <div
        class="h-full w-full p-3 sm:p-5 flex flex-col justify-start items-start gap-2"
      >
        <h1 class="text-3xl sm:text-4xl">Sobre mim</h1>

        <p class="text-lg sm:text-xl font-semibold text-green-800">
          Wellington Carlos Netto
        </p>

        <p class="text-sm text-gray-700 leading-relaxed">
          Sou psicólogo com atuação na Terapia Cognitivo-Comportamental para adultos e crianças. Ao longo da minha trajetória, desenvolvi experiência no acompanhamento de crianças com Transtorno do Espectro Autista (TEA), Transtorno Opositor Desafiador (TOD) e transtornos de humor, sempre com um olhar acolhedor, ético e baseado em evidências científicas.
            <br class="sm:hidden" > <br class="sm:hidden" >  Além da prática clínica, atuo como Orientador Profissional e de Carreira, desenvolvendo projetos que já impactaram centenas de jovens, adultos e idosos, auxiliando pessoas a fazerem escolhas profissionais mais conscientes, alinhadas aos seus valores, talentos e objetivos de vida
           Acredito que o cuidado psicológico vai além do alívio dos sintomas: trata-se de promover autoconhecimento, autonomia e qualidade de vida, respeitando a singularidade de cada pessoa e sua história.
        </p>

        <div class="flex flex-row justify-start items-center gap-2 mt-3">
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clip-rule="evenodd"
            />
          </svg>

          <p class="font-medium text-xs cursor-pointer underline">
            <a href="https://instagram.com">@Wellington</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
import wellingtonImg from "@/assets/img/wellAbout.jpeg"
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');


.font {
    font-family: "Lato", sans-serif;
}
</style>
