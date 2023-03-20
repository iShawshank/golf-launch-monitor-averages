<template>
    <footer class="border-neutral-2">
        <a v-if="this.$route.name === 'tour'" class="icon-attribute text-xs" href="https://www.flaticon.com/free-icons/golf-club" title="golf club icons">Golf club icons created by iconixar and juicy_fish - Flaticon</a>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
footer {
    height: 40px;
    border-top: 1px solid;
}
</style>