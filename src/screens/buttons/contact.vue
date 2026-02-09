<template>

    <button @click="GoWpp"
        class="bg-green-800 h-13 w-45  cursor-pointer rounded-lg text-white font-semibold text-sm flex flex-row justify-center items-center gap-3">
        <p class="wpp text-xs" >Entrar em contato</p>
        <img class="w-6" :src="WppImage" alt="">
    </button>

</template>
<script setup>
import WppImage from "@/assets/img/whatsapp-white-icon.png"
function GoWpp(){
    window.open("https://api.whatsapp.com/send?phone=555199933586","_blank")
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* só aplica no <ul> com class "options" */
.wpp {
  font-family: "Lato", sans-serif;
}
</style>