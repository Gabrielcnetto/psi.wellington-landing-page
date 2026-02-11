<template>
    <section class="w-full items-center flex flex-col justify-start my-5">
        <h1 class="text-lg sm:text-3xl font-medium mb-5">
            Sou Fundador do POP: Programa de Orientação Profissional.
        </h1>

        <div class="w-full grid grid-cols-1 sm:grid-cols-2 sm:p-5 rounded-2xl">
            <img :src="popImage" class="rounded-2xl object-cover" />

            <div class="flex flex-col justify-around">
                <div class="flex flex-row justify-between sm:justify-center items-start sm:mt-0 mt-5">

                    <div class="px-2 sm:px-5 flex flex-col">
                        <p class="text-yellow-300 font-bold text-shadow-2xs text-4xl sm:text-8xl">
                            pop <span class="text-gray-500">.</span>
                        </p>
                        <p class="sm:mt-3 text-xs font-medium">Empresas</p>
                    </div>

                    <div class="px-5 flex flex-col">
                        <p class="text-purple-500 font-bold text-shadow-2xs text-4xl sm:text-8xl">
                            pop <span class="text-yellow-300">.</span>
                        </p>
                        <p class="sm:mt-3 text-xs font-medium">Escolas</p>
                    </div>

                </div>

                <ul
                    class="text-xs font-medium sm:text-lg flex flex-col justify-center items-center *:bg-gray-100/70 *:rounded-xl *:w-full gap-2 *:p-5 sm:mx-5 mt-5 *:text-center">

                    <li>Mais de 400 sessões de orientação profissional</li>

                    <li>Centenas de vidas impactadas</li>
                    <li>Conexões estratégicas com universidades e empresas</li>
                    <li>Resultados concretos no desenvovlimento de jovens, adultos e idosos</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import popImage from "@/assets/img/pop.jpeg"
const items = ref(
    [
        "+100 sessões de Orientação Profissional realizadas"
    ]
)
</script>