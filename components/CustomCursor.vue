<template>
  <div
    v-if="isDesktop"
    ref="cursorRef"
    class="custom-cursor-container hidden md:block fixed top-0 left-0 pointer-events-none z-[99999] select-none transition-opacity duration-200"
    :class="[
      isVisible ? 'opacity-100' : 'opacity-0',
      isHovered ? 'cursor-hovered' : '',
      isPressed ? 'cursor-pressed' : ''
    ]"
    :style="cursorStyle"
  >
    <!-- Click Shockwave Ripples -->
    <div
      v-for="ripple in ripples"
      :key="ripple.id"
      class="click-ripple absolute rounded-full border border-ebra-yellow pointer-events-none"
      :style="{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }"
    ></div>

    <!-- Outer Ambient Glow -->
    <div
      class="absolute -inset-3 rounded-full bg-ebra-yellow/20 blur-md transition-all duration-300 pointer-events-none"
      :class="[
        isPressed ? 'scale-75 bg-ebra-yellow/40' : isHovered ? 'scale-150 bg-ebra-yellow/30' : 'scale-100'
      ]"
    ></div>

    <!-- The Animated Ü Character (Eyes + U Body) -->
    <div
      class="relative flex items-center justify-center transition-transform duration-150 ease-out"
      :style="{ transform: `rotate(${rotation}deg) scale(${scale})` }"
    >
      <svg
        viewBox="0 0 44 48"
        class="w-9 h-10 overflow-visible select-none drop-shadow-[0_0_12px_rgba(251,237,53,0.85)] drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Defs for filter glow -->
        <defs>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Eyes (Umlaut Dots with Gaze & Blink Animation) -->
        <g
          class="eyes-container transition-transform duration-100 ease-out"
          :style="{ transform: `translate(${lookX}px, ${lookY}px)` }"
        >
          <!-- Left Eye Dot -->
          <g
            class="eye-wrapper eye-left"
            :class="{ 'eye-closed': leftEyeClosed }"
          >
            <circle
              cx="11"
              cy="9"
              r="3.8"
              fill="#fbed35"
            />
            <!-- Tiny sparkle glint inside open eye -->
            <circle
              v-if="!leftEyeClosed"
              cx="9.8"
              cy="7.8"
              r="1.1"
              fill="#ffffff"
              opacity="0.85"
            />
          </g>

          <!-- Right Eye Dot -->
          <g
            class="eye-wrapper eye-right"
            :class="{ 'eye-closed': rightEyeClosed }"
          >
            <circle
              cx="33"
              cy="9"
              r="3.8"
              fill="#fbed35"
            />
            <!-- Tiny sparkle glint inside open eye -->
            <circle
              v-if="!rightEyeClosed"
              cx="31.8"
              cy="7.8"
              r="1.1"
              fill="#ffffff"
              opacity="0.85"
            />
          </g>
        </g>

        <!-- The "U" Mouth / Curve -->
        <path
          d="M 11,19.5 L 11,32.5 A 11 11 0 0 0 33,32.5 L 33,19.5"
          fill="none"
          stroke="#fbed35"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="u-body"
          :class="{ 'u-pressed': isPressed, 'u-hovered': isHovered }"
        />
      </svg>
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

// Eyes state
const leftEyeClosed = ref(false)
const rightEyeClosed = ref(false)
const lookX = ref(0)
const lookY = ref(0)

// Physics & motion state
const mouseX = ref(-100)
const mouseY = ref(-100)
const currentX = ref(-100)
const currentY = ref(-100)
const rotation = ref(0)
const scale = ref(1)

// Click ripple particles
interface Ripple {
  id: number
}
const ripples = ref<Ripple[]>([])
let rippleIdCounter = 0

let animationFrameId: number | null = null
let idleBlinkTimeout: ReturnType<typeof setTimeout> | null = null
let winkTimeout: ReturnType<typeof setTimeout> | null = null

const cursorStyle = computed(() => ({
  transform: `translate3d(${currentX.value}px, ${currentY.value}px, 0) translate(-50%, -50%)`
}))

const triggerClickRipple = () => {
  const id = ++rippleIdCounter
  ripples.value.push({ id })
  setTimeout(() => {
    ripples.value = ripples.value.filter((r) => r.id !== id)
  }, 450)
}

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if (!isVisible.value) {
    isVisible.value = true
  }
}

const handleMouseDown = () => {
  isPressed.value = true
  scale.value = 0.84

  // Blink both eyes shut firmly when clicking!
  leftEyeClosed.value = true
  rightEyeClosed.value = true

  triggerClickRipple()
}

const handleMouseUp = () => {
  isPressed.value = false
  scale.value = isHovered.value ? 1.35 : 1.0

  // Open eyes back with bouncy overshoot
  leftEyeClosed.value = false
  rightEyeClosed.value = false
}

