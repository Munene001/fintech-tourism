<template>
  <div
    class="md:h-[calc(100vh-90px)] hidden md:flex md:flex-row relative box-border overflow-hidden"    id='home'
  >
    <!-- Left Section -->
    <div
      class="bg-[#202654] md:w-[50%] pl-[40px] pt-[80px] flex flex-col gap-[50px] box-border overflow-hidden"
    >
      <div class="flex flex-col gap-[30px] pr-[10px] pl-[10px] box-border">
        <div
          class="text-white text-[38px] leading-[45px] font-semibold animate-title-in"
        >
          USE MPESA IN KENYA - NO SIMCARD NEEDED
        </div>
        <div class="text-gray-300 text-[15px] leading-[24px]">
          Register before arrival, Get a robust secured payment option, Make
          Payments anywhere and everywhere within Kenya.
        </div>
      </div>
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col gap-[25px] box-border">
          <button
            class="px-[15px] py-[7px] w-[150px] rounded-full bg-white hover:bg-blue-500 flex flex-row items-center gap-[10px] justify-center"
          >
            Register<Icon name="guidance:left-arrow" />
          </button>
          <div class="flex text-gray-300 flex-row gap-[20px]">
            <button><Icon name="mage:playstore" />Play store</button>
            <button><Icon name="ic:baseline-apple" />App Store</button>
          </div>
        </div>
        <img src="/Qr.png" alt="qr" class="pr-[40px]" />
      </div>
    </div>

    <!-- Centered Image (Absolute Positioning) -->

    <img
      src="/cre-1.webp"
      class="md:absolute right-[30px] top-1/2 max-h-[80%] max-w-[90%] object-scale-down animate-glide-in box-border"
    />

    <!-- Right Section -->
    <div
      class="md:w-[50%] bg-[url('/nrb.jpg')] bg-cover bg-center bg-no-repeat"
    ></div>
  </div>

  <!--Mobile hero-->

  <div
  id='home1'
    class="md:hidden bg-[rgb(32,38,84)]  overflow-hidden" 
  >
    <div
      class="text-white text-[32px] leading-[40px] font-semibold animate-title-in p-[30px]"
    >
      USE MPESA IN KENYA - NO SIMCARD NEEDED
    </div>
    <div class="text-gray-300 text-[15px] leading-[24px] px-[30px]">
      Register before arrival, Get a robust secured payment option, Make
      Payments anywhere and everywhere within Kenya.
    </div>
    <div class="flex w-full px-[40px] pt-[20px] items-center justify-between">
      <button
        class="h-[30px] p-[20px] rounded-full bg-white hover:bg-blue-500 flex flex-row items-center gap-[10px] justify-center"
      >
        Register<Icon name="guidance:left-arrow" />
      </button>
      <img
        src="/cre-1.webp"
        class="flex max-h-[230px] max-w-[100%] object-scale-down box-border animate-mobile-glide-in"
      />
    </div>
    <div class="flex text-gray-300 flex-row gap-[20px] px-[30px] pt-[30px] pb-[50px]">
            <button><Icon name="mage:playstore" />Play store</button>
            <button><Icon name="ic:baseline-apple" />App Store</button>
          </div>
  </div>
</template>
