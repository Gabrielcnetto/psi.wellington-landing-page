<template>
    <div id="clinic" class="w-full px-4 sm:px-10 sm:px-20 sm:mt-10">
        <ul class="flex flex-col sm:flex-row gap-2 sm:gap-1">
            <h1 class="w-full text-3xl sm:text-6xl leading-tight">
                O que
                <br class="hidden sm:block">
                faz você
                <br class="hidden sm:block">
                sofrer?
            </h1>

            <li v-for="i in _serv.slice(0, 2)" class="w-full sm:w-auto">
                <service_block :item="i"></service_block>
            </li>
        </ul>

        <ul class="flex flex-col sm:flex-row gap-2 sm:gap-1 mt-2 sm:mt-1 sm:justify-end w-full" >
            <li v-for="i in _serv.slice(2, 4)" class="w-full sm:w-auto">
                <service_block :item="i"></service_block>
            </li>

            <div
                @click="opnWpp"
                class="border-3 cursor-pointer hover:bg-orange-600 hover:animate-pulse border-gray-100 rounded-xl w-full sm:w-full bg-orange-400 h-[12rem] sm:h-[15rem] p-5 sm:p-6 flex flex-col justify-end items-end"
            >
                <div class="flex flex-row justify-between items-center w-full">
                    <p class="text-white font-bold text-lg sm:text-xl">Entre em contato</p>
                    <div class="p-3 bg-white rounded-full">
                        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5" />
                        </svg>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/solid'

import service_block from './service_block.vue';
const _serv = ref([
    {
        title: "Emoções e sentimentos",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Titulo desejado aqui 2",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Titulo desejado aqui 3",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Titulo desejado aqui 4",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },

])

function opnWpp(){
     window.open("https://api.whatsapp.com/send?phone=555199129114","_blank")
}
</script>