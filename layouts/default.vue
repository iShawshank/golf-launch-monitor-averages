<template>
  <div class="pga bg-light-black w-screen text-green align-middle text-center">
    <DefaultHeader />
    <div class="main-content h-full w-full bg-black">
      <NuxtLoadingIndicator />
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultHeader from '~~/components/DefaultHeader.vue';
import DefaultFooter from '~~/components/DefaultFooter.vue';

export default defineComponent({
  components: { DefaultHeader, DefaultFooter },
})
</script>

<style scoped>
.pga {
  min-height: 100vh;
  /* min-height: -webkit-fill-available; */
}
.main-content {
 min-height: 80vh;
}
</style>