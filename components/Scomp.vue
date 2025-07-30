<template>
    <div class="w-full max-w-md font-uno p-6 flex flex-col gap-5 bg-white rounded-lg border-2 border-blue-700 hover:border-indigo-900 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02]">
      <!-- Icon Container -->
      <div class="flex justify-center">
        <Icon 
          :name="IconName" 
          class="text-blue-800 text-5xl" 
        />
      </div>
      
      <!-- Heading -->
      <h3 class="text-xl font-bold text-center text-gray-800">
        {{ heading }}
      </h3>
      
      <!-- Explanation Sections -->
      <div class="space-y-4">
        <div class="flex flex-col gap-1">
          <span class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Explanation</span>
          <span class="text-gray-700">{{ explanation }}</span>
        </div>
        
        <div class="flex flex-col gap-1">
          <span class="text-sm font-semibold text-gray-500 uppercase tracking-wider">Benefit to User</span>
          <span class="text-gray-700">{{ explanation2 }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const props = defineProps({
    heading: String,
    explanation: String,
    explanation2: String,
    IconName: String,
  });
  </script>