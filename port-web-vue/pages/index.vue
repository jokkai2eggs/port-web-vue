<template>
  <div
    class="h-full flex justify-center flex-col items-center flex-wrap gap-10 whitespace-nowrap"
    @click.right="(e) => e.preventDefault()"
  >
    <div name="item" class="opacity-0">
      <div class="text-5xl font-semibold pointer-events-none">
        {{ `< Welcome to My World />` }}
      </div>
    </div>
    <div name="item" class="opacity-0">
      <div
        class="text-3xl cursor-pointer hover:scale-125 hover:font-semibold delay-[75]"
      >
        <NuxtLink :to="`/selecting`">
          {{ `< Enter />` }}
        </NuxtLink>
      </div>
    </div>
    <div name="item" class="opacity-0">
      <div
        class="text-3xl cursor-pointer hover:scale-125 hover:font-semibold delay-[75]"
      >
        {{ `< Contact />` }}
      </div>
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
