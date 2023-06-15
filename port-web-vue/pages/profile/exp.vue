<template>
  <div class="h-full flex flex-col my-10 gap-10">
    <div
      class="h-full w-[500px] border-2 border-slate-300 rounded-2xl relative cursor-default"
      name="item"
    >
      <div class="flex flex-col w-full h-full items-center pt-6 gap-6">
        <div name="item2" class="text-center">
          <div class="text-lg font-semibold mb-2">
            {{ '<  Math Teacher />' }}
          </div>
          <div class="underline">
            Satree Phuket School
            <Icon
              name="icon-park-outline:more-two"
              class="cursor-pointer"
              @click="openPopup('SPK')"
            />
          </div>
          <div class="italic font-medium text-slate-500">
            June 2020 - July 2020 ( 2 months )
          </div>
          <div class="underline">
            Srinagarindra the princess mother School, Phuket
            <Icon
              name="icon-park-outline:more-two"
              class="cursor-pointer"
              @click="openPopup('SWPK')"
            />
          </div>
          <div class="italic font-medium text-slate-500">
            October 2020 - December 2021 ( 1 year 2 months )
          </div>
        </div>
        <div name="item2" class="text-center">
          <div class="text-lg font-semibold mb-2">
            {{ '<  Tutor & Free Lance />' }}
          </div>
          <div class="underline">
            Mathematics Tutor
            <Icon
              name="icon-park-outline:more-two"
              class="cursor-pointer"
              @click="openPopup('TUTOR')"
            />
          </div>
          <div class="italic font-medium text-slate-500">
            2021 - October 2022 (about 10 month)
          </div>
          <div>
            <span class="underline">
              {{ 'Web2 & Web2 Developer (Free Lance)' }}
            </span>
            <Icon
              name="icon-park-outline:more-two"
              class="cursor-pointer"
              @click="openPopup('FREE')"
            />
          </div>
          <div class="italic font-medium text-slate-500">2023 - now</div>
        </div>
        <div name="item2" class="text-center">
          <div class="text-lg font-semibold mb-2">
            {{ '< Software Engineer />' }}
          </div>
          <div class="underline">
            MidasSoft Co.
            <Icon
              name="icon-park-outline:more-two"
              class="cursor-pointer"
              @click="openPopup('MIDAS')"
            />
          </div>
          <div class="italic font-medium text-slate-500">
            2022 October - now
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center" name="item">
      <div class="stackComp text-2xl">
        <NuxtLink to="/profile">
          {{ '< Back />' }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <Popup v-model="popUp" v-if="popUp" class="divide-y">
    <template #title>
      <div class="px-2 py-2 text-lg font-semibold">Experiences</div>
    </template>
    <template #main>
      <div class="px-4 py-2 max-w-[500px] whitespace-normal">
        <span>
          {{ selectedExp }}
        </span>
      </div>
    </template>
  </Popup>
</template>
<script setup lang="ts">
const { staggeringOpacity } = useAnime()
const popUp = ref(false)
const selectedExp = ref()
const expInDetail = ref<Map<string, { detail: string }>>(new Map())
const arr = ref([
  {
    t: 'SPK',
    detail: `As a math teacher, I have gained a wide range 
      of experiences in helping students learn math through 
      different approaches. Additionally, I have developed 
      effective problem-solving strategies that allow me to 
      tackle challenges with flexibility and creative thinking.`,
  },
  {
    t: 'SWPK',
    detail: `As a math teacher in the government sector,
   I have implemented problem-solving techniques and created captivating 
   classrooms to spark students' interest in the subject. Through this 
   experience, I have developed effective time management skills to 
   handle my workload efficiently. Moreover, I have improved my ability 
   to interact with others by fostering clear communication and collaboration
    with colleagues, parents, and school administrators.`,
  },
  {
    t: 'TUTOR',
    detail: `After resigning from my government teaching position, 
    I pursued a freelance career and delved into the world of programming.
     As a freelancer, I started tutoring students who aimed for better grades
      or showed a keen interest in the subject. This experience allowed me 
      to expand my teaching skills, exploring different approaches. Furthermore,
       I focused on enhancing my ability to quickly learn new content, 
       enabling me to efficiently deliver lessons within a limited time frame.`,
  },
  {
    t: 'FREE',
    detail: `I work with a team on freelance web development projects, 
    specializing in both traditional (web2) and blockchain-based (web3) applications.
     Our focus is on cryptocurrency, DeFi platforms, and Degen NFT projects. 
     As a front-end developer, I create user interfaces and collaborate with 
     smart contract developers to seamlessly integrate front-end designs with 
     smart contracts. This experience has given me a strong grasp of web development 
     techniques and a deep understanding of the cryptocurrency industry.`,
  },
  {
    t: 'MIDAS',
    detail: `I specialize in developing full-stack web applications, 
    with a strong emphasis on front-end design. I utilize Figma to design web UI/UX,
     following user-centered design principles. In terms of front-end development,
     I build robust backoffices using Vue (Nuxt) with TypeScript, 
     prioritizing scalability and maintainability. Additionally, 
     I collaborate with back-end teams to design APIs and databases, 
     ensuring seamless integration between the front-end and back-end components.
      I have experience working on stock exchange front-end web projects, 
      where I have collaborated with teams to review code on Github, 
      continuously improving and maintaining high-quality code.`,
  },
])
const openPopup = (key: string) => {
  if (!key) return
  selectedExp.value = expInDetail.value?.get(key)?.detail
  popUp.value = true
}
onMounted(() => {
  staggeringOpacity(document.getElementsByName('item'), 0, 250)
  staggeringOpacity(document.getElementsByName('item2'), 0, 100, 200)
  arr.value.forEach((x) => {
    expInDetail.value?.set(x.t, { detail: x.detail })
  })
})
</script>