const handleMouseEnter = () => {
  isVisible.value = true
}

const handleMouseLeave = () => {
  isVisible.value = false
}

// Playful wink function
const wink = (duration = 240) => {
  if (isPressed.value) return
  rightEyeClosed.value = true
  if (winkTimeout) clearTimeout(winkTimeout)
  winkTimeout = setTimeout(() => {
    if (!isPressed.value) {
      rightEyeClosed.value = false
    }
  }, duration)
}

// Natural idle blinking loop
const scheduleNextBlink = () => {
  const nextDelay = 2600 + Math.random() * 3400
  idleBlinkTimeout = setTimeout(() => {
    if (!isPressed.value && isVisible.value) {
      // Natural blink
      leftEyeClosed.value = true
      rightEyeClosed.value = true

      setTimeout(() => {
        if (!isPressed.value) {
          leftEyeClosed.value = false
          rightEyeClosed.value = false

          // 25% chance of a cute double-blink!
          if (Math.random() < 0.25) {
            setTimeout(() => {
              if (!isPressed.value) {
                leftEyeClosed.value = true
                rightEyeClosed.value = true
                setTimeout(() => {
                  if (!isPressed.value) {
                    leftEyeClosed.value = false
                    rightEyeClosed.value = false
                  }
                }, 90)
              }
            }, 110)
          }
        }
      }, 120)
    }
    scheduleNextBlink()
  }, nextDelay)
}

// Interactive element detection on hover (pure scale & wink, NO text/pills)
const handleMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement | null
  if (!target) return

  const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-cursor-hover], .reel-card')
  if (interactive) {
    if (!isHovered.value) {
      // Playful greeting wink when entering a button/link!
      wink(220)
    }
    isHovered.value = true
    scale.value = isPressed.value ? 0.84 : 1.35
  } else {
    isHovered.value = false
    scale.value = isPressed.value ? 0.84 : 1.0
  }
}

// Physics & organic render loop (Lerp 0.22)
const tick = () => {
  const lerpFactor = 0.22
  const dx = mouseX.value - currentX.value
  const dy = mouseY.value - currentY.value

  currentX.value += dx * lerpFactor
  currentY.value += dy * lerpFactor

  // Subtle velocity tilt (±14 deg max)
  const targetRotation = Math.max(Math.min(dx * 0.16, 14), -14)
  rotation.value += (targetRotation - rotation.value) * 0.15

  // Eyes gaze tracking according to motion direction (±2.5px max)
  const targetLookX = Math.max(Math.min(dx * 0.08, 2.5), -2.5)
  const targetLookY = Math.max(Math.min(dy * 0.08, 2.5), -2.5)
  lookX.value += (targetLookX - lookX.value) * 0.2
  lookY.value += (targetLookY - lookY.value) * 0.2

  animationFrameId = requestAnimationFrame(tick)
}

const checkDesktop = () => {
  if (typeof window === 'undefined') return
  const isWide = window.innerWidth >= 768
  if (!isWide) {
    isDesktop.value = false
    document.documentElement.classList.remove('custom-cursor-active')
  } else {
    isDesktop.value = true
    document.documentElement.classList.add('custom-cursor-active')
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    if (isDesktop.value) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      window.addEventListener('mousedown', handleMouseDown, { passive: true })
      window.addEventListener('mouseup', handleMouseUp, { passive: true })
      window.addEventListener('mouseover', handleMouseOver, { passive: true })
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseleave', handleMouseLeave)

      animationFrameId = requestAnimationFrame(tick)
      scheduleNextBlink()
    }
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('custom-cursor-active')
  }
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  if (idleBlinkTimeout) clearTimeout(idleBlinkTimeout)
  if (winkTimeout) clearTimeout(winkTimeout)

  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkDesktop)
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
@media (max-width: 767px) {
  .custom-cursor-container {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
}

.custom-cursor-container {
  will-change: transform, opacity;
}

/* Eye Blink & Wink Animations */
.eye-left {
  transform-origin: 11px 9px;
  transition: transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.eye-right {
  transform-origin: 33px 9px;
  transition: transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.eye-closed {
  transform: scaleY(0.08) !important;
  transition: transform 0.08s ease-in !important;
}

/* U Body Elastic Physics */
.u-body {
  transform-origin: 22px 32px;
  transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.u-pressed {
  transform: scale(1.08, 0.88);
}

.u-hovered {
  stroke-width: 5.4;
}

/* Click Shockwave Expansion */
.click-ripple {
  width: 14px;
  height: 14px;
  animation: rippleExpand 0.45s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}

@keyframes rippleExpand {
  0% {
    width: 14px;
    height: 14px;
    opacity: 0.9;
    border-width: 2px;
  }
  100% {
    width: 60px;
    height: 60px;
    opacity: 0;
    border-width: 1px;
  }
}
</style>
