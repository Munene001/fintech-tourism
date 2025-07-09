<template>
    <div ref="overall" class="w-full font-[sans]">
      <div class="h-[590px] flex flex-col justify-evenly items-center md:flex-row md:h-[250px] bg-[#202654]">
        <div v-for="(stat, index) in stats" :key="index" class="text-center">
          <div ref="numberElements" class="text-[40px] font-semibold leading-[40px] text-white">
            {{ animatedValues[index] || 0 }}
          </div>
          <div class="text-[20px] font-[500] leading-[30px] text-white">
            {{ stat.text }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const overall = ref(null);
  const numberElements = ref([]);
  const animatedValues = ref([0, 0, 0, 0]);
  
  const stats = [
    { value: 50, suffix: '+', text: 'Countries' },
    { value: 500000, suffix: '+', text: ' Active Users' },
    { value: 7000000, suffix: '+', text: 'Transactions' },
    { value: 180000000, suffix: '+', text: 'Money Transacted' }
  ];
  
  function animateNumber(element, index, start, end, duration, suffix) {
    let startTimestamp = null;
  
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      animatedValues.value[index] = value.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  }
  
  function startNumberAnimation() {
    stats.forEach((stat, index) => {
      animateNumber(numberElements.value[index], index, 0, stat.value, 2000, stat.suffix);
    });
  }
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startNumberAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (overall.value) {
      observer.observe(overall.value);
    }
  });
  </script>