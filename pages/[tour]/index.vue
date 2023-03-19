<template>
  <div class="club-selection container-large h-full w-full py-2">
    <h1 class="dark:text-white text-xl">For {{ $route.params.tour }} Tour averages, select a club</h1>
    <div class="club-selector grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full justify-between justify-items-center align-middle px-6 h-full">
      <ClubCard 
        v-for="club in clubs" 
        :key="club.id"
        :id="club.id"
        :name="club.name"
        :type="club.type"
        :extra-text="club.extraText"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { allClubs } from '~~/utils/tourAverages'
import ClubCard from '~~/components/ClubCard.vue'

export default defineComponent({
  components: { ClubCard },
  data() {
    return {
      clubs: allClubs(this.$route.params.tour as string),
    }
  },
})
</script>

<style scoped>

</style>