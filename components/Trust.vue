<template>
  <div class=" flex flex-col px-[20px] py-[40px] font-[Sans-serif] gap-[30px]">
    <div class="text-center flex flex-col gap-[8px] md:gap-[2px]">
      <div class="text-[32px] leading-[40px] text-[#202654] ">
        Bank-Grade Security, Powered by M-Pesa
      </div>
      <div class="text-[16px] leading-[27px]">
        Your wallet is built on secure infrastructure and integrates directly
        with M-Pesa, Kenya’s most trusted mobile money system.
      </div>
    </div>
    <div class=" flex md:flex-row flex-col  ">
      <div class="flex flex-col gap-[20px] flex-1 ">
        <Secure
          IconName="streamline:device-database-encryption-1-remix"
          title="End-to-End Encryption"
          description="All your personal data and transactions are secured with military-grade encryption, ensuring only you and your intended recipient can access your information."
        />
        <Secure
          IconName="tabler:auth-2fa"
          title="2-Factor Authentication"
          description="Access your wallet using a secure password and one-time Email code — even if someone has your password, they still can’t get in without your second layer of protection."
        />
        <Secure
          IconName="arcticons:mysafaricom"
          title="Trusted M-Pesa Integration"
          description="We’ve integrated directly with M-Pesa, Kenya’s most secure and reliable mobile payment platform, trusted by millions for fast, safe, and seamless transactions."
        />
        <Secure
          IconName="fluent:alert-on-16-filled"
          title="Real-Time Transaction Alerts"
          description="Stay in control with instant notifications for every deposit, withdrawal, and payment, helping you monitor your activity and detect any unusual behavior right away."
        />
        <Secure
          IconName="clarity:license-solid-badged"
          title="Licensed Financial Partners"
          description="We only operate with banks and providers that are fully licensed and regulated by the Central Bank of Kenya (CBK), so your money stays protected under strict compliance standards."
        />
      </div>
      <div class="flex-1 ">
        <img
        src="/samp-left.webp"
        alt="phone"
        class="flex max-h-[530px] max-w-[100%] object-scale-down box-border mx-auto "
      />

      </div>
    </div>
  </div>
</template>
