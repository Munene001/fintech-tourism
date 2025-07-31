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
            style="font-size: 150px; color: white"
          />
        </div>
        <div class="md:hidden block">
          <Icon
            name="game-icons:bolt-shield"
            style="font-size: 90px; color: white"
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
  <div class="bg-stone-200 py-16 px-4">
    <!-- Section: HOW WE PROTECT EVERY SHILLING -->
    <div class="max-w-7xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <h2 class="text-3xl font-bold text-blue-900">HOW WE PROTECT EVERY SHILLING</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Your financial safety is paramount. Mtalii Pay is built on multi-layered, bank-grade security protocols that detect, prevent, and protect against any unauthorized activity.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <Scomp
          heading="Bank-Grade Encryption (AES-256)"
          IconName="fluent:building-bank-toolbox-20-filled"
          explanation="We protect your sensitive data—like payments and personal details—using AES-256, the same advanced encryption standard trusted by top banks globally."
          explanation2="Your data stays protected behind bank-level encryption, always hidden from prying eyes."
        />

        <Scomp
          heading="Multi-Factor Authentication (MFA) & OTP"
          IconName="simple-icons:authentik"
          explanation="To access your account or make critical changes, we send a one-time code (OTP) to your phone or email—adding another layer of security."
          explanation2="Passwords alone aren't enough—we make sure it's really you every time."
        />

        <Scomp
          heading="Proactive Fraud Detection & AI Monitoring"
          IconName="streamline-ultimate:coding-apps-website-detect-virus-monitor-search-bold"
          explanation="Our smart systems use AI to monitor behavior in real time and instantly flag suspicious activity."
          explanation2="Real-time protection powered by AI—because fraud never sleeps."
        />
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-blue-200 my-16"></div>

    <!-- Section: PROTECTING YOU ON THE GO -->
    <div class="max-w-7xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <h2 class="text-3xl font-bold text-blue-900">PROTECTING YOU ON THE GO</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Mtalii Pay understands the unique security considerations of international travel. Our app includes features designed to protect your funds and privacy—wherever you roam.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <Scomp
          heading="Lost/Stolen Phone Protection"
          IconName="hugeicons:phone-lock"
          explanation="Log into Mtalii Pay from another device to lock your wallet or sign out of all active sessions instantly."
          explanation2="Even without your phone, your wallet stays in your hands."
        />

        <Scomp
          heading="Geo-Location Security Alerts (Optional)"
          IconName="wpf:geo-fence"
          explanation="Get notified when your account is accessed from unfamiliar locations."
          explanation2="Security that adapts to your journey—always alert, never in your way."
        />

        <Scomp
          heading="In-App Reporting & Emergency Lock"
          IconName="streamline:emergency-exit-solid"
          explanation="Report suspicious activity and lock your wallet instantly via the app or our 24/7 support."
          explanation2="Quick decisions, fast protection—your safety is our priority."
        />
      </div>
    </div>
  </div>
  <Stier/>

</template>
