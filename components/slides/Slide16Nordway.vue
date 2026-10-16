<template>
  <section id="slide-16" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
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
        style="left: 17.81%; top: 15.12%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'NORDWAY — Reel 1',
          subtitle: 'Specialty Coffee Roastery',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160101',
          videoUrl: 'https://vimeo.com/1235160101'
        })"
      >
        <img
          src="/images/extracted/page-16_3.jpg"
          alt="Nordway Reel 1"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 41.32%; top: 15.12%; width: 17.46%; height: 55.19%;"
        @click="$emit('play-video', {
          title: 'NORDWAY — Reel 2 (Roaster Story)',
          subtitle: 'Specialty Coffee Roastery',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160102',
          videoUrl: 'https://vimeo.com/1235160102'
        })"
      >
        <img
          src="/images/extracted/page-16_2.jpg"
          alt="Nordway Reel 2"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 64.69%; top: 15.06%; width: 17.50%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'NORDWAY — Reel 3 (Roasting Process)',
          subtitle: 'Specialty Coffee Roastery',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160103',
          videoUrl: 'https://vimeo.com/1235160103'
        })"
      >
        <img
          src="/images/extracted/page-16_1.jpg"
          alt="Nordway Reel 3"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <!-- Below Reels: Brand Title & Description Centered -->
      <div class="reel-brand absolute text-center w-full text-ebra-yellow font-clash" style="top: 77.65%;">
        <h3 class="font-bold leading-none tracking-tight" style="font-size: 1.56cqw;">
          NORDWAY
        </h3>
      </div>

      <div class="reel-brand absolute text-center w-full text-ebra-yellow font-clash" style="top: 85.43%;">
        <p class="font-light leading-relaxed" style="font-size: 1.32cqw;">
          A specialty coffee roastery dedicated to sourcing quality coffee<br />
          beans from renowned coffee-growing regions around the world.
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
