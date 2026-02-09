<template>
    <div
  class="border-3 border-gray-100 rounded-xl
         flex flex-col justify-between
         p-4 sm:p-6 gap-4
         w-full
         sm:max-w-[170rem]
         h-auto sm:h-[15rem]"
>
        <div class="flex flex-row justify-between items-center gap-3">
            <p class="text-xl sm:text-3xl font-normal">
                {{ item.item.title }}
            </p>
            <component :is="item.item.icon" class="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
        </div>

        <p class="desc text-xs sm:text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum exercitationem sed tempore autem porro cumque asperiores alias earum sapiente, sunt facilis sequi quos, dolorem cum, laborum consectetur ullam? Ab.
        </p>
    </div>
</template>

<script setup>
const item = defineProps({
    item: {
        default: null,
        required: true,
        type: Object,
    }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

/* só aplica no <ul> com class "options" */
.desc {
  font-family: "Lato", sans-serif;
}
</style>
