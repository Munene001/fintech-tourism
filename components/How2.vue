<template>
     <div class="flex flex-col items-center justify-center md:w-[20vw]">
            <div class="h-[100px] w-[100px]"><img :src = image alt="exchange" class="h-full w-full"/></div>
            <div>{{ desc }}</div>
        </div>
</template>
<script setup>
defineProps({
    desc:String,
    image: String,

})
</script>