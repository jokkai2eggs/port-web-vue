<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <div v-for="item in menuList" name="item" class="opacity-0">
      <div
        class="text-3xl"
        :class="
          ['< Blog />', '< Project />'].includes(item.t)
            ? ' cursor-default text-slate-400 '
            : 'stackComp'
        "
      >
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
  { t: '< Blog />', r: undefined },
  { t: '< Project />', r: undefined },
  { t: '< Back />', r: '/' },
])
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 200)
})
</script>
