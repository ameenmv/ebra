<template>
  <section id="slide-01" class="relative w-full h-[100dvh] md:h-auto md:min-h-0 snap-start md:snap-none flex items-center justify-center md:block bg-[#050505] overflow-hidden">
    <!-- Mobile Full-Height Cinema Card (< md) -->
    <div class="md:hidden relative w-full h-full flex flex-col justify-between p-6 select-none z-10">
      <!-- Background Photo with cinematic dark gradient -->
      <img
        src="/images/extracted/page-1_1.jpg"
        alt="EBRA Cover"
        class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none -z-10 brightness-90"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none -z-10"></div>

      <!-- Top Bar -->
      <div class="flex items-center justify-between text-ebra-yellow font-clash text-xs tracking-widest uppercase pt-2">
        <span class="font-light">Portfolio</span>
        <span class="font-bold tracking-[0.2em]">EBRA</span>
        <span class="font-light">2026</span>
      </div>

      <!-- Bottom Content Area -->
      <div class="pb-16 space-y-4">
        <!-- Roles -->
        <div class="flex items-center justify-between text-ebra-yellow font-clash text-xs tracking-wider border-b border-ebra-yellow/20 pb-2">
          <span>Cinematographer</span>
          <span class="text-white/40">/</span>
          <span>Director</span>
          <span class="text-white/40">/</span>
          <span>Editor</span>
        </div>

        <!-- Giant Mobile Title -->
        <h1 class="text-ebra-yellow font-clash font-bold text-5xl leading-none uppercase tracking-tight">
          FILMMAKER
        </h1>
      </div>
    </div>

    <!-- 16:9 PDF Canvas Frame (Desktop md:) -->
    <div
      class="hidden md:block relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none"
      style="container-type: inline-size;"
    >
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
