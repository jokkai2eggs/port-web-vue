<template>
  <div class="flex flex-col gap-16">
    <div class="grid grid-cols-2 gap-10">
      <div v-for="item in stackExp" :key="item.t">
        <div name="item2">
          <div class="stackCard">
            <div class="text-lg font-semibold">
              {{ `< ${item.t} />` }}
            </div>
            <div class="flex gap-6 items-center">
              <span v-for="items in item.i">
                <div name="item" class="opacity-0">
                  <img :src="items" class="w-8 h-8 object-fill" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div name="item3" class="opacity-0">
      <div class="flex justify-center items-center w-full">
        <div class="stackComp text-3xl">
          <NuxtLink :to="'/profile'">
            {{ `< Back />` }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { staggeringOpacity } = useAnime()

const stackExp = [
  {
    t: 'Front-End Development',
    i: ['/vue.svg', '/nuxt.svg', '/react.svg', '/next.svg', '/tailwind.svg'],
  },
  {
    t: 'Back-End Development',
    i: [
      '/nodejs.svg',
      '/typescript.svg',
      '/psql.svg',
      // '/golang.svg',
      // '/redis.svg',
    ],
  },
  {
    t: 'Infrastructre & CI/CD',
    i: [
      '/docker.svg',
      '/github.svg',
      '/heroku.svg',
      // '/digitalOcean.svg',
      '/fireBase.svg',
    ],
  },
  {
    t: 'Blockchain & Web3',
    i: [
      // '/solidity.svg',
      '/metamask.svg',
      '/openSea.svg',
      '/dune.svg',
    ],
  },
]

onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 0, 30)
  staggeringOpacity(document.getElementsByName('item2'), 0, 150)
  staggeringOpacity(document.getElementsByName('item3'), 0, 300)
})
</script>
