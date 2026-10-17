<template>
  <div
    v-if="isDesktop"
    ref="cursorRef"
    class="custom-cursor-container fixed top-0 left-0 pointer-events-none z-[99999] select-none transition-opacity duration-200"
    :class="[
      isVisible ? 'opacity-100' : 'opacity-0',
      isHovered ? 'cursor-hovered' : '',
      isPressed ? 'cursor-pressed' : ''
    ]"
    :style="cursorStyle"
  >
    <!-- Outer Glow / Ambient Ring -->
    <div
      class="absolute -inset-2 rounded-full bg-ebra-yellow/15 blur-sm transition-transform duration-300"
      :class="isHovered ? 'scale-150 bg-ebra-yellow/25' : 'scale-100'"
    ></div>

    <!-- The Letter "U" -->
    <div
      class="relative flex items-center justify-center transition-transform duration-200 ease-out"
      :style="{ transform: `rotate(${rotation}deg) scale(${scale})` }"
    >
      <span
        class="font-clash font-extrabold text-[26px] leading-none text-ebra-yellow drop-shadow-[0_0_10px_rgba(251,237,53,0.75)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] select-none tracking-tight"
      >
        U
      </span>
      
      <!-- Tiny Center Precision Dot (Helps pinpoint clicks) -->
      <span
        class="absolute w-1 h-1 rounded-full bg-white shadow-[0_0_4px_#fff] transition-opacity duration-200"
        :class="isHovered ? 'opacity-0' : 'opacity-80'"
      ></span>
    </div>

    <!-- Mini Hover Label (for interactive items) -->
    <div
      v-if="hoverLabel"
      class="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-black/80 border border-ebra-yellow/40 text-[9px] font-mono tracking-wider text-ebra-yellow uppercase whitespace-nowrap shadow-lg backdrop-blur-sm"
    >
      {{ hoverLabel }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cursorRef = ref<HTMLElement | null>(null)
const isDesktop = ref(false)
const isVisible = ref(false)
const isHovered = ref(false)
const isPressed = ref(false)
const hoverLabel = ref<string | null>(null)

// Position & Physics state
const mouseX = ref(-100)
const mouseY = ref(-100)
const currentX = ref(-100)
const currentY = ref(-100)
const rotation = ref(0)
const scale = ref(1)

let animationFrameId: number | null = null

const cursorStyle = computed(() => ({
  transform: `translate3d(${currentX.value}px, ${currentY.value}px, 0) translate(-50%, -50%)`
}))

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if (!isVisible.value) {
    isVisible.value = true
  }
}

const handleMouseDown = () => {
  isPressed.value = true
  scale.value = 0.85
}

const handleMouseUp = () => {
  isPressed.value = false
  scale.value = isHovered.value ? 1.4 : 1.0
}

const handleMouseEnter = () => {
  isVisible.value = true
}

const handleMouseLeave = () => {
  isVisible.value = false
}

// Detect interactive elements on mouseover
const handleMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null
  if (!target) return

  const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-cursor-hover]')
  if (interactive) {
    isHovered.value = true
    scale.value = isPressed.value ? 0.85 : 1.4

    // Detect if interactive is a video card or showreel
    if (interactive.closest('#slide-01') || interactive.textContent?.toLowerCase().includes('reel')) {
      hoverLabel.value = 'WATCH'
    } else if (interactive.tagName === 'A' || interactive.getAttribute('role') === 'button') {
      hoverLabel.value = null
    } else {
      hoverLabel.value = null
    }
  } else {
    isHovered.value = false
    scale.value = isPressed.value ? 0.85 : 1.0
    hoverLabel.value = null
  }
}

// Smooth physical render loop (Lerp 0.2 for organic cinematic motion)
const tick = () => {
  const lerpFactor = 0.22
  const dx = mouseX.value - currentX.value
  const dy = mouseY.value - currentY.value

  currentX.value += dx * lerpFactor
  currentY.value += dy * lerpFactor

  // Subtle velocity tilt (±12 deg max)
  const targetRotation = Math.max(Math.min(dx * 0.15, 12), -12)
  rotation.value += (targetRotation - rotation.value) * 0.15

  animationFrameId = requestAnimationFrame(tick)
}

onMounted(() => {
  // Enable on desktop screens (>= 768px)
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    isDesktop.value = true
    document.documentElement.classList.add('custom-cursor-active')

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    animationFrameId = requestAnimationFrame(tick)
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('custom-cursor-active')
  }
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mousedown', handleMouseDown)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('mouseover', handleMouseOver)
    document.removeEventListener('mouseenter', handleMouseEnter)
    document.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<style scoped>
.custom-cursor-container {
  will-change: transform, opacity;
}
</style>
