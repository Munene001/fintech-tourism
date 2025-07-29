<template>
   <div class="flex flex-row items-center gap-[10px]">
    <div><Icon :name="IconName" style="font-size: 60px;"/></div>
    <div class="space-y-[5px]">
        <div class="text-18px md:font-medium font-semibold">{{ title }}</div>
        <div class="text-[15px]">{{ description }}</div>
        <button class=" text-[15px] p-[4px] border border-[#202654]">{{ description2 }}</button>
    </div>
   </div>
</template>
<script setup>
defineProps({
    title:String,
    description:String,
    IconName: String,
    description2: String

})

</script>