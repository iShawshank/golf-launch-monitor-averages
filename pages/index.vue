<template>
  <div class="home container-large h-full grid grid-cols-1 items-center justify-center justify-items-center">
    <div class="p-2 border-b-2 border-white">
      <h2>Select which tour averages you want</h2>
    </div>
    <div class="tours grid grid-cols-1 sm:grid-cols-2 items-center justify-between justify-items-center max-w-xl w-full">
      <TourCard logo="/golf-launch-monitor-averages/img/PGATourBlack.png" tour="PGA" />
      <TourCard logo="/golf-launch-monitor-averages/img/LPGABlack.png" tour="LPGA" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TourCard from '~~/components/TourCard.vue';

export default defineComponent({
  components: {
    TourCard,
  },
})
</script>

<style scoped>

</style>