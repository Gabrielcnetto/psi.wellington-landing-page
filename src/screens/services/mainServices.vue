<template>
    <div id="clinic" class="w-full px-4 sm:px-10 sm:px-20 sm:mt-10">
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <h1 class="w-full text-2xl sm:text-4xl leading-tight">
               Como a <br> psicoterapia <br> pode te ajudar?
            </h1>
            <li v-for="i in _serv" class="w-full sm:w-auto">
                <service_block :item="i"></service_block>
            </li>
        </ul>

       
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/solid'

import service_block from './service_block.vue';
const _serv = ref([
    {
        title: "Autoconhecimento",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Aprender a lidar com as emoções",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Lidar com os desafios da vida",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Encontrar um caminho profissional",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
    {
        title: "Saúde e bem-estar",
        desc: "Descrição desejada aqui",
        icon: HeartIcon,
    },
])

function opnWpp(){
     window.open("https://api.whatsapp.com/send?phone=555199129114","_blank")
}
</script>