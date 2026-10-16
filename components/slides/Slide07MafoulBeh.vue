<template>
  <section id="slide-07" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Center Full-Bleed Poster (Touches top and bottom exactly like PDF) -->
      <div
        class="mafoul-poster absolute overflow-hidden will-change-transform z-10"
        style="left: 28.75%; top: 0%; width: 42.535%; height: 100%;"
      >
        <img
          src="/images/extracted/page-7_1.jpg"
          alt="Maf'oul Beh Poster"
          class="w-full h-full object-cover object-top"
        />
      </div>

      <!-- Top Bar: Portfolio | 2026 | Dots -->
      <div
        class="absolute text-ebra-yellow font-clash font-extralight tracking-wider z-20"
        style="left: 5.21%; top: 8.83%; font-size: 1.04cqw;"
      >
        Portfolio
      </div>
      <div
        class="absolute text-ebra-yellow font-clash font-extralight tracking-wider z-20"
        style="left: 48.85%; top: 8.89%; font-size: 1.04cqw; transform: translateX(-50%);"
      >
        2026
      </div>
      <div class="absolute z-20" style="left: 93.68%; top: 8.83%;">
        <TopRightDots />
      </div>

      <!-- Left Column: Credits & Details (No horizontal borders!) -->
      <div
        class="mafoul-credits absolute text-ebra-yellow font-clash z-20 will-change-transform"
        style="left: 5.21%; top: 23.33%; width: 23%;"
      >
        <h3 class="font-bold leading-none" style="font-size: 1.56cqw;">
          Short Film · 2026
        </h3>
        <div class="font-extralight leading-none mt-[0.5cqw]" style="font-size: 1.56cqw;">
          Drama
        </div>

        <div style="margin-top: 2.2cqw;">
          <h4 class="font-bold leading-none" style="font-size: 1.25cqw;">
            Credits
          </h4>
          <div class="font-light space-y-[0.25cqw] mt-[0.6cqw]" style="font-size: 0.95cqw; line-height: 1.35;">
            <div>Writer & Director: <span class="font-medium">Omar Eid</span></div>
            <div>DOP: <span class="font-medium">Teka</span></div>
            <div>Producer: <span class="font-medium">Mohamed Hatem</span></div>
            <div>Editor: <span class="font-medium">Mohamed Ashraf</span></div>
            <div class="pl-[3cqw]"><span class="font-medium">Ebra Mohamed</span></div>
            <div>Sound Designer: <span class="font-medium">Fr3oon</span></div>
            <div>Colorist: <span class="font-medium">Ahmed Khedr</span></div>
            <div>1st Assistant Director: <span class="font-medium">Ebra Mohamed</span></div>
            <div>Illustrator: <span class="font-medium">Hadeer Arafa</span></div>
            <div>Art Director: <span class="font-medium">Ahmed Ismail</span></div>
          </div>
        </div>

        <div style="margin-top: 1.6cqw;">
          <h4 class="font-bold leading-none" style="font-size: 1.25cqw;">
            Cast
          </h4>
          <div class="font-light space-y-[0.25cqw] mt-[0.5cqw]" style="font-size: 0.95cqw; line-height: 1.35;">
            <div>Roqaya: <span class="font-medium">Farah Bassam</span></div>
            <div>Raoof El Gohary: <span class="font-medium">Khaled Elwa</span></div>
            <div>Farid: <span class="font-medium">Shabrmy</span></div>
          </div>
        </div>

        <div style="margin-top: 1.6cqw;">
          <h4 class="font-bold leading-none" style="font-size: 1.25cqw;">
            Voice Over
          </h4>
          <div class="font-light space-y-[0.25cqw] mt-[0.5cqw]" style="font-size: 0.95cqw; line-height: 1.35;">
            <div>Fathy Galal: <span class="font-medium">Hamed Asker</span></div>
            <div>Presenter: <span class="font-medium">Radwa Abd El Aziz</span></div>
          </div>
        </div>
      </div>

      <!-- Right Column: Arabic Title, Notice & Scope of Work (Direct canvas positioning) -->
      <div class="mafoul-right absolute inset-0 pointer-events-none text-ebra-yellow font-clash z-20 will-change-transform">
        <!-- Arabic Title: مفعول به -->
        <h3
          class="font-bold font-arabic leading-none absolute"
          style="left: 77.95%; top: 57.5%; font-size: 2.6cqw;"
        >
          مفعول به
        </h3>

        <!-- Festival Notice -->
        <p
          class="font-light leading-relaxed absolute"
          style="left: 77.95%; top: 67.28%; font-size: 1.15cqw; width: 19%;"
        >
          The film is currently on its way<br />
          to festivals, so I can't share an<br />
          online link at the moment.<br />
          However, it can be available for<br />
          an offline preview.
        </p>

        <!-- Scope of Work -->
        <div class="absolute" style="left: 77.95%; top: 85.93%;">
          <div class="font-medium leading-none" style="font-size: 1.32cqw;">
            Scope of Work
          </div>
          <div class="font-light leading-none mt-[0.5cqw]" style="font-size: 1.32cqw;">
            Editor - 1AD
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
</script>
