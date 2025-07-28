<template>
    <div class="bg-[#202654]  flex flex-col text-white px-[20px] gap-[40px] py-[30px] md:py-[70px] md:items-center md:flex md:flex-row  md:pl-[20px]  shadow-lg  shadow-spread rounded-t-lg" id="footer"> 

        <div class="flex flex-col gap-[15px] md:flex-1">
        <div class="flex flex-row items-center gap-[10px] ">
            <img src = "/lg.jpeg" alt="logo" class="object-scale-down h-[50px] w-[50px]">
             <div class="text-[20px] font-semibold leading-[24px]">Mpay-wallet</div>
              
        </div>
          <div class="text-[Sans serif]  text-[16px] leading-[26px] font-[300]">Skip the SIM card hassle. With our app, you pay like a local from the moment you land in Kenya. Simple, secure, and made for travelers like you.</div>
        </div>

        <div class="flex flex-col gap-[15px] md:flex-1" id="contact">
            <div class="text-[20px] font-semibold leading-[24px]">Contact Us</div>
            <div class="flex flex-col gap-[5px] text-[Sans-serif]  text-[16px] leading-[26px] font-[300]">
                <div class="flex flex-row gap-[10px]"> <span class="font-[500]">Email:</span>  <span>info@example.info.com</span></div>
                <div class="flex flex-row gap-[10px]"><span class="font-[500]">Contact:</span> <span>+254712345678</span></div>
                <div class="flex flex-row gap-[10px]"><span class="font-[500]">Address:</span>  <span>Yaya center,  4th flour Kilimani, Nairobi </span></div>





            </div>
        </div>
        <div class="flex flex-col gap-[15px] md:flex-1">
            <div class="text-[20px] font-semibold leading-[24px]">Quick Links</div>
            <div class="flex flex-col items-start gap-[5px] text-[Sans serif]  text-[16px] leading-[26px] font-[300]">
               
               <button><a href="/">Home</a></button>
               <button @click="() => scrollTo('how')">How it works</button>
               <button @click="() => scrollTo('app')">App</button>
            </div>

        </div>
        <div class="flex flex-col gap-[15px] md:flex-1">
            <div class="text-[20px] font-semibold leading-[24px]">Support</div>
            <div class="flex flex-col items-start gap-[5px] text-[Sans serif]  text-[16px] leading-[26px] font-[300]">
               <button><a href="/faq">Faqs</a></button>
               <button><a href="/blog">Blog</a></button>
               <button><a href="/contact">Reach Us</a></button>
            </div>

        </div>
        
        
    </div>
    <div class="h-[65px] bg-[#202654] text-white text-center flex items-center justify-center border-t border-gray-600"> @Copyright Mpay-wallet. All rights reserved</div>
</template>
<script setup>
import Header from './Header.vue';

</script>
