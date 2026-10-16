<template>
  <section id="slide-05" class="relative w-full min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden">
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
        style="left: 5.208%; top: 23.333%; width: 55.903%; height: 42.407%;"
        @click="$emit('play-video', {
          title: 'كذبه بيضاء (White Lie)',
          subtitle: 'Short Film · 2022',
          scopeOfWork: 'Cinematographer',
          videoType: 'drive',
          driveId: '1YFq71J0B20k_q4R9aNkJ3eNl6oM4wN7A',
          videoUrl: 'https://drive.google.com/file/d/1YFq71J0B20k_q4R9aNkJ3eNl6oM4wN7A/view?usp=drive_link'
        })"
      >
        <img
          src="/images/extracted/page-5_1.jpg"
          alt="White Lie Main Still"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <PlayButton />
      </div>

      <!-- 3 Stills Horizontally Centered Under Main Visual -->
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 12.153%; top: 78.765%; width: 13.194%; height: 10.309%;"
      >
        <img src="/images/extracted/page-5_4.jpg" alt="White Lie Still 1" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 27.292%; top: 78.765%; width: 13.194%; height: 10.309%;"
      >
        <img src="/images/extracted/page-5_3.jpg" alt="White Lie Still 2" class="w-full h-full object-cover" />
      </div>
      <div
        class="project-visual absolute overflow-hidden"
        style="left: 41.806%; top: 78.765%; width: 13.194%; height: 10.309%;"
      >
        <img src="/images/extracted/page-5_2.jpg" alt="White Lie Still 3" class="w-full h-full object-cover" />
      </div>

      <!-- Right Column: Project Info (Direct absolute placement across 16:9 canvas) -->
      <div class="project-info absolute inset-0 pointer-events-none text-ebra-yellow font-clash">
        <!-- Arabic Title: كذبه بيضاء -->
        <h3
          class="font-bold leading-none font-arabic absolute"
          style="left: 72.222%; top: 43.827%; font-size: 2.2cqw;"
        >
          كذبه بيضاء
        </h3>

        <div
          class="font-medium leading-none absolute"
          style="left: 72.222%; top: 52.407%; font-size: 1.56cqw;"
        >
          Short Film · 2022
        </div>

        <div
          class="font-extralight leading-none absolute"
          style="left: 72.222%; top: 56.975%; font-size: 1.56cqw;"
        >
          Drama
        </div>

        <p
          class="font-light leading-[1.3] absolute"
          style="left: 72.222%; top: 64.753%; font-size: 1.32cqw; width: 23%;"
        >
          On her 12th birthday, a young girl waits for<br />
          her father to come home, unaware of the<br />
          truth her mother has been hiding. For<br />
          years, her father had recorded a video for<br />
          every birthday — and this year, she is<br />
          about to watch the one he left behind.
        </p>

        <div class="absolute" style="left: 72.222%; top: 85.926%;">
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
