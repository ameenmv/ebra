<template>
  <section id="slide-16" class="relative w-full h-[100dvh] md:h-auto md:min-h-0 snap-start md:snap-none flex items-center justify-center md:block bg-[#050505] overflow-hidden">
    <!-- Mobile Full-Height Card (< md) -->
    <div class="md:hidden relative w-full h-full flex flex-col justify-between p-5 select-none z-10 overflow-y-auto">
      <!-- Top Bar -->
      <div class="flex items-center justify-between text-ebra-yellow font-clash text-xs tracking-wider border-b border-white/10 pb-2">
        <span class="font-mono text-white/50 text-[10px] uppercase">16 / Reels</span>
        <span class="font-bold">NORDWAY</span>
      </div>

      <!-- 3 Vertical 9:16 Reels Horizontal Snap Row -->
      <div class="my-auto py-2">
        <div class="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
          <!-- Reel 1 -->
          <div
            class="w-[68vw] max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer relative group border border-white/10 flex-shrink-0 snap-center shadow-2xl"
            @click="$emit('play-video', {
              title: 'NORDWAY — Reel 1',
              subtitle: 'Specialty Coffee Roastery',
              scopeOfWork: 'Colorist · Video Editor',
              videoType: 'instagram',
              videoUrl: 'https://www.instagram.com/reel/DYE7p3pItTS/'
            })"
          >
            <img src="/images/extracted/page-16_3.jpg" alt="Nordway Reel 1" class="w-full h-full object-cover" />
            <PlayButton />
            <div class="absolute bottom-3 left-3 right-3 text-center bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-full text-[11px] font-mono text-ebra-yellow border border-white/10">
              Reel 01 ↗
            </div>
          </div>

          <!-- Reel 2 -->
          <div
            class="w-[68vw] max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer relative group border border-white/10 flex-shrink-0 snap-center shadow-2xl"
            @click="$emit('play-video', {
              title: 'NORDWAY — Reel 2',
              subtitle: 'Specialty Coffee Roastery',
              scopeOfWork: 'Colorist · Video Editor',
              videoType: 'instagram',
              videoUrl: 'https://www.instagram.com/reel/DcbRUxPCIOH/'
            })"
          >
            <img src="/images/extracted/page-16_2.jpg" alt="Nordway Reel 2" class="w-full h-full object-cover" />
            <PlayButton />
            <div class="absolute bottom-3 left-3 right-3 text-center bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-full text-[11px] font-mono text-ebra-yellow border border-white/10">
              Reel 02 ↗
            </div>
          </div>

          <!-- Reel 3 -->
          <div
            class="w-[68vw] max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer relative group border border-white/10 flex-shrink-0 snap-center shadow-2xl"
            @click="$emit('play-video', {
              title: 'NORDWAY — Reel 3',
              subtitle: 'Specialty Coffee Roastery',
              scopeOfWork: 'Colorist · Video Editor',
              videoType: 'drive',
              driveId: '1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m',
              videoUrl: 'https://drive.google.com/file/d/1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m/view?usp=drive_link'
            })"
          >
            <img src="/images/extracted/page-16_1.jpg" alt="Nordway Reel 3" class="w-full h-full object-cover" />
            <PlayButton />
            <div class="absolute bottom-3 left-3 right-3 text-center bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-full text-[11px] font-mono text-ebra-yellow border border-white/10">
              Reel 03 ↗
            </div>
          </div>
        </div>
        <p class="text-[11px] font-mono text-center text-white/40 pt-1">← Swipe to view all reels →</p>
      </div>

      <!-- Bottom Details & External Action Button -->
      <div class="pb-16 space-y-3">
        <div class="flex items-baseline justify-between">
          <h2 class="text-2xl font-clash font-bold text-ebra-yellow uppercase tracking-tight">
            NORDWAY
          </h2>
          <span class="text-xs font-mono text-ebra-yellow/70">Coffee Roastery</span>
        </div>

        <div class="flex items-center justify-between text-[11px] font-mono text-ebra-yellow/80 border-t border-white/10 pt-2">
          <span>Scope of Work:</span>
          <span class="font-bold text-ebra-yellow">Colorist · Video Editor</span>
        </div>

        <button
          type="button"
          @click="$emit('play-video', {
            title: 'NORDWAY — Selected Reels',
            subtitle: 'Specialty Coffee Roastery',
            scopeOfWork: 'Colorist · Video Editor',
            videoType: 'vimeo',
            vimeoId: '1235160101',
            videoUrl: 'https://vimeo.com/1235160101'
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

      <!-- 3 Vertical 9:16 Reels Side-by-Side -->
      <div
        class="reel-card absolute overflow-hidden cursor-pointer group shadow-2xl"
        style="left: 17.81%; top: 15.12%; width: 17.46%; height: 55.25%;"
        @click="$emit('play-video', {
          title: 'NORDWAY — Reel 1',
          subtitle: 'Specialty Coffee Roastery',
          scopeOfWork: 'Colorist · Video Editor',
          videoType: 'instagram',
          videoUrl: 'https://www.instagram.com/reel/DYE7p3pItTS/'
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
          videoType: 'instagram',
          videoUrl: 'https://www.instagram.com/reel/DcbRUxPCIOH/'
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
          videoType: 'drive',
          driveId: '1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m',
          videoUrl: 'https://drive.google.com/file/d/1sWyMp1yEJCmRHt4f-v5SUs-8zmsOKo8m/view?usp=drive_link'
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
