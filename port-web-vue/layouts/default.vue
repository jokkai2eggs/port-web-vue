<template>
  <div class="max-h-screen max-w-full h-screen w-full">
    <div
      class="h-full flex justify-center flex-col items-center flex-wrap gap-10 whitespace-nowrap"
      @click.right="(e) => e.preventDefault()"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute().name?.toString()
</script>
