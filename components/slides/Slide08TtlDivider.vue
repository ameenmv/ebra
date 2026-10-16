<template>
  <section id="slide-08" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Raw Background Photo -->
      <img
        src="/images/extracted/page-8_1.jpg"
        alt="TTL Campaign Divider"
        class="divider-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
      />

      <!-- Top Bar: Portfolio | ü | 2026 -->
      <div
        class="divider-top absolute text-ebra-yellow font-clash font-extralight tracking-wider"
        style="left: 5.21%; top: 8.83%; font-size: 1.04cqw;"
      >
        Portfolio
      </div>
      <div
        class="divider-top absolute text-ebra-yellow font-clash font-normal tracking-wide"
        style="left: 49.51%; top: 8.89%; font-size: 1.04cqw; transform: translateX(-50%);"
      >
        ü
      </div>
      <div
        class="divider-top absolute text-ebra-yellow font-clash font-extralight tracking-wider"
        style="left: 92.57%; top: 8.89%; font-size: 1.04cqw;"
      >
        2026
      </div>

      <!-- Mid Left & Right 4-Dot Clusters -->
      <div class="absolute" style="left: 5.21%; top: 41.17%;">
        <TopRightDots />
      </div>
      <div class="absolute" style="left: 93.68%; top: 41.17%;">
        <TopRightDots />
      </div>

      <!-- Giant Bold Section Title: TTL CAMPAIN -->
      <h2
        class="divider-title absolute text-ebra-yellow font-clash font-bold uppercase tracking-tight will-change-transform leading-none"
        style="left: 5.21%; top: 68.64%; font-size: 13.9cqw;"
      >
        TTL CAMPAIN
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
</script>
