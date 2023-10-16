<template>
  <div class="about">
    <h1 @click="toggleBg" :class="{ 'switchBg': isBg }">This is an about page</h1>
    <!--  -->
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <h3>
      Counter: {{ count }}
      <a @click="inc()" style="margin-right: 10px">+</a>
      <a @click="dec()">-</a>
    </h3>
    <!-- https://vueuse.org/core/useStorage/ -->
    <div>
      <input v-model="state.name" type="text">
      <input v-model="state.color" type="text">
      <input v-model="state.size" type="text">
      <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">
      {{ state.count }}
    </div>
    <!--  -->
    <div>
      <p>myValue: {{ myValue ? 'ON' : 'OFF' }}</p>
      <button @click="myToggle()">
        myToggle
      </button>
      <button @click="myValue = true">
        Set ON
      </button>
      <button @click="myValue = false">
        Set OFF
      </button>
    </div>
  </div>
</template>

<script>

import {
  useMouse, useCounter, useSessionStorage, useToggle
} from '@vueuse/core'

export default {
  data () {
    return {
      isBg: false
    }
  },
  created () {
    console.clear()
  },
  methods: {
    toggleBg () {
      this.isBg = !this.isBg
    }
  },
  setup () {
    const { x, y } = useMouse()
    const { count, inc, dec } = useCounter()

    const theDefault = {
      name: 'Banana',
      color: 'Yellow',
      size: 'Medium',
      count: 0
    }
    const state = useSessionStorage('vue-use-local-storage', theDefault)

    const [myValue, myToggle] = useToggle()

    return {
      x,
      y,
      count,
      state,
      myValue,

      inc,
      dec,
      myToggle
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  cursor: pointer;
}

.switchBg {
  background: #000;
  color: #fff;
}
</style>
