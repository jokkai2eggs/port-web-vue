<template>
  <div class="flex flex-col gap-4">
    <BlogSpace />
    <div class="flex items-center justify-center opacity-0" name="item">
      <div class="stackComp text-2xl">
        <NuxtLink to="/selecting">
          {{ '< Back />' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { staggeringOpacity } = useAnime()
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 300)
  staggeringOpacity(document.getElementsByName('book'), 600)
})
</script>
