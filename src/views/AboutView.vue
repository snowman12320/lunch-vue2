<template>
  <div class="about">
    <!-- toggleBg -->
    <h1 @click="toggleBg" :class="{ 'switchBg': isBg }">This is an about page</h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <h3>
      Counter: {{ count }}
      <a @click="inc()" style="margin-right: 10px">+</a>
      <a @click="dec()">-</a>
    </h3>
  </div>
</template>

<script>

import { useMouse, useCounter } from '@vueuse/core'

export default {
  data () {
    return {
      isBg: false
    }
  },
  methods: {
    toggleBg () {
      this.isBg = !this.isBg
    }
  },
  setup () {
    const { x, y } = useMouse()
    const { count, inc, dec } = useCounter()

    return {
      x,
      y,
      count,
      inc,
      dec
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  cursor: pointer;
}
.switchBg {
  background: #000;
  color: #fff;
}
</style>
