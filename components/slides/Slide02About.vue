<template>
  <section id="slide-02" class="relative w-full h-[100dvh] md:min-h-screen snap-start snap-always flex items-center justify-center bg-[#050505] overflow-hidden">
    <!-- Mobile Full-Height Card (< md) -->
    <div class="md:hidden relative w-full h-full flex flex-col justify-between p-6 select-none z-10 overflow-y-auto">
      <img
        src="/images/extracted/page-2_1.jpg"
        alt="About EBRA Background"
        class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none -z-10 brightness-50"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95 pointer-events-none -z-10"></div>

      <!-- Top Title -->
      <div class="pt-2">
        <div class="text-[10px] font-mono uppercase tracking-widest text-ebra-yellow/70 mb-1">
          02 / About
        </div>
        <h2 class="text-ebra-yellow font-clash font-bold text-3xl leading-none uppercase tracking-tight">
          EBRAHEM MOHAMED
        </h2>
      </div>

      <!-- Middle Bio Content -->
      <div class="space-y-4 my-auto py-4 text-ebra-yellow">
        <div>
          <div class="text-xs font-clash font-bold uppercase tracking-wider mb-1">Career</div>
          <p class="font-light text-sm leading-relaxed text-ebra-yellow/90">
            I approach filmmaking through the image — light, composition, and movement shape the way a story is felt.
          </p>
        </div>

        <div class="border-t border-ebra-yellow/20 pt-3">
          <p class="font-light text-xs leading-relaxed text-ebra-yellow/80">
            Over the past five years, my work across narrative films, commercials, and documentaries has shaped the way I bring direction and cinematography together, building a visual language that serves each project's purpose.
          </p>
        </div>

        <div class="border-t border-ebra-yellow/20 pt-3">
          <div class="text-xs font-clash font-bold uppercase tracking-wider mb-1">Education</div>
          <p class="font-light text-xs text-ebra-yellow/80">
            IAEMS · Mass communication - Cinema Department · 2023
          </p>
        </div>
      </div>

      <!-- Bottom Quick Contact Bar -->
      <div class="pb-16 pt-2 border-t border-ebra-yellow/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-ebra-yellow/80 gap-2">
        <a href="mailto:ebrahim.mohamed9710@gmail.com" class="hover:underline">ebrahim.mohamed9710@gmail.com</a>
        <a href="tel:+201099519255" class="hover:underline">+201099519255</a>
        <span>Cairo, Egypt</span>
      </div>
    </div>

    <!-- 16:9 PDF Canvas Frame (Desktop md:) -->
    <div class="hidden md:block relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Raw Background Photo -->
      <img
        src="/images/extracted/page-2_1.jpg"
        alt="About EBRA Background"
        class="about-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
      />

      <!-- Giant Header: EBRAHEM MOHAMED -->
      <h2
        class="about-title absolute text-ebra-yellow font-clash font-bold uppercase tracking-tight will-change-transform leading-none"
        style="left: 5.21%; top: 11.23%; font-size: 6.94cqw;"
      >
        EBRAHEM MOHAMED
      </h2>

      <!-- Left Column: Career & Education -->
      <div class="about-col-left absolute text-ebra-yellow font-clash will-change-transform" style="left: 5.21%; top: 34.38%; width: 45%;">
        <!-- Career -->
        <h3 class="font-bold leading-none" style="font-size: 1.84cqw;">
          Career
        </h3>
        <p class="font-light leading-relaxed mt-[1.2cqw]" style="font-size: 1.32cqw;">
          I approach filmmaking through the image — light, composition,<br />
          and movement shape the way a story is felt.
        </p>

        <!-- Education -->
        <div style="margin-top: 3.5cqw;">
          <h3 class="font-bold leading-none" style="font-size: 1.84cqw;">
            Education
          </h3>
          <p class="font-light leading-relaxed mt-[1.2cqw]" style="font-size: 1.32cqw;">
            IAEMS<br />
            Mass communication - Cinema Department · 2023
          </p>
        </div>
      </div>

      <!-- Right Column: Statement & Asterisk -->
      <div class="about-col-right absolute text-ebra-yellow font-clash will-change-transform" style="left: 61.25%; top: 34.38%; width: 34%;">
        <!-- Asterisk Symbol -->
        <div class="about-asterisk font-bold leading-none mb-[1.2cqw]" style="font-size: 3.2cqw;">
          ✱
        </div>
        <p class="font-light leading-relaxed" style="font-size: 1.32cqw;">
          Over the past five years, my work across narrative<br />
          films, commercials, and documentaries has shaped<br />
          the way I bring direction and cinematography<br />
          together, building a visual language that serves<br />
          each project's purpose.
        </p>
      </div>

      <!-- Circular Copyright Stamp (C) -->
      <div
        class="about-circle-c absolute text-ebra-yellow font-clash flex items-center justify-center border-[0.25cqw] border-ebra-yellow rounded-full"
        style="left: 89.8%; top: 66.0%; width: 4.8cqw; height: 4.8cqw;"
      >
        <span class="font-bold leading-none" style="font-size: 2.2cqw;">C</span>
      </div>

      <!-- Bottom Bar: Email | Phone | Location -->
      <div
        class="about-bottom absolute text-ebra-yellow font-clash font-extralight tracking-wide"
        style="left: 5.21%; top: 88.7%; font-size: 1.04cqw;"
      >
        <a href="mailto:ebrahim.mohamed9710@gmail.com" class="hover:underline">ebrahim.mohamed9710@gmail.com</a>
      </div>
      <div
        class="about-bottom absolute text-ebra-yellow font-clash font-extralight tracking-wide"
        style="left: 61.25%; top: 88.7%; font-size: 1.04cqw;"
      >
        <a href="tel:+201099519255" class="hover:underline">+201099519255</a>
      </div>
      <div
        class="about-bottom absolute text-ebra-yellow font-clash font-extralight tracking-wide"
        style="left: 87.15%; top: 88.7%; font-size: 1.04cqw;"
      >
        Cairo, Egypt
      </div>
    </div>
  </section>
</template>
