<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['error'],
  mounted() {
    console.log(this.error)
  }
})
</script>

<style scoped>

</style>