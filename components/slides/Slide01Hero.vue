<template>
  <section id="slide-01" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <!-- 16:9 PDF Canvas Frame -->
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Raw Background Photo -->
      <img
        src="/images/extracted/page-1_1.jpg"
        alt="EBRA Cover"
        class="hero-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
      />

      <!-- Top Bar: Portfolio | EBRA | 2026 -->
      <div
        class="hero-top absolute text-ebra-yellow font-clash font-extralight uppercase tracking-wider"
        style="left: 5.14%; top: 8.83%; font-size: 1.04cqw;"
      >
        Portfolio
      </div>
      <div
        class="hero-top absolute text-ebra-yellow font-clash font-normal tracking-widest uppercase"
        style="left: 48.68%; top: 8.89%; font-size: 1.04cqw; transform: translateX(-50%);"
      >
        EBRA
      </div>
      <div
        class="hero-top absolute text-ebra-yellow font-clash font-extralight tracking-wider"
        style="left: 92.57%; top: 8.89%; font-size: 1.04cqw;"
      >
        2026
      </div>

      <!-- Roles Bar: Cinematographer / Director / Editor -->
      <div
        class="hero-roles absolute text-ebra-yellow font-clash font-normal flex items-center"
        style="left: 5.21%; top: 62.04%; font-size: 1.84cqw; line-height: 1;"
      >
        Cinematographer
      </div>
      <div
        class="hero-roles absolute text-ebra-yellow font-clash font-extralight"
        style="left: 41.5%; top: 62.04%; font-size: 1.84cqw; line-height: 1;"
      >
        /
      </div>
      <div
        class="hero-roles absolute text-ebra-yellow font-clash font-normal"
        style="left: 65.04%; top: 62.04%; font-size: 1.84cqw; line-height: 1;"
      >
        Director
      </div>
      <div
        class="hero-roles absolute text-ebra-yellow font-clash font-extralight"
        style="left: 80.5%; top: 62.04%; font-size: 1.84cqw; line-height: 1;"
      >
        /
      </div>
      <div
        class="hero-roles absolute text-ebra-yellow font-clash font-normal"
        style="left: 90.14%; top: 62.04%; font-size: 1.84cqw; line-height: 1;"
      >
        Editor
      </div>

      <!-- Giant Bold Title: FILMMAKER -->
      <h1
        class="hero-title absolute text-ebra-yellow font-clash font-bold uppercase tracking-tight will-change-transform leading-none"
        style="left: 4.69%; top: 66.8%; font-size: 15.69cqw; width: 90.69%; transform: translate3d(0, 0, 0); backface-visibility: hidden;"
      >
        FILMMAKER
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['play-showreel'])
</script>
