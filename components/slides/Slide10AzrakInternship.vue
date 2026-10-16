<template>
  <section id="slide-10" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Full Background Image -->
      <img
        src="/images/extracted/page-10_1.jpg"
        alt="Azrak Internship Background"
        class="project-visual absolute inset-0 w-full h-full object-cover object-center pointer-events-none will-change-transform"
      />

      <!-- Play Button in the Center -->
      <div
        class="absolute inset-0 cursor-pointer"
        @click="$emit('play-video', {
          title: 'Azrak - Internship Campaign · 2024',
          subtitle: 'Social Media Campaign',
          scopeOfWork: 'Director',
          videoType: 'drive',
          driveId: '1p4M9GgCsmgq15H6K_7e05_Yk-j6KxP8a',
          videoUrl: 'https://drive.google.com/file/d/1p4M9GgCsmgq15H6K_7e05_Yk-j6KxP8a/view?usp=drive_link'
        })"
      >
        <PlayButton />
      </div>

      <!-- Top Bar: Portfolio | 2026 | Dots -->
      <div
        class="project-top absolute text-ebra-yellow font-clash font-extralight tracking-wider z-20"
        style="left: 5.21%; top: 8.83%; font-size: 1.04cqw;"
      >
        Portfolio
      </div>
      <div
        class="project-top absolute text-ebra-yellow font-clash font-extralight tracking-wider z-20"
        style="left: 48.85%; top: 8.89%; font-size: 1.04cqw; transform: translateX(-50%);"
      >
        2026
      </div>
      <div class="project-top absolute z-20" style="left: 93.68%; top: 8.83%;">
        <TopRightDots />
      </div>

      <!-- 3 Stills Stacked Vertically on Left -->
      <div
        class="project-visual absolute overflow-hidden z-20 shadow-lg"
        style="left: 5.21%; top: 44.38%; width: 13.19%; height: 13.21%;"
      >
        <img src="/images/extracted/page-10_4.jpg" alt="Azrak Internship Still 1" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden z-20 shadow-lg"
        style="left: 5.21%; top: 61.05%; width: 13.19%; height: 13.21%;"
      >
        <img src="/images/extracted/page-10_2.jpg" alt="Azrak Internship Still 2" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden z-20 shadow-lg"
        style="left: 5.24%; top: 77.59%; width: 13.16%; height: 13.15%;"
      >
        <img src="/images/extracted/page-10_3.jpg" alt="Azrak Internship Still 3" class="w-full h-full object-cover" />
      </div>

      <!-- Canvas Overlaid Info (Titles on left, Description on right) -->
      <div class="project-info absolute inset-0 pointer-events-none text-ebra-yellow font-clash z-20">
        <!-- Titles Above Left Stills -->
        <h3
          class="font-medium leading-none absolute"
          style="left: 5.21%; top: 31.85%; font-size: 1.56cqw;"
        >
          Azrak - Internship Campaign · 2024
        </h3>
        <div
          class="font-extralight leading-none absolute"
          style="left: 5.21%; top: 36.48%; font-size: 1.56cqw;"
        >
          Social Media Campaign
        </div>

        <!-- Right Paragraph -->
        <p
          class="font-light leading-[1.3] absolute"
          style="left: 75.14%; top: 61.73%; font-size: 1.32cqw; width: 20%;"
        >
          Following the internship poster as it<br />
          travels through Mansoura, the<br />
          campaign brings Azrak’s internship<br />
          opportunity to life through the city’s<br />
          most recognizable landmarks
        </p>

        <!-- Right Scope of Work -->
        <div class="absolute" style="left: 75.14%; top: 85.93%;">
          <div class="font-medium leading-none" style="font-size: 1.32cqw;">
            Scope of Work
          </div>
          <div class="font-light leading-none mt-[0.5cqw]" style="font-size: 1.32cqw;">
            Director
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TopRightDots from '~/components/TopRightDots.vue'
import PlayButton from '~/components/PlayButton.vue'

defineEmits(['play-video'])
</script>
