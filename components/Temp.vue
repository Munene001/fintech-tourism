<template>
  <div
    class="flex flex-col border border-gray-800 font-[Sans-serif] hover:border-[#202654] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 p-[10px]"
  >
    <div class="flex flex-row justify-between ">
      <div>
        <Icon
          v-for="i in 5"
          :key="i"
          name="material-symbols:star"
          style="color: yellow; "
        />
      </div>
      <div><Icon :name="Iconname" style = "font-size: 35px;" /></div>
    </div>
    <div class="text-white">{{ comment }}</div>
  </div>
</template>
<script setup>
defineProps({
  Iconname: String,
  comment: String,
});
</script>
