<template>
  <div class="single-club-page container-large h-full py-2">
    <div class="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 align-middle justify-center">
      <NuxtLink v-for="club in clubs" :key="club.id" :to="`/${$route.params.tour}/${club.id}`" class="m-2 p-2 dark:text-white border-black dark:border-white border-2 rounded-xl flex justify-center align-middle flex-col">
        {{ club.name }}
      </NuxtLink>
    </div>
    <h1 class="text-xl">
      {{ $route.params.tour }} Tour <span class="dark:text-white">{{ $route.params.club }}</span> Average
    </h1>
    <div class="averages h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 m-5 items-center">
      <StatsCard name="Club speed" extra-info="mph" :value="tourAverages.clubSpeed" />
      <StatsCard name="Angle of Attack" extra-info="deg" :value="tourAverages.attackAngle" />
      <StatsCard name="Ball speed" extra-info="mph" :value="tourAverages.ballSpeed" />
      <StatsCard name="Smash" :value="tourAverages.smash" />
      <StatsCard name="Launch Angle (VLA)" extra-info="deg" :value="tourAverages.VLA" />
      <StatsCard name="Spin" extra-info="rpm" :value="tourAverages.spin" />
      <StatsCard name="Peak Height" extra-info="yds" :value="tourAverages.peakHeight" />
      <StatsCard name="Descent Angle" extra-info="deg" :value="tourAverages.descentAngle" />
      <StatsCard name="Carry" extra-info="yds" :value="tourAverages.carry" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { statsForClub, allClubs } from '~~/utils/tourAverages';
import StatsCard from '~~/components/StatsCard.vue';

export default defineComponent({
  components: { StatsCard },
  data() {
    return {
      clubs: allClubs(this.$route.params.tour as string),
    }
  },
  computed: {
    tourAverages() {
      return statsForClub(this.$route.params.club as string, this.$route.params.tour as string);
    }
  }
})
</script>

<style scoped>

</style>