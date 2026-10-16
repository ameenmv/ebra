<template>
  <div class="relative py-24 sm:py-32 px-6 md:px-12 bg-cinema-950 overflow-hidden border-t border-white/5">
    <!-- Chapter Background Image if available -->
    <div v-if="bgImage" class="absolute inset-0 z-0">
      <img
        :src="bgImage"
        :alt="title"
        class="w-full h-full object-cover object-center opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/80 to-cinema-950"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col justify-between">
      <!-- Chapter Metadata -->
      <div class="flex items-center justify-between text-xs font-mono uppercase tracking-cinema-wide text-cinema-400 mb-6">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-gold-400"></span>
          <span>Chapter {{ chapterNumber }} · {{ categoryLabel }}</span>
        </div>
        <div class="flex items-center gap-4">
          <span>EBRA</span>
          <span class="text-cinema-600">|</span>
          <span>2026</span>
        </div>
      </div>

      <!-- Giant Editorial Title (Matches PDF Chapter Slides) -->
      <h2 class="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white uppercase leading-none select-none">
        {{ title }}
      </h2>

      <p v-if="subtitle" class="mt-4 text-cinema-400 text-sm md:text-base font-light max-w-2xl">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  chapterNumber: string
  title: string
  categoryLabel: string
  subtitle?: string
  bgImage?: string
}>()
</script>
