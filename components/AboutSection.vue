<template>
  <section id="about" class="relative py-28 px-6 md:px-12 bg-cinema-900 border-t border-white/5 overflow-hidden">
    <!-- Atmospheric Background Image from Page 2 -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/about-bg.png"
        alt="Ebrahem Mohamed Background"
        class="w-full h-full object-cover object-center opacity-15"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-cinema-900 via-cinema-900/90 to-cinema-900"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section Tag -->
      <div class="flex items-center gap-3 text-xs font-mono uppercase tracking-cinema-wide text-gold-400 mb-4">
        <span>01</span>
        <span class="w-8 h-px bg-gold-400/50"></span>
        <span>Profile & Background</span>
      </div>

      <!-- Main Name Heading -->
      <h2 class="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase mb-16">
        {{ profile.name }}
      </h2>

      <!-- 2-Column Editorial Grid (Matches Page 2 Layout) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Left Column: Career Philosophy & Education -->
        <div class="lg:col-span-6 space-y-12">
          <!-- Career Philosophy -->
          <div>
            <h3 class="text-sm font-mono tracking-cinema-wider uppercase text-cinema-400 mb-4 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span>Career</span>
            </h3>
            <p class="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed">
              “{{ profile.careerPhilosophy }}”
            </p>
          </div>

          <!-- Education -->
          <div class="border-t border-white/10 pt-8">
            <h3 class="text-sm font-mono tracking-cinema-wider uppercase text-cinema-400 mb-4 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span>Education</span>
            </h3>
            <div class="bg-white/[0.02] border border-white/5 p-6 rounded-lg backdrop-blur-sm">
              <h4 class="font-display font-bold text-2xl text-white tracking-wide">
                {{ profile.education.institution }}
              </h4>
              <p class="text-sm text-cinema-400 mt-1 font-mono">
                {{ profile.education.department }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Extended Bio & Direct Contact -->
        <div class="lg:col-span-6 space-y-10 lg:pl-6 lg:border-l lg:border-white/10">
          <div>
            <p class="text-base sm:text-lg text-cinema-200 font-light leading-relaxed">
              {{ profile.careerDescription }}
            </p>
          </div>

          <!-- Quick Stat Counters -->
          <div class="grid grid-cols-3 gap-6 border-y border-white/10 py-6">
            <div>
              <div class="font-display font-black text-3xl sm:text-4xl text-white">05+</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-cinema-400 mt-1">Years Experience</div>
            </div>
            <div>
              <div class="font-display font-black text-3xl sm:text-4xl text-white">10+</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-cinema-400 mt-1">Major Productions</div>
            </div>
            <div>
              <div class="font-display font-black text-3xl sm:text-4xl text-white">03</div>
              <div class="text-[11px] font-mono uppercase tracking-wider text-cinema-400 mt-1">Core Disciplines</div>
            </div>
          </div>

          <!-- Direct Contact Pills (Matches bottom of Page 2) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <a
              :href="'mailto:' + profile.email"
              class="glass-panel p-4 rounded-lg group hover:border-gold-400/40 transition-colors"
            >
              <div class="text-[10px] font-mono uppercase tracking-wider text-cinema-400">Email</div>
              <div class="text-xs font-semibold text-white group-hover:text-gold-400 truncate mt-1">
                {{ profile.email }}
              </div>
            </a>

            <a
              :href="profile.whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="glass-panel p-4 rounded-lg group hover:border-gold-400/40 transition-colors"
            >
              <div class="text-[10px] font-mono uppercase tracking-wider text-cinema-400">Phone / WhatsApp</div>
              <div class="text-xs font-semibold text-white group-hover:text-gold-400 truncate mt-1">
                {{ profile.phone }}
              </div>
            </a>

            <div class="glass-panel p-4 rounded-lg">
              <div class="text-[10px] font-mono uppercase tracking-wider text-cinema-400">Location</div>
              <div class="text-xs font-semibold text-white truncate mt-1">
                {{ profile.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROFILE_DATA } from '~/data/portfolio'

const profile = PROFILE_DATA
</script>
