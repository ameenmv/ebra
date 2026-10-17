<template>
  <div class="md:hidden">
    <!-- Floating Bottom Navigation Pill -->
    <div
      class="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/85 backdrop-blur-md border border-ebra-yellow/30 shadow-[0_8px_32px_rgba(0,0,0,0.7)] text-ebra-yellow select-none"
    >
      <div class="font-mono text-xs font-bold tracking-wider">
        {{ currentSlideFormatted }} <span class="text-white/40">/ 19</span>
      </div>

      <div class="w-px h-3.5 bg-white/20"></div>

      <button
        type="button"
        @click="drawerOpen = !drawerOpen"
        class="flex items-center gap-1.5 text-xs font-clash uppercase tracking-wider text-white hover:text-ebra-yellow transition-colors"
      >
        <span>Sections</span>
        <svg
          class="w-3.5 h-3.5 transition-transform duration-300"
          :class="{ 'rotate-180': drawerOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <!-- Quick Jump Drawer / Bottom Sheet -->
    <div
      v-if="drawerOpen"
      class="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-xl transition-opacity"
      @click.self="drawerOpen = false"
    >
      <div class="w-full max-w-md bg-[#0a0a0a] border-t border-ebra-yellow/30 rounded-t-3xl p-6 pb-10 space-y-4 shadow-2xl">
        <div class="flex items-center justify-between pb-3 border-b border-white/10">
          <div class="text-xs font-mono text-white/50 tracking-widest uppercase">
            Jump to Section
          </div>
          <button
            @click="drawerOpen = false"
            class="text-xs font-mono text-white/60 hover:text-white px-2 py-1 rounded bg-white/5"
          >
            Close ✕
          </button>
        </div>

        <div class="grid grid-cols-1 gap-2">
          <button
            v-for="item in sections"
            :key="item.id"
            @click="jumpTo(item.id)"
            class="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-ebra-yellow/15 border border-white/5 hover:border-ebra-yellow/40 transition-all text-left"
          >
            <div class="flex items-center gap-3">
              <span class="font-mono text-xs text-ebra-yellow font-bold">{{ item.num }}</span>
              <span class="font-clash text-sm font-medium text-white tracking-wide">{{ item.label }}</span>
            </div>
            <span class="text-xs font-mono text-white/40">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const drawerOpen = ref(false)
const currentSlide = ref(1)

const currentSlideFormatted = computed(() => {
  return currentSlide.value < 10 ? `0${currentSlide.value}` : `${currentSlide.value}`
})

const sections = [
  { num: '01', label: 'Cover & Title', id: 'slide-01' },
  { num: '02', label: 'About & Bio', id: 'slide-02' },
  { num: '03', label: 'Short Films', id: 'slide-03' },
  { num: '08', label: 'Commercials (TTL)', id: 'slide-08' },
  { num: '12', label: 'Documentary', id: 'slide-12' },
  { num: '15', label: 'Reels & Fashion', id: 'slide-15' },
  { num: '19', label: 'Contact', id: 'slide-19' }
]

const jumpTo = (id: string) => {
  drawerOpen.value = false
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  const slides = Array.from({ length: 19 }, (_, i) => {
    const num = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`
    return document.getElementById(`slide-${num}`)
  }).filter(Boolean) as HTMLElement[]

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = entry.target.id.match(/slide-(\d+)/)
          if (match && match[1]) {
            currentSlide.value = parseInt(match[1], 10)
          }
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  slides.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
