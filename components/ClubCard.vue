<template>
  <div class="club-option border border-black dark:border-white rounded-xl p-2 my-4 justify-items-center justify-center w-full">
    <NuxtLink :to="`/${$route.params.tour}/${id}`">
      <div class="club-option__text h-11">
        <h2>{{ name }}</h2>
        <p class="text-xs" v-if="extraText">{{ extraText }}</p>
      </div>
      <div class="club-option__logo flex justify-center">
        <img :src="clubLogo" :alt="`${type} icon`" />
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    extraText: {
      type: String,
      required: false,
    }
  },
  computed: {
    clubLogo() {
      return `/img/${this.type}.png`;
    },
  },
})
</script>

<style scoped>
.club-option {
  height: 150px;
  width: 150px;
}
img {
  height: 80px;
  width: 80px;
}
</style>