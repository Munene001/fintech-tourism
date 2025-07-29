<script setup lang="ts">
import { NuxtLink } from '#components';



</script>

<template>
    <div class="w-[55%] hidden md:flex bg-white px-[30px] py-[30px] text-[#202654] flex-col gap-[20px] border border-gray-50 rounded-3xl absolute right-[0%] bottom-[5%] shadow-lg shadow-b shadow-spread z-10">
        <div class="text-[23px] font-semibold">Connect with the Right Team</div>
        <div class="md:grid md:grid-cols-2 gap-[20px]">
            <Iso IconName = "vaadin:handshake" title="Business and Vendor Partnership"  description="Explore collaboration opportunities with our team"/>
            <Iso IconName = "ix:emergency-stop" title="Emergency Hotline"  description="Immediate assistance for urgent matters"/>
            <Iso IconName = "humbleicons:mail" title="Email @inquiries"  description="General questions? Contact us at info@mtalii.com"/>
            <Iso IconName = "tabler:microphone" title="Careers at Mtalii" description="Join our growing team of professionals" description2 = "View Open Positions"/>
        </div>
        <div class="flex flex-col gap-[20px]">
        <div class="text-center text-[23px] font-semibold">
            <div>Before You Reach Out:</div>
            <div>Have You checked Our FAQs</div>
        </div>
        <div class="flex flex-row justify-between px-[50px]">
            <div class = "space-x-[4px]">
                <span><Icon name = "devicon:facebook" style="font-size:25px;"/></span>
                <span><Icon name = "mdi:instagram" style="font-size:25px;"/></span>
                <span><Icon name = "prime:twitter" style="font-size:25px;"/></span>
                <span><Icon name = "uiw:linkedin" style="font-size:25px;"/></span>
                
            </div>
            <NuxtLink to = "/faq" class="bg-[#202654] text-white p-[5px] rounded-md">GO TO FAQs</NuxtLink>
        </div>
        </div>
        
    </div>
</template>