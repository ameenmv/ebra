<template>
  <section id="slide-12" class="relative w-full h-[100dvh] md:min-h-screen snap-start snap-always flex items-center justify-center bg-[#050505] overflow-hidden">
    <!-- Mobile Full-Height Card (< md) -->
    <div class="md:hidden relative w-full h-full flex flex-col justify-between p-6 select-none z-10">
      <img
        src="/images/extracted/page-12_1.jpg"
        alt="Documentary Divider"
        class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none -z-10 brightness-75"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none -z-10"></div>

      <!-- Top Bar -->
      <div class="flex items-center justify-between text-ebra-yellow font-clash text-xs tracking-widest uppercase pt-2">
        <span class="font-light">Portfolio</span>
        <span class="font-bold">ü</span>
        <span class="font-light">2026</span>
      </div>

      <!-- Bottom Category Title -->
      <div class="pb-20 space-y-2">
        <div class="text-xs font-mono uppercase tracking-widest text-white/50">
          Category 03
        </div>
        <h2 class="text-ebra-yellow font-clash font-bold text-5xl leading-none uppercase tracking-tight">
          DOCUMENTARY
        </h2>
        <p class="text-white/60 font-clash text-xs tracking-wider pt-2">
          Real Stories, Real Emotion & Cinematography
        </p>
      </div>
    </div>

    <!-- 16:9 PDF Canvas Frame (Desktop md:) -->
    <div class="hidden md:block relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Raw Background Photo -->
      <img
        src="/images/extracted/page-12_1.jpg"
        alt="Documentary Divider"
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

      <!-- Giant Bold Section Title: DOCUMENTARY -->
      <h2
        class="divider-title absolute text-ebra-yellow font-clash font-bold uppercase tracking-tight will-change-transform leading-none"
        style="left: 4.79%; top: 71.54%; font-size: 12.1cqw;"
      >
        DOCUMENTARY
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
</script>
