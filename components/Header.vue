<template>
  <div>
    <!-- Desktop Navigation -->
    <div
      class="h-[74px] flex-row md:flex hidden w-full bg-[#202654] font-[Sans-serif] fixed border-b border-gray-600"
    >
      <div class="flex w-[25%] items-center justify-center">logo</div>
      <div class="w-[50%] flex items-center justify-around bg-transparent">
        <button
          @click="scrollTo('home')"
          class="text-[13px] leading-[14px] text-white font-semibold no-underline hover:underline"
        >
          HOME
        </button>

        <button
          @click="scrollTo('how-it-works')"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          HOW IT WORKS
        </button>

        <button
          @click="scrollTo('security')"
          class="text-[14px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          SECURITY
        </button>

        <button
          @click="scrollTo('testimonials')"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          TESTIMONIALS
        </button>

        <button
          @click="scrollTo('faq')"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          FAQs
        </button>
      </div>

      <div class="w-[25%] flex items-center  gap-[20px] justify-center">
        <div class="text-white text-[13px]">info@example.com</div>
        <button
          @click="scrollTo('contact')"
          class="text-[13px] leading-[14px] rounded-xl font-semibold no-underline py-[5px] px-[10px] bg-white text-black flex items-center hover:bg-transparent"
        >
          Try for free
          <Icon
            name="icon-park:hand-right"
            class="ml-[10px] h-6 w-6 text-black"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      class="flex flex-row max-w-[768px] md:hidden h-[80px] justify-between items-center px-4 box-border bg-[#202654] w-full text-white font-[edgaramond]"
    >
      <div>logo</div>
      <button @click="togglePopup">
        <Icon name="material-symbols:menu" class="text-[28px] text-white" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="fixed top-0 right-0 flex flex-row w-[90%] h-[100vh] z-50 bg-blue-900 text-white px-[40px] pt-[100px]"
    >
      <div class="flex flex-col gap-[3px] w-full">
        <button
          @click="() => scrollTo('home')"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          HOME
        </button>
        <button
          @click="() => scrollTo('how-it-works')"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          HOW IT WORKS
        </button>

        <button
          @click="() => scrollTo('security')"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          SECURITY
        </button>

        <button
          @click="() => scrollTo('testimonials')"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          TESTIMONIALS
        </button>

        <button
          @click="() => scrollTo('faq')"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          FAQs
        </button>

        <button
          @click="() => scrollTo('contact')"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[#FFD700]"
        >
          GET STARTED
        </button>
      </div>
      <button @click="togglePopup" class="absolute top-[60px] right-[30px]">
        <Icon name="zondicons:close" class="text-[28px] text-[#FFD700]" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    togglePopup() {
      this.isOpen = !this.isOpen;
    },
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      this.isOpen = false; // Close mobile menu after selection
    },
  },
};
</script>
