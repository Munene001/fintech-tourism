<template>
  <div class="flex flex-row font-[Sans-serif] items-center gap-[10px]">
    <div class="flex flex-col gap-[20px] border-b-2 border-gray-500">
      <button
        @click="toggleDiv"
        class="flex items-center text-start gap-[10px] py-[20px]"
      >
        <div class="space-x-2">
          <span
            ><Icon :name="Iconname" style="font-size: 25px; color: #202654"
          /></span>
          
        </div>
        <span class="text-[20px] leading-[27px] text-black font-medium">{{
          question
        }}</span>
        <span>
          <Icon
            name="mingcute:arrows-down-line"
            style="font-size: 25px; color: #202654"
          />
        </span>
      </button>
      <div v-if="isVisible" class="pb-[20px] leading-[25px]">
        {{ explanation }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  question: String,
  explanation: String,
  numeral: String,
  Iconname: String,
});

const isVisible = ref(false);

const toggleDiv = () => {
  isVisible.value = !isVisible.value;
};
</script>
