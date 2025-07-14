<template>
  <div class="flex flex-row  px-[15px] gap-[15px] font-[Sans-serif]"  >
    <div class="border border-black rounded-full p-[10px] bg-[#202654] self-start">
      <Icon :name="IconName" style="font-size: 30px; color: white; " />
    </div>
    <div class="flex flex-col gap-[20px] md:gap-[8px]">
      <div class="text-[23px] leading-[29px]">{{ title }}</div>
      <div class="text-[16px] leading-[27px] text-gray-900">{{ description }}</div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  description: String,
  IconName: String,
});
</script>
