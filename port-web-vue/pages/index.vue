<template>
  <div name="item" class="opacity-0">
    <div class="text-5xl font-semibold pointer-events-none">
      {{ `< Welcome to My World />` }}
    </div>
  </div>
  <div name="item" class="opacity-0">
    <div class="stackComp text-3xl">
      <NuxtLink :to="`/selecting`">
        {{ `< Enter />` }}
      </NuxtLink>
    </div>
  </div>
  <div name="item" class="opacity-0">
    <div class="stackComp text-3xl">
      <NuxtLink
        :to="`https://www.linkedin.com/in/jk-love-to-code/`"
        :target="'_blank'"
      >
        {{ `< Contact />` }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { staggeringOpacity } = useAnime()
const selectingMenu = ref<HTMLElement | null>(null)
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 250)
})
</script>
