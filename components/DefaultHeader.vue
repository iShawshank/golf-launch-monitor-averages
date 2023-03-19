<template>
  <header class="header flex px-10 py-1 dark:bg-light-black dark:border-neutral-2 sticky top-0">
    <nav class="header__links">
      <NuxtLink class="header__link border-r-2" to="/" >Home</NuxtLink>
      <NuxtLink class="header__link border-r-2" to="/PGA" >PGA</NuxtLink>
      <NuxtLink class="header__link" to="/LPGA" >LPGA</NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
header {
  height: 40px;

  border-bottom: 1px solid;
}

.header__link {
  padding-right: 10px;
  margin-left: 10px;
  /* border-bottom-width: 2px; */
  border-color: white;
}
</style>