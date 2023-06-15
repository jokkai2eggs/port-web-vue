<template>
  <div
    v-if="props.modelValue"
    class="z-[1000] fixed inset-0 w-full h-full bg-black/30 flex justify-center items-center"
    @click.self="$emit('update:modelValue', false)"
  >
    <div
      class="z-[1001] flex flex-col absolute bg-white min-w-[300px] min-h-max max-h-full rounded-lg"
      v-bind="attr"
      name="popUp"
    >
      <slot name="title" />
      <slot name="main" />
      <slot name="footer" />
    </div>
  </div>
</template>
<script setup lang="ts">
interface IProps {
  modelValue: boolean
}
const props = defineProps<IProps>()
const attr = useAttrs()
const { staggeringOpacity } = useAnime()
onMounted(() => {
  staggeringOpacity(document.getElementsByName('popUp'), 0, 200, 50)
})
</script>
