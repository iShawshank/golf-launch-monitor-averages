<template>
  <div class="stats-card border border-black dark:border-white m-4 p-2 rounded-xl justify-center justify-items-center align-middle items-center h-full">
    <div class="stats-card__name">
      <h3 class="text-large">{{ name }}</h3>
      <p v-if="extraInfo" class="text-sm">({{ extraInfo }})</p>
    </div>
    <h1 class="text-black dark:text-white text-4xl lg:text-5xl xl:text-6xl xl:7xl">{{ value }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    extraInfo: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true,
    },
  }
})
</script>

<style scoped>
.stats-card {
  height: 150px;

  &__name {
    height: 65px;
  }
}
</style>