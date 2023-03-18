<template>
  <div class="h-screen w-screen">
    <DefaultHeader />
    <div class="content h-full w-full">
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

</style>