<template>
  <div class="min-h-screen bg-[#050505] text-ebra-yellow relative font-sans selection:bg-ebra-yellow selection:text-black">
    <!-- Subtle Film Grain Overlay -->
    <div class="film-grain pointer-events-none"></div>

    <!-- Custom Letter U Cinema Cursor (Desktop) -->
    <CustomCursor />

    <!-- Floating Mobile Navigation Pill (Mobile only < md) -->
    <MobileNavPill />

    <!-- Main 19-Slide Presentation Flow (Snap on Mobile, Continuous Smooth on Desktop) -->
    <main class="w-full snap-y snap-mandatory h-[100dvh] overflow-y-scroll md:h-auto md:overflow-visible md:snap-none no-scrollbar">
      <!-- 01. Cover Hero -->
      <Slide01Hero @play-showreel="openShowreel" />

      <!-- 02. About, Career & Education -->
      <Slide02About />

      <!-- 03. Short Films Divider -->
      <Slide03ShortFilmsDivider />

      <!-- 04. Redemption -->
      <Slide04Redemption @play-video="openVideoModal" />

      <!-- 05. White Lie (كذبه بيضاء) -->
      <Slide05WhiteLie @play-video="openVideoModal" />

      <!-- 06. Black Veil (حجاب أسود) -->
      <Slide06BlackVeil @play-video="openVideoModal" />

      <!-- 07. Maf'oul Beh (مفعول به) -->
      <Slide07MafoulBeh />

      <!-- 08. TTL Campaign Divider -->
      <Slide08TtlDivider />

      <!-- 09. Neop - TTL Campaign -->
      <Slide09NeopTtl @play-video="openVideoModal" />

      <!-- 10. Azrak - Internship Campaign -->
      <Slide10AzrakInternship @play-video="openVideoModal" />

      <!-- 11. Azrak - Ramadan Campaign -->
      <Slide11AzrakRamadan @play-video="openVideoModal" />

      <!-- 12. Documentary Divider -->
      <Slide12DocumentaryDivider />

      <!-- 13. Neop × Al Arabiya -->
      <Slide13NeopAlArabiya @play-video="openVideoModal" />

      <!-- 14. Neop × Ghalati -->
      <Slide14NeopGhalati @play-video="openVideoModal" />

      <!-- 15. Reels Divider -->
      <Slide15ReelsDivider />

      <!-- 16. Nordway Reels -->
      <Slide16Nordway @play-video="openVideoModal" />

      <!-- 17. Koffie Art Reels -->
      <Slide17KoffieArt @play-video="openVideoModal" />

      <!-- 18. NEOP Agency Reels -->
      <Slide18NeopAgency @play-video="openVideoModal" />

      <!-- 19. Drop Me A Line (Contact) -->
      <Slide19Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Slide01Hero from '~/components/slides/Slide01Hero.vue'
import Slide02About from '~/components/slides/Slide02About.vue'
import Slide03ShortFilmsDivider from '~/components/slides/Slide03ShortFilmsDivider.vue'
import Slide04Redemption from '~/components/slides/Slide04Redemption.vue'
import Slide05WhiteLie from '~/components/slides/Slide05WhiteLie.vue'
import Slide06BlackVeil from '~/components/slides/Slide06BlackVeil.vue'
import Slide07MafoulBeh from '~/components/slides/Slide07MafoulBeh.vue'
import Slide08TtlDivider from '~/components/slides/Slide08TtlDivider.vue'
import Slide09NeopTtl from '~/components/slides/Slide09NeopTtl.vue'
import Slide10AzrakInternship from '~/components/slides/Slide10AzrakInternship.vue'
import Slide11AzrakRamadan from '~/components/slides/Slide11AzrakRamadan.vue'
import Slide12DocumentaryDivider from '~/components/slides/Slide12DocumentaryDivider.vue'
import Slide13NeopAlArabiya from '~/components/slides/Slide13NeopAlArabiya.vue'
import Slide14NeopGhalati from '~/components/slides/Slide14NeopGhalati.vue'
import Slide15ReelsDivider from '~/components/slides/Slide15ReelsDivider.vue'
import Slide16Nordway from '~/components/slides/Slide16Nordway.vue'
import Slide17KoffieArt from '~/components/slides/Slide17KoffieArt.vue'
import Slide18NeopAgency from '~/components/slides/Slide18NeopAgency.vue'
import Slide19Contact from '~/components/slides/Slide19Contact.vue'
import MobileNavPill from '~/components/MobileNavPill.vue'
import CustomCursor from '~/components/CustomCursor.vue'

let lenisInstance: Lenis | null = null

