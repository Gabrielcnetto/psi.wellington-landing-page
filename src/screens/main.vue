<template>
    <div class="w-full min-h-screen flex flex-col">
        <div class="px-5 w-full min-h-screen flex flex-col gap-3">
            <mainHeader></mainHeader>
            <mainAbout></mainAbout>
            <mainServices></mainServices>
            <firstSession></firstSession>
            <aboutMe2></aboutMe2>
            <about_therapy></about_therapy>
            <professional_start></professional_start>
        </div>

       
    </div>
</template>
<script setup>
import mainHeader from './header/mainHeader.vue';
import mainAbout from './about/mainAbout.vue';
import mainServices from './services/mainServices.vue';
import firstSession from './first_session/firstSession.vue';
import aboutMe2 from './about/aboutMe2.vue';
import about_therapy from './services/about_therapy.vue';
import professional_start from './professional_start/professional_start.vue';

</script>