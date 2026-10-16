<template>
  <section id="reels" class="py-24 px-6 md:px-12 bg-cinema-900 border-t border-white/5">
    <div class="max-w-7xl mx-auto space-y-24">
      <div
        v-for="(group, groupIndex) in reelGroups"
        :key="group.id"
        class="space-y-8"
      >
        <!-- Brand Header Bar (Matches Page 16, 17, 18 of PDF) -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-400 mb-1">
              <span>Client / Brand {{ groupIndex + 1 }}</span>
              <span>·</span>
              <span>{{ group.tagline }}</span>
            </div>
            <h3 class="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
              {{ group.brand }}
            </h3>
          </div>

          <p class="max-w-xl text-sm text-cinema-400 font-light leading-relaxed">
            {{ group.description }}
          </p>
        </div>

        <!-- 3 Vertical 9:16 Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div
            v-for="reel in group.reels"
            :key="reel.id"
            class="group relative rounded-xl overflow-hidden bg-black border border-white/10 hover:border-gold-400/50 transition-all duration-300 shadow-xl aspect-[9/16] flex flex-col justify-between p-6"
          >
            <!-- Background Vertical Thumbnail Image -->
            <img
              :src="reel.thumbnail"
              :alt="reel.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <!-- Dark Gradients for Readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60"></div>

            <!-- Top Platform Badge -->
            <div class="relative z-10 flex items-center justify-between">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15">
                <span class="w-1.5 h-1.5 rounded-full" :class="reel.platform === 'instagram' ? 'bg-pink-500' : 'bg-gold-400'"></span>
                {{ reel.platform === 'instagram' ? 'Instagram Reel' : reel.platform === 'vimeo' ? 'Vimeo' : 'Drive Preview' }}
              </span>

              <a
                :href="reel.videoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-md flex items-center justify-center transition-colors"
                title="Open in new tab"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <!-- Center Play Trigger -->
            <div class="relative z-10 self-center">
              <button
                @click="handleReelClick(reel)"
                class="w-14 h-14 rounded-full bg-white/20 hover:bg-gold-500 hover:text-black text-white backdrop-blur-md border border-white/30 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl"
                :aria-label="'Watch ' + reel.title"
              >
                <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <!-- Bottom Content Info -->
            <div class="relative z-10 space-y-2">
              <div class="text-[10px] font-mono uppercase tracking-wider text-gold-400">
                {{ reel.brand }}
              </div>
              <h4 class="font-display font-bold text-lg text-white group-hover:text-gold-300 transition-colors">
                {{ reel.title }}
              </h4>
              <div class="pt-2">
                <button
                  @click="handleReelClick(reel)"
                  class="w-full py-2.5 px-4 rounded bg-white/10 hover:bg-gold-500 hover:text-black text-white text-xs font-mono uppercase tracking-wider transition-colors border border-white/10 flex items-center justify-center gap-2"
                >
                  <span>{{ reel.platform === 'instagram' ? 'Watch Reel' : 'Play Video' }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { REELS_DATA, type ReelItem } from '~/data/portfolio'

const emit = defineEmits(['play-reel'])

const reelGroups = REELS_DATA

const handleReelClick = (reel: ReelItem) => {
  if (reel.platform === 'instagram') {
    // Open instagram reels directly in instagram
    window.open(reel.videoUrl, '_blank')
  } else {
    emit('play-reel', reel)
  }
}
</script>
