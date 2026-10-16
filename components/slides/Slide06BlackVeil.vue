<template>
  <section id="slide-06" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
    <div class="relative w-full max-w-[1920px] 2xl:max-w-[2560px] aspect-[16/9] bg-black overflow-hidden select-none" style="container-type: inline-size;">
      <!-- Top Bar: Portfolio | 2026 | Dots -->
      <div
        class="project-top absolute text-ebra-yellow font-clash font-extralight tracking-wider"
        style="left: 5.21%; top: 8.83%; font-size: 1.04cqw;"
      >
        Portfolio
      </div>
      <div
        class="project-top absolute text-ebra-yellow font-clash font-extralight tracking-wider"
        style="left: 48.85%; top: 8.89%; font-size: 1.04cqw; transform: translateX(-50%);"
      >
        2026
      </div>
      <div class="project-top absolute" style="left: 93.68%; top: 8.83%;">
        <TopRightDots />
      </div>

      <!-- Main Visual (Large Still with Play Button) -->
      <div
        class="project-visual absolute overflow-hidden cursor-pointer group"
        style="left: 5.208%; top: 20.741%; width: 61.528%; height: 48.457%;"
        @click="$emit('play-video', {
          title: 'حجاب أسود (Black Veil)',
          subtitle: 'Short Film · 2022',
          scopeOfWork: 'Cinematographer',
          videoType: 'drive',
          driveId: '1sM72Y4cE6w5j0oT1vO6z8kG2Qe3tF8g1',
          videoUrl: 'https://drive.google.com/file/d/1sM72Y4cE6w5j0oT1vO6z8kG2Qe3tF8g1/view?usp=drive_link'
        })"
      >
        <img
          src="/images/extracted/page-6_1.jpg"
          alt="Black Veil Main Still"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <PlayButton />
      </div>

      <!-- 3 Stills Horizontally Centered Under Main Visual -->
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 11.562%; top: 78.457%; width: 13.194%; height: 11.543%;"
      >
        <img src="/images/extracted/page-6_4.jpg" alt="Black Veil Still 1" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 26.667%; top: 78.457%; width: 13.194%; height: 11.543%;"
      >
        <img src="/images/extracted/page-6_3.jpg" alt="Black Veil Still 2" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 41.806%; top: 78.457%; width: 13.194%; height: 11.543%;"
      >
        <img src="/images/extracted/page-6_2.jpg" alt="Black Veil Still 3" class="w-full h-full object-cover" />
      </div>

      <!-- Right Column: Project Info (Direct absolute placement across 16:9 canvas) -->
      <div class="project-info absolute inset-0 pointer-events-none text-ebra-yellow font-clash">
        <!-- Arabic Title: حجاب أسود -->
        <h3
          class="font-bold leading-none font-arabic absolute"
          style="left: 72.326%; top: 43.519%; font-size: 2.2cqw;"
        >
          حجاب أسود
        </h3>

        <div
          class="font-medium leading-none absolute"
          style="left: 72.326%; top: 52.160%; font-size: 1.56cqw;"
        >
          Short Film · 2022
        </div>

        <div
          class="font-extralight leading-none absolute"
          style="left: 72.326%; top: 56.728%; font-size: 1.56cqw;"
        >
          Horror
        </div>

        <p
          class="font-light leading-[1.3] absolute"
          style="left: 72.326%; top: 64.506%; font-size: 1.32cqw; width: 23%;"
        >
          A young woman begins experiencing<br />
          strange and unsettling events inside<br />
          her home, as an unseen presence<br />
          slowly turns her familiar surroundings<br />
          into a nightmare.
        </p>

        <div class="absolute" style="left: 72.326%; top: 85.864%;">
          <div class="font-medium leading-none" style="font-size: 1.32cqw;">
            Scope of Work
          </div>
          <div class="font-light leading-none mt-[0.5cqw]" style="font-size: 1.32cqw;">
            Cinematographer
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
