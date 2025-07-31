<template>
  <div class="w-full max-w-md font-uno p-6 flex flex-col gap-5 bg-white rounded-xl border-2 border-blue-700 hover:border-blue-900 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]">
    <!-- Icon -->
    <div class="flex justify-center">
      <Icon :name="IconName" class="text-blue-800 text-5xl" />
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-center text-gray-800">
      {{ heading }}
    </h3>

    <!-- Content -->
    <div class="space-y-4 text-left text-gray-700">
      <div>
        <span class="block text-sm font-semibold text-gray-500 uppercase tracking-wider">Explanation</span>
        <p class="mt-1">{{ explanation }}</p>
      </div>

      <div>
        <span class="block text-sm font-semibold text-gray-500 uppercase tracking-wider">Benefit to User</span>
        <p class="mt-1">{{ explanation2 }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  heading: String,
  explanation: String,
  explanation2: String,
  IconName: String,
});
</script>
