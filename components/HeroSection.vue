<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 overflow-hidden bg-cinema-950"
  >
    <!-- Background Still with Cinematic Lighting -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/hero-bg.png"
        alt="Ebra Mohamed Filmmaking Still"
        class="w-full h-full object-cover object-center opacity-45 scale-105 animate-pulse duration-10000"
      />
      <!-- Cinematic Vignette & Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/60 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-cinema-950/80 via-transparent to-cinema-950/80"></div>
    </div>

    <!-- Top Sub-Bar (Matches Page 1 Layout) -->
    <div class="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-xs tracking-cinema-wide uppercase text-cinema-400 font-mono pt-4">
      <div class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
        <span>Portfolio</span>
      </div>
      <div class="font-display font-bold text-white tracking-widest text-sm">
        EBRA
      </div>
      <div>
        <span>2026</span>
      </div>
    </div>

    <!-- Center / Bottom Content -->
    <div class="relative z-10 max-w-7xl w-full mx-auto my-auto py-16 flex flex-col justify-end">
      <!-- Role Subtitles Line (Matches Page 1) -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6 text-sm md:text-base tracking-cinema-wide uppercase text-cinema-200 font-medium">
        <div class="flex items-center gap-3">
          <span class="text-gold-400">01.</span>
          <span class="hover:text-white transition-colors">Cinematographer</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-gold-400">02.</span>
          <span class="hover:text-white transition-colors">Director</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-gold-400">03.</span>
          <span class="hover:text-white transition-colors">Editor</span>
        </div>
      </div>

      <!-- Massive Editorial Title -->
      <h1 class="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter text-white leading-none uppercase select-none">
        FILMMAKER
      </h1>

      <!-- Action & Intro Bar -->
      <div class="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
        <p class="max-w-xl text-sm md:text-base text-cinema-400 font-light leading-relaxed">
          Crafting visual stories through light, composition, and movement. Directing and shooting narrative films, commercial campaigns, and documentaries.
        </p>

        <div class="flex items-center gap-4">
          <a
            href="#short-films"
            class="px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-cinema-wide uppercase hover:bg-gold-400 transition-all duration-300 shadow-xl"
          >
            Explore Projects
          </a>
          <button
            @click="$emit('open-video', {
              id: 'neop-ttl',
              title: 'Featured Reel / Commercial Showcase',
              year: '2026',
              category: 'campaigns',
              categoryLabel: 'Featured Showcase',
              subtitle: 'Commercial & Narrative Selection',
              scopeOfWork: 'Director · Cinematographer',
              heroImage: '/images/hero-bg.png',
              stills: [],
              videoType: 'vimeo',
              videoUrl: 'https://vimeo.com/1235152721',
              vimeoId: '1235152721'
            })"
            class="px-6 py-3.5 border border-white/20 text-white font-semibold text-xs tracking-cinema-wide uppercase hover:border-gold-400 hover:text-gold-400 transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Play Showreel</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll Down Cue -->
    <div class="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-xs tracking-cinema-wide uppercase text-cinema-400 pt-6">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 border-b-2 border-r-2 border-white/40 transform rotate-45 animate-bounce"></span>
        <span class="text-[11px] font-mono">Scroll to explore</span>
      </div>
      <div class="text-[11px] font-mono">
        Cairo, Egypt · Available Worldwide
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['open-video'])
</script>
