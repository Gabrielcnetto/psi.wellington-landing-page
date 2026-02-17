<template>
    <div id="clinic" class="w-full px-4 sm:px-10 sm:px-20 sm:mt-10">
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <h1 class="w-full text-2xl sm:text-4xl leading-tight font-bold">
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
import { event } from 'vue-gtag'
import selfknowledge from './icons/selfknowledge.vue';
import emotions from './icons/emotions.vue';
import chal from './icons/chal.vue';
import path from './icons/path.vue';
import service_block from './service_block.vue';
import health from './icons/health.vue';
const _serv = ref([
    {
        title: "Autoconhecimento",
        desc: "A psicoterapia é um espaço seguro para compreender seus pensamentos, sentimentos e comportamentos. Por meio do autoconhecimento, você passa a reconhecer padrões, fortalecer sua identidade e tomar decisões mais conscientes no dia a dia.",
        icon: selfknowledge,
    },
    {
        title: "Aprender a lidar com as emoções",
        desc: "Na terapia, você desenvolve habilidades para reconhecer, compreender e regular suas emoções. Isso ajuda a lidar melhor com ansiedade, estresse, raiva e frustrações, promovendo relações mais saudáveis consigo e com os outros.",
        icon: emotions,

    },
    {
        title: "Lidar com os desafios da vida",
        desc: "A psicoterapia auxilia no enfrentamento de momentos difíceis, como mudanças, perdas, conflitos e sobrecarga emocional. Com apoio profissional, você fortalece seus recursos internos para lidar com desafios de forma mais equilibrada.",
        icon: chal,

    },
    {
        title: "Encontrar um caminho profissional",
        desc: "Por meio da orientação profissional e de carreira, é possível identificar interesses, habilidades e valores. Esse processo ajuda na escolha ou transição de carreira, trazendo mais clareza, propósito e segurança nas decisões profissionais.",
        icon: path,

    },
    {
        title: "Saúde e bem-estar",
        desc: "Cuidar da saúde mental é essencial para o bem-estar geral. A psicoterapia contribui para uma vida mais equilibrada, promovendo qualidade de vida, prevenção de adoecimentos emocionais e fortalecimento da saúde psicológica.",
        icon: health,
    },
])

function opnWpp() {
    event('clique_whatsapp', { key: 'value',value: 1 })
    window.open("https://api.whatsapp.com/send?phone=555199933586","_blank")
}
</script>