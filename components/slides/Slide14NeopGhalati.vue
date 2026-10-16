<template>
  <section id="slide-14" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
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
