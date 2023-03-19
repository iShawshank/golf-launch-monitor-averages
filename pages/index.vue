<template>
  <div class="home container-large h-full grid grid-cols-1 items-center justify-center justify-items-center">
    <div class="p-2 border-black border-b-2 dark:border-white">
      <h2>Select which tour averages you want</h2>
    </div>
    <div class="tours grid grid-cols-1 sm:grid-cols-2 items-center justify-between justify-items-center max-w-xl w-full">
      <TourCard logo="/img/PGATourBlack.png" tour="PGA" />
      <TourCard logo="/img/LPGABlack.png" tour="LPGA" />
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
  metaInfo: {
    title: 'Tour Averages'
  }
})
</script>

<style scoped>

</style>