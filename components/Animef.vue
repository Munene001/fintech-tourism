<template>
  <div
    class="md:h-[70vh] h-[75vh] hidden md:flex md:flex-row  box-border overflow-hidden shadow-lg shadow-b shadow-spread rounded-b-xl font-uno relative"
    id="home"
  >
    <!-- Left Section -->
    <div
      class="bg-[#202654] md:w-[80%] pl-[40px] pt-[80px] flex flex-col gap-[50px] box-border overflow-hidden"
    >
      <div class="flex flex-col gap-[30px] pr-[10px] pl-[10px] box-border">
        <div
          class="text-white text-[38px] leading-[45px] font-semibold animate-title-in flex flex-col font-uno"
        >
          <span>Experience Kenya, Unburdened.</span>
          <span>From Arrival to Safari,</span>
          <span>Pay Smart, Explore Freely.</span>
        </div>
        <div
          class="text-white text-[15px] leading-[24px] font-[Sans-serif] max-w-[70%]"
        >
          Mtalii Pay is the ultimate digital companion designed for global
          travelers like you, making every moment of your East African journey
          effortlessly secure, truly authentic, and incredibly rewarding.
        </div>
      </div>
    </div>

    <!-- Centered Image (Absolute Positioning) -->
    <div class="absolute h-[300px] w-auto right-[32vw] top-1/2 -translate-y-1/2">
      <img src="/sampler7.png" alt="phone" class="h-full w-full object-cover" />
    </div>

    <!-- Right Section -->
    <div
      class="md:w-[50%] bg-[url('/magic.webp')] bg-cover bg-center bg-no-repeat"
    ></div>
  </div>

  <!--Mobile hero-->

  <div id="home1" class="md:hidden bg-[#202654] overflow-hidden rounded-b-xl font-uno">
    <div
      class="text-white text-[32px] leading-[40px] font-semibold animate-title-in p-[30px]"
    >
    Experience Kenya, Unburdened. From Arrival to Safari, Pay Smart, Explore Freely.
    </div>
    <div class="text-gray-300 text-[15px] leading-[24px] px-[30px]">
     Unlock Seamless Travel. Your Ultimate Payment Companion For Kenya
    </div>
    <div class="flex w-full px-[40px] pt-[20px] items-center justify-between">
      <a href="/faq"
        class="h-[30px] p-[20px] rounded-full bg-white hover:bg-blue-500 flex flex-row items-center gap-[10px] justify-center"
      >
        FAQs <Icon name="guidance:left-arrow" />
    </a>
      <img
        src="/sampler7.png"
        class="flex max-h-[230px] max-w-[100%] object-scale-down box-border animate-mobile-glide-in"
      />
    </div>
    <div
      class="flex text-gray-300 flex-row gap-[20px] px-[30px] pt-[30px] pb-[50px]"
    >
      <button class="flex items-center gap-[2px]">
        <span
          ><Icon
            name="picon:playstore"
            style="color: " /></span
        ><span>Download Playstore</span>
      </button>
      <button class="flex items-center gap-[2px]">
        <span
          ><Icon
            name="ic:baseline-apple"
            style="color: " /></span
        ><span>App store</span>
      </button>
    </div>
  </div>
</template>
