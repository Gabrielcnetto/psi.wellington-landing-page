<template>
    <footer style="background-color: #212226;"
        class="gap-10 w-full px-5 sm:px-10 py-10 sm:py-20 grid-cols-1 grid sm:grid-cols-4 text-white justify-items-start sm:justify-items-center">
        <div class="flex flex-row justify-center items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-brain-icon lucide-brain">
                <path d="M12 18V5" />
                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
                <path d="M18 18a4 4 0 0 0 2-7.464" />
                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
                <path d="M6 18a4 4 0 0 1-2-7.464" />
                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
            </svg>
            <p class="Text-sm sm:text-3xl font-bold">Wellington <br>Netto</p>
        </div>
        <ul class="flex flex-col justify-start items-start gap-2">
            <li class="text-lg font-bold text-white">Contato</li>
            <li class=" gap-2 flex flex-row justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-phone-icon lucide-phone">
                    <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>

                <p @click="GoWpp" class="text-sm text-white/70 font-medium hover:cursor-pointer hover:underline">(51) 9 9993-3586</p>
            </li>
            <li class=" gap-2 flex flex-row justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-mail-icon lucide-mail">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <p class="text-sm text-white/70 font-medium hover:cursor-pointer hover:underline" @click="GoWpp">wellingtoncarlosnetto@gmail.com</p>
            </li>

            <li></li>
        </ul>
        <ul class="flex flex-col justify-start items-start gap-2 *:hover:underline *:hover:cursor-pointer">
            <li class="text-lg font-bold text-white">Serviços</li>
            <li @click="GoWppMessage('')" class="text-sm text-white/70 font-medium">Psicologia Clínica</li>
            <li @click="GoWppMessage('')" class="text-sm text-white/70 font-medium">Orientação profissional</li>
        </ul>
        <ul class="flex flex-col justify-start items-start gap-2 *:hover:underline *:hover:cursor-pointer">
            <li class="text-lg font-bold text-white">Redes sociais</li>
            <li @click="goinsta" class="flex gap-2 flex-row justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-instagram-icon lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <p class="text-sm text-white/70 font-medium">Instagram</p>
            </li>

        </ul>
    </footer>
</template>
<script setup>
function GoWpp(){
    window.open("https://api.whatsapp.com/send?phone=555199933586","_blank")
}

function GoWppMessage(message){
    window.open(`https://api.whatsapp.com/send?phone=555199933586&text=${message}`,"_blank")
}

function goinsta(){
    window.open(`https://instagram.com`,"_blank")
}
</script>