<template>
    <div
      class="w-[87%] h-[270px] font-uno px-[20px] box-border flex flex-col gap-[20px] bg-white rounded-md md:w-[100%] md:rounded-none items-center justify-center  border border-blue-800 hover:border-[#202654]  shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <Icon :name="IconName" style="color:darkblue; font-size: 45px" />
      <div class="flex flex-col gap-[8px]">
        <div
          class=" text-[20px] font-semibold   leading-[22px]  text-center"
        >
          {{ title }}
        </div>
        <div
          class=" text-[17px] font-medium  text-gray-900 leading-[24px] flex gap-[10px] "
        >
          <span>-</span> {{ description }}
        </div>
        <div
          class=" text-[17px] font-medium  text-gray-900 leading-[24px] flex gap-[10px]"
        >
         <span>-</span> {{ description2 }}
        </div>
      </div>
    </div>
</template>
<script setup>
defineProps({
    title:String,
    description:String,
    description2:String,
    IconName: String,

})

</script>