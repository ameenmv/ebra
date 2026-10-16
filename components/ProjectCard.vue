<template>
  <div class="glass-panel p-6 sm:p-8 lg:p-10 rounded-xl transition-all duration-300 hover:border-white/20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <!-- Media Column (Left 7 Cols) -->
      <div class="lg:col-span-7 space-y-4">
        <!-- Main Project Visual / Banner -->
        <div class="relative group overflow-hidden rounded-lg bg-black border border-white/10 aspect-[16/9]">
          <img
            :src="project.heroImage"
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Overlay gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

          <!-- Aspect Ratio & Scope Badges -->
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <span v-if="project.aspectRatio" class="text-[10px] font-mono tracking-wider bg-black/70 backdrop-blur-md text-white px-2.5 py-1 rounded border border-white/10">
              {{ project.aspectRatio }}
            </span>
            <span class="text-[10px] font-mono uppercase tracking-wider bg-gold-500/90 text-black font-bold px-2.5 py-1 rounded">
              {{ project.scopeOfWork }}
            </span>
          </div>

          <!-- Center Play / Details Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <button
              v-if="project.videoType !== 'offline'"
              @click="$emit('play', project)"
              class="w-16 h-16 rounded-full bg-white/20 hover:bg-gold-500 hover:text-black text-white backdrop-blur-md border border-white/30 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl"
              :aria-label="'Play ' + project.title"
            >
              <svg class="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button
              v-else
              @click="$emit('view-details', project)"
              class="px-5 py-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/20 text-xs font-mono tracking-wider transition-all"
            >
              View Film Credits & Stills
            </button>
          </div>
        </div>

        <!-- 3 Film Stills Row (Matches PDF Stills Layout) -->
        <div v-if="project.stills && project.stills.length > 0" class="grid grid-cols-3 gap-3">
          <div
            v-for="(still, idx) in project.stills.slice(0, 3)"
            :key="idx"
            class="relative aspect-[16/9] overflow-hidden rounded bg-black/50 border border-white/10 group cursor-pointer"
            @click="$emit('view-image', still)"
          >
            <img
              :src="still"
              :alt="project.title + ' Still ' + (idx + 1)"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
            <span class="absolute bottom-1 right-1.5 text-[9px] font-mono text-white/70 bg-black/60 px-1 rounded">
              0{{ idx + 1 }}
            </span>
          </div>
        </div>
      </div>

      <!-- Information Column (Right 5 Cols) -->
      <div class="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
        <div>
          <!-- Category & Year -->
          <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-cinema-wide text-cinema-400 mb-2">
            <span>{{ project.subtitle }}</span>
          </div>

          <!-- Titles: Arabic & English -->
          <div class="space-y-1 mb-4">
            <h3
              v-if="project.titleArabic"
              class="font-arabic font-bold text-3xl sm:text-4xl text-gold-400 tracking-normal"
              dir="rtl"
            >
              {{ project.titleArabic }}
            </h3>
            <h4 class="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              {{ project.title }}
            </h4>
          </div>

          <!-- Genre Tag -->
          <div v-if="project.genre" class="mb-4">
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-cinema-200">
              {{ project.genre }}
            </span>
          </div>

          <!-- Synopsis / Description -->
          <p class="text-sm sm:text-base text-cinema-300 font-light leading-relaxed mb-6">
            {{ project.synopsis }}
          </p>

          <!-- Scope of Work Section (Exact PDF Layout) -->
          <div class="border-t border-white/10 pt-4">
            <div class="text-[11px] font-mono uppercase tracking-wider text-cinema-400">
              Scope of Work
            </div>
            <div class="text-base font-semibold text-white mt-1 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span>{{ project.scopeOfWork }}</span>
            </div>
          </div>

          <!-- Festival Status if Offline -->
          <div v-if="project.festivalNote" class="mt-4 p-4 rounded bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-relaxed font-mono">
            {{ project.festivalNote }}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 pt-4 border-t border-white/10">
          <button
            v-if="project.videoType !== 'offline'"
            @click="$emit('play', project)"
            class="flex-1 py-3 px-5 rounded bg-white hover:bg-gold-500 text-black font-semibold text-xs tracking-cinema-wide uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch {{ project.videoType === 'vimeo' ? 'on Vimeo' : 'Video' }}</span>
          </button>

          <button
            v-if="project.id === 'mafoul-beh'"
            @click="$emit('view-credits')"
            class="flex-1 py-3 px-5 rounded bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-cinema-wide uppercase border border-white/15 transition-all text-center"
          >
            Cast & Crew Credits
          </button>

          <a
            v-if="project.videoUrl && project.videoType !== 'offline'"
            :href="project.videoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 rounded border border-white/15 text-cinema-400 hover:text-white hover:border-white transition-colors"
            title="Open in new tab"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '~/data/portfolio'

defineProps<{
  project: ProjectItem
}>()

defineEmits(['play', 'view-details', 'view-credits', 'view-image'])
</script>
