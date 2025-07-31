<template>
  <div class="font-uno">
    <!-- FAQ Categories Navigation -->
    <div class="bg-[#202654] text-white p-4">
      <div class="flex flex-col md:flex-row  md:flex-wrap md:justify-around gap-2"">
        <button 
          v-for="(category, index) in faqCategories" 
          :key="index"
          @click="toggleCategory(index)"
          class="p-2 text-left hover:bg-yellow-600 transition-colors flex items-center"
          :class="{
            'bg-yellow-600 font-bold': activeCategoryIndex === index
          }"
        >
          <Icon :name="category.icon || 'ci:info'" class="mr-2 text-white" />
          {{ category.title }}
        </button>
      </div>
    </div>

    <!-- Active FAQ Content -->
    <div v-if="activeCategory" class="px-[20px] py-[40px]">
      <div class="flex flex-row items-center font-light text-[20px] text-[Sans-serif]">
        <span><Icon name="ci:house-02"/></span>
        <span><Icon name="lsicon:right-filled"/></span>
        {{ activeCategory.title }}
      </div>
      
      <div class="flex flex-col md:grid  gap-[10px] ">
        <Q 
          v-for="(item, idx) in activeCategory.questions"
          :key="idx"
          :numeral="item.numeral"
          :Iconname="item.Iconname"
          :question="item.question"
          :explanation="item.explanation"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const faqCategories = ref([
  {
    title: "General Questions about Mtalii Pay",
    icon: "mdi:information-outline",
    questions: [
      {
        numeral: "1.",
        Iconname: "mdi:help-circle",
        question: "What is Mtalii Pay?",
        explanation: "Mtalii Pay is a revolutionary digital payment platform designed to create seamless, secure, and effortless financial transactions between international travelers and local businesses across Kenya and East Africa. It acts as your digital wallet, making payments simple wherever your adventure takes you."
      },
      {
        numeral: "2.",
        Iconname: "mdi:compare",
        question: "How is Mtalii Pay different from other payment apps or traditional methods?",
        explanation: "Unlike traditional methods, Mtalii Pay eliminates the need for physical cash, local SIM cards, or expensive POS terminals. For travelers, it offers transparent real-time FX rates and enhanced security features like remote phone lock. For businesses, it provides instant M-Pesa payouts and direct access to the global tourism market without hardware costs."
      },
      {
        numeral: "3.",
        Iconname: "mdi:earth",
        question: "Is Mtalii Pay available outside of Kenya?",
        explanation: "Currently, Mtalii Pay is fully operational for transactions within Kenya. We are actively expanding to other major East African hubs and will announce new regions soon."
      },
      {
        numeral: "4.",
        Iconname: "mdi:rocket-launch",
        question: "How do I get started with Mtalii Pay?",
        explanation: "It's simple! For Travelers: Download the Mtalii Pay app from your App Store, register your account, and easily load your wallet. For Businesses: Visit our vendor portal, complete a quick online registration, and start accepting payments in minutes."
      }
    ]
  },
  {
    title: "For Travelers (Tourists)",
    icon: "mdi:passport",
    questions: [
      {
        numeral: "1.",
        Iconname: "mdi:sim-off",
        question: "Do I need a Kenyan SIM card to use Mtalii Pay?",
        explanation: "No! One of Mtalii Pay's key advantages is that you do not need a local Kenyan SIM card. You can use the app seamlessly with your international data roaming or Wi-Fi connection."
      },
      {
        numeral: "2.",
        Iconname: "mdi:credit-card-multiple",
        question: "What payment methods can I use to load my Mtalii Pay Wallet?",
        explanation: "You can easily load your wallet using familiar global methods, including Visa, Mastercard, PayPal, and even convert selected cryptocurrencies (e.g., USDT, BTC) directly into Kenyan Shillings."
      },
      {
        numeral: "3.",
        Iconname: "mdi:currency-usd",
        question: "How are exchange rates determined, and are there hidden fees?",
        explanation: "Your funds are converted at real-time, competitive mid-market exchange rates. We pride ourselves on transparency; there are no hidden fees. You will always see the exact conversion rate and any minimal service fee before you confirm a transaction."
      },
      {
        numeral: "4.",
        Iconname: "mdi:map-marker",
        question: "Where can I use Mtalii Pay in Kenya?",
        explanation: "Mtalii Pay is rapidly expanding its network. You can use it to pay for safaris, hotels, local crafts, restaurants, taxis, and more across major tourist destinations and local businesses in Kenya. Just look for the Mtalii Pay QR code or ask your vendor!"
      },
      {
        numeral: "5.",
        Iconname: "mdi:phone-lock",
        question: "What if my phone is lost or stolen during my trip?",
        explanation: "Your funds are secure! You can remotely lock your Mtalii Pay Wallet or log out of all sessions from another device (computer, friend's phone) via our web portal. Contact our 24/7 support immediately for further assistance in securing your account."
      },
      {
        numeral: "6.",
        Iconname: "mdi:chart-line",
        question: "Can I track my spending with Mtalii Pay?",
        explanation: "Yes! The app provides real-time transaction tracking and digital receipts, allowing you to monitor your budget, categorize expenses, and easily reconcile your spending throughout your trip."
      }
    ]
  },
  {
    title: "For Businesses (Vendors)",
    icon: "mdi:store",
    questions: [
      {
        numeral: "1.",
        Iconname: "mdi:pos-terminal",
        question: "Do I need a POS machine or any special hardware to accept Mtalii Pay?",
        explanation: "No! Mtalii Pay requires zero additional hardware. You can accept payments directly through your existing smartphone or even a basic feature phone using simple QR codes or USSD."
      },
      {
        numeral: "2.",
        Iconname: "mdi:cash-fast",
        question: "How do I receive funds from Mtalii Pay transactions?",
        explanation: "All payments are instantly transferred to your registered M-Pesa account (or bank account, if preferred) within seconds of a successful transaction."
      },
      {
        numeral: "3.",
        Iconname: "mdi:bell",
        question: "Will I get notifications for payments?",
        explanation: "Yes, you will receive an instant SMS notification (from 'MTALII') for every successful payment, detailing the amount, the payer, and the transaction purpose for clear record-keeping."
      },
      {
        numeral: "4.",
        Iconname: "mdi:chart-areaspline",
        question: "How does Mtalii Pay help me grow my customer base?",
        explanation: "Mtalii Pay connects you directly to the growing international tourist market that prefers digital payments. We also provide valuable insights into tourist spending trends and offer exclusive marketing support to Mtalii Pay vendors to increase your visibility."
      },
      {
        numeral: "5.",
        Iconname: "mdi:cash-register",
        question: "Is there a cost to register as an Mtalii Pay vendor?",
        explanation: "Registration as an Mtalii Pay vendor is typically free. A small, transparent transaction fee applies per successful payment received."
      },
      {
        numeral: "6.",
        Iconname: "mdi:timer",
        question: "How long does it take to register and start accepting payments?",
        explanation: "Our online registration process is quick and entirely self-service. Most vendors can complete registration and start accepting payments within minutes."
      }
    ]
  },
  {
    title: "Account & Security",
    icon: "mdi:shield-lock",
    questions: [
      {
        numeral: "1.",
        Iconname: "mdi:security",
        question: "How secure is Mtalii Pay?",
        explanation: "Mtalii Pay employs bank-grade, multi-layer encryption (AES-256), Multi-Factor Authentication (MFA), One-Time Passwords (OTP), and proactive AI-driven fraud detection. Your money and data are protected with the highest industry standards."
      },
      {
        numeral: "2.",
        Iconname: "mdi:account-details",
        question: "What is KYC, and why do I need to complete it?",
        explanation: "KYC (Know Your Customer) is a standard regulatory requirement for financial service providers. It involves verifying your identity to prevent fraud and money laundering. This process protects both you and the integrity of the financial system. We ensure the process is simple and your data is secure."
      },
      {
        numeral: "3.",
        Iconname: "mdi:lock",
        question: "Is my personal data kept private?",
        explanation: "Absolutely. We adhere to stringent data privacy principles, similar to global standards like GDPR. Your personal data is encrypted, never sold, and only used to provide and improve your Mtalii Pay service."
      },
      {
        numeral: "4.",
        Iconname: "mdi:alert",
        question: "What should I do if I suspect fraudulent activity on my account?",
        explanation: "Immediately lock your wallet via the in-app feature or contact our 24/7 multilingual support team through in-app chat or WhatsApp. We will investigate and take immediate action."
      }
    ]
  },
  {
    title: "Technical Support",
    icon: "mdi:tools",
    questions: [
      {
        numeral: "1.",
        Iconname: "mdi:cellphone",
        question: "What devices are compatible with Mtalii Pay?",
        explanation: "The Mtalii Pay app is compatible with both iOS and Android smartphones. Vendors can also accept payments using USSD on feature phones."
      },
      {
        numeral: "2.",
        Iconname: "mdi:wifi-off",
        question: "What if I have connectivity issues in a remote area?",
        explanation: "Mtalii Pay offers USSD functionality for vendors, which works even with basic network coverage, ensuring you can still accept payments even without a strong internet connection."
      },
      {
        numeral: "3.",
        Iconname: "mdi:headset",
        question: "How can I get technical support?",
        explanation: "Our dedicated technical support team is available 24/7 via in-app chat or WhatsApp. You can also visit our Blog/Resources section for troubleshooting tips."
      }
    ]
  }
]);

const activeCategoryIndex = ref(0); // Removed TypeScript annotation
const activeCategory = computed(() => {
  if (activeCategoryIndex.value === null) return null;
  return faqCategories.value[activeCategoryIndex.value];
});

const toggleCategory = (index) => {
  activeCategoryIndex.value = activeCategoryIndex.value === index ? null : index;
};
</script>