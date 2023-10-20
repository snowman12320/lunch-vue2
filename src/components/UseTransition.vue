<template>
  <div>
    <h2 :style="{ color: color }">COLOR CHANGING</h2>
    <h2>
      <p>Join over</p>
      <p>{{ Math.round(outputCount) }}+</p>
      <p>Developers</p>
    </h2>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useTransition, TransitionPresets } from '@vueuse/core'

export default {
  setup () {
    const source = ref([100, 100, 100])
    const outputSource = useTransition(source, {
      duration: 3000,
      transition: TransitionPresets.easeOutExpo
    })
    const color = computed(() => {
      const [r, g, b] = outputSource.value
      return `rgb(${r}, ${g}, ${b})`
    })
    source.value = [255, 255, 255]

    const count = ref(0)
    const outputCount = useTransition(count, {
      duration: 30000,
      transition: TransitionPresets.easeOutExpo
    })
    count.value = 5000

    return {
      source,
      outputSource,
      color,
      outputCount,
      count
    }
  }
}
</script>
