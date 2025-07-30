<template>
  <div
    class="bg-[#202654] md:w-[57%] md:h-[850px] text-white font-uno  md:pt-[30px] flex flex-col gap-[40px] md:gap-[30px] py-[20px] md:shadow-lg md:shadow-r md:shadow-spread md:rounded-r-xl"
  >
    <div class="flex  px-[13px] flex-col gap-[10px]">
      <div class="text-[23px] md:text-[30px] font-semibold">
        <div>We're Always Here to Help.</div>
        <div>Reach Out to the Mtalii Pay team</div>
      </div>
      <div class="text-[14px] md:text-[16px]">
        Whether you're a traveler with a question, a business seeking
        partnership, or a member of the press, our dedicated team is ready to
        assist you. Your journey and success are our priority.
      </div>
    </div>
    <div class="md:hidden px-[13px]">
    <div class=" bg-origin-content md:hidden flex bg-[url('/w3.webp')] h-[378px] bg-cover bg-center rounded-md relative ">
        <span class="absolute top-[14%] left-[3%]"><Icon name = "iconoir:mail-out-solid"  style="font-size:45px; color:green"/></span>
        <span class="absolute bottom-[38%] left-[9%]"><Icon name = "ant-design:message-filled" style="font-size: 35px; color: blue;" /></span>
        <span class="absolute top-[16%] left-[50%]"><Icon name = "tdesign:call-1-filled" style="font-size:50px; color:orangered; " /></span>
        <span class="absolute top-[17%] right-[10%]"><Icon name = "cib:telegram" style="font-size:35px; color: chocolate;"/></span>
        
        <span class="absolute top-[44%] right-[22%] h-[35px] w-[35px]"><img src="/Pn.webp" alt="pin" class="h-full w-full"/></span>
    </div>
    </div>
    <div class="flex flex-col gap-[30px] px-[13px]">
        <div class="flex flex-col gap-[10px]">
      <div class=" text-[22px] font-semibold">
        <div>Need Immediate Assistance?</div>
        <div>Connect with our 24/7 support</div>
      </div>

      <button class="bg-white text-[#202654] py-[5px] w-[40%] md:w-[30%] rounded-lg font-semibold">Start live Chat</button>
      </div>
      <button class="flex flex-row items-center gap-[10px]">
        <span><Icon name="logos:whatsapp-icon" style="font-size: 45px;" /></span
        ><span class="font-[15px] text-start">Message Us on <br> WhatsApp</span>
      </button>
    </div>
    <div class="w-full md:hidden flex bg-white px-[30px] py-[30px] text-[#202654] flex-col gap-[40px] border border-gray-50 rounded-3xl shadow-lg shadow-b shadow-spread z-10">
        <div class="text-[23px] font-semibold">Connect with the Right Team</div>
        <div class="grid grid-cols-1 gap-[40px]">
            <Iso IconName = "vaadin:handshake" title="Business and Vendor Partnership"  description="Explore collaboration opportunities with our team"/>
            <Iso IconName = "ix:emergency-stop" title="Emergency Hotline"  description="Immediate assistance for urgent matters"/>
            <Iso IconName = "humbleicons:mail" title="Email @inquiries"  description="General questions? Contact us at info@mtalii.com"/>
            <Iso IconName = "tabler:microphone" title="Careers at Mtalii" description="Join our growing team of professionals" description2 = "View Open Positions"/>
        </div>
        <div class="flex flex-col gap-[30px]">
        <div class="text-center text-[23px] font-semibold">
            <div>Before You Reach Out:</div>
            <div>Have You checked Our FAQs?</div>
        </div>
        <div class="flex flex-row justify-between items-center">
            <div class = "space-x-[4px]">
                <span><Icon name = "devicon:facebook" style="font-size:25px;"/></span>
                <span><Icon name = "mdi:instagram" style="font-size:25px;"/></span>
                <span><Icon name = "prime:twitter" style="font-size:25px;"/></span>
                <span><Icon name = "uiw:linkedin" style="font-size:25px;"/></span>
                
            </div>
            <button to = "/faq" class="bg-[#202654] text-white p-[10px] rounded-md">GO TO FAQs</button>
        </div>
        </div>
        
    </div>

    <div class="border-b border-gray-500 flex flex-col gap-[10px] py-[20px] px-[13px]">
      <div class="text-[19px] font-semibold">Connect with the Right team</div>
      <button class="flex flex-row items-center gap-[10px]">
        <span><Icon name="logos:whatsapp-icon" style="font-size: 35px;" /></span><span class="text-[20px] font-semibold">+3209687989</span>
      </button>
    </div>
     
    
   
    <div class=" flex flex-col gap-[10px] px-[13px]">
      <div class="text-[21px] font-semibold">Visit Our headquarters</div>
      <button class="flex flex-row gap-[10px]">
        <span><Icon name="tdesign:location-filled" style="font-size: 50px; color:white" /></span
        ><span class="flex flex-col text-start font-[16px]"
          ><span>location</span> <span>Coten 9e04</span
          ><span>View on Google Maps</span></span
        >
      </button>
    </div>
    <div class="font-semibold hidden md:flex gap-[50px] px-[13px]">
        <div>
        <div>FOLLOW OR REACH OUT : </div>
        <div>HAVE YOU CHECKED OUR FAQS?</div>
        </div>
        <div>
            <Icon name = "fontisto:arrow-right-l" style="font-size: 40px;"/>
            </div>
    </div>
  </div>
</template>
