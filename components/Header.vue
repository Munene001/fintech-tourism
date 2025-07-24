

<template>
  <div>
    <!-- Desktop Navigation -->
    <div
      class="h-[90px] z-50 flex-row md:flex hidden w-full bg-[#202654] fixed shadow-lg shadow-b shadow-spread"
    >
      <div class="flex w-[25%] items-center justify-center"><img src="/mpay.png" alt="mpay"/></div>
      <div class="flex-1 px-[5px] flex items-center justify-around bg-transparent font-[]">
        <a
          href="/"
          class="text-[13px] leading-[14px] text-white font-semibold no-underline hover:underline"
        >
          HOME
        </a>
        <a
          href="/howdy"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          HOW IT WORKS
        </a>
        <a
          href="/about"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          ABOUT
        </a>
        <a
          href="/partner"
          class="text-[14px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          PARTNERS
        </a>
        <a
          href="/blog"
          class="text-[14px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          BLOG
        </a>
        <a
          href="/faq"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          FAQs
        </a>
        <a
          href="/contact"
          class="text-[13px] leading-[14px] font-semibold no-underline text-white hover:underline"
        >
          CONTACT US
        </a>
      </div>
      <div class="flex items-center gap-[20px] justify-center">
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
      class="flex flex-row max-w-[768px] md:hidden h-[80px] fixed shadow-lg shadow-b shadow-spread z-50 justify-between items-center px-4 box-border bg-[#202654] w-full text-white font-[edgaramond]"
    >
      <div><img src="/mpay.png" /></div>
      <button @click="togglePopup">
        <Icon name="material-symbols:menu" class="text-[28px] text-white" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="fixed top-0 right-0 flex flex-row w-[90%] h-[100vh] z-50 bg-[#202654] text-white px-[40px] pt-[100px]"
    >
      <div class="flex flex-col gap-[3px] w-full">
        <a
          href="/"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          HOME
        </a>
        <a
          href="/howdy"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          HOW IT WORKS
        </a>
        <a
          href="/partner"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          PARTNERS
        </a>
        <a
          href="/about"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          ABOUT US
        </a>
        <a
          href="/blog"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          BLOG
        </a>
        <a
          href="/faq"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[chocolate]"
        >
          FAQs
        </a>
        <a
          href="/contact"
          class="flex h-[55px] text-[18px] leading-[18px] font-semibold no-underline border-b border-gray-400 items-center justify-start hover:text-[#FFD700]"
        >
          CONTACT US
        </a>
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
  },
};
</script>