<template>
  <div
    class="h-full flex justify-center flex-col items-center flex-wrap gap-10"
  >
    <div class="flex flex-col gap-6">
      <NuxtLink
        v-for="item in menuList"
        class="text-3xl cursor-pointer hover:scale-125 hover:font-semibold delay-[75]"
        :to="item.r"
      >
        <div name="item" class="opacity-0">
          {{ item.t }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { staggeringOpacity } = useAnime()
const menuList = ref([
  { t: '< Profile />', r: '/profile' },
  { t: '< Blog />', r: '/blog' },
  { t: '< Project />', r: '/project' },
  { t: '< Back />', r: '/' },
])
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 200)
})
</script>
