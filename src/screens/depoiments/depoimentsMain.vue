<template>
  <div class="flex flex-col justify-center items-center mt-3">
    <h1 class="text-xl sm:text-3xl font-semibold">Depoimentos</h1>

    <ul class="flex gap-5 px-5 mt-6 overflow-x-auto w-full">
      <li
        v-for="i in Depoiments"
        class="min-w-[280px] bg-gray-100/80 rounded-2xl px-6 py-10 flex flex-col justify-start items-start shadow gap-3"
      >
        <svg class="w-12 h-12 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
            clip-rule="evenodd" />
        </svg>

        <p class="text-base font-medium">{{ i.depoiment }}</p>

        <div class="flex flex-row justify-start gap-2 items-center">
          <img :src="i.img" class="rounded-full w-10 h-10 object-cover">
          <p class="font-bold">{{ i.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Image1 from "@/assets/img/depoiments/dep1.jpeg"
import Image2 from "@/assets/img/depoiments/dep2.jpeg"
import Image3 from "@/assets/img/depoiments/dep3.jpeg"
const Depoiments = ref([
    {
        name: "Karoline",
        depoiment: "Participar do Programa de Orientação Profissional foi uma experiência marcante. O projeto contribuiu muito para meu desenvolvimento e me ajudou a me enxergar com mais clareza e confiança.",
        img: Image1,
    },
    {
        name: "Cinara",
        depoiment: "Um projeto que mudou minha vida profissional e pessoal principalmente com as conversas  sobre o que passou e o futuro que ainda tenho sonhos a conquistar.",
        img: Image2,
    },
    {
        name: "Marisa",
        depoiment: "Um projeto que transformou minha vida profissional e pessoal, especialmente por meio das conversas sobre minha trajetória e sobre o futuro, no qual ainda tenho muitos sonhos a conquistar.   ",
        img: Image3,
    },
    
])


</script>