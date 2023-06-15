<template>
  <div class="flex flex-col gap-16 max-w-full justify-center items-center">
    <div class="flex gap-16 justify-between items-center w-full">
      <div class="flex flex-col gap-4">
        <div on- name="item" class="text-4xl font-bold">I'm JkLove2Code.</div>
        <div name="item" class="text-2xl">Full Stack Developer.</div>
        <div
          name="item"
          class="text-[14px] font-medium text-slate-700/80 whitespace-normal max-w-[350px]"
        >
          <div class="text-base text-blue-700 font-bold pb-2">Objective:</div>
          <div>
            As a Full Stack Web Developer, I aim to leverage my expertise in web
            development and passion for the financial technology sector to
            create secure and user-friendly fin-tech or web 3 applications. I am
            passionate about creating innovative solutions and having a
            significant impact on the industry.
          </div>
        </div>
        <div name="item">
          <div class="text-base text-lime-700 font-bold pb-2">Soft Skills:</div>
          <div class="flex gap-2 max-w-[350px] flex-wrap">
            <span
              v-for="item in softTag"
              class="text-[12px] bg-blue-700 rounded-lg text-slate-200 w-max py-0.15 px-1 border border-blue-600"
              name="item"
            >
              <NuxtLink
                :to="`https://www.google.com/search?q=${item}`"
                :target="'_blank'"
              >
                {{ item }}
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
      <div class="min-w-[350px]" name="item2">
        <img
          src="/char.png"
          class="aspect-auto w-full h-auto object-contain rounded-full shadow-black shadow-lg"
        />
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-center gap-10">
        <div v-for="item in miniMenu" class="stackComp text-2xl" name="item">
          <NuxtLink :to="item.r">
            {{ item.t }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const miniMenu = ref([
  { t: '< Stack />', r: '/profile/stack' },
  { t: '< Exp /> ', r: '/profile/exp' },
  { t: '< Home />', r: '/' },
  { t: '< Back />', r: '/selecting' },
])
const softTag = ref([
  'Creative Thinking',
  'Collaboration',
  'Negotiation',
  'Task Management',
  'Adaptability',
  'Problem Solving',
])
const { staggeringOpacity } = useAnime()
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'))
  staggeringOpacity(document.getElementsByName('item2'), 0, 250)
})
</script>
