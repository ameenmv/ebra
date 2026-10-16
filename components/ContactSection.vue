<template>
  <footer id="contact" class="relative py-28 px-6 md:px-12 bg-cinema-950 border-t border-white/5 overflow-hidden">
    <!-- Atmospheric Background Image from Page 19 -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/contact-bg.png"
        alt="Contact Section Background"
        class="w-full h-full object-cover object-center opacity-25"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/85 to-cinema-950"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col justify-between">
      <!-- Section Tag -->
      <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-cinema-wide text-gold-400 mb-6">
        <span>Get In Touch</span>
        <span class="w-8 h-px bg-gold-400/50"></span>
        <span>Cairo, Egypt · Available for Collaborations</span>
      </div>

      <!-- Giant Editorial Header (Matches Page 19 Layout) -->
      <h2 class="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white uppercase mb-16 leading-none">
        DROP ME A LINE
      </h2>

      <!-- Main Contact Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-white/10">
        <!-- Direct Email -->
        <div class="lg:col-span-6 glass-panel p-8 rounded-2xl group hover:border-gold-400/50 transition-colors">
          <div class="text-xs font-mono uppercase tracking-wider text-cinema-400 mb-2">
            Mail /
          </div>
          <a
            :href="'mailto:' + profile.email"
            class="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors break-all"
          >
            {{ profile.email }}
          </a>
          <p class="text-xs text-cinema-400 mt-4 font-light">
            Available for narrative cinematography, directing, and high-end commercial post-production.
          </p>
        </div>

        <!-- Phone & WhatsApp -->
        <div class="lg:col-span-6 glass-panel p-8 rounded-2xl group hover:border-gold-400/50 transition-colors">
          <div class="text-xs font-mono uppercase tracking-wider text-cinema-400 mb-2">
            Phone / WhatsApp /
          </div>
          <a
            :href="profile.whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors"
          >
            {{ profile.phone }}
          </a>
          <div class="mt-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs text-cinema-300 font-mono">Instant WhatsApp chat available</span>
          </div>
        </div>
      </div>

      <!-- Social Media Strip (Matches Page 19 exact list) -->
      <div class="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div class="flex flex-wrap items-center gap-8 text-sm font-mono tracking-cinema-wider uppercase">
          <a
            :href="profile.vimeoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cinema-300 hover:text-gold-400 transition-colors flex items-center gap-1.5"
          >
            <span>Vimeo</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            :href="profile.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cinema-300 hover:text-gold-400 transition-colors flex items-center gap-1.5"
          >
            <span>Instagram</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            :href="profile.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-cinema-300 hover:text-gold-400 transition-colors flex items-center gap-1.5"
          >
            <span>LinkedIn</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div class="text-xs font-mono text-cinema-400 tracking-wider">
          © {{ profile.year }} {{ profile.name }} · ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { PROFILE_DATA } from '~/data/portfolio'

const profile = PROFILE_DATA
</script>