// Direct External Video Links (Vimeo & Google Drive)
const openVideoModal = (videoData: any) => {
  const url =
    videoData?.videoUrl ||
    (videoData?.vimeoId ? `https://vimeo.com/${videoData.vimeoId}` : null) ||
    (videoData?.driveId ? `https://drive.google.com/file/d/${videoData.driveId}/view` : null)
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

const openShowreel = () => {
  window.open('https://vimeo.com/user218248330?fl=pp&fe=sh', '_blank', 'noopener,noreferrer')
}

onMounted(async () => {
  await nextTick()

  // 1. Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // 2. Initialize Lenis Smooth Scroll on desktop screens (>= 768px)
  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0
    })
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(500, 33)
  }

  // 3. Hero Initial Entrance Animation (Slide 01)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  heroTl
    .from('#slide-01 .hero-bg', { scale: 1.08, opacity: 0.6, duration: 1.6 }, 0)
    .from('#slide-01 .hero-top', { y: -20, opacity: 0, duration: 1.0 }, 0.2)
    .from('#slide-01 .hero-btn', { scale: 0.9, opacity: 0, duration: 0.8 }, 0.3)
    .from('#slide-01 .hero-roles', { y: 25, opacity: 0, duration: 1.0 }, 0.4)
    .from('#slide-01 .hero-title', { yPercent: 30, opacity: 0, duration: 1.2, ease: 'power3.out' }, 0.5)

  // Hero Parallax on Scroll - Buttery smooth with scrub: 0.8, pure GPU transform, solid yellow
  gsap.to('#slide-01 .hero-bg', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#slide-01',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8
    }
  })

  gsap.to('#slide-01 .hero-title', {
    yPercent: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#slide-01',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8
    }
  })

  // 4. Slide 02 About Animations
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#slide-02',
      start: 'top 75%'
    }
  })
  aboutTl
    .from('#slide-02 .about-title', { xPercent: -15, opacity: 0, duration: 1.3, ease: 'power3.out' })
    .from('#slide-02 .about-col-left', { y: 45, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.9')
    .from('#slide-02 .about-col-right', { y: 45, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1.0')
    .from('#slide-02 .about-asterisk', { rotation: 360, scale: 0, duration: 1.0, ease: 'back.out(2)' }, '-=0.8')
    .from('#slide-02 .about-circle-c', { scale: 0, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.7')
    .from('#slide-02 .about-bottom', { y: 30, opacity: 0, duration: 1.0, ease: 'power3.out' }, '-=0.6')

  gsap.to('#slide-02 .about-bg', {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#slide-02',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })

  // 5. Divider Sections Parallax Scrub (Slides 03, 08, 12, 15)
  const dividers = ['#slide-03', '#slide-08', '#slide-12', '#slide-15']
  dividers.forEach((sel) => {
    const el = document.querySelector(sel)
    if (!el) return

    const title = el.querySelector('.divider-title')
    const bg = el.querySelector('.divider-bg')
    const topBar = el.querySelector('.divider-top')

    if (topBar) {
      gsap.from(topBar, {
        y: -20,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%'
        }
      })
    }

    if (title) {
      gsap.fromTo(
        title,
        { xPercent: 12, scale: 0.95 },
        {
          xPercent: -10,
          scale: 1.04,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      )
    }

    if (bg) {
      gsap.fromTo(
        bg,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      )
    }
  })

  // 6. Project Narrative & Campaign Slides (Slides 04, 05, 06, 09, 10, 11, 13, 14)
  const projectSlides = [
    '#slide-04',
    '#slide-05',
    '#slide-06',
    '#slide-09',
    '#slide-10',
    '#slide-11',
    '#slide-13',
    '#slide-14'
  ]

  projectSlides.forEach((sel) => {
    const el = document.querySelector(sel)
    if (!el) return

    const visual = el.querySelector('.project-visual')
    const info = el.querySelector('.project-info')
    const top = el.querySelector('.project-top')

    if (top) {
      gsap.from(top, {
        y: -15,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        }
      })
    }

    if (visual) {
      gsap.from(visual, {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%'
        }
      })
    }

    if (info) {
      gsap.from(info, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%'
        }
      })
    }
  })

  // 7. Maf'oul Beh Slide (Slide 07)
  const s7 = document.querySelector('#slide-07')
  if (s7) {
    gsap.from('#slide-07 .mafoul-credits', {
      x: -40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s7,
        start: 'top 70%'
      }
    })
    gsap.from('#slide-07 .mafoul-poster', {
      scale: 0.92,
      opacity: 0,
      duration: 1.3,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s7,
        start: 'top 70%'
      }
    })
    gsap.from('#slide-07 .mafoul-right', {
      x: 40,
      opacity: 0,
      duration: 1.2,
      delay: 0.25,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s7,
        start: 'top 70%'
      }
    })
  }

  // 8. Reels Sections (Slides 16, 17, 18)
  const reelSlides = ['#slide-16', '#slide-17', '#slide-18']
  reelSlides.forEach((sel) => {
    const el = document.querySelector(sel)
    if (!el) return

    const cards = el.querySelectorAll('.reel-card')
    const brand = el.querySelector('.reel-brand')

    if (cards.length > 0) {
      gsap.from(cards, {
        y: 70,
        opacity: 0,
        stagger: 0.16,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%'
        }
      })
    }

    if (brand) {
      gsap.from(brand, {
        y: 35,
        opacity: 0,
        duration: 1.1,
        delay: 0.45,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%'
        }
      })
    }
  })

  // 9. Contact Slide (Slide 19)
  const s19 = document.querySelector('#slide-19')
  if (s19) {
    gsap.to('#slide-19 .contact-bg', {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: s19,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.from('#slide-19 .contact-title', {
      y: 90,
      opacity: 0,
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: s19,
        start: 'top 70%'
      }
    })

    gsap.from('#slide-19 .contact-u', {
      scale: 0.75,
      opacity: 0,
      duration: 1.3,
      delay: 0.25,
      ease: 'back.out(1.8)',
      scrollTrigger: {
        trigger: s19,
        start: 'top 70%'
      }
    })

    gsap.from('#slide-19 .contact-links', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s19,
        start: 'top 70%'
      }
    })

    gsap.from('#slide-19 .contact-socials a', {
      y: 25,
      opacity: 0,
      stagger: 0.12,
      duration: 1.0,
      delay: 0.35,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: s19,
        start: 'top 70%'
      }
    })
  }

  // Refresh ScrollTrigger
  ScrollTrigger.refresh()
})

onUnmounted(() => {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>
