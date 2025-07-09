<template>
    
    <div
    class="   w-[full] flex flex-col items-center py-[60px] gap-[30px] md:px-[20px] md:py-[70px] md:gap-[40px]" id="how"
  >
    <div class="text-[36px] font-bold leading-[40px] text-[#202654] font-[Bodoni]">HOW IT WORKS</div>
    <div
      class="grid grid-flow-row gap-[30px] place-items-center md:grid-cols-3"
    >
      <Steps
        title="REGISTER BEFORE YOU TRAVEL"
        description="Create your account before arriving in Kenya."
        description2 = "Just use your email and travel details — no SIM card required"
        IconName="icon-park-solid:one-key"
      />
      <Steps
        title="SET UP YOUR WALLET",
         description="Access your secure digital wallet seamlessly on your device."
         description2 = " Top up using your debit/credit card or international bank account."
        IconName="icon-park-solid:two-key"
      />
      <Steps
        title="START MAKING PAYMENTS"
        description="Pay merchants, hotels, and taxis using QR codes or M-Pesa till numbers."
        description2 = " No local SIM or cash needed — you're good to go."
        IconName="icon-park-solid:three-key"
      />
      <Steps
        title="MANAGE OR WITHDRAW FUNDS"
        description=" Track your spending, keep your balance for next time"
        description2 = " Cash out securely to your original card or bank account."
        
        
        IconName="icon-park-solid:four-key"
      />
      
    
    </div>
  </div>
</template>