<template>
    <div class="w-full min-h-[40rem] bg-green-50 rounded-2xl p-5 flex flex-col gap-6">
        <h1 class="sm:text-center text-2xl md:text-4xl">Como é uma sessão?</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch h-full md:px-40">
            <ul class="flex flex-col gap-6 w-full">
                <li class="p-5 rounded-2xl bg-white w-full flex flex-row items-start gap-4">
                    <p class="min-w-[3rem] h-[3rem] flex items-center justify-center text-white font-black bg-orange-400 rounded-full">1</p>
                    <div class="flex gap-2 flex-col">
                        <p class="font-semibold text-xl md:text-3xl">Acolhimento e Compreensão</p>
                        <p class="desc text-xs sm:text-sm text-gray-600">
                            Neste primeiro momento, o foco é ouvir você com atenção e sem julgamentos. Buscamos compreender sua história, suas dificuldades
                            e seus objetivos, construindo juntos um espaço seguro de confiança para iniciar o processo terapêutico.

                            </p>
                    </div>
                </li>

                <li class="p-5 rounded-2xl bg-white w-full flex flex-row items-start gap-4">
                    <p class="min-w-[3rem] h-[3rem] flex items-center justify-center text-white font-black bg-orange-400 rounded-full">2</p>
                    <div class="flex gap-2 flex-col">
                        <p class="font-semibold text-xl md:text-3xl">Autoconhecimento e Desenvolvimento</p>
                        <p class="desc text-xs sm:text-sm text-gray-600">
                            Com maior clareza sobre seus pensamentos, emoções e comportamentos, começamos a trabalhar
                            estratégias práticas para lidar com desafios do dia a dia. Essa etapa promove mudanças
                            conscientes, fortalecimento emocional e desenvolvimento pessoal.
                        </p>
                    </div>
                </li>

                <li class="p-5 rounded-2xl bg-white w-full flex flex-row items-start gap-4">
                    <p class="min-w-[3rem] h-[3rem] flex items-center justify-center text-white font-black bg-orange-400 rounded-full">3</p>
                    <div class="flex gap-2 flex-col">
                        <p class="font-semibold text-xl md:text-3xl">Transformação e Autonomia</p>
                        <p class="desc text-xs sm:text-sm text-gray-600">
                            Aqui, o objetivo é consolidar os avanços conquistados. Você desenvolve autonomia emocional, mais segurança
                            nas decisões e recursos para lidar com novas situações, levando os aprendizados da terapia para a sua vida
                            fora do consultório.
                        </p>
                    </div>
                </li>
            </ul>

            <div class="w-full sm:flex justify-center items-center hidden sm">
                <img :src="sessionImage" class="w-full max-h-[22rem] md:max-h-full object-cover rounded-2xl">
            </div>
        </div>
    </div>
</template>

<script setup>
import sessionImage from "@/assets/img/session.jpg"
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* só aplica no <ul> com class "options" */
.desc {
    font-family: "Lato", sans-serif;
}

</style>
