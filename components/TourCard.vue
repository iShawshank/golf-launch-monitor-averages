<template>
  <div class="tour-card m-3 shadow-md rounded-xl">
   <NuxtLink :to="`/${tour}`">
    <div class="p-5">
      <img :src="logo" :alt="tour">
    </div>
   </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  },
  props: {
    logo: {
      type: String,
      required: true,
    },
    tour: {
      type: String,
      required: true,
    }
  }
})
</script>

<style scoped>
img {
  max-height: 300px;
}
</style>