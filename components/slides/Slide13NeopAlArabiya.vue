<template>
  <section id="slide-13" class="relative w-full h-[100dvh] md:h-auto md:min-h-0 snap-start md:snap-none flex items-center justify-center md:block bg-[#050505] overflow-hidden">
    <!-- Mobile Full-Height Card (< md) -->
    <div class="md:hidden relative w-full h-full flex flex-col justify-between p-5 select-none z-10 overflow-y-auto">
      <!-- Top Bar -->
      <div class="flex items-center justify-between text-ebra-yellow font-clash text-xs tracking-wider border-b border-white/10 pb-2">
        <span class="font-mono text-white/50 text-[10px] uppercase">13 / Documentary</span>
        <span class="font-bold">2025</span>
      </div>

      <!-- Main Visual + 3 Stills Gallery -->
      <div class="space-y-2.5 my-auto py-2">
        <div
          class="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-pointer group shadow-2xl border border-white/10"
          @click="$emit('play-video', {
            title: 'Neop × Al Arabiya · 2025',
            subtitle: 'Mini Documentary',
            scopeOfWork: 'Director · Cinematographer · Editor',
            videoType: 'vimeo',
            vimeoId: '1235159889',
            videoUrl: 'https://vimeo.com/1235159889'
          })"
        >
          <img
            src="/images/extracted/page-13_1.jpg"
            alt="Neop x Al Arabiya Main"
            class="w-full h-full object-cover"
          />
          <PlayButton />
        </div>

        <!-- 3 Horizontal Stills Strip -->
        <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <div class="w-1/3 aspect-[16/9] rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/images/extracted/page-13_2.jpg" alt="Still 1" class="w-full h-full object-cover" />
          </div>
          <div class="w-1/3 aspect-[16/9] rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/images/extracted/page-13_3.jpg" alt="Still 2" class="w-full h-full object-cover" />
          </div>
          <div class="w-1/3 aspect-[16/9] rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
            <img src="/images/extracted/page-13_4.jpg" alt="Still 3" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Bottom Details & External Action Button -->
      <div class="pb-16 space-y-3">
        <div class="flex items-baseline justify-between">
          <h2 class="text-2xl font-clash font-bold text-ebra-yellow uppercase tracking-tight">
            Neop × Al Arabiya
          </h2>
          <span class="text-xs font-mono text-ebra-yellow/70">Mini Doc</span>
        </div>

        <p class="text-xs font-light text-white/80 leading-relaxed">
          A behind-the-scenes documentary capturing Neop’s collaboration with Al Arabiya news network.
        </p>

        <div class="flex items-center justify-between text-[11px] font-mono text-ebra-yellow/80 border-t border-white/10 pt-2">
          <span>Scope of Work:</span>
          <span class="font-bold text-ebra-yellow">Director · DOP · Editor</span>
        </div>

        <button
          type="button"
          @click="$emit('play-video', {
            title: 'Neop × Al Arabiya · 2025',
            subtitle: 'Mini Documentary',
            scopeOfWork: 'Director · Cinematographer · Editor',
            videoType: 'vimeo',
            vimeoId: '1235159889',
            videoUrl: 'https://vimeo.com/1235159889?share=copy&fl=sv&fe=ci'
          })"
          class="w-full py-3 px-4 rounded-xl bg-ebra-yellow text-black font-clash font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <span>Watch on Vimeo</span>
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
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
        style="left: 0%; top: 24.94%; width: 75.03%; height: 75.06%;"
        @click="$emit('play-video', {
          title: 'Neop × Al Arabiya · 2025',
          subtitle: 'Mini Documentary',
          scopeOfWork: 'Director · Cinematographer · Editor',
          videoType: 'vimeo',
          vimeoId: '1235159889',
          videoUrl: 'https://vimeo.com/1235159889?share=copy&fl=sv&fe=ci'
        })"
      >
        <img
          src="/images/extracted/page-13_1.jpg"
          alt="Neop x Al Arabiya Main"
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
          Neop × Al Arabiya · 2025
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
        A behind-the-scenes look at Neop’s collaboration with Al<br />
        Arabiya, documenting the creative process across content<br />
        production, design, video, motion graphics, and more.<br />
        The film captures the people and process behind the work,<br />
        showcasing how the collaboration comes together from<br />
        concept to execution.
      </p>

      <!-- Overlaid Text: Scope of Work (Bottom-Left of Hero) -->
      <div
        class="project-info absolute text-ebra-yellow font-clash z-20 pointer-events-none"
        style="left: 5.21%; top: 85.80%; width: 30%;"
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
        style="left: 75.03%; top: 24.94%; width: 24.97%; height: 24.94%;"
      >
        <img src="/images/extracted/page-13_2.jpg" alt="Neop x Al Arabiya Still 1" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden shadow-md"
        style="left: 74.97%; top: 49.63%; width: 25.03%; height: 25.06%;"
      >
        <img src="/images/extracted/page-13_3.jpg" alt="Neop x Al Arabiya Still 2" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden shadow-md"
        style="left: 75.00%; top: 74.38%; width: 25.00%; height: 25.62%;"
      >
        <img src="/images/extracted/page-13_4.jpg" alt="Neop x Al Arabiya Still 3" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
import PlayButton from '~/components/PlayButton.vue'

defineEmits(['play-video'])
</script>
