<template>
  <div class="grid grid-cols-3 gap-4 h-[400px] overflow-y-scrollno-scrollbar">
    <div v-for="item in blog" name="book" class="opacity-0">
      <div
        class="relative w-[300px] h-[200px] rounded-xl border-2 border-slate-300 cursor-pointer bg-slate-200"
        @mouseenter="mouseEnterElement(item.t).enter"
        @mouseleave="mouseEnterElement(item.t).leave"
      >
        <NuxtLink :to="`/blog/${item.id}`">
          <div class="p-2 overflow-hidden">
            <div class="w-full h-[80px]">
              {{ item.t }}
            </div>
            <div
              class="h-[100px] w-full border-2 rounded-xl flex justify-center items-center overflow-hidden bg-white"
            >
              <img
                class="object-fill aspect-auto object-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/120px-Node.js_logo.svg.png"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const mouseEnter = ref<string>()
const blog = ref([{ id: 1, t: 'Magic Book Store1', link: '' }])
const mouseEnterElement = (t: string) => {
  const enter = () => (mouseEnter.value = t)
  const leave = () => (mouseEnter.value = undefined)
  return { enter, leave }
}
</script>
