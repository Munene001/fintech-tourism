<template>
  <div class="font-[Sans-serif] mb-4 transition-all duration-300 ease-in-out">
    <div 
      @click="toggleDiv"
      class="flex items-center justify-between cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-colors"
      :class="{ 'bg-gray-50': isVisible }"
    >
      <div class="flex items-center gap-4">
        <div class="text-[#202654]">
          <Icon :name="Iconname" class="text-2xl" />
        </div>
        <div>
          <span class="text-gray-500 mr-2">{{ numeral }}</span>
          <span class="text-lg font-semibold text-gray-800">{{ question }}</span>
        </div>
      </div>
      <Icon 
        :name="isVisible ? 'mingcute:arrows-up-line' : 'mingcute:arrows-down-line'" 
        class="text-2xl text-[#202654] transition-transform duration-300"
        :class="{ 'rotate-180': isVisible }"
      />
    </div>

    <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-if="isVisible" class="px-4 pb-4 ml-14">
        <div class="text-gray-600 leading-relaxed border-l-2 border-[#202654] pl-4">
          {{ explanation }}
        </div>
      </div>
    </transition>
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

// Animation functions
const enter = (el) => {
  el.style.height = 'auto';
  const height = getComputedStyle(el).height;
  el.style.height = '0';
  setTimeout(() => {
    el.style.height = height;
  });
};

const afterEnter = (el) => {
  el.style.height = 'auto';
};

const leave = (el) => {
  el.style.height = getComputedStyle(el).height;
  setTimeout(() => {
    el.style.height = '0';
  });
};
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  height: 0;
}
</style>