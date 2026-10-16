<template>
  <section id="slide-17" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
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
        style="left: 17.88%; top: 15.12%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'Koffie Art — Reel 1 (Iced Coffee)',
          subtitle: 'Specialty Coffee & Café',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160201',
          videoUrl: 'https://vimeo.com/1235160201'
        })"
      >
        <img
          src="/images/extracted/page-17_2.jpg"
          alt="Koffie Art Reel 1"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 41.25%; top: 15.06%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'Koffie Art — Reel 2 (Drawing & Latte)',
          subtitle: 'Specialty Coffee & Café',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160202',
          videoUrl: 'https://vimeo.com/1235160202'
        })"
      >
        <img
          src="/images/extracted/page-17_1.jpg"
          alt="Koffie Art Reel 2"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 64.69%; top: 15.12%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'Koffie Art — Reel 3 (Barista Story)',
          subtitle: 'Specialty Coffee & Café',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'vimeo',
          vimeoId: '1235160203',
          videoUrl: 'https://vimeo.com/1235160203'
        })"
      >
        <img
          src="/images/extracted/page-17_3.jpg"
          alt="Koffie Art Reel 3"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <PlayButton />
      </div>

      <!-- Below Reels: Brand Title & Description Centered -->
      <div class="reel-brand absolute text-center w-full text-ebra-yellow font-clash" style="top: 77.65%;">
        <h3 class="font-bold leading-none tracking-tight" style="font-size: 1.56cqw;">
          Koffie Art
        </h3>
      </div>

      <div class="reel-brand absolute text-center w-full text-ebra-yellow font-clash" style="top: 85.43%;">
        <p class="font-light leading-relaxed" style="font-size: 1.32cqw;">
          A specialty coffee café offering a diverse menu of hot and iced beverages, sandwiches,<br />
          and desserts, bringing together quality coffee and a well-rounded café experience.
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
