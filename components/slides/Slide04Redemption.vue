<template>
  <section id="slide-04" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
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
        style="left: 5.208%; top: 16.852%; width: 61.528%; height: 61.543%;"
        @click="$emit('play-video', {
          title: 'Redemption',
          subtitle: 'Graduation - Short Film · 2023',
          scopeOfWork: 'Cinematographer',
          videoType: 'drive',
          driveId: '1Q7Y_Atg43ByXhCgvnT6V35ugfsTZuIbt',
          videoUrl: 'https://drive.google.com/file/d/1Q7Y_Atg43ByXhCgvnT6V35ugfsTZuIbt/view?usp=drive_link'
        })"
      >
        <img
          src="/images/extracted/page-4_1.jpg"
          alt="Redemption Main Still"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <PlayButton />
      </div>

      <!-- 3 Stills Horizontally Centered Under Main Visual -->
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 11.562%; top: 77.654%; width: 13.16%; height: 13.148%;"
      >
        <img src="/images/extracted/page-4_2.jpg" alt="Redemption Still 1" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 26.701%; top: 77.593%; width: 13.16%; height: 13.148%;"
      >
        <img src="/images/extracted/page-4_4.jpg" alt="Redemption Still 2" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 41.84%; top: 77.531%; width: 13.16%; height: 13.148%;"
      >
        <img src="/images/extracted/page-4_3.jpg" alt="Redemption Still 3" class="w-full h-full object-cover" />
      </div>

      <!-- Right Column: Project Info (Direct absolute placement across 16:9 canvas) -->
      <div class="project-info absolute inset-0 pointer-events-none text-ebra-yellow font-clash">
        <h3
          class="font-bold leading-none absolute"
          style="left: 72.361%; top: 51.667%; font-size: 2.08cqw;"
        >
          Redemption
        </h3>

        <div
          class="font-medium leading-none absolute"
          style="left: 72.361%; top: 60.247%; font-size: 1.56cqw;"
        >
          Graduation - Short Film · 2023
        </div>

        <div
          class="font-extralight leading-none absolute"
          style="left: 72.014%; top: 64.877%; font-size: 1.56cqw;"
        >
          Drama - Action
        </div>

        <p
          class="font-light leading-[1.3] absolute"
          style="left: 72.361%; top: 72.654%; font-size: 1.32cqw; width: 23%;"
        >
          A detective investigates a murder that<br />
          gradually reveals a disturbing connection<br />
          to a marionette doll.
        </p>

        <div class="absolute" style="left: 72.361%; top: 85.926%;">
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
