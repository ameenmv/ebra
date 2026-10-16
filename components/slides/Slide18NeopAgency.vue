<template>
  <section id="slide-18" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
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

      <!-- 3 Vertical 9:16 Reels Side-by-Side -->
      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 17.81%; top: 15.06%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'NEOP Agency — Reel 1 (Creative Team)',
          subtitle: 'Marketing & Media Production',
          scopeOfWork: 'Cinematographer · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160301',
          videoUrl: 'https://vimeo.com/1235160301'
        })"
      >
        <img
          src="/images/extracted/page-18_3.jpg"
          alt="NEOP Agency Reel 1"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 41.22%; top: 15.06%; width: 17.57%; height: 55.49%;"
        @click="$emit('play-video', {
          title: 'NEOP Agency — Reel 2 (Actor Interview)',
          subtitle: 'Marketing & Media Production',
          scopeOfWork: 'Cinematographer · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160302',
          videoUrl: 'https://vimeo.com/1235160302'
        })"
      >
        <img
          src="/images/extracted/page-18_1.jpg"
          alt="NEOP Agency Reel 2"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 64.69%; top: 15.06%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'NEOP Agency — Reel 3 (Package Unboxing)',
          subtitle: 'Marketing & Media Production',
          scopeOfWork: 'Cinematographer · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160303',
          videoUrl: 'https://vimeo.com/1235160303'
        })"
      >
        <img
          src="/images/extracted/page-18_2.jpg"
          alt="NEOP Agency Reel 3"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <!-- Below Reels: Brand Title & Description Centered -->
      <div class="reel-brand absolute text-center w-full text-ebra-yellow font-clash" style="top: 77.65%;">
        <h3 class="font-bold leading-none tracking-tight" style="font-size: 1.56cqw;">
          NEOP
        </h3>
      </div>

      <div class="reel-brand absolute text-center w-full text-ebra-yellow font-clash" style="top: 85.43%;">
        <p class="font-light leading-relaxed" style="font-size: 1.32cqw;">
          A marketing agency working with a diverse range of clients across Egypt and Saudi Arabia,<br />
          delivering creative content and media production for both external clients and in-house projects.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
import PlayButton from '~/components/PlayButton.vue'

defineEmits(['play-video'])
</script>
