<script setup lang="ts">
import Faqbravo from '~/components/Faqbravo.vue';

</script>

<template>
  <div
    class="md:h-[90vh] h-[85vh] bg-[url('/vision.webp')] bg-cover bg-bottom text-center flex flex-col items-center justify-around font-uno"
  >
    <div class="max-w-3xl space-y-[60px] bg-black bg-opacity-30 p-[10px]">
      <div class="flex flex-col gap-[30px] md:gap-[10px]">
        <div class=" md:text-[38px] text-[30px] font-bold text-stone-200">
          We've Got Your Answers. Find Everything You Need to Know About Mtalii
          Pay.
        </div>
        <div class="md:text-[22px] text-[16px] text-stone-200">
          Explore our comprehensive list of frequently asked questions for both
          travelers and businesses. Can't find what you're looking for? Our 24/7
          support team is here to help!
        </div>
      </div>
      <input class="h-[50px] w-[70%] border border-black text-white" />
    </div>
  </div>
  <Faqbravo/>
</template>
