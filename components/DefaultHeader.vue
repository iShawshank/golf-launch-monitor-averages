<template>
  <header class="header px-10 py-1 bg-light-black border-neutral-2 sticky top-0 h-15 md:h-10">
    <nav class="header__links grid grid-cols-3 md:grid-cols-6">
      <NuxtLink class="header__link border-r-2" to="/" >Home</NuxtLink>
      <NuxtLink class="header__link border-r-2" to="/PGA" >PGA</NuxtLink>
      <NuxtLink class="header__link md:border-r-2" to="/LPGA" >LPGA</NuxtLink>
      <NuxtLink class="header__link col-span-3" to="https://account.venmo.com/u/ishawshank39" target="_blank" >If you're enjoying this app, buy me a 🍻</NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
header {
  border-bottom: 1px solid;
}

.header__link {
  padding-right: 10px;
  margin-left: 10px;
  /* border-bottom-width: 2px; */
  border-color: white;
}
</style>