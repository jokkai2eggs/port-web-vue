<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in blog" name="book" class="opacity-0">
        <NuxtLink :to="item.link" target="_blank">
          <div
            class="relative w-[300px] h-[200px] rounded-xl border-2 border-slate-300 cursor-pointer"
            :class="`bg-[url('${item.pic}')] bg-cover`"
            @mouseenter="mouseEnterElement(item.t).enter"
            @mouseleave="mouseEnterElement(item.t).leave"
          >
            <div
              class="absolute z-[2] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex justify-center items-center"
            >
              <div
                v-if="mouseEnter === item.t"
                class="w-full text-center bg-white"
              >
                {{ item.t }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
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
const blog = ref([
  {
    id: 1,
    t: 'Jumper X Axelar',
    link: 'https://jumper-x-axelar.vercel.app/',
    pic: '/jumper.png',
  },
  { id: 2, t: 'Magic Book Store2', link: '' },
  { id: 3, t: 'Magic Book Store3', link: '' },
  { id: 4, t: 'Magic Book Store4', link: '' },
  { id: 5, t: 'Magic Book Store5', link: '' },
  { id: 6, t: 'Magic Book Store6', link: '' },
])
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 300)
  staggeringOpacity(document.getElementsByName('book'), 600)
})
const mouseEnter = ref<string>()
const mouseEnterElement = (t: string) => {
  const enter = () => (mouseEnter.value = t)
  const leave = () => (mouseEnter.value = undefined)
  return { enter, leave }
}
</script>
