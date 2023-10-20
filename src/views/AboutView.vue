<template>
  <div class="about">
    <h1 @click="toggleBg" :class="{ switchBg: isBg, switchText: isRed }" ref="target">
      This is an about page
    </h1>
    <!--  -->
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <h3>
      Counter: {{ count }}
      <a @click="inc()" style="margin-right: 10px">+</a>
      <a @click="dec()">-</a>
    </h3>
    <!-- https://vueuse.org/core/useStorage/ -->
    <div>
      <input v-model="state.name" type="text" />
      <input v-model="state.color" type="text" />
      <input v-model="state.size" type="text" />
      <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000" />
      {{ state.count }}
    </div>
    <!--  -->
    <div>
      <p>myValue: {{ myValue ? "ON" : "OFF" }}</p>
      <button @click="myToggle()">myToggle</button>
      <button @click="myValue = true">Set ON</button>
      <button @click="myValue = false">Set OFF</button>
    </div>
    <!--  -->
    <PersonMotion></PersonMotion>
    <!--  -->
    <span ref="el" style="display: inline-block">useAnimate</span>
    <!-- https://developer.aliyun.com/article/1110824 -->
    <OnClickOutside @trigger="close">
    <div>
      Click Outside of Me
    </div>
  </OnClickOutside>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  useMouse,
  useCounter,
  useSessionStorage,
  useToggle,
  onClickOutside
} from '@vueuse/core'

// import { vOnClickOutside } from '@vueuse/components' //failed
import { OnClickOutside } from '@vueuse/components'
import PersonMotion from '@/components/PersonMotion.vue'

export default {
  components: { PersonMotion, OnClickOutside },
  data () {
    return {
      isBg: true,
      el: null
    }
  },
  created () {
    console.clear()
  },
  mounted () {
    this.el = this.$refs.el
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

    const isRed = ref(false)
    // const toggleRed = () => {
    //   isRed.value = !isRed.value
    // }
    const target = ref(null)
    onClickOutside(target, () => {
      // isRed.value = !isRed.value
    })

    function close () {
      isRed.value = !isRed.value
    }

    return {
      x,
      y,
      count,
      state,
      myValue,
      isRed,
      target,

      // toggleRed,
      inc,
      dec,
      myToggle,
      close
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
.switchText {
  color: red;
}
</style>
