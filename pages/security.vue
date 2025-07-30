<script setup lang="ts">
import { NuxtLink } from "#components";
import Scomp from "~/components/Scomp.vue";
</script>

<template>
  <div
    class="bg-[url('/lookout4.webp')] bg-cover bg-center h-[80vh] px-[10px] py-[10px] flex flex-col md:pb-[10vh] justify-between"
  >
    <div class="flex flex-row justify-between">
      <div aria-hidden="true"></div>

      <button
        class="bg-transparent font-uno text-white border-2 md:font-bold border-white p-[10px]"
      >
        Contact us
      </button>
    </div>
    <div class="flex flex-col md:gap-[20px] gap-[40px] mb-[10vh]">
      <div
        class="flex flex-row md:gap-[200px] justif-between bg-[#202654] bg-opacity-25 md:bg-transparent p-[10px]"
      >
        <div
          class="flex flex-col font-uno md:text-[30px] text-[22px] leading-[30px] md:leading-[40px] font-bold md:text-white md:bg-transparent text-white"
        >
          <span>Travel with Absolute Peace of Mind.</span>
          <span>Your Money, Your Data,</span>
          <span>Adventure - Fully Protected.</span>
        </div>
        <div class="hidden md:block">
          <Icon
            name="game-icons:bolt-shield"
            style="font-size: 150px; color: #202654"
          />
        </div>
        <div class="md:hidden block">
          <Icon
            name="game-icons:bolt-shield"
            style="font-size: 90px; color: #202654"
          />
        </div>
      </div>

      <div class="md:w-[60%] md:bg-transparent text-white font-uno text-[18px]">
        At Mtalii Pay, we don't just facilitate payments; we engineer a fortress
        around your financial well-being and personal data, so your focus
        remains solely on the magic of Kenya.
      </div>
    </div>
    <div></div>
  </div>
  <div class="px-[10px] mt-[25px] flex flex-col gap-[20px]">
    <div class="text-[20px]  font-bold text-center text-gray-900 ">HOW WE PROTECT EVERY SHILLING</div>
    <div class=" text-[18px] text-gray-700  leading-relaxed max-w-3xl ">
      Your financial safety is paramount. We've built Mtalii Pay on a foundation
      of multi-layered, cutting-edge security protocols designed to detect,
      prevent, and protect against any unauthorized activity.
    </div>
    <div class="md:grid md:grid-cols-3 grid grid-row gap-[20px]">
  <Scomp
    heading="Bank-Grade Encryption (AES-256)"
    IconName="fluent:building-bank-toolbox-20-filled"
    explanation="We protect your sensitive data—like payments and personal details—using AES-256, the same advanced encryption standard trusted by top banks globally. It scrambles your data into unreadable code, ensuring only you and Mtalii Pay can ever make sense of it." 
    explanation2="Your data stays protected behind bank-level encryption, always hidden from prying eyes."
  />
  
  <Scomp
    heading="Multi-Factor Authentication (MFA) & One-Time Passwords (OTP):"
    IconName="simple-icons:authentik"
    explanation="To access your account or make critical changes, you’ll need more than just a password. We send a unique one-time code (OTP) to your phone or email to verify your identity—adding another powerful layer of protection." 
    explanation2="Passwords alone aren't enough—we make sure it's really you every time."
  />
  
  <Scomp
    heading="Proactive Fraud Detection & AI Monitoring:"
    IconName="streamline-ultimate:coding-apps-website-detect-virus-monitor-search-bold"
    explanation="Our smart systems use AI to monitor your account behavior in real time. When anything suspicious or unusual is detected, it’s flagged instantly so our security team can respond before harm is done." 
    explanation2="Real-time protection powered by AI—because fraud never sleeps."
  />
</div>

  </div>

  <div class="px-[10px] mt-[25px] flex flex-col gap-[20px]">
    <div class="text-[20px]  font-bold text-center text-gray-900 ">PROTECTING YOU ON THE GO</div>
    <div class="text-[18px] text-gray-700  leading-relaxed max-w-3xl ">
      Mtalii Pay understands the unique security considerations of international
      travel. Our app is equipped with smart features designed to protect your
      funds and privacy, no matter where your Kenyan adventure takes you.
    </div>
    <div class="md:grid md:grid-cols-3 grid grid-row gap-[20px]">
      <Scomp
        heading="Lost/Stolen Phone Protection:"
        IconName="hugeicons:phone-lock"
        explanation="If your phone is lost or stolen, you can log into the Mtalii Pay web portal from another device to lock your wallet or sign out of all active sessions instantly. This stops anyone from accessing your funds or personal data."
        explanation2="Even without your phone, your wallet stays in your hands."
      />

      <Scomp
        heading="Geo-Location Security Alerts (Optional):"
        IconName="wpf:geo-fence"
        explanation="Enable optional alerts to get notified when your account is accessed from unfamiliar locations. This helps you catch and act on suspicious activity not coming from your usual devices or regions."
        explanation2="Security that adapts to your journey—always alert, never in your way."
      />

      <Scomp
        heading="In-App Reporting & Emergency Lock:"
        IconName="streamline:emergency-exit-solid"
        explanation="Report suspicious activity and lock your wallet instantly through the app or by contacting our 24/7 support. This gives you the power to stop threats before they do any damage."
        explanation2="Quick decisions, fast protection—your safety is our priority."
      />
    </div>
  </div>
  <Stier/>

</template>
