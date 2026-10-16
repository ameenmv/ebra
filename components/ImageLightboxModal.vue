<template>
  <div
    v-if="isOpen && imageSrc"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl"
    @click.self="$emit('close')"
  >
    <div class="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl flex flex-col items-center">
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
        aria-label="Close Image"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <img
        :src="imageSrc"
        alt="Film Still"
        class="max-w-full max-h-[85vh] object-contain rounded-lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  isOpen: boolean
  imageSrc: string
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
