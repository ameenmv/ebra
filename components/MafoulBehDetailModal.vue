<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-4xl bg-cinema-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8">
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors flex items-center justify-center"
        aria-label="Close modal"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Modal Header Banner -->
      <div class="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
        <img
          src="/images/projects/mafoul-beh-stills.png"
          alt="Maf'oul Beh Film Stills"
          class="w-full h-full object-cover opacity-60"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-cinema-900 via-cinema-900/60 to-transparent"></div>

        <div class="absolute bottom-6 left-6 sm:left-8 right-6">
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-400 mb-2">
            <span>Short Film · 2026 · Drama</span>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 class="font-arabic font-bold text-4xl sm:text-5xl text-white" dir="rtl">
                مفعول به
              </h2>
              <div class="text-xs font-mono text-cinema-400 tracking-wider mt-1">
                Maf'oul Beh · Short Film
              </div>
            </div>
            <div class="text-right">
              <span class="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 border border-gold-500/30 rounded text-xs font-mono">
                Scope: Editor & 1AD
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Body -->
      <div class="p-6 sm:p-8 space-y-8">
        <!-- Festival Notice (Matches exact PDF notice) -->
        <div class="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm text-amber-200/90 leading-relaxed font-mono">
          <p class="font-bold mb-1">Festival Circuit Note:</p>
          "The film is currently on its way to festivals, so I can't share an online link at the moment. However, it can be available for an offline preview."
        </div>

        <!-- 2 Column Credits & Cast Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
          <!-- Crew Credits -->
          <div>
            <h3 class="text-xs font-mono tracking-cinema-wider uppercase text-gold-400 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span>Crew Credits</span>
            </h3>
            <dl class="space-y-3 text-sm">
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Writer & Director</dt>
                <dd class="text-white font-medium">{{ credits.writerDirector }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Director of Photography (DOP)</dt>
                <dd class="text-white font-medium">{{ credits.dop }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Producer</dt>
                <dd class="text-white font-medium">{{ credits.producer }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5 bg-gold-400/5 px-2 -mx-2 rounded">
                <dt class="text-gold-400 font-mono text-xs font-bold">Editor</dt>
                <dd class="text-gold-300 font-semibold">{{ credits.editor }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5 bg-gold-400/5 px-2 -mx-2 rounded">
                <dt class="text-gold-400 font-mono text-xs font-bold">1st Assistant Director</dt>
                <dd class="text-gold-300 font-semibold">{{ credits.firstAssistantDirector }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Sound Designer</dt>
                <dd class="text-white font-medium">{{ credits.soundDesigner }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Colorist</dt>
                <dd class="text-white font-medium">{{ credits.colorist }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Art Director</dt>
                <dd class="text-white font-medium">{{ credits.artDirector }}</dd>
              </div>
              <div class="flex justify-between py-1 border-b border-white/5">
                <dt class="text-cinema-400 font-mono text-xs">Illustrator</dt>
                <dd class="text-white font-medium">{{ credits.illustrator }}</dd>
              </div>
            </dl>
          </div>

          <!-- Cast & Voice Over -->
          <div class="space-y-6">
            <div>
              <h3 class="text-xs font-mono tracking-cinema-wider uppercase text-gold-400 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                <span>Cast</span>
              </h3>
              <dl class="space-y-3 text-sm">
                <div
                  v-for="(member, idx) in credits.cast"
                  :key="idx"
                  class="flex justify-between py-1 border-b border-white/5"
                >
                  <dt class="text-cinema-400 font-mono text-xs">{{ member.role }}</dt>
                  <dd class="text-white font-medium">{{ member.actor }}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 class="text-xs font-mono tracking-cinema-wider uppercase text-gold-400 mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                <span>Voice Over</span>
              </h3>
              <dl class="space-y-3 text-sm">
                <div
                  v-for="(vo, idx) in credits.voiceOver"
                  :key="idx"
                  class="flex justify-between py-1 border-b border-white/5"
                >
                  <dt class="text-cinema-400 font-mono text-xs">{{ vo.role }}</dt>
                  <dd class="text-white font-medium">{{ vo.actor }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <!-- Poster & Stills Showcase from Page 7 & 8 -->
        <div class="border-t border-white/10 pt-6 space-y-4">
          <h3 class="text-xs font-mono tracking-cinema-wider uppercase text-cinema-400">
            Film Visuals & Stills
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="rounded-lg overflow-hidden border border-white/10 aspect-[3/4] bg-black">
              <img
                src="/images/projects/mafoul-beh-poster.png"
                alt="Maf'oul Beh Official Poster"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-lg overflow-hidden border border-white/10 aspect-[16/9] sm:aspect-auto bg-black">
              <img
                src="/images/projects/mafoul-beh-stills.png"
                alt="Maf'oul Beh Production Stills"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MAFOUL_BEH_CREDITS } from '~/data/portfolio'

defineProps<{
  isOpen: boolean
}>()

defineEmits(['close'])

const credits = MAFOUL_BEH_CREDITS
</script>
