<template>
  <div class="flex flex-col gap-6">
    <div v-for="item in menuList" name="item" class="opacity-0">
      <div class="stackComp text-3xl">
        <NuxtLink :to="item.r">
          {{ item.t }}
        </NuxtLink>
      </div>
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
