<template>
  <div
    v-if="isOpen && video"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/95 backdrop-blur-2xl"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-5xl bg-cinema-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      <!-- Top Bar -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-gold-400"></span>
          <div>
            <h3 class="text-sm font-display font-bold text-white tracking-wide">
              {{ video.title }}
            </h3>
            <div class="text-[11px] font-mono text-cinema-400">
              {{ video.subtitle || video.categoryLabel }} · {{ video.scopeOfWork }}
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <a
            v-if="video.videoUrl"
            :href="video.videoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-1.5 rounded text-xs font-mono text-cinema-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5"
          >
            <span>External Link</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <button
            @click="$emit('close')"
            class="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Player Area -->
      <div class="relative w-full aspect-[16/9] bg-black flex items-center justify-center">
        <!-- Vimeo Player -->
        <iframe
          v-if="video.videoType === 'vimeo' && video.vimeoId"
          :src="'https://player.vimeo.com/video/' + video.vimeoId + '?autoplay=1&color=e5b84c&title=0&byline=0&portrait=0'"
          class="w-full h-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- Google Drive Preview Player -->
        <iframe
          v-else-if="video.videoType === 'drive' && video.driveId"
          :src="'https://drive.google.com/file/d/' + video.driveId + '/preview'"
          class="w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>

        <!-- Fallback Link Card -->
        <div v-else class="text-center p-8 space-y-4">
          <p class="text-cinema-400 text-sm">
            This video is hosted on an external platform.
          </p>
          <a
            :href="video.videoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Open Media Link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  isOpen: boolean
  video: any
}>()

const emit = defineEmits(['close'])

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
