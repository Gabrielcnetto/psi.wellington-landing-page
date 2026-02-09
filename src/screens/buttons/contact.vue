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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* só aplica no <ul> com class "options" */
.wpp {
  font-family: 'Poppins', sans-serif;
}
</style>