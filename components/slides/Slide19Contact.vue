<template>
  <section id="slide-19" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Raw Background Photo -->
      <img
        src="/images/extracted/page-19_1.jpg"
        alt="Drop Me A Line Background"
        class="contact-bg absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
      />

      <!-- Giant Bold Letters: S E E across the top -->
      <div
        class="contact-title absolute text-ebra-yellow font-clash font-bold select-none pointer-events-none leading-none will-change-transform"
        style="left: 5.21%; top: 8.89%; font-size: 16cqw;"
      >
        S
      </div>
      <div
        class="contact-title absolute text-ebra-yellow font-clash font-bold select-none pointer-events-none leading-none will-change-transform"
        style="left: 44.0%; top: 8.89%; font-size: 16cqw;"
      >
        E
      </div>
      <div
        class="contact-title absolute text-ebra-yellow font-clash font-bold select-none pointer-events-none leading-none will-change-transform"
        style="left: 82.0%; top: 8.89%; font-size: 16cqw;"
      >
        E
      </div>

      <!-- Smiling Face Emoji (ü) overlaid directly on the man's scarf -->
      <svg
        class="absolute pointer-events-none z-20"
        style="left: 60.5%; top: 49.5%; width: 14.5cqw; height: 41.5cqw;"
        viewBox="0 0 100 240"
        fill="none"
      >
        <!-- Left eye -->
        <circle cx="14" cy="18" r="10" fill="#fbed35" />
        <!-- Right eye -->
        <circle cx="86" cy="18" r="10" fill="#fbed35" />
        <!-- Smile curve -->
        <path
          d="M 14 55 L 14 140 C 14 215 86 215 86 140 L 86 55"
          stroke="#fbed35"
          stroke-width="14"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- Left Group: DROP ME A LINE & Contacts (Direct canvas absolute coordinates) -->
      <div class="contact-links absolute inset-0 pointer-events-none text-ebra-yellow font-clash z-20 will-change-transform">
        <!-- Section Header -->
        <h3
          class="font-bold leading-none uppercase tracking-tight absolute pointer-events-auto"
          style="left: 5.21%; top: 59.63%; font-size: 1.7cqw;"
        >
          DROP ME A LINE
        </h3>

        <!-- Mail -->
        <div
          class="font-light tracking-wide flex items-center gap-[0.8cqw] absolute pointer-events-auto"
          style="left: 5.21%; top: 64.01%; font-size: 1.04cqw;"
        >
          <span>Mail</span>
          <span class="font-extralight opacity-80">/</span>
          <a href="mailto:ebrahim.mohamed9710@gmail.com" class="hover:underline">ebrahim.mohamed9710@gmail.com</a>
        </div>

        <!-- Phone -->
        <div
          class="font-light tracking-wide flex items-center gap-[0.8cqw] absolute pointer-events-auto"
          style="left: 5.21%; top: 67.16%; font-size: 1.04cqw;"
        >
          <span>Phone</span>
          <span class="font-extralight opacity-80">/</span>
          <a href="tel:+201099519255" class="hover:underline">+201099519255</a>
        </div>
      </div>

      <!-- Bottom Social / Platform Links -->
      <div
        class="contact-socials absolute text-ebra-yellow font-clash font-light tracking-wide z-20 flex items-center gap-[3.5cqw]"
        style="left: 5.21%; top: 88.70%; font-size: 1.04cqw;"
      >
        <a href="https://vimeo.com" target="_blank" rel="noopener" class="hover:underline">
          Vimeo
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener" class="hover:underline">
          Instagram
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:underline">
          Linkedin
        </a>
      </div>
    </div>
  </section>
</template>
