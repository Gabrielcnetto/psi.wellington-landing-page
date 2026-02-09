<template>
    <div class="w-full min-h-[40rem] bg-green-50 rounded-2xl p-5 flex flex-col gap-6">
        <h1 class="text-center text-3xl md:text-4xl">Como é uma sessão?</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-stretch h-full md:px-40">
            <ul class="flex flex-col gap-6 w-full">
                <li class="p-5 rounded-2xl bg-white w-full flex flex-row items-start gap-4">
                    <p class="min-w-[3rem] h-[3rem] flex items-center justify-center text-white font-black bg-orange-400 rounded-full">1</p>
                    <div class="flex gap-2 flex-col">
                        <p class="font-semibold text-xl md:text-3xl">Construção de vínculo</p>
                        <p class="desc text-xs sm:text-sm text-gray-600">Lorem ipsum dolor sit amet codignissimos praesentium rem ab, illum obcaecati ipsam sint, nisi autem ipsa similique earum perspiciatis voluptatibus!</p>
                    </div>
                </li>

                <li class="p-5 rounded-2xl bg-white w-full flex flex-row items-start gap-4">
                    <p class="min-w-[3rem] h-[3rem] flex items-center justify-center text-white font-black bg-orange-400 rounded-full">2</p>
                    <div class="flex gap-2 flex-col">
                        <p class="font-semibold text-xl md:text-3xl">Desenvolver competências socioemocionais</p>
                        <p class="desc text-xs sm:text-sm text-gray-600">Lorem ipsum dolor sit amet codignissimos praesentium rem ab, illum obcaecati ipsam sint, nisi autem ipsa similique earum perspiciatis voluptatibus!</p>
                    </div>
                </li>

                <li class="p-5 rounded-2xl bg-white w-full flex flex-row items-start gap-4">
                    <p class="min-w-[3rem] h-[3rem] flex items-center justify-center text-white font-black bg-orange-400 rounded-full">3</p>
                    <div class="flex gap-2 flex-col">
                        <p class="font-semibold text-xl md:text-3xl">Nome Passo 3</p>
                        <p class="desc text-xs sm:text-sm text-gray-600">Lorem ipsum dolor sit amet codignissimos praesentium rem ab, illum obcaecati ipsam sint, nisi autem ipsa similique earum perspiciatis voluptatibus!</p>
                    </div>
                </li>
            </ul>

            <div class="w-full flex justify-center items-center">
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
