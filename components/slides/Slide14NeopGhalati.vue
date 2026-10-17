<template>
  <section id="slide-14" class="relative w-full h-[100dvh] md:min-h-screen snap-start snap-always flex items-center justify-center bg-[#050505] overflow-hidden">
    <!-- Mobile Full-Height Card (< md) -->
    <div class="md:hidden relative w-full h-full flex flex-col justify-between p-5 select-none z-10 overflow-y-auto">
      <!-- Top Bar -->
      <div class="flex items-center justify-between text-ebra-yellow font-clash text-xs tracking-wider border-b border-white/10 pb-2">
        <span class="font-mono text-white/50 text-[10px] uppercase">14 / Documentary</span>
        <span class="font-bold">2026</span>
      </div>

      <!-- Main Visual + 3 Stills Gallery -->
      <div class="space-y-2.5 my-auto py-2">
        <div
          class="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          @click="$emit('play-video', {
            title: 'Neop × Ghalati · 2026',
            subtitle: 'Mini Documentary',
            scopeOfWork: 'Director · Cinematographer · Editor',
            videoType: 'drive',
            driveId: '1f8hT4g_K3m1Q7e8a9B_2s6r5tY4uV3wX',
            videoUrl: 'https://drive.google.com/file/d/1f8hT4g_K3m1Q7e8a9B_2s6r5tY4uV3wX/view?usp=drive_link'
          })"
        >
          <img
            src="/images/extracted/page-14_1.jpg"
            alt="Neop x Ghalati Main"
            class="w-full h-full object-cover"
          />
          <PlayButton />
        </div>

        <!-- 3 Horizontal Stills Strip -->
        <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <div class="w-1/3 aspect-[16/9] rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/images/extracted/page-14_2.jpg" alt="Still 1" class="w-full h-full object-cover" />
          </div>
          <div class="w-1/3 aspect-[16/9] rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/images/extracted/page-14_3.jpg" alt="Still 2" class="w-full h-full object-cover" />
          </div>
          <div class="w-1/3 aspect-[16/9] rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/images/extracted/page-14_4.jpg" alt="Still 3" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Bottom Details & External Action Button -->
      <div class="pb-16 space-y-3">
        <div class="flex items-baseline justify-between">
          <h2 class="text-2xl font-clash font-bold text-ebra-yellow uppercase tracking-tight">
            Neop × Ghalati
          </h2>
          <span class="text-xs font-mono text-ebra-yellow/70">Mini Doc</span>
        </div>

        <p class="text-xs font-light text-white/80 leading-relaxed">
          A documentary exploring Neop’s growing partnership with the Ghalati initiative.
        </p>

        <div class="flex items-center justify-between text-[11px] font-mono text-ebra-yellow/80 border-t border-white/10 pt-2">
          <span>Scope of Work:</span>
          <span class="font-bold text-ebra-yellow">Director · DOP · Editor</span>
        </div>

        <button
          type="button"
          @click="$emit('play-video', {
            title: 'Neop × Ghalati · 2026',
            subtitle: 'Mini Documentary',
            scopeOfWork: 'Director · Cinematographer · Editor',
            videoType: 'drive',
            driveId: '1f8hT4g_K3m1Q7e8a9B_2s6r5tY4uV3wX',
            videoUrl: 'https://drive.google.com/file/d/1f8hT4g_K3m1Q7e8a9B_2s6r5tY4uV3wX/view?usp=drive_link'
          })"
          class="w-full py-3 px-4 rounded-xl bg-ebra-yellow text-black font-clash font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span>Open in Google Drive</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 16:9 PDF Canvas Frame (Desktop md:) -->
    <div class="hidden md:block relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Top Bar: Portfolio | 2026 | Dots -->
      <div
        class="project-top absolute text-ebra-yellow font-clash font-extralight tracking-wider z-20"
        style="left: 5.21%; top: 8.83%; font-size: 1.04cqw;"
      >
        Portfolio
      </div>
      <div
        class="project-top absolute text-ebra-yellow font-clash font-extralight tracking-wider z-20"
        style="left: 48.85%; top: 8.89%; font-size: 1.04cqw; transform: translateX(-50%);"
      >
        2026
      </div>
      <div class="project-top absolute z-20" style="left: 93.68%; top: 8.83%;">
        <TopRightDots />
      </div>

      <!-- Main Visual (Left 75% Widescreen Hero) -->
      <div
        class="project-visual absolute overflow-hidden cursor-pointer group"
        style="left: 0%; top: 24.44%; width: 75.03%; height: 75.56%;"
        @click="$emit('play-video', {
          title: 'Neop × Ghalati · 2026',
          subtitle: 'Mini Documentary',
          scopeOfWork: 'Director · Cinematographer · Editor',
          videoType: 'drive',
          driveId: '1f8hT4g_K3m1Q7e8a9B_2s6r5tY4uV3wX',
          videoUrl: 'https://drive.google.com/file/d/1f8hT4g_K3m1Q7e8a9B_2s6r5tY4uV3wX/view?usp=drive_link'
        })"
      >
        <img
          src="/images/extracted/page-14_1.jpg"
          alt="Neop x Ghalati Main"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <PlayButton />
      </div>

      <!-- Overlaid Text: Title & Subtitle (Top-Left of Hero) -->
      <div
        class="project-info absolute text-ebra-yellow font-clash z-20 pointer-events-none"
        style="left: 5.14%; top: 29.32%; width: 30%;"
      >
        <h3 class="font-medium leading-none" style="font-size: 1.56cqw;">
          Neop × Ghalati · 2026
        </h3>
        <div class="font-extralight leading-none mt-[0.5cqw]" style="font-size: 1.56cqw;">
          Mini Documentary
        </div>
      </div>

      <!-- Overlaid Text: Paragraph Description (Top-Center of Hero) -->
      <p
        class="project-info absolute text-ebra-yellow font-clash font-light leading-relaxed z-20 pointer-events-none"
        style="left: 38.26%; top: 28.95%; width: 34%; font-size: 1.32cqw;"
      >
        A documentary exploring Neop’s growing partnership with<br />
        Ghalati, a leading fragrance brand in Saudi Arabia.<br />
        Through interviews with the account and social media teams,<br />
        the film follows how the relationship evolved from a client<br />
        partnership into a long-term creative collaboration — with<br />
        stronger work, growing performance, and improved sales.
      </p>

      <!-- Overlaid Text: Scope of Work (Bottom-Left of Hero) -->
      <div
        class="project-info absolute text-ebra-yellow font-clash z-20 pointer-events-none"
        style="left: 5.14%; top: 85.80%; width: 30%;"
      >
        <div class="font-medium leading-none" style="font-size: 1.32cqw;">
          Scope of Work
        </div>
        <div class="font-light leading-none mt-[0.5cqw]" style="font-size: 1.32cqw;">
          Director · Cinematographer · Editor
        </div>
      </div>

      <!-- Right 25% Stack: 3 Vertically Stacked Stills -->
      <div
        class="project-visual absolute overflow-hidden shadow-md"
        style="left: 75.03%; top: 24.57%; width: 24.97%; height: 25.49%;"
      >
        <img src="/images/extracted/page-14_4.jpg" alt="Neop x Ghalati Still 1" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden shadow-md"
        style="left: 75.03%; top: 50.06%; width: 24.97%; height: 24.94%;"
      >
        <img src="/images/extracted/page-14_3.jpg" alt="Neop x Ghalati Still 2" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden shadow-md"
        style="left: 75.03%; top: 75.00%; width: 24.97%; height: 25.00%;"
      >
        <img src="/images/extracted/page-14_2.jpg" alt="Neop x Ghalati Still 3" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
import PlayButton from '~/components/PlayButton.vue'

defineEmits(['play-video'])
</script>
